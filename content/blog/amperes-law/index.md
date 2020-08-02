---
title: "Maxwell's Equations"
subtitle: "Ampere's Law"
date: 2020-08-02
tags: [Science, Math]
---

This is it, the final equation.

![It's been 84 years](https://media.giphy.com/media/FoH28ucxZFJZu/giphy.gif)

I really wish I had used the differential forms of all these equations but it's been like a year so ¯\\\_(ツ)\_\/¯.

$$ \oint \vec{B} \cdotp d\vec{L} = \mu_0I_{encl} + \mu_0\varepsilon_0{d\phi_E \over dt} $$

We have:

- A magnetic field, $$\vec{B}$$, following any closed path, $$d\vec{L}$$
- Vacuum permeability, $$\mu_0$$, or how fast a magnetic field travels through nothing
- A current, $$I_{encl}$$, enclosed by the magnetic field
- Permittivity of free space, $$\varepsilon_0$$, or how fast an electric field travels through nothing
- The change in electric flux over time, $${d\phi_E \over dt} $$, which represents the displacement current

In other words, a changing electric field induces a magnetic field.

## An experiment with compasses

If you've ever done that experiment where you ran a current through a wire and used a series of compasses to track the change in direction of the magnetic field, then you've encountered Ampere's Law. Here's an example:

<a href="https://www.youtube.com/watch?v=4BvHq5CwfT8&t=0m34s" target="_blank">
    <img src="https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/amperes-law-example.PNG"/>
</a>

This experiment includes a closed circuit, one large compass underneath the metal line the current is traveling through, and six smaller compasses that are surrounding the line after it bends outward towards you.

![Compasses and circuit](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/compasses-and-current.jpg)

When the current travels up, the compasses reflect the direction of the magnetic field that is traveling through the metal.

> Pretend there's something actually generating the current like in the experiment.

![Current flowing up, inducing a magnetic field](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/current-up-amperes.jpg)

And when the current flows the opposite direction, the compasses reflect it as well.


![Current flowing down, inducing a magnetic field in the opposite direction](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/current-down-amperes.jpg)

The compasses behave like tangent lines along the path and direction the magnetic field is following. We can use the right hand rule to verify the direction of the induced magnetic field.

1. Point your right thumb up for the direction of the current in the first picture.
2. Curl your fingers.
3. Notice the direction of the induced magnetic field.
4. Do the same thing but point your thumb down.

### Displacement current

Ampere's law is helpful when the shape of the circuit the current is traveling through is symmetric and continuous, like a circle or a solenoid (a coil). But what about non-continuous circuits? 

The second term on the right hand side of Ampere's Law is the addendum that Maxwell added to take this into account when there is no current enclosed by the magnetic field.

I really like this image from the University of Louisville's Physics department:

![When the magnetic field doesn't enclose a current](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/mag_displacement_fig3.jpg)

Source: [University of Louisville](http://www.physics.louisville.edu/cldavis/phys299/notes/mag_displacement.html)

Surface 3 doesn't have current traveling through it because the circuit is non-continuous, bisected by the plates of the capacitor. So how does current get to the other side? Notice that the Maxwell's addendum captures the change in electric flux. The presence of electric flux means the presence of an electric field that is moving, which means something is causing the field to move. 

![A simple circuit with a capacitor](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/capacitor-and-circuit.jpg)

Similar to the diagram from University of Lousiville, there is no direct connection between the capacitor plates because of the insulating material between them. Insulating material has a very low electric permittivity ($$\epsilon$$) which means electrons have trouble flowing through it. Because of this, the electrons are trapped and the top plate starts to get more negatively charged.

![Charged plates on capacitor](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/buildup-of-charges-capacitor.jpg)

The capacitor is dielectric, which means that it will polarize in the presence of an electric field.  As the top plate gets more negative, it pushes away the electrons in the bottom plate, causing the bottom plate to become more positive and creating an electric flux. The two poles are the result of displacement current. Once the capacitor is fully charged, up to the voltage of the battery it's attached to, then the current will stop flowing.

To bring it back to the last Maxwell equation, we now have this displacement current caused by the dielectricity of the capacitor.

> Now that this is _finally_ wrapped up, I can start writing about electrical components and circuits in a more abstract fashion. I have a new circuit kit to open!

## Sources

- [This helpful article from BCcampus](https://opentextbc.ca/universityphysicsv2openstax/chapter/maxwells-equations-and-electromagnetic-waves/)
- [An overview of the law](http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/amplaw.html)
- [Lectures from this channel](https://www.youtube.com/channel/UCAd-pbgfzXDTGvnXkLss3Og)
- [Helpful notes from the University of Louisville](http://www.physics.louisville.edu/cldavis/phys299/notes/mag_displacement.html)