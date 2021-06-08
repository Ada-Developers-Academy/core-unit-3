# Instructor: Algorithmic Strategies

## Dynamic Programming O(1) Space Fibonacci

```python
def fibonacci(n):
    if n == 0 or n == 1:
        return n

    n_minus_2 = 0
    n_minus_1 = 1
    current = 2

    while current <= n:
        next_fib = n_minus_2 + n_minus_1

        # shift down
        n_minus_2 = n_minus_1
        n_minus_1 = next_fib

        current += 1

    return n_minus_1
```

A similar change cannot bring the forward recursive approach down to O(1) due to stack growth.

## Dynamic Programming for LCS

The memoization can be accomplished a little more nicely using tuples to store the arguments of a call as an immutable structure (also some other python niceties)

```python
def lcs(str1, str2, memo=None):
    if not str1 or not str2:
        return 0

    call = (str1, str2)
    if memo is None:
        memo = {}
    elif call in memo:
        return memo[call]

    first1, rest1 = str1[0], str1[1:]
    first2, rest2 = str2[0], str2[1:]

    current_score = 1 if first1 == first2 else 0

    result = max(
        current_score + lcs(rest1, rest2, memo),
        lcs(rest1, str2, memo),
        lcs(str1, rest2, memo)
    )

    memo[call] = result

    return result
```

It turns out this style of memoization is so common, that python has a decorator to help with this!

```python
import functools

@functools.cache
def lcs(str1, str2, memo=None):
    if not str1 or not str2:
        return 0

    first1, rest1 = str1[0], str1[1:]
    first2, rest2 = str2[0], str2[1:]

    current_score = 1 if first1 == first2 else 0

    result = max(
        current_score + lcs(rest1, rest2),
        lcs(rest1, str2),
        lcs(str1, rest2)
    )

    return result
```