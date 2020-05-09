---
title: Big O
date: 2018-08-08
description: Brief overview of Big O.
tags: [Code]
---

Big O is the metric the industry uses to describe the efficiency of algorithms.

When calculating Big O:

- Time _and_ space matter. An algorithm that runs faster may consume more memory, and an algorithm that is snail-like may use a small amount of memory.
- Drop the constants when evaluating Big O; $O(2n)$ is not more precise than $O(n)$. No one cares about the number of instructions, only about how the runtime scales.
- Drop the non-dominant terms because the overall runtime scale is more important. (e.g. $O(n + log n)$ will be $O(n)$)
- Add runtimes when the algorithm is in the form "do this, then when you're all done, do that"
- Multiply runtimes when the algorithm is in the form "do this for each time you do that"

### Example Runtimes

#### Amortized Time

Allows us to describe the typical runtime scale for an algorithm even when there is a worst case runtime. For example, inserting into an array of no fixed size. To accommodate the "infinite" size, an array of size $n$ needs to be copied and inserted into a new array of size $2n$. There are two cases for the Big O:

- Inserting an element into the array that won't make it exceed $n$ size where the Big O is $O(1)$.
- Inserting an element into the array that will make it double in size where the Big O is $O(n)$ since the entire array must be copied and inserted.

Therefore the amortized time in this case is $O(1)$.

#### Log N Runtimes

When there is a problem where the number of elements in the problem space are halved each time, the runtime will likely be $O(log n)$.

A binary search is a prominent example.

#### Recursive Runtimes

When there is a recursive function with multiple calls, the runtime will often look like $O(branches^{depth})$, where $branches$ is the number of times each recursive call branches.

### Examples

The following examples illustrate different runtimes. I'm using Javascript for the examples. I'd use Python since it's basically pseudocode but there are a lot of for loops that are easier to write in JS.

#### $O(n)$

```js
function foo(array) {
  let sum = 0
  let product = 1

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  for (let i = 0; i < array.length; i++) {
    product *= array[i]
  }

  console.log(`${sum}, ${product}`)
}
```

This example relies on the length of the array argument passed into the function. The length does not change.

There are two for loops, but since constants do not matter, the runtime is $O(n)$.

#### $O(n^2)$

```js
function printUnorderedPairs(array) {
  let i = 1

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(`${array[i]}, ${array[j]}`)
    }
  }
}
```

We need to understand how often the inner loop runs to get the runtime. $j$ runs $n-1$ times on the first iteration of $i$, $n-2$ times on the second, and so on until we reach $1$. Adding that together makes

$$
(n-1) + (n-2) + (n-3) + ... + 2 + 1 = 1 + 2 + 3 + ... + (n-1)
$$

which is the sum of 1 through $n-1$. This equates to:

$$
\frac{n(n-1)}{2} = \frac{(n^2 - n)}{2} = (\frac{1}{2})(n^2 - n) \longrightarrow O(n^2)
$$

since we drop constants and non-dominant terms.

#### $O(ab)$

```js
function printUnorderedPairs(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (i < j) {
        console.log(`${arrayA[i]}, ${arrayB[j]}`)
      }
    }
  }
}
```

For every element in the first array, the inner loop goes through the length of the second array.

If `js> b = arrayB.length` and `js> a = arrayA.length`, then the runtime is $O(ab)$.

#### $O(\sqrt{n})$

```js
function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
```

The loop ends at $i^2 = n$ which is the same as saying $i = \sqrt{n}$. Therefore, the runtime is $O(\sqrt{n})$.

#### $O(2^n)$

```js
function allFib(n) {
  for (let i = 0; i < n; i++) {
    console.log(`${i}: ${fib(i)}`)
  }
}

function fib(n) {
  if (n <= 0) return 0
  else if (n == 1) return 1
  return fib(n - 1) + fib(n - 2)
}
```

While `allFib` prints out the fibonnaci numbers from `0` to `n`, the amount of work that needs to happen on each iteration changes because `n` changes.

$$
\begin{aligned}
fib(1) \rightarrow 2^1 steps \\
fib(2) \rightarrow 2^2 steps \\
fib(3) \rightarrow 2^3 steps \\
\vdots \quad \qquad \\
fib(n) \rightarrow 2^n steps
\end{aligned}
$$

So the total amount of work is:

$$
2^1 + 2^2 + 2^3 + ... + 2^n = 2^{n+1}
$$

Therefore the runtime is $O(2^n)$.
