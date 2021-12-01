---
title: "Electrical Components: Resistor"
date: 2021-11-28
description: Now that Maxwell's equations are covered, we can dive into some hardware.
tags: [Science]
---
  
A while ago I purchased an [Arduino kit from Elegoo](https://www.elegoo.com/product/elegoo-uno-project-super-starter-kit/). I have zero experience with Arduinos, Raspberry Pis, and other nerd hardware outside of the basic experiments I did in school, but I figured I'd give it a shot.

I spent a lot of time researching and writing about Maxwell's Equations because I want to understand why computers work at the most fundamental level and slowly move up levels of abstraction to software. The next level, in this case, are circuits and the components that make the circuits interesting. I won't be diving into the Arduino kit itself (yet), but rather the pieces that are in the kit.

I want to start with the resistor because it's the simplest.

## What is a resistor?

![Resistor](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/resistor.jpg)

The name itself is a huge clue for what the resistor does: it resists _something_. Within a circuit, where electrons are flowing freely as a current, that _something_ is the current. But how does it work?

Well if we break apart the resistor and look at what's inside we'd see...

![Cut resistor](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/cut-resistor.jpg)

...not metal in the middle.

But this makes sense! If you remember electric permittivity ($$\epsilon$$) then we know that metallic materials have a high electric permittivity while rubber and plastic materials have low electric permittivity. The material that's inside this resistor is a ["mixture of finely powdered carbon and an insulating material, usually ceramic".](https://en.wikipedia.org/wiki/Resistor) The more ceramic in the mixture, the more resistance, because ceramic is an insulator and hinders the flow of electrons through itself.

I think I should pause here and clarify the difference between the terms resistance ($$V$$) and electric permittivity ($$\epsilon$$).  

### Resistance

Resistance influences the current and can be described by Ohm's Law

$$
V = I \times R
$$

where $$V$$ is voltage, $$I$$ is current, and $$R$$ is resistance. I recommend checking out this [Ohm's Law Simulator](https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_en.html) since it can better visualize what this equation is saying.

A disclaimer about this law though: it's only applied to systems that have a constant resistance, material, and temperature. So like the circuits that professors draw in class, which are meant to be ideal ohmic systems. When you add a resistor to the circuit, the resistance is constant, so the system is still ohmic. If you add resistance that changes, the system is non-ohmic.

The circuits I draw out will be ohmic by default unless I say otherwise.

### Electric Permittivity

Electric permittivity is an inherent trait of whatever material a current is flowing through. This trait comes from the bonds between atoms, the stronger the bonds, the more permittivity.

Think of the bonds between atoms as a net. The tighter and stronger the bonds, the bigger the holes in the net. The weaker the bonds, the smaller the holes in the net, and less of a chance for electrons to get through because they're too busy interacting with the atoms of the net.

Permittivity won't change if the material doesn't change.

### Back to the resistor



## Resources

- [Ohm's Law](https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/voltage-current-resistance-relate/)
- [Always helpful wiki page](https://en.wikipedia.org/wiki/Resistor)