const n=`---
title: 'Histograms with Postgres'
date: 2025-11-20
description: "How to use built-in Postgres functions to generate a histogram so you don't have to use another tool."
draft: true
tags: [Code]
---

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
`;export{n as default};
