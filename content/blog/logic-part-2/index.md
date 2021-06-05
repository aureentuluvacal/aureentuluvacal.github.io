---
title: '2 Logic 2 Furious'
description: 'More complicated propositional logic!'
date: 2020-07-18
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

However, if the hypothesis is false and the conclusion is true then it wouldn't make any sense at all. For example, in "if the Sun is a black hole, then I will make a sandwich", I'd never be able to make a sandwich because the Sun isn't a black hole. It's a scenario where the conclusion could never be true and, because it is an impossiblity, it is false.

#### Biconditional ($$\longleftrightarrow$$)

| $$p$$ | $$q$$ | $$p \longleftrightarrow q$$ |
| ----- | ----- | --------------------------- |
| T     | T     | T                           |
| T     | F     | F                           |
| F     | T     | F                           |
| F     | F     | T                           |

Since the conditional is pointing both ways, it will be false both times there's a false hypothesis and true conclusion.

### More laws!

#### Domination Laws

$$
p \vee \bold{T} \equiv \bold{T} \\
p \wedge \bold{F} \equiv \bold{F}
$$

The value of $$p$$ doesn't matter in these two cases.

#### Idempotent Laws

$$
p \vee p \equiv p \\
p \wedge p \equiv p
$$

ANDing or ORing a proposition with itself doesn't change the value of the proposition.

#### Double Negation Law

$$
\neg(\neg p) \equiv p
$$

The negations cancel each other out.

#### Absorption Laws

$$
p \vee (p \wedge q) \equiv p \\
p \wedge (p \vee q) \equiv p
$$

### Bit operations

Last time I mentioned how this type of logic is related to circuits, and by extension bits, because of how true and false maps to 1 and 0.

| $$p$$ | $$Bit$$ |
| ----- | ------- |
| T     | 1       |
| F     | 0       |

So we can make the same sorts of operations on bits because it's just a different representation of binary data. For example:

| $$x$$ | $$y$$ | $$x \vee y$$ | $$x \vee y$$ | $$x \bigoplus y$$ |
| ----- | ----- | ------------ | ------------ | ----------------- |
| 1     | 1     | 1            | 1            | 0                 |
| 1     | 0     | 1            | 0            | 1                 |
| 0     | 1     | 1            | 0            | 1                 |
| 0     | 0     | 0            | 0            | 0                 |

All the simple operators (AND, OR, XOR) show up in code you write when you're comparing values in `if` statements or following a procedure.

```javascript
if (value === 'this' && otherValue) {
  // Do this.
} else {
  // Do that.
}
```

Bit operations can be used on bit strings, which are a series of bits, for bitwise operations. If you're performing a bitwise operation on two bit strings of length eight (a byte), for example, it would look like this:

$$
\begin{aligned}
& \quad 1\colorbox{#e9ecf7}{0}0\colorbox{#e9ecf7}{0} \enspace 1\colorbox{#e9ecf7}{0}1\colorbox{#e9ecf7}{1} \\
& \quad \underline{0\colorbox{#e9ecf7}{1}0\colorbox{#e9ecf7}{1}  \enspace 1\colorbox{#e9ecf7}{1}0\colorbox{#e9ecf7}{0}} \\
& \quad 1\colorbox{#e9ecf7}{1}0\colorbox{#e9ecf7}{1}  \enspace 1\colorbox{#e9ecf7}{1}1\colorbox{#e9ecf7}{1} \quad  \textcolor{#2541B2}{\text{Bitwise OR}} \\
& \quad 0\colorbox{#e9ecf7}{0}0\colorbox{#e9ecf7}{0}  \enspace 1\colorbox{#e9ecf7}{0}0\colorbox{#e9ecf7}{0}  \quad \textcolor{#2541B2}{\text{Bitwise AND}} \\
& \quad 1\colorbox{#e9ecf7}{1}0\colorbox{#e9ecf7}{1}  \enspace 0\colorbox{#e9ecf7}{1}1\colorbox{#e9ecf7}{1}  \quad \textcolor{#2541B2}{\text{Bitwise XOR}}
\end{aligned}
$$

where we perform the operation on each bit across the two strings.

I won't cover how we can extend these bit operations to circuits in this post since that needs a whole post just to itself. It's super cool, needless to say.

### Examples

Nothing wrong with a few practice problems.

![Nerd](https://media.giphy.com/media/xghFgmOKbk0G4/giphy.gif)

#### Propositional Logic

1. Show that $$p \longleftrightarrow q$$ is equivalent to $$(p \longrightarrow q) \wedge (q \longrightarrow p)$$.

| $$p$$ | $$q$$ | $$p \longrightarrow q$$ | $$q \longrightarrow p$$ | $$(p \longrightarrow q) \wedge (q \longrightarrow p)$$ | $$p \longleftrightarrow q$$ |
| ----- | ----- | ----------------------- | ----------------------- | ------------------------------------------------------ | --------------------------- |
| T     | T     | T                       | T                       | T                                                      | T                           |
| T     | F     | T                       | F                       | F                                                      | F                           |
| F     | T     | F                       | T                       | F                                                      | F                           |
| F     | F     | T                       | T                       | T                                                      | T                           |

They be the same.

2. Show that $$\neg(p \vee (\neg p \wedge q))$$ is equivalent to $$\neg p \wedge \neg q$$.

$$
\begin{aligned}
\neg(p \vee (\neg p \wedge q)) & \equiv \\
& \equiv \neg p \wedge \neg(\neg p \wedge q) \qquad \text{DeMorgan's Law}\\
& \equiv \neg p \wedge [\neg(\neg p) \vee \neg q] \qquad \text{DeMorgan's Law} \\
& \equiv \neg p \wedge (p \vee \neg q) \qquad \text{Double Negation Law} \\
& \equiv (\neg p \wedge p) \vee (\neg p \wedge \neg q) \qquad \text{Distributive Law} \\
& \equiv \bold{F} \vee (\neg p \wedge \neg q) \qquad \text{Negation Law} \\
& \equiv (\neg p \wedge \neg q) \vee \bold{F}  \qquad \text{Commutative Law} \\
& \equiv \neg p \wedge \neg q \qquad \text{Identity Law}
\end{aligned}
$$

They be the same.

#### Bit Logic

1. Evaluate $$1010 \wedge (1011 \vee 0111)$$. Follow order of operations.

$$
\begin{aligned}
& \quad 1\colorbox{#e9ecf7}{0}1\colorbox{#e9ecf7}{1} \\
& \quad \underline{0\colorbox{#e9ecf7}{1}1\colorbox{#e9ecf7}{1}} \\
& \quad 1\colorbox{#e9ecf7}{1}1\colorbox{#e9ecf7}{1} \quad  \textcolor{#2541B2}{\text{Bitwise OR}} \\
& \quad \underline{1\colorbox{#e9ecf7}{0}1\colorbox{#e9ecf7}{0}} \\
& \quad 1\colorbox{#e9ecf7}{0}1\colorbox{#e9ecf7}{0} \quad  \textcolor{#2541B2}{\text{Bitwise AND}}
\end{aligned}
$$

2. Evaluate $$(1100 \bigoplus 1111) \bigoplus 0000$$

$$
\begin{aligned}
& \quad 1\colorbox{#e9ecf7}{1}0\colorbox{#e9ecf7}{0} \\
& \quad \underline{1\colorbox{#e9ecf7}{1}1\colorbox{#e9ecf7}{1}} \\
& \quad 0\colorbox{#e9ecf7}{0}1\colorbox{#e9ecf7}{1} \quad  \textcolor{#2541B2}{\text{Bitwise XOR}} \\
& \quad \underline{0\colorbox{#e9ecf7}{0}0\colorbox{#e9ecf7}{0}} \\
& \quad 0\colorbox{#e9ecf7}{0}1\colorbox{#e9ecf7}{1} \quad  \textcolor{#2541B2}{\text{Bitwise XOR}}
\end{aligned}
$$
