# Data Structures and Algorithms

Space complexity
Time complexity

Big O Notation:

Lets say there are two programs/ code snippets that do the same thing or achieve or accomplish same task. Lets say one
uses the loops and another one lets say just uses integers or strings, which one is effective? how do we define solution one is better than solution two?
That is where Big O notation comes in.

It is a system or way of generalizing code and talking about it and comparing code and its performance.
It is like a numeric representation of performance of code.

Why does it even matter?
Lets say ther are two solutions which are available to solve a problem, but one problem saves 1 hour of computation time than other for every time we ran the code, so in those scenarios there is definitely one right answer and one best solution available.

What does better mean?

- Faster?
- Less memory intensive?
- More readable?
- Brevity? - the no of lines in the code is less.

The first two Faster and Less Memory intensive are important when we consider a program is better to other.

How do we check performance, we use built in functions for the programming language.

Ex: for javascript it is performance.now()

There is also another problem, it is with time. that is

- different machines record different times
- same machine also record different times
- For fast algorithms, speed measurements may not be precise enough.

## Big O notation

Big O notation is a way to formalize fuzzy counting.

It allows us to talk forally about how the runtime of a algorithm grows as the input grows.

We are always interested in the trend.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different.

Rules for defining Big O.

1. Constants doesnt matter

- O(2n) => O(n)
- O(500) => O(1)
- O(13 n^2) => O(n^2)

2. Smaller terms doesnt matter.

- O(n + 10) => O(n)
- O( 1000n + 500) => O(n)
- O( n^2 + 10n + 25) => O(n^2)

Big O shorthands

- Arthemetic operations are constant. a + 100 is same as a + 18000
- Variable assignment is constant. x = 10 is same as x = 74940 or x = { 'ab': 'cd'}
- Accessing elements in an array by index or from an object using a key is constant. Ex: a[10], y['ab']
- In a loop the complexity is the length of the loop times the complexity of whatever happens inside th loop.

Order of Big O notation complexities.

O(1) < O(log n) < O(n) < O(n log n) < O(n^2)

that means an algorithm with O(n) is always better than O(n^2)
