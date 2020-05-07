---
title: "Maxwell's Equations"
subtitle: "Ampere's Law (and More)"
date: 2019-04-04
tags: [Electrical Engineering]
---

This is it, the final equation.

![It's been 84 years](https://media.giphy.com/media/FoH28ucxZFJZu/giphy.gif)

The structure of this post will be a little different. I'll start with the equation as usual, focus the middle of the post on some contextual knowledge, and end with an application of the law. This time, however, I'm going to unite all the laws and apply them to a real life example so I can set up the next series of posts in my queue: electrical components and circuitry.

Let's begin!

Ampere's Law is a little horrifying.

$$ \oint \vec{B} \cdotp d\vec{L} = \mu_0 (I + \varepsilon_0{d \phi\varepsilon \over dt}) $$

We have:

- A magnetic field, $$\vec{B}$$, following a path, $$d\vec{L}$$ (and the closed integral)
- Vacuum permeability, $$\mu_0$$
- A current, $$I$$
- Vacuum permittivity, $$\varepsilon_0$$
- A change in

## Visible light and magnetic fields

## Application of Ampere's Law

If you've ever done that experiment where you wrapped a coil of wire around a piece of metal and ran a current through it, then you've encountered Ampere's Law.

## Uniting all the equations

How do all of these equations work together? Recall the equations:

**Gauss' Law for Electricity**

$$
\oint \vec{E} \cdotp d\vec{A} = \frac{Q_{enc}}{\varepsilon_0}
$$

Electric charges within a surface create an electric flux. Positive charges create an "outward" flux (a source) and negative charges create an "inward" flux (a sink).

![Distribution of charges]({{ site.image_url }}/posts/distribution-angles.png)

**Gauss' Law for Magnetism**

$$
\oiint \vec{B} \cdotp d\vec{A} = 0
$$

The magnetic flux passing through an enclosed surface will equal zero. Unlike the previous equation, where charges create a flux, there are no magnetic charges that generate the magnetic flux.

![Bar magnet with Gaussian sphere]({{ site.image_url }}/posts/gauss-law-magnetism.png)

**Faraday's Law of Induction**

$$
\oint \vec{E} \cdotp d\vec{L} = - {d \phi_B \over dt}
$$

A magnetic field or changing magnetic flux generates an electric current.

![Induced magnetic field]({{ site.image_url }}/posts/induced-magnetic-field.png)

**Ampere's Law**

An electric current or changing electric flux generates a magnetic field.

We can combine the equations with an example of a resistor. Time to bring the math back.

## Sources
