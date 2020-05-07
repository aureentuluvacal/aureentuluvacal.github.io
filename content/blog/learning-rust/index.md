---
title: "I Learned Rust!"
date: 2019-03-25
description: "I'm taking a break from Maxwell's Equations to talk about something else I've done recently: learned Rust."
tags: [Software Engineering, Rust]
---

I'm taking a break from Maxwell's Equations to talk about something else I've done recently: learned Rust. I'm mostly taking a break because it takes me like 7 years to create all the diagrams for those posts.

But anyhoo, what is Rust?

According to Wikipedia, Rust "is a multi-paradigm systems programming language focused on safety, especially safe concurrency".

Cool.

At first, that meant nothing to me since my only frame of reference was Ruby, Javascript, and — unfortunately — PHP, but as I slowly learned the language using ["The Book"](https://doc.rust-lang.org/book/), the pieces started to fall into place. Let's talk about them.

## Systems programming

Systems programming languages are used to program systems. But what does that mean? And what qualifies a language to make it meant for systems programming?

"Systems" is a term reserved for things like operating systems, kernels, compilers, game engines, drivers, and other "platforms" that we can run other programs on. Systems interact directly with hardware, and in the context of computers, rely on the OS to facilitate the manipulation of hardware.

On the other side of systems are applications and the user. We, as users, directly interface with apps, which interface with systems, which interface with hardware.

Rust is just another language, like C and C++, that we can use to program the things that interact with your hardware. There's even a kernel written in Rust called [Redox](https://www.redox-os.org/).

So then what are the qualifiers for a language to program something like an operating system?

If we defined a systems programming language as a language that we use to interact directly with hardware, then only assembly languages would count because the programmers at the time had only themselves and a dumb box of hardware.

Every language from there would just be abstractions away from the hardware.

![Hierarchy of programming languages](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/hierarchy-of-languages.png)

On the far left we have hardware, which is ultimately what our programs operate on. Then there's machine language, binaries that the hardware can understand and run. All programs eventually compile down to machine language. If we go up a layer in abstraction, we get to assembly languages, which are the first human readable programming languages tailored specifically to their respective types of hardware. Each line in an assembly program represents an actual operation that the computer does (and a massive amount of machine language). Rust, C, and Javascript are another abstraction up. They represent the high-level languages, where the code is even more undertstandable than assembly and represents an even more massive amount of binary.

As we progress in the levels of abstraction, we're basically asking, _How can we represent this state in a smaller, simpler way_? So how can we represent patterns in our hardware, our state machine? Binaries. How can we represent patterns in our binaries in a smaller, simpler way? With assembly languages. How can we represent patterns in our assembly in a smaller, simpler way? With high-level languages.

Naturally, as we get more and more abstract, we have to rely on more under the hood, which decreases speed and performance.

![Hierarchy of programming languages](https://s3.us-east-2.amazonaws.com/caryssa-perez-images/posts/systems-languages.png)

Systems programming languages need to be fast, like an assembly language or C, so languages like Ruby and Javascript don't quite cut it. They also need to be directly compilable to machine language or binary. Ruby and Javascript rely on an intermediate stage before they're compiled to machine language.

Rust is both fast and directly compiled to binary, making it a systems programming language.

## Memory safety

Rust's compiler is a stickler for memory safe code. Let's take a look at an example.

```rust
fn main() {
    let v = vec![10, 4, -3];

    println!("{}", v[10]);
}
```

We have a `main()` function that is the entrypoint for every Rust program, like the main method in Java or C. At compile time, the compiler throws an error because we're trying to access an out of bounds index. C or C++ would just try to give you whatever the corresponding value was at that place in memory even if the value didn't belong to the vector.

Rust also has two baked in features called **Ownership** and **Borrowing** that help make Rust code more memory safe.

### Ownership

Let's continue with the same basic example above.

```rust
fn main() {
    let v = vec![10, 4, -3];

    println!("{}", v[0]);
}
```

We have our vector variable `v` that has three elements in it. Those three elements are _owned by_ `v` and when `v` goes out of scope, its three elements get deallocated in memory.

```rust
fn main() {
    let v = vec![10, 4, -3];

    println!("{}", v[0]);
} // v goes out of scope, so do the values it owns.
```

In the context of passing arguments to functions, we'll see **Ownership** where it's most valuable. Let's say I had my `main()` function that calls another function named `print_first_value()`

```rust
fn print_first_value(vector: Vec<i32>) {
    println!("{}", vector[0]);
}

fn main() {
    let v = vec![10, 4, -3];

    print_first_value(v);

    println!("{}", v[0]);
}
```

When a variable is passed to a function, the function takes ownership of the variable. In this case, `v` would be owned by `print_first_value()` and made available in `print_first_value()`'s scope. This code wouldn't compile because I'm trying to use `v` in the `main()` function's scope.

We could rewrite it this way:

```rust
main() {
  let v = vec![10, 4, -3]; // v belongs to main.

  print_first_value(v) { // Transfer of ownership.
    println!("{}", v[0]); // v belongs to print_first_value.
  } // v goes out of scope.

  // Trying to access v, which has gone out of scope.
  println!("{}", v[0]);
}
```

There's definitely more to **Ownership**, but even in this small example, we can see how it helps keeps your code honest; your functions can change what they own without worrying about weird side effects.

However, there may be moments when you may want to perform several operations on the same value or collection. If each function takes ownership of your value, then how can you chain operations on it? This is where **Borrowing** comes in.

### Borrowing

If I wanted to perform several operations on `v` then I would let my functions borrow the value in `v`.

```rust
// I know this example is contrived.

fn print_first_value(vector: &Vec<i32>) {
    println!("{}", vector[0]);
}

fn print_size(vector: &Vec<i32>) {
    println!("The size of my vector is: {}", vector.len())
}

fn main() {
    let v = vec![10, 4, -3];

    print_first_value(&v);
    print_size(&v)

    println!("{}", v[0]);
}
```

Using the `&` operator, I can pass a reference to `v` into `print_first_value()` and `print_size()`. Since both functions are borrowing the value of `v`, they don't take ownership, and I'm free to continue using `v` in the `main()` function.

If we excluded the `&` in the arguments for both functions, the compiler would throw an error. **Borrowing** is baked into the compiler just like **Ownership**, and when used in tandem, they give you more granular control of the memory in your program.

## Safe concurrency

Concurrency in Rust is safe thanks to **Ownership** and **Borrowing**. Before I get into why, I want to dive a little into what concurrency means.

Sometimes you may want to split out the functionality of your code into multiple threads. Threads are independent tasks that run concurrently in a process. A process is what runs your code in the first place.

For example, you may want to write a super fast multi-threaded server. Each connection between a client and your server would live on a separate thread, while your server runs on a single process. If threads didn't exist in this example, the connections would occur sequentially, which would impact performance.

Rust gives you tools to write multi-threaded code and attempts to steer you away from common pitfalls in multi-threaded programming, including:

> - Race conditions, where threads are accessing data or resources in an inconsistent order
> - Deadlocks, where two threads are waiting for each other to finish using a resource the other thread has, preventing both threads from continuing
> - Bugs that happen only in certain situations and are hard to reproduce and fix reliably
>
> _Source: [the Rust book](https://doc.rust-lang.org/stable/book/ch16-01-threads.html)_

The compiler's **Ownership** and **Borrowing** rules are also applied in your multi-threaded code and they prevent you from using variables that one thread has ownership of and the others do not.

## Why Rust?

There were two reasons why I was drawn to Rust: (1) it's [compilable to WebAssembly](https://rustwasm.github.io/docs/book/) and (2) it's the new hotness. (I'm not ashamed to admit #2). I've wanted to mess around with WASM for a while so I've started a very small project called Synesthete.

Like the name suggests it's about [synesthesia](https://en.wikipedia.org/wiki/Synesthesia), particularly seeing colors when visualizing numbers. Still need to design it, but the general idea is you'd map all digits (0-9) to a color, type out a bunch of random numbers, and see what it looks like with the palette you chose.

This is _probably_ not the use case for WASM but no one can stop me.

## More Rust resources

- [Rust homepage](https://www.rust-lang.org/)
- [More about safe concurrency](https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html)
- [The Rust Book](https://doc.rust-lang.org/book/)
- [More on Ownership and Borrowing](https://medium.com/@bugaevc/understanding-rust-ownership-borrowing-lifetimes-ff9ee9f79a9c)
