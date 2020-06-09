---
title: 'Logic'
description: "This was my favorite course at Purdue. I'm just going to nerd out over it for a bit."
date: 2020-06-09
tags: [Math]
---

My absolute favorite class at Purdue was PHIL 150 Principles of Logic. I had to take the class when I briefly switched over to a CS degree. I want to go over the basics of what I learned because I love it so much.

## The pieces

Since this was a philosophy course, we learned a system for deducing a valid argument. An argument is composed of a series of propositions, with each proposition either something truthful or something false, like, "the sky is blue," for the former and, "the tomato is aqua," for the latter.

You can glue together propositions with "and" and "or". So like, "the sky is blue and the tomato is aqua." Think about any conjunctive sentence you'd normally say and notice where the "and"s and "or"s are. When we think about whether an argument is valid or not, we're checking if the entire sentence is true or not based on the truthiness of its component parts. The previous proposition, "the sky is blue and the tomato is aqua", is invalid because the second part of that sentence is invalid. We know tomatoes aren't aqua. If we reversed the last part to "tomatoes aren't aqua" then the sentence would be true.

## The notation

Now, while it'd be easy to look at a bunch of sentences and see whether they're valid or not, it wouldn't make for a good course. So naturally, we needed a layer of abstraction to deduce validity from any kind of argument. And with any layer of abstraction comes variables and notation:

- And $$\wedge$$
- Or $$\vee$$
- Not $$\neg$$

For sentence components, we can sub in the usual math variables, $$x$$ and $$y$$. So if, "the sky is blue" is $$x$$ and "tomatoes are aqua" is $$y$$, we can recreate the above as

$$
x \wedge y
$$

and the negated part as

$$
x \wedge \neg y
$$

(I'm giddy just typing this out.)

Anyway, this abstraction allows us to substitute any type of argument with variables. It also introduces an important concept: without defining what exactly each part of the sentence represents you can turn $$x$$ or $$y$$ into Schrodinger's argument. It _could_ be true, it _could_ be false, but how would we know?

## Truth tables

This is where truth tables come in. A truth table for $$x \wedge y$$ would look like

### AND ($$\wedge$$)

| $$x$$ | $$y$$ | $$x \wedge y$$ |
| ----- | ----- | -------------- |
| T     | T     | T              |
| T     | F     | F              |
| F     | T     | F              |
| F     | F     | F              |

where $$x$$ and $$y$$ could be either true (T) or false (F). The truthiness of $$x \wedge y$$ is one of the foundational concepts that we can use to build more complex arguments. Just like 

The other two truth tables that, at minimum, should be memorized are for $$x \vee y$$ and $$\neg x$$:

### OR ($$\vee$$)

| $$x$$ | $$y$$ | $$x \vee y$$ |
| ----- | ----- | ------------ |
| T     | T     | T            |
| T     | F     | T            |
| F     | T     | T            |
| F     | F     | F            |

### NOT ($$\neg$$)

| $$x$$ | $$\neg x$$ |
| ----- | ---------- |
| T     | F          |
| F     | T          |

## Applications

This course specifically covered argument validity based on the truthiness of the argument's parts and how they were joined together. We know truthiness represents one of two states, true or false. Another thing that's represented as one of two states is on or off, or the presence of electricity and the lack of. In other words, this part of discrete mathematics is how computer scientists can deduce how a series of logic gates will behave with different inputs using a truth table (if it's not too complicated) and how to go from a truth table to series of logic gates.

The operators "and", "or" and "not" should also be familiar to boolean logic when you're coding.

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


>This is just a small portion of what I learned in the course. I'll do a part two with more complicated arguments and notation.