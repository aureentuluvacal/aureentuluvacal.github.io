---
title: '2 Logic 2 Furious'
description: "More complicated propositional logic!"
date: 2020-07-12
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

This truth table is a little weird, but remember exclusive OR is true if one and only one proposition is true.

#### Conditional ($$\longrightarrow$$)

| $$p$$ | $$q$$ | $$p \longrightarrow q$$ |
| ----- | ----- | ----------------------- |
| T     | T     | T                       |
| T     | F     | F                       |
| F     | T     | T                       |
| F     | F     | T                       |

In conditional statements, $$p$$ is the hypothesis (the _if_), and $$q$$ is the conclusion (the _then_). So, "if I get 8 hours of sleep, then I will feel rested", or, "if the Earth rotates, then we will have a day/night cycle."

The only time a conditional statement is false is if the hypothesis is false and the conclusion is true. Why does this make sense? The hypothesis and conclusion aren't cause and effect, which means if the hypothesis is true, it doesn't mean that the conclusion would be true. Like I could get 8 hours of sleep and still feel like shit the next day. That makes sense because it's in the realm of possiblility so the statement in of itself is true. 

However, if the hypothesis is false and the conclusion is true then it wouldn't make any sense at all. For example, in "if the Sun is a black hole, then I will make a sandwich", I'd never be able to make a sandwich because the Sun isn't a black hole. It's a scenario where the conclusion could never be true and because it is an impossiblity, it is false.

#### Biconditional ($$\longleftrightarrow$$)

| $$p$$ | $$q$$ | $$p \longleftrightarrow q$$ |
| ----- | ----- | --------------------------- |
| T     | T     | T                           |
| T     | F     | F                           |
| F     | T     | F                           |
| F     | F     | T                           |

Since the conditional is pointing both ways, it will be false both times there's a false hypothesis and true conclusion.

### More laws!

### Examples