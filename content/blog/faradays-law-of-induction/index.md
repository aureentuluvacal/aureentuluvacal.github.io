---
title: "Maxwell's Equations"
subtitle: "Faraday's Law of Induction"
description: Now we're back to complicated.
date: 2019-02-27
tags: [Science, Math]
---

Now we're back to complicated. Let's start, as normal, with the equation:

$$ \oint \vec{E} \cdotp d\vec{L} = - {d \phi_B \over dt} $$

We should expect:

1. A changing magnetic flux over time ($$- {d \phi_B \over dt}$$)
2. An electric field ($$\vec{E}$$)
3. And a path or loop ($$d\vec{L}$$)

In the list above, the first item encompasses a completely separate law, called Lenz's Law, so we'll dive into that before we get to a real life example of Faraday's Law.

## An experiment with a tube

Watch this awesome video and then we'll break down what is going on. You don't have to watch all of it, it's just good to have a visual of what I'm going to explain. And he has a delightful accent.

<a href="https://www.youtube.com/watch?v=copZj1WF0Y8" target="_blank">
    <img src="https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/lenzs-law-video-screenshot.png"/>
</a>

Even though we're covering Ampere's Law next, it's important to understand the basic idea of what it tells us. In a nutshell, Ampere's Law states that a changing electric field will induce a magnetic field. Faraday's law is the opposite, where a changing magnetic flux will induce an electric field.

So if we have a current through a wire and it induces a magnetic field, which in turn induces an electric field, which in turn induces a magnetic field, then how come we don't have infinite electric and magnetic fields and a violation of conservation of energy?

This is where Lenz's Law comes in.

It is the negative sign in Faraday's Law. It is the fact that when we have a changing magnetic field, the magnetic field induced by a current through some conductor will oppose the original magnetic field.

Let's use the example in the video with a conducting tube and a ball magnet.

> A conducting tube is a tube made of metal like aluminum or some other conducting material. If the tube were made of rubber, the magnet would just fall through the tube normally.

![Tube and ball magnet](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/tube-and-magnet.png)

We drop the magnet into the tube. The magnet has a magnetic field, as we know.

> Quick side note: I'm drawing lines like this for illustration purposes only. Those lines do not exist in real life, they just help me show you what is happening. The exact lines don't matter either, what matters is the direction.

![Dropping magnet into tube](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/tube-and-magnetic-field.png)

And the magnetic field interacts with the tube. If we took a slice of the tube right below the magnet, we can look at how the magnetic flux through that surface changes. Remember, if there is a flux then there is a surface involved.

![Strip of tube](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/strip-of-tube.png)

At this point in time the magnet has not yet passed this slice of the tube. We'll call that time $$t_1$$, for simplicity. The magnet will fall past this slice at some time $$t_2$$. The two moments will have very different levels of magnetic flux. In other words, $$t_1$$ has very little of the magnet's magnetic field traveling through it, while $$t$$ has a lot more. This is considered a change in magnetic flux over time ($$d \phi_B \over dt$$).

![Changing magnetic flux in tube](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/changing-magnetic-flux.png)

Two things to keep in mind:

1. The shorter the gap is between $$t_1$$ and $$t_2$$, the higher the magnetic flux. If $$dt$$ approaches $$0$$ then $$\phi_B$$ will approach infinity.
2. If the magnetic flux is large in magnitude then the induced electric field is large in magnitude. We know $$ \oint \vec{E} \cdotp d\vec{L}$$ and $$d \phi_B \over dt$$ are negatively proportional.

This magnetic field ($$\vec{B}$$) will induce an electric field ($$\vec{E}$$). The induced electric field is perpendicular to the magnet's magnetic field and will create an electric current ($$I$$). The electrons in the conductor will want to follow the direction of the electric field and when electrons move, we get a current.

![Induced electric field](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/induced-electric-field.png)

At $$t_1$$, the magnetic flux traveling through that section of the tube is neglibile and at $$t_2$$ the magnetic flux increases. This change in magnetic flux is what induces the electric field and the current.

Lenz's Law comes into play for the induced magnetic field. This magnetic field _must_ oppose the induced current. It is what the negative sign means in the equation. Without using any math, we can deduce the direction of the induced electric field by using our right hands:

1. Point your thumb in the direction that opposes the original magnetic field, $$\vec{B}$$
2. Your fingers will naturally curl clockwise in the direction of $$I$$, which also reflects the direction of the electric field, $$\vec{E}$$

![Induced magnetic field](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/induced-magnetic-field.png)

The two magnetic fields interact with one another, and when two magnetic fields interact we get magnetic forces, which cause attraction or repulsion. Since the fields oppose one another, they will introduce a repulsive force. Finally, the magnet slows down because the induced repulsive force is opposing the force of gravity.

The magnet still succumbs to gravity, however, and the magnetic flux will change again.

![Induced electric field reverse](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/induced-electric-field-reverse.png)

This time the magnetic field will point down, inducing an electric field and current in the opposite direction. And since the induced magnetic field must oppose the changing magnetic field, it will now point in the opposite direction as well.

![Induced magnetic field reverse](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/induced-magnetic-field-reverse.png)

The magnetic fields will cause a repulsive force, which causes the magnet to accelerate slightly through the tube. When something accelerates, the time it takes to go from one place to the next decreases, which causes our $$dt$$ to decrease. This makes the magnetic flux go back up, which requires a larger opposing induced magnetic field according to Lenz's Law, making the magnet slow down again.

The magnet will quickly oscillate in changes in magnetic flux, which affects the direction of the current and the direction of the induced magnetic field. To our eyes, we see a magnet slowly fall down a tube.

## Faraday's Law in the real world

So how is this phenomenon useful outside of dropping magnets into conducting tubes?

This is the law of electromagnetic induction, which means we can use magnetic fields to generate currents, which is exactly what an electric generator does.

Inside generators are coils of a conducting material that either spin or engage in some sort of motion near a magnet. The change in magnetic flux in the coil induces a current, which we can channel to power devices and tools.

### Sources

- [Overview of the law](http://hyperphysics.phy-astr.gsu.edu/hbase/electric/maxeq2.html)
- [Khan Academy is my friend](https://www.khanacademy.org/test-prep/mcat/physical-processes/magnetism-mcat/a/using-the-right-hand-rule)
- [This lecture](https://www.youtube.com/watch?v=nGQbA2jwkWI)
