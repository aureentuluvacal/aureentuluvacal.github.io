---
title: 'Logic'
description: "This was my favorite course at Purdue. I'm just going to nerd out over it for a bit."
date: 2020-06-09
tags: [Math]
---

My absolute favorite class at Purdue was PHIL 150 Principles of Logic. I had to take the class when I briefly switched over to a CS degree. I want to go over the basics of what I learned because I love it so much.

## The pieces

Since this was a philosophy course, we learned a system for deducing a valid argument. An argument is composed of a series of propositions, with each proposition either something truthful or something false, like, "the sky is blue," for the former and, "the tomato is aqua," for the latter.

You can glue together propositions with "and" and "or". So like, "the sky is blue and the tomato is aqua." (Think about any conjunctive sentence you'd normally say and notice where the "and"s and "or"s are.) When we think about whether an argument is valid, we're checking if the entire argument is true based on the truthiness of its component parts. The previous argument, "the sky is blue and the tomato is aqua", is invalid because the second proposition is untrue. We know tomatoes aren't aqua. If we reversed the last part to "tomatoes aren't aqua", then the proposition, and therefore the argument, would be true.

## The notation

Now, while it'd be easy to look at a bunch of sentences and see whether they're valid or not, it wouldn't make for a good course. So naturally, we needed a layer of abstraction to deduce validity for any kind of argument. And with any layer of abstraction comes variables and notation:

- And $$\wedge$$
- Or $$\vee$$
- Not $$\neg$$

For sentence components, we can sub in variables, $$p$$ (for "proposition") and $$q$$ (because it's after "p"). So if, "the sky is blue" is $$p$$ and "tomatoes are aqua" is  $$q$$, we can recreate the above as

$$
p \wedge q
$$

and the negated part as

$$
p \wedge \neg q
$$

(I'm giddy just typing this out.)

Anyway, this abstraction allows us to substitute any type of argument with variables. It also introduces an important concept: without defining what exactly each part of the sentence represents, you can turn $$p$$ or $$q$$ into Schrodinger's argument. It _could_ be true, it _could_ be false, but how would we know?

## Truth tables

This is where truth tables come in. A truth table for $$p \wedge q$$ would look like

#### AND ($$\wedge$$)

| $$p$$ | $$q$$ | $$p \wedge q$$ |
| ----- | ----- | -------------- |
| T     | T     | T              |
| T     | F     | F              |
| F     | T     | F              |
| F     | F     | F              |

where $$p$$ and  $$q$$ could be either true (T) or false (F). The truthiness of $$p \wedge q$$ is one of the foundational concepts that we can use to build more complex arguments.

The other two truth tables that, at minimum, should be memorized are for $$p \vee q$$ and $$\neg p$$, or for "or" and "not", which I'll refer to in all caps from now on.

#### OR ($$\vee$$)

| $$p$$ | $$q$$ | $$p \vee q$$ |
| ----- | ----- | ------------ |
| T     | T     | T            |
| T     | F     | T            |
| F     | T     | T            |
| F     | F     | F            |

#### NOT ($$\neg$$)

| $$p$$ | $$\neg p$$ |
| ----- | ---------- |
| T     | F          |
| F     | T          |

## Logical laws

It's only logical that with variables and operator notation comes algebra. And like algebra, logic has a set of laws that you can use as shortcuts to help simplify and understand a particular argument. These laws are as follows:

#### Commutative Laws

$$
p \wedge q \equiv q \wedge p \\
p \vee q \equiv q \vee p
$$

Order doesn't matter.

#### Associative Laws

$$
(p \wedge q) \wedge r \equiv p \wedge (q \wedge r) \\
(p \vee q) \vee r \equiv p \vee (q \vee r)
$$

Parentheses can transfer if the operator is the same throughout.

#### Distributive Laws

$$
p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r) \\
p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)
$$

Works exactly like multiplication: $$2(x + y) = 2x + 2y$$.

#### DeMorgan's Laws

$$
\neg (p \wedge q) \equiv \neg p \vee \neg q \\
\neg (p \vee q) \equiv \neg p \wedge \neg q
$$

Think of it like the distribution of the negation then swapping the operator.

#### Identity Laws

$$
p \wedge \bold{T} \equiv p\\
p \vee \bold{F} \equiv p
$$

The second operand doesn't matter because the first operand is the only proposition that can affect the overall truthiness.

#### Negation Laws
$$
p \vee \neg p \equiv \bold{T}\\
p \wedge \neg p \equiv \bold{F}
$$

Look at the truth tables for AND and OR to verify.

> There are more laws than this, but I'm trying to keep it simple in this part.

## In practice

Let's try applying these laws to figure out how to simplify an example.

$$
\begin{aligned}
\color{red} \neg \color{black} (\neg p \wedge \neg q) & \equiv \\
& \equiv \color{red} \neg \color{black} (\neg p) \vee \color{red} \neg \color{black} (\neg q) \qquad \text{DeMorgan's Law}\\
& \equiv p \vee q \qquad \text{Negations cancel out}
\end{aligned}
$$

And another:

$$
\begin{aligned}
\color{red}\neg \color{black} (p \vee (\neg p \wedge q)) & \equiv \\
& \equiv \color{red}\neg \color{black} p \wedge \color{red} \neg \color{black}(\neg p \wedge q) \qquad \text{DeMorgan's Law}\\
& \equiv \neg p \wedge [\color{red} \neg \color{black} (\neg p) \vee \color{red}\neg \color{black} q] \qquad \text{DeMorgan's Law}\\
& \equiv \neg p \color{red} \wedge \color{black} (p \vee \neg q) \qquad \text{Negations cancel out}\\
& \equiv (\neg p \color{red} \wedge  \color{black} p) \vee (\neg p \color{red} \wedge \color{black} \neg q) \qquad \text{Distributive Law}\\
& \equiv \bold{F} \vee (\neg p \wedge \neg q) \qquad \text{Negation Law}\\
& \equiv (\neg p \wedge \neg q) \vee \bold{F} \qquad \text{Commutative Law}\\
& \equiv \neg p \wedge \neg q \qquad \text{Identity Law}
\end{aligned}
$$

I could keep going forever, since these are fun to solve, but I'll stop. Using propositional logic is a cool mode of simplifying complex arguments so we can avoid drawing out truth tables for arguments with twenty propositions.

## Other applications

This course specifically covered argument validity based on the truthiness of the argument's parts and how they were joined together. We know truthiness represents one of two states, true or false. Another thing that's represented as one of two states is on or off, or the presence of electricity and the lack of. In other words: circuits. This part of discrete mathematics is how computer scientists can deduce how a series of logic gates will behave with different inputs using a truth table (if it's not too complicated) and how to go from a truth table to series of logic gates.

The operators AND, OR and NOT should also be familiar to boolean logic when you're coding.

```rust
if foo && bar {
  println!("Both true!");
} else if foo || bar {
  println!("At least one is true!");
} else if !foo {
  println!("`foo` is definitely false!");
}
```

![Kronk](https://media.giphy.com/media/KFszZKN9kP8UJk7BlS/giphy.gif)

It shows just how integrated this topic is with computer science, electrical engineering, and mathematics.


> This is a tiny bit of what I learned in the course. I'll do a part two with more complicated arguments and notation and maybe a part three with predicate logic.