---
title: 'Logic 2: Electric Boogaloo'
description: "More complicated propositional logic!"
date: 2020-07-07
tags: [Math]
---

I wanted to get back to logic and write about some more complex arguments and rules that I didn't get to last time. We covered the three basic operators (AND $$\wedge$$, OR $$\vee$$, and NOT $$\neg$$) and a few logical laws (commutative laws, associative laws, and DeMorgan's laws).

But wait, there's more!

### More truth tables

#### Exclusive OR ($$\bigoplus$$)

| $$p$$ | $$q$$ | $$p \bigoplus q$$ |
| ----- | ----- | ----------------- |
| T     | T     | F                 |
| T     | F     | T                 |
| F     | T     | T                 |
| F     | F     | F                 |

> This truth table is a little weird, but remember exclusive OR is true if one, not both, propositions are true.

#### Conditional ($$\longrightarrow$$)

| $$p$$ | $$q$$ | $$p \longrightarrow q$$ |
| ----- | ----- | ----------------------- |
| T     | T     | T                       |
| T     | F     | F                       |
| F     | T     | T                       |
| F     | F     | T                       |

This operator requires a little more explanation because it took me a while to be confident with the reasoning behind _why_ the truth table makes sense without just blindly memorizing it.

I like to think of conditional statements as gates that are connected by a bridge. 