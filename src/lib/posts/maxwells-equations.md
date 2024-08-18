---
title: Maxwell's Equations
date: 2018-10-11
description: 'I learn best when I understand the high level overview of a topic. So when I want to learn about how computers work and why they work the way they work I need to start at the beginning: the fundamentals of electromagnetism.'
tags: [Science, Math]
---

I learn best when I understand the high level overview of a topic. So when I want to learn about how computers work and why they work the way they work I need to start at the beginning: the fundamentals of electromagnetism.

This will be the first part of a series of posts that will cover how we get from physics equations to combinational logic to programming languages to common devices and things we use daily like radios and video games.

The first few posts will cover Maxwell's equations, with a post for each equation that will explore what they mean and their practical applications.

So let's begin with James Clerk Maxwell, a Scottish mathematical physicist, who unified the prevailing theories of electromagnetism at the time into a cohesive whole with four equations. The equations describe how electric and magnetic fields behave and how they behave together.

Maxwell's Equations are a bit horrifying to look at the first time:

**Gauss' law for electricity**

$$\oint \vec{E} \cdotp d\vec{A} = Q_{enc} / \varepsilon_{0}$$

**Gauss' law for magnetism**

$$\oiint \vec{B} \cdotp d\vec{A} = 0$$

**Faraday's law of induction**

$$ \oint \vec{E} \cdotp d\vec{L} = -d\phi_{B} / dt $$

**Ampere's law**

$$ \oint \vec{B} \cdotp d\vec{L} = \mu_{0}I_{encl} + \mu_{0}\varepsilon_{0} d\phi_{E} / dt $$

If all of the symbols seem confusing, don't worry, I cover a brief math review [here]('./2018-08-28-brushing-up-on-some-math'). In the meantime, we'll define some variables and explore why the equations matter in the first place.

## Definition of Variables

**Electric Field**

$\vec{E}$ represents an electric field, a vector field around an electric charge. Individual protons and electrons have their own electric field. Protons have a field that is directed outward from it while electrons have it directed inward. The interaction of these fields causes the attraction between protons and electrons.

**Magnetic Field**

$\vec{H}$ represents a magnetic field, a vector field around a magnetic object.

**Total Charge**

$Q$ is the total charge. Charge is commonly referred to with $q$ on general but for total charge we use capital $Q$. $enc$ is used to signify that we want the charge _enclosed_ in a particular surface.

**Electric Permittivity**

$\varepsilon_0$ is the electric permittivity in a vacuum, which basically measures how much the atomical structure of some material affects the intensity of an electric field when it travels through that material. In a vacuum, the electric field doesn't have to travel through anything and so it isn't affected.

The electric permittivity in a vacuum is $8.854 * 10^{-12} Farads/meter$ and it's used as the control for relative permittivity of different materials.

Materials with low permittivity include paper and glass because their molecular structure make them a poor conductor of electricity. In contrast, materials with high permittivity include copper and silver for the opposite reason.

**Vacuum Permeability**

$\mu_0$ represents permeability in a vacuum, which is how strong the magnetic field is in a vacuum.

The vacuum permeability is $4π×10^{-7} henries/meter$ and, similar to electric permittivity, it's used as the control for the degree of magnetization for relative permeability of different materials.

Materials can respond to magnetic fields differently and their permeability describes that affect. Materials with high permeability exhibit stronger magnetic fields through them, where materials with low permeability are the opposite.

**Magnetic Flux Density**

$\phi_B$ represents the magnetic flux which is the measure of how much of the magnetic field is passing through a surface. We only care about the components of the magnetic field that are [normal](<https://en.wikipedia.org/wiki/Normal*(geometry)>) to the surface since it describes the true flow of the field out or into a surface.

**Electric Current**

$I$ represents the electric current which is the flow of electric charge.

## Why do these equations matter?

We know that physics equations are abstractions that help us predict how something will behave. Maxwell's Equations are no different, even though they're more complex than $F= ma$.

However, even before Maxwell's equations were a thing, physicists were experimenting with resistance and conductance and other behaviors of electricity and magnetism. Maxwell's equations are the abstractions for that experimentation because they describe behaviors and give us the means to predict behavior.

Therefore, if we can figure out the overall distribution of electric charges and how they are moving, then we can calculate and define the subsequent electric and magnetic fields and their behavior.

_In the next post, I'll discuss Gauss' Law for Electricity._
