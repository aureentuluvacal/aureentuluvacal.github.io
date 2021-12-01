---
title: "Electrical Components: Resistor"
date: 2021-12-01
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

...not metal in the middle. (Excuse the shitty picture.)

But this makes sense! If you remember electric permittivity ($$\varepsilon$$) then we know that metallic materials have a high electric permittivity while rubber and plastic materials have low electric permittivity. The material that's inside this resistor is a ["mixture of finely powdered carbon and an insulating material, usually ceramic".](https://en.wikipedia.org/wiki/Resistor) The more ceramic in the mixture, the more resistance, because ceramic is an insulator and hinders the flow of electrons through itself.

I think I should pause here and clarify the difference between the terms resistance ($$V$$) and electric permittivity ($$\varepsilon$$).  

### Resistance

Resistance influences the current and can be described by Ohm's Law

$$
V = IR
$$

where $$V$$ is voltage, $$I$$ is current, and $$R$$ is resistance. The higher the resistance, the lower the current, and vice versa.

I recommend checking out this [Ohm's Law Simulator](https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_en.html) since it can better visualize what this equation is saying.

> A disclaimer about this law though: it's only applied to systems that have a constant resistance, material, and temperature. So like the circuits that professors draw in class, which are meant to be ideal ohmic systems. When you add a resistor to the circuit, the resistance is constant, so the system is still ohmic. If you add resistance that changes, the system is non-ohmic. The circuits I draw out will be ohmic by default unless I say otherwise.
> 
### Electric Permittivity

Electric permittivity is an inherent trait of whatever material a current is flowing through. This trait comes from the bonds between atoms and the material's atomic structure. We know metal has high permittivity and is considered a conductor because of it. But what about the atomic structure makes this so?

In metal, electrons are **delocalized**, which means there's a bunch of "loose" electrons not interacting with a particular atom or covalent bond. 

Think of the bonds between atoms as a net. The weaker the bonds, the bigger the holes in the net, and more of a chance for electrons to get through because they're too busy interacting with the atoms of the net and pushing out the delocalized electrons.

![Boyfriend looking back meme but with electrons and protons](https://caryssa-perez-images.s3.us-east-2.amazonaws.com/posts/bf-looking-at-electron.PNG)

By contrast, an insulator, or something that's not as effective for conducting electricity,has stronger atomic bonds so there's a lot less **delocalized** electrons. In the net metaphor, the holes would be a lot smaller.

![Electron stopping proton](https://caryssa-perez-images.s3.us-east-2.amazonaws.com/posts/nah-man-electron.PNG)

### Back to the resistor

Resistance and permittivity are two separate concepts but they are related to one another. They're just separated by an order of magnitude.

Insulators, or materials with low permittivity, are effectively super-resistors that make the current so small that it's negligible and not useful in a circuit. Resistors, on the other hand, are meant to slightly modulate a current and are not made completely of insulating material.

In a future post, I can dive into how slight variations in current affect circuits, but I want to keep this post short.

## Resources

- [Ohm's Law](https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/voltage-current-resistance-relate/)
- [Delocalized Electrons](https://www.thoughtco.com/definition-of-delocalized-electron-605003)
- [Always helpful wiki page](https://en.wikipedia.org/wiki/Resistor)