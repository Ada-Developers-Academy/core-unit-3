# Dynamic Programming

## Learning Goals

By the end of this lesson we should be able to:

- Explain the concept of dynamic programming
- Explain the concept of memoization
- Use dynamic programming to optimize programming solutions

## Overview

**Dynamic Programming** is a way to optimize both recursive and iterative solution. When we see a problem that repeatedly involves solving the same problem, we can optimize it by using dynamic programming.

The key concept of dynamic programming is to recognize subproblems we solve again and again, and store the solutions to those problems, called _memoizing_. Then we use the stored solutions to help solve the larger problems.

Dynamic programming is in some ways similar to divide and conquer.

A dynamic-programming problem breaks the problem into subproblems and saves the solutions to those subproblems. The key difference is that in dynamic programming the subproblems are often overlapping, such that we need the solution to a particular subproblem multiple times.

In a divide-and-conquer problem the larger problem is divided into several non-overlapping subproblems and the solutions to each subproblem is used to solve the larger problem.

## Terms

| Term                | Definition                                                                                                                                                                             | How to Use in a Sentence                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Dynamic Programming | An algorithmic strategy of breaking a problem down into subproblems that need to be calculated multiple times, allowing us to improve performance by storing results and reusing them. | "This algorithm calculates the same subproblem over and over, so let's use a dynamic-programming approach to improve the performance!" |
| Memoization         | An optimization technique used primarily to speed up algorithms by storing the results of subproblems and returning the cached result when the same subproblem occurs again.           | "If we memoize the results of that function call, we can improve the performance if it gets called again with the same arguments."     |

## Fibonacci

The classic Fibonacci sequence is inherently recursive, but also inefficient to solve using the typical recursive manner.

In the Fibonacci sequence `fibonacci(n)`:

`fibonacci(0)` = 0, for \(n = 0\)  
`fibonacci(1)` = 1, for \(n = 1\)  
`fibonacci(n)` = `fibonacci(n-1)` + `fibonacci(n-2)`, for \(n > 1\)

We could code the Fibonacci sequence as follows:

```python
def fibonacci(n):
    if n == 0 or n == 1:
        return n

    return fibonacci(n - 1) + fibonacci(n - 2)
```

However this is wildly inefficient. Note below for the Fibonacci of 5, how `fibonacci(2)` is called 3 times, and `fibonacci(1)` is called 5 times. As \(n\) grows larger, this will occur more and more often. For any \(n > 1\), we end up making \(2^n\) method calls!

![fibonacci(5) calls fibonacci(4)(a) and fibonacci(3)(b). fibonacci(4)(a) calls fibonacci(3)(c) and fibonacci(2)(d). fibonacci(3)(c) calls fibonacci(2)(e) and fibonacci(1)(f). fibonacci(2)(e) calls fibonacci(1)(g) and fibonacci(0)(h). fibonacci(2)(d) calls fibonacci(1)(i) and fibonacci(0)(j). fibonacci(3)(b) calls fibonacci(2)(k) and fibonacci(1)(l). fibonacci(2)(k) calls fibonacci(1)(m) and fibonacci(0)(n).](../assets/algorithmic-strategies_dynamic-programming_fibonacci-inefficient.png)  
_Fig. Fibonacci of 5. Notice how the same subproblems are repeatedly called!_

Instead of solving the same problems over and over again we can solve these problems by storing them in a `memo` and using the stored subproblems to make calculating the larger problem more efficient.

Below we have dynamic programming solutions, both iterative & recursive.

```python
# Iterative Solution
def fibonacci(n):
    if n == 0 or n == 1:
        return n

    solutions = [0, 1]
    current = 2

    while current <= n:
        solutions.append(solutions[current - 1] + solutions[current - 2])
        current += 1

    return solutions[n]

# Recursive Solution

def fibonacci_recursive(n, solutions=None):
    if solutions is None:
        solutions = [None] * (n + 1)

    if solutions[n] is not None:
        return solutions[n]

    if n == 0 or n == 1:
        solutions[n] = n
    else:
        solutions[n] = (fibonacci_recursive(n - 1, solutions) +
            fibonacci_recursive(n - 2, solutions))

    return solutions[n]
```

### !callout-info

## Fibonacci With O(1) Space Complexity

Notice how when solving `fibonacci(n)` we only need `fibonacci(n-1)` and `fibonacci(n-2)`. Can we reduce our space complexity from \(O(n)\) to \(O(1)\)? Think about how we can do so for the iterative solution.

### !end-callout

## Dynamic Programming in a Nutshell

To paraphrase a great discussion that can be found on Quora (link in the references), here's a concise way to think about dynamic programming.

```
*writes down "11111111" on a sheet of paper*
"How many 1s are there?"
*counting* "Eight!"
*writes down another "1"*
"How about now?"
*quickly* "Nine!"
"How'd you know it was nine so fast?"
"You just wrote one more"
"So you didn't need to recount because you remembered there were eight!
 Dynamic programming is just a fancy way to say:
 'remembering stuff to save time later'"
```

## Problem: Longest Common Subsequence

**With your neighbor attempt to solve the following problem:**

Given two strings `text1` and `text2`, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

### Example 1:

**Input:** text1 = "abcde", text2 = "ace"

**Output:** 3

**Explanation:** The longest common subsequence is "ace" and its length is 3.

### Example 2:

**Input:** text1 = "abc", text2 = "abc"

**Output:** 3

**Explanation:** The longest common subsequence is "abc" and its length is 3.

### Example 3:

**Input:** text1 = "abc", text2 = "def"

**Output:** 0

**Explanation:** There is no such common subsequence, so the result is 0.

## Summary

Dynamic programming is an algorithmic strategy which involves breaking down a large problem into easier-to-solve subproblems.

In a dynamic-programming approach, the solved subproblems are saved for use in solving larger instances of the problem. In this manner we exchange larger space complexity for smaller time complexity.

## Resources

- [Geeks for Geeks: Dynamic Programming](https://www.geeksforgeeks.org/dynamic-programming/)
- [Geeks for Geeks: Ugly Number Problem](https://www.geeksforgeeks.org/ugly-numbers/)
- [Quora: How should I explain dynamic programming to a 4-year-old?](https://www.quora.com/How-should-I-explain-dynamic-programming-to-a-4-year-old/answer/Jonathan-Paulson)
- [Medium: Dynamic Programming an Induction Approach](https://medium.com/@tiagot/dynamic-programming-an-induction-approach-b5c5e73c4a19)
