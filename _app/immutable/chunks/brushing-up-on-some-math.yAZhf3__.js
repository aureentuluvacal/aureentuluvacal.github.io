const e=`---
title: Brushing Up On Some Math
date: 2018-08-28
description: It's been a while since I've used the math I learned in high school and college. I wanted to review topics that I felt were relevant to understanding something like Maxwell's Equations, which I'll cover in my next post.
tags: [Math]
---

It's been a while since I've used the math I learned in high school and college. I wanted to review topics that I felt were relevant to understanding something like Maxwell's Equations, which I'll cover in my next post.

Fair warning that I'm not a mathematician so my explanations won't be precise. Instead I want to communicate the general ideas behind each concept and why they're useful.

## Vector Fields

Vector fields can help us visualize functions that take a two dimensional input and spit out a two dimensional output. Take this function

$$
f(x,y) = \\begin{bmatrix}
          3y^3 + y^2 - 3y \\\\
          x^3 - x^2 + 3x
         \\end{bmatrix}
$$

which looks like

![Vector Field Example](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/vector-field-example.jpg)

Each arrow represents a vector, which is a collection of values like a magnitude with a direction. Typically, color is used to denote magnitude instead of length to avoid a messy graph. In this example, the pink denotes a higher magnitude.

We can also get 3D vector fields, but I wanted to keep it simple with two dimensions.

So if we take the point $(1,1)$

$$
\\begin{align}
f(1, 1) &= \\lbrack _{3(1)^3 + (1)^2 - 3(1)}^{(1)^3 - (1)^2 + 3(1)} \\rbrack \\nonumber \\\\
 &= \\lbrack _{3 + 1 - 3}^{1 - 1 + 3} \\rbrack \\nonumber \\\\
 &= \\lbrack _{1}^{3} \\rbrack \\nonumber
\\end{align}
$$

we'd get the vector $[_{1}^{3}]$ which is the same as saying start at some point and go 1 unit to the right and 3 units up. The hypotenuse of that triangle is the resulting vector.

Vector fields are common in electrodynamics and fluid dynamics to represent the flow of electrons or the flow of a liquid. For example, if we took a snapshot of a moving pool of water and measured the vector velocity of different points in the pool, we'd get a vector field.

This [video](https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/visualizing-vector-valued-functions/v/fluid-flow-and-vector-fields) explains it really well.

### Transforming Vectors

Let's say we have two vectors:

$$
\\vec{a} = \\begin{bmatrix}
   3 \\\\
   -1 \\\\
   2
\\end{bmatrix}
$$

$$
\\vec{b} = \\begin{bmatrix}
   -1 \\\\
   3 \\\\
   1
\\end{bmatrix}
$$

![Vectors a=[3,-1,2], b=[-1,4,1]](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/3d-vectors.png)

I want to illustrate transformations that you can make on vectors in the next few sections to better understand vector's uses.

#### Vector Addition

Adding vectors together is simple; we just need to add the corresponding components of each vector.

$$
\\vec{a} + \\vec{b} =  \\begin{bmatrix}
  a_{x} + b_{x}\\\\
  a_{y} + b_{y}\\\\
  a_{z} + b_{z}
\\end{bmatrix} =
\\begin{bmatrix}
  3 + -1\\\\
  -1 + 3 \\\\
  2 + 1
\\end{bmatrix} =
\\begin{bmatrix}
  2\\\\
  2 \\\\
  3
\\end{bmatrix}
$$

This will always result in another vector.

Why would we add vectors though?

If we think about it from a physics perspective, what else is considered a vector? Forces! So if we had two opposing forces or multiple forces interacting with each other, we can get the resulting force which will be a vector.

#### Scalar Multiplication

Multiplying a vector by a scalar (a real number) scales each component in a vector.

$$
3\\vec{a} = 3\\begin{bmatrix}
  3 \\\\
  -1 \\\\
  2
\\end{bmatrix}
= \\begin{bmatrix}
  9 \\\\
  -3 \\\\
  6
\\end{bmatrix}
$$

This will also always result in another vector.

#### Dot Product

The dot product is a little weird:

$$
\\vec{a} \\cdotp \\vec{b} = a_{x}b_{x} + a_{y}b_{y} + a_{z}b_{z} = (3 \\times -1) + (-1 \\times 3) + (2 \\times 1) = -4
$$

We just need to multiply the corresponding components for each vector and sum the products.

And when an angle is given between the vectors, we can use:

$$
\\vec{a} \\cdotp \\vec{b} = \\lVert\\vec{a}\\rVert \\lVert\\vec{b}\\rVert \\cos\\theta
$$

We multiply the magnitude of $\\vec{a}$, the magnitude of $\\vec{b}$, and the cosine of the angle between them. Using the Pythagorean Theorem, the magnitude of a vector can be calculated with $\\sqrt{a_x^2 + a_y^2 + a_z^2}$ .

However, since the result will always be a scalar why is the dot product even useful?

The dot product lets us take direction into account when we're calculating how a particle is affected by a force, for example, since we break down the force vector into its components. It would give us the force parallel to the direction we want from the force being applied to a particle from all directions.

#### Cross Product

The cross product isn't as weird as the dot product:

$$
\\vec{a} \\times \\vec{b} = \\begin{bmatrix}
  a_{y}b_{z} - a_{z}b_{y} \\\\
  a_{z}b_{x} - a_{x}b_{z} \\\\
  a_{x}b_{y} - a_{y}b_{x}
\\end{bmatrix} =
\\begin{bmatrix}
  (-1 *1) - (2* 3)\\\\
  (2 *-1) - (3* 1) \\\\
  (3 *3) - (-1* -1)
\\end{bmatrix} =
\\begin{bmatrix}
  -7\\\\
  -5 \\\\
  8
\\end{bmatrix}
$$

And when an angle is defined we can use:

$$
\\vec{a} \\times \\vec{b} = \\lVert \\vec{a} \\rVert \\lVert \\vec{b} \\rVert \\sin \\theta \\, \\hat{n}
$$

where $\\hat{n}$ is the unit vector for $\\vec{a}$ and $\\vec{b}$.

The cross product can _only_ be found in three dimensions. The result is always a vector perpendicular to both original vectors.

## Derivatives

Derivatives are the key to understanding how a function changes over time. If we had a linear graph it would be a simple task to find its slope using "rise over run" or $\\Delta y / \\Delta x$. That result would be completely accurate for the rate of change at any point on the curve as $x$ approaches infinity.

But when we need the rate of change at any point on a more complex graph we need to find the derivative for the curve. So what exactly is a derivative?

It's basically an infinitesimally small rise over an infinitesimally small run.

![Delta y delta x getting smaller](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/derivatives.png)

Mathematically this is represented as

$$
f\\prime(x) = \\lim\\limits_\\infty f(x + h) - f(x) / h
$$

But instead of using this longer interpretation we summarize it as $dy/dx$ where $d$ represents an infinitesimally small change.

I'm not going to over how to find the derivatives of exponential or trigonometric functions because I don't want this post to be a novel, but the most important thing to remember is that the derivative represents how the value of a function changes with a change in x.

## Integrals

Integrals are the answer to finding the area underneath a curve between a set of boundaries.

![Sample Graph with Area](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/integrals.png)

So if we wanted the area under the curve between $a$ and $b$ then we would need to do $\\int_{a}^{b} f(x) \\, dx$ where $dx$ is an infinitesimally small change in $x$, $f(x)$ is the value of the function at some $x$, and the $\\int$ is the summation of all of those infinitesimally small slices of area.

![Graph with smaller and smaller slices](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/integrals-slices.png)

Why do we use integrals, though?

Curves can represent rates of change like how a car's velocity changes over time. If we wanted to find the distance that the car traveled then we integrate over that velocity curve for that specified time interval. The solution to that definite integral would be the distance.

It's also important to note that because of the [Fundamental Theorem of Calculus](https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus) we're able to have an integral (or an anti-derivative) for every derivative.

### Definite Integrals

Integrals with an upper and lower bound, like the example above. When solving definite integrals we end up with a number, a definite solution. For example:

$$
\\int_2^5 2x \\, dx = \\lbrack x^2 \\rbrack_2^5 = 5^2 - 2^2 = 21
$$

### Indefinite Integrals

Integrals without bounds. When solving indefinite integrals we end up with another function with respect to the variable we are integrating for. For example:

$$
\\int x^4 + 2x \\, dx = x^5 / 5 + x^2 + K
$$

### Line Integrals

Both of the examples above describe integrals along a straight line (the x axis typically), but what do we do when we're trying to find the area of the "wall" created by the intersection of this graph and this path?

![Example graph for line integral](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/line-integral-graph.png)

Notice how the blue curve on the xy plane is following a winding path instead of a straight line. This is how line integrals get their name, even though it would make more sense to call them path integrals or curve integrals.

Given that this graph is represented by $f(x, y) = x^2 + y^2$ and the curve that is the foundation for the "wall" is a quarter circle with its center on the origin, we can deduce a few things:

- $x$ can be represented by $x = \\cos t$
- $y$ can be represented by $y = \\sin t$
- $t$ is an arbitrary variable for the degrees or radians in $x$ and $y$
- From our unit circle days, we know that $0 \\leq t \\leq \\pi /2$

Now, how do we solve for the area under this curve along this path?

Basically, we're taking small changes in $x$ and small changes in $y$ to represent a section of the curve. Like this:

![Example graph for line integral](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/line-integral-dS.png)

We know we can represent $\\Delta S$ as $dS$ for an infinitesimally small change. Using Pythagorean Theorem, we know that

$dS = \\sqrt{(dx/dt)^2 + (dy/dt)^2} dt$

And plugging it in we get

$$
\\int_{t=0} f(x, y) \\, dS = \\int_{t=0} \\cos^2 t + \\sin^2 t \\, \\sqrt{(dx/dt)^2 + (dy/dt)^2} dt
$$

(The upper limit should be $\\pi / 2$ but Katex was giving me trouble)

Then if we find $dx/dt$ and $dy/dt$ of $x$ and $y$ we can fill in more information.

I'm not going to solve this integral since me doing a bunch of math would be a lot and I'm too new at Katex to make it render the way I want. I want to stress we should remember that the area we're trying to find is the result of projecting a line or a curve onto another graph in the same space.

In other words, we're raising the foundation of the wall (the line in line integral) to the ceiling (another curve or graph in the same space). Then we put the foundation in terms of the ceiling and solve for the area.
`;export{e as default};
