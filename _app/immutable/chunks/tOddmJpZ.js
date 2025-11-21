const e=`---
title: 'Histograms with Postgres'
date: 2025-11-20
description: "How to use built-in Postgres functions to generate a histogram so you don't have to use another tool."
tags: [Code]
---

I was tasked with figuring out if we needed to truncate a chunky table. First, I had to understand the rate of growth and, second, I had to  identify any discrepancies in how the data was generated in the table.

This post will cover the second task since I could easily see in PGAnalyze that the rate was linear.

## Generating a histogram

Rows in this table have an association to another table so there was the possibility that some records have dozens of associated records, which would be concerning.

In order to visualize this, I needed to create a **histogram**.

> Remember a histogram graphs the distribution of frequencies for a data set into a series of buckets or bins. So I'd be able to see how many associated records there are for the table. Ideally I'd like to see the most records with low amounts of associated records, but we'll see.

I have access to Snowflake, but this table wasn't a part of the schema since it's not relevant to customers, so I couldn't just generate a histogram directly.

So raw SQL it is. (I'm using PostgreSQL 17.6)

### Generate the data

You just need to use a simple \`COUNT\` and \`GROUP BY\` to get frequencies.

\`\`\`sql
 SELECT
    COUNT(*) AS amt
 FROM
    versions
 GROUP BY
    item_id;
\`\`\`

The column you aggregate by would take the place of \`item_id\`.

### Using \`width_bucket\`

We want to use the built-in function \`width_bucket\`, described [here](https://www.postgresql.org/docs/17/functions-math.html#FUNCTIONS-MATH-FUNC-TABLE), to generate the histogram.

\`\`\`c
width_bucket ( operand numeric, low numeric, high numeric, count integer ) → integer
\`\`\`

This function return the bucket that the \`operand\` falls in based on the highest and lowest values from the aggregate above (\`high\` and \`low\`, respectively) and the width of the bucket (\`count\`). The examples in the docs are pretty clear.

Now, we need to get our values for \`high\` and \`low\` with:

\`\`\`sql
WITH
    version_counts AS (
        SELECT
            COUNT(*) AS amt
        FROM
            versions
        GROUP BY
            item_id
    ),
    stats AS (
        SELECT
            min(amt) AS MIN,
            max(amt) AS MAX
        FROM
            version_counts
    )
SELECT
    width_bucket(amt, MIN, MAX, 20)
FROM
    version_counts,
    stats
GROUP BY
    version_counts.amt,
    stats.min,
    stats.max;
\`\`\`

But that's not quite enough to get the histogram since \`width_bucket\` returns the bucket number. We still need to show how many records are in each bucket.

\`\`\`sql
-- WITH clause
SELECT
    width_bucket(amt, MIN, MAX, 20) AS bucket,
    count(*) AS freq
FROM
    version_counts,
    stats
GROUP BY
    version_counts.amt,
    stats.min,
    stats.max;
\`\`\`

![Frequencies and bucket numbers](https://imagedelivery.net/tnNoV47DPhCG-2BhLDY4IQ/998d806b-0f64-41b1-24bd-a94e9e472600/public)

Getting somewhere, but notice how the \`bucket\` number is repeated. We can use another \`GROUP BY\` to get what we need.

### Showing the buckets

This means we can use another CTE to set the histogram data and use it in another query to show the distribution via a bar. It's also possible to show the ranges for each bucket. In other words, bucket 1 would be 1 to (MAX / 20), or \`high / count\` from \`width_bucket\`, and so on.

We need another Postgres function to show the bucket ranges: \`int4range\`, found [here](https://www.postgresql.org/docs/current/rangetypes.html). This function will give us a range for each bucket or grouping.

To generate the bar part of the graph, we make use of the \`repeat\` function that functions similarly to any iterator you've used in other languages like \`times\` in Ruby or like \`iter::repeat\` in Rust.

\`\`\`sql
repeat('■', (freq::float / max(freq) OVER () * 30)::int) AS bar
\`\`\`

Using the fraction between the \`freq\` and the max frequency we see, we can use \`repeat\` to render a block with a max width of 30 characters. So the bar should have the correct relationship to the data we see.

## The final result

Here's the complete query.

\`\`\`sql
WITH
    version_counts AS (
        SELECT
            COUNT(*) AS amt
        FROM
            versions
        GROUP BY
            item_id
    ),
    stats AS (
        SELECT
            min(amt) AS MIN,
            max(amt) AS MAX
        FROM
            version_counts
    ),
    histogram AS (
        SELECT
            width_bucket(amt, MIN, MAX, 20) AS bucket,
            int4range(min(amt)::int4, max(amt)::int4) AS range,
            count(*) AS freq
        FROM
            version_counts,
            stats
        GROUP BY
            bucket
        ORDER BY
            bucket
    )
SELECT
    bucket,
    range,
    freq,
    repeat('■', (freq::float / max(freq) OVER () * 30)::int) AS bar
FROM
    histogram;
\`\`\`

and the final result:

![Generated histogram](https://imagedelivery.net/tnNoV47DPhCG-2BhLDY4IQ/85d5dec6-5c2a-4b42-7e57-a9d3cf1a3000/public)

An ugly histogram! Yay!

But it tells a relieving story: The vast majority of rows in this table have 1-15 versions, which makes sense in our business logic. It also points to some associated records having 50 or more versions, which is a nice clue for further investigation.
`;export{e as default};
