---
title: "Maxwell's Equations"
subtitle: "Gauss' Law for Magnetism"
date: 2018-12-31
description: Fortunately, this equation is much simpler than the last one.
tags: [Science, Math]
---

Fortunately, this equation is much simpler than the last one.

$$\oiint \vec{B} \cdotp d\vec{A} = 0$$

In words, this tells us that all of the magnetic flux normal to an enclosed surface will equal zero. In more words, this says that the net movement of a magnetic field through a volume, like a sphere or rectangular prism, is always zero.

Let's first discuss what a magnetic field is and what magnetic flux represents then we can put it all together.

## What is a magnetic field?

Unlike an electric field, where you can find solo positive and negative charges that emit their own "push" and "pull", magnetic fields are created from a pair of poles: the north and south poles. Just like with positive and negative charges, like repels like and opposites attract.

![Magnetic field](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/magnetic-field.png)

The north pole behaves like a positive charge and "pushes" out from itself and the south pole behaves like a negative charge and "pulls" in towards itself.

Remember, there's no actual force, it's just the direction that the field travels. A magnet alone isn't moving around trying to find other magnets. Force and movement occurs with the interaction of magnetic fields, like when you toss a magnet onto another. The magnets flip and move and try to fit together because their magnetic fields are interacting.

But why are some materials magnetic and some not?

Magnetic fields are induced by the movement of electrons. Permanent magnets have an atomic structure where electrons are positioned around the nucleus and have the same spin following the [Pauli Exclusion Principle](https://www.physicsoftheuniverse.com/topics_quantum_spin.html). We don't need to worry too much about the why since this enters into electron configuration and quantum number territory and is outside the scope of this post.

However, I do want to present a similar example that illustrates this concept. Imagine two rows of panels that have the ability to rotate. If the panels are all aligned and we introduce some air flow parallel to the panels then the most of the air flow is unobstructed and reaches the other side.

![Unobstructed air flow](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/good-configuration.png)

On the other hand, if some of the panels are rotated, some of the air flow is obstructed and doesn't reach the other side.

![Obstructed air flow](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/bad-configuration.png)

While this isn't exactly what happens with electrons and magnetism, it's a similar concept that relies on the arrangement of the medium that what we're observing is flowing through.
In other words, if we have just the right electron configuration throughout a material we get more magnetism. So materials like lodestones and other ferromagnetic materials have that right alignment for permanent magnetism, while other materials like plastic or lead don't.

## What is magnetic flux?

Magnetic flux is how much of a magnetic field is passing through a surface. If we used the image of the magnetic field above and had a fake wall across the magnet, we can understand visually what this means.

![Magnetic flux](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/magnetic-flux.png)

The number of lines in this image passing through the wall would be the magnetic flux.

However, physicists/scientists don't actually count the number of invisible lines to get the flux. They measure the magnetic field with a magnetometer and multiply by the area of the surface they're concerned with.

## Putting it all together

If I had a simple bar magnet, like the example above, and put a Gaussian sphere around it, the amount of magnetic flux through the surface would be zero.

That's what the equation tells us, yes, but why is this the case?

Let's use the bar magnet again — since I already drew it — and imagine that bar inside of a sphere.

![Bar magnet with Gaussian sphere](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/gauss-law-magnetism.png)

The magnetic flux through the sphere's surface is simply how many of those lines travel in and out of the sphere. We can completely ignore the normal component of the magnetic flux since this equation's core concept is easily understood without math.

Given that the magnetic field is symettrical then the magnetic flux coming out of the north pole and out of the sphere is equal to the magnetic flux coming back into the sphere and into the south pole on the other side. If we introduce magnitudes into this example then the flux would be equal and opposite and, therefore, be zero.

The net flux is zero _only_ because magnetic fields are generated from dipoles; you will never find the north pole without its south pole.

#### Sources

- [General overview of this law](http://hyperphysics.phy-astr.gsu.edu/hbase/electric/maxeq2.html)
- [This video](https://www.youtube.com/watch?v=qAl_S_aSUKc)
