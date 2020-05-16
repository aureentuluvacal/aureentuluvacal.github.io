---
title: Electric Components and Why They Work
date: 2020-06-06
tags: [Electrical Engineering]
---

## Uniting all the equations

How do all of these equations work together? Recall the equations:

**Gauss' Law for Electricity**

$$
\oint \vec{E} \cdotp d\vec{A} = \frac{Q_{enc}}{\varepsilon_0}
$$

Electric charges within a surface create an electric flux. Positive charges create an "outward" flux (a source) and negative charges create an "inward" flux (a sink).

![Distribution of charges](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/distribution-angles.png)

**Gauss' Law for Magnetism**

$$
\oiint \vec{B} \cdotp d\vec{A} = 0
$$

The magnetic flux passing through an enclosed surface will equal zero. Unlike the previous equation, where charges create a flux, there are no magnetic charges that generate the magnetic flux.

![Bar magnet with Gaussian sphere](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/gauss-law-magnetism.png)

**Faraday's Law of Induction**

$$
\oint \vec{E} \cdotp d\vec{L} = - {d \phi_B \over dt}
$$

A magnetic field or changing magnetic flux generates an electric current.

![Induced magnetic field](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/induced-magnetic-field.png)

**Ampere's Law**

An electric current or changing electric flux generates a magnetic field.

We can combine the equations with an example of a capacitor.


Electric flux density: $$\vec{D} = \vec{E}\varepsilon$$

$$\varepsilon$$ doesn't change unless the material changes. Increases the stretchier the molecules are. Higher permittivity the lower the E field for a given D field.

Parallel plate capacitor. Positive charges on top and negative charges on botton. There will be an electric field between the two sides. D field will be constant across the surface.

Say we start with just the plates. There's an E field and a corresponding D field. This is an impressed field. If we add some other material between the plates then the material's molecules will stretch and distort because the electrons of the molecule will want to head towards the positive end and the positive nuclei will want to head towards the negative end. This distortion causes a countervailing dipole. The electric field local to the molecule points in the oppositve direction of the impressed field. The material creates then the polarization field, which gives capacitors their ability to store energy without raising the voltage. The total field is then much smaller. The E field has vectors that are smaller.
