# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```

pseudocode:
fib(4): add no.2 and no.3

recursion:
if num is neg => error
if (num is 1 or 2) => return 1
if num > 2 => return fib(n-1) + fib(n-2)