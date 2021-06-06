# Divide & Conquer

## Learning Goals

By the end of this less you should be able to:

- Explain what a divide-and-conquer solution is
- Write some divide-and-conquer solutions

## Overview

**Divide and Conquer** is an approach to problem solving that breaks down a large problem into multiple, smaller subproblems. We use the results of those sub-problems to solve the original problem.

When we write a divide-and-conquer solution we normally:

1. Break the problem into subproblems of the same type
2. Recursively solve the subproblems
3. Combine the solved subproblems to solve the larger problem

This name is sometimes also applied to algorithms that only need to solve a single, reduced subproblem without the need to combine any results. In this case, the distinction between a general recursive algorithm, and one that might be called "divide and conquer" is largely based on how much we are able to divide the original problem at each recursive step.

For example, if we are working with a list and are only able to remove a single element at each recursive step, we are unlikely to call such a solution a divide-and-conquer algorithm. But if at each recursive step we can reduce the size of the list by half, we might call that solution a divide-and-conquer algorithm.

## Terms

| Term               | Definition                                                                                                                                                                                                                                                                                                             | How to Use in a Sentence                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Divide and Conquer | An algorithm design paradigm based on multi-branched recursion. We recursively break down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem. | "If multiple sub-problems can be combined to solve a larger problem, we might try to apply a divide-and-conquer solution." |
| Pivot              | An element used in Quicksort to divide the array into two sections, one section less than the pivot and the other greater than the pivot. The choice of the pivot has enormous implications to the efficiency of QuickSort.                                                                                            | "Picking the leftmost item as the pivot causes worst-case performance for sorted arrays!"                                  |

## Example: Binary Search

Binary search can be considered a divide-and-conquer algorithm.

Starting with a sorted array, we check whether it contains a particular value by comparing the value with the element in the middle of the array.

If we find the value we return the position where it was found.

If we don't find the value, we determine whether it would be in the left or right half of the array by seeing whether it is smaller or larger than the middle element. Then we perform a binary search on the selected half.

If at any point, we end up with an empty range, we know the value was not in the array, and we can return a result indicating the value was not found, such as `None`.

Each recursion divides the array in half and performs the binary search on a smaller subproblem.

<br />

<details>

<summary>We can view a recursive implementation of binary search by expanding this section.</summary>

```python
def recursive_binary_search(array, to_find, low=0, high=None):
    if high is None:
        high = len(array)

    if high <= low:
        return None

    mid = (high + low) // 2

    if array[mid] == to_find:
        return mid
    elif array[mid] > to_find:
        high = mid
    else:
        low = mid + 1

    return recursive_binary_search(array, to_find, low, high)
```

</details>

## Example: QuickSort

QuickSort is an algorithm which takes a divide-and-conquer approach to sorting an array by using the following steps:

1. If the array is only one element or empty, we are done, the array is sorted.
2. Pick an element from the array as the _pivot_.
3. Move all elements smaller than the pivot to the left and all elements larger than the pivot to the right. Note that the pivot is now in the correct index. Picking a pivot and rearranging the elements is referred to as _partitioning_.
4. Perform QuickSort on the left and right sides of the pivot.

![Quicksorting the array (7, 3, 9, 1, 6, 8, 2, 5) where the pivot is chosen by taking the last element in the array. The first pivot is 5, which after rearranging gives the array (3, 1, 2, 5, 6, 8, 9, 7). The left array (3, 1, 2) and right array (6, 8, 9, 7) are quicksorted. 2 is selected as the pivot, and after rearranging, the left array becomes (1, 2, 3). The left and right arrays are (1) and (3), which are both 1 element, meaning they are sorted. Returning to (6, 8, 9, 7), 7 is picked as the pivot. After rearranging, the array becomes (6, 7, 9, 8). The left array is (6), which is sorted. The right array is (9, 8). 8 is selected as the pivot. After rearranging, the array becomes (8, 9). There is no left array, and the right is (9), which is sorted. All subarrays have been sorted, meaning the whole array is sorted, having become (1, 2, 3, 5, 6, 7, 8, 9).](../assets/algorithmic-strategies_divide-and-conquer_quick-sort.png)  
_Fig. Tracing through an application of QuickSort in which the final element in a subarray is chosen as the pivot._

In terms of divide and conquer, we pick a pivot and move elements smaller to the left, and larger to the right. This leaves us with two smaller subproblems: sorting the elements on the left, and those on the right. We call quicksort on each side.

If the pivot is relatively well chosen we will divide the list `log n` times, and shift at most `n` elements with each level of division, arriving at a O(n log n) runtime.

**Weakness of QuickSort**: The Pivot

Notice however we said, **if** the pivot is well chosen. If the pivot does not break the list into two relatively equal subarrays it will not arrive at a O(n log n) runtime. Instead it will approach a O(n<sup>2</sup>) runtime.

For example if with each iteration the pivot is the smallest remaining element in an array, rather than splitting the array into approximately n/2 sized pieces, instead you have one subarray of size n-1.

<br />

<details>

<summary>The example implementation provided here uses the approach of taking the final element as the pivot, then gradually growing the smaller list from the left side of the non-pivot elements.</summary>

```python
def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array)

    # if the array has 0 or 1 elements, it's already sorted
    if high - low <= 1:
        return

    # partition the current list to find where one element goes
    partition_pos = partition(array, low, high)

    # sort the left and right sides
    quicksort(array, low, partition_pos)
    quicksort(array, partition_pos + 1, high)

def partition(array, low, high):
    # take the last item as the pivot
    last = high - 1
    pivot = array[last]

    # assume pivot will end up at the start
    # conceptually, this position marks the end of the smaller list
    p_index = low

    # iterate over the values not including the pivot
    i = low
    while i < last:
        # if the current value should be to the left of the pivot, swap this
        # value to the potential pivot location and advance that location.
        # conceptually this adds the value to the end of the smaller list and
        # tracks the new end of this list
        if array[i] < pivot:
            temp = array[i]
            array[i] = array[p_index]
            array[p_index] = temp
            p_index += 1
        i += 1

    # swap the pivot value to the end of the smaller list. after this swap,
    # we know that all values to the left of the pivot are smaller, and all
    # values to the right of the pivot are greater or equal
    temp = array[i]
    array[i] = array[p_index]
    array[p_index] = temp

    return p_index
```

</details>

### !callout-info

## Partitioning Is the Key

There are a variety of strategies for selecting the pivot, and for how to rearrange the elements around the pivot. We will not go into further detail about them here, but follow your curiosity!

### !end-callout




## Example: MergeSort

Merge sort is a _divide-and-conquer_ algorithm. It involves the following three stages:

1. **Divide** the array into two sub-arrays at each step until each sub-array is of size one.
1. **Sort** each sub-array. (An array of size one is sorted by default.)
1. **Merge** the sub-arrays into one array by combining two sub-arrays into one at each step.

This is usually done by keeping track of three indices in the array: _starting index_, _ending index_ and _midway index_ as shown in the image below.

![Merge Sort Example](../assets/algorithmic-strategies_divide-and-conquer_merge-sort.png)

As you can see in the image above, in the first _divide_ step, the original array of size eight gets divided into two sub-arrays of size four each. This is done by setting _starting index_ to _0_, the index of the first element in the array and the _ending index_ set to the index of the last element in the array. The _midway index_ is then computed using the formula:
&nbsp;&nbsp;&nbsp;&nbsp;_midway index_ = (_starting index_ + _ending index_)/2

For the first _divide_ step, the _midway index_ will be _(0+7)/2_ i.e. _3_ (by considering the floor of _3.5_).
In the next _divide_ step, we have two sub-arrays, one ranging in index from _0_ to _3_ and the other ranging in index from _4_ to _7_. The sub-arrays are not yet of size one. So, the same action gets repeated to compute the _midway index_. This _divide_ stage continues until the original array of size _n_ is reduced to sub-arrays of size _1_ each.

A sub-array of size one is trivially, and by default sorted.

The _merge_ stage starts by combining two sub-arrays at a time. While combining the sub-arrays containing _7_ and _2_ respectively, the values in each is compared, the smaller value i.e. _2_ is written to the lower index, and the higher value i.e. _7_ is written to the higher index. The merging process continues in this manner. An auxiliary array of size _n_ is often used to facilitate the merge steps.

Consider the two sub-arrays _[1, 2, 7, 8]_ and _[3, 5, 6, 9]_ in the final merge step in our example image above.

- We start with comparing _1_ with _3_. The smaller value, _1_ gets written to the auxiliary array. (Auxiliary array: _[1]_)
- Next, we compare _2_ with _3_. _2_ gets written to the auxiliary array. (Auxiliary array: _[1, 2]_)
- Next, we compare _7_ with _3_. _3_ gets written to the auxiliary array. (Auxiliary array: _[1, 2, 3]_)
- Next, we compare _7_ with _5_. _5_ gets written to the auxiliary array. (Auxiliary array: _[1, 2, 3, 5]_)
- Next, we compare _7_ with _6_. _6_ gets written to the auxiliary array. (Auxiliary array: _[1, 2, 3, 5, 6]_)
- Next, we compare _7_ with _9_. _7_ gets written to the auxiliary array. (Auxiliary array: _[1, 2, 3, 5, 6, 7]_)
- Next, we compare _8_ with _9_. _8_ gets written to the auxiliary array. (Auxiliary array: _[1, 2, 3, 5, 6, 7, 8]_)
- At this point, all elements of the first sub-array have been merged. So, all remaining elements of the second sub-array get copied over linearly to the auxiliary array. In this case, only one element is left in the second sub-array. So, _9_ gets copied over to the auxiliary array. (Auxiliary array: _[1, 2, 3, 5, 6, 7, 8, 9]_)

This two-way merging continues until there are no more sub-arrays and the original array is completely sorted. Finally, the auxiliary array gets linearly copied back to the original array.

**Analysis:** The time complexity of merge sort is _(n log n)_. Let's look closer to understand this.

- **Divide**: Finding the midway index is a straightforward computation (_midway index_ = (_starting index_ + _ending index_)/2). This takes constant time regardless of the subarray.
- **Merge**: Merging a total of _n_ elements takes _O(n)_ time. If there are two sub-arrays of size _n/2_ each, then we will compare one element from one sub-array with another element from the second sub-array and one of the two will get copied. This step will continue until all are copied, taking a total of _O(n)_ time.
- As the sub-problems get smaller, the number of sub-problems doubles at each level, but the merging time halves. The doubling and halving cancel each other out and so the merging takes _O(n)_ time at each level of the merge steps (as seen in the image above).
- **Base case**: In the base case, we have sub-arrays of size _1_ and a total of _n_ subarrays. It takes _O(1)_ time to sort an array of size one. Overall, merging at base level is _O(n)_ time, just like any other level.
- **Count of levels**: Starting with _n_ elements and reducing by half at each level, until we reach one element sized array takes _log n_ steps. Similarly, starting with sub-arrays of one element each and combining two sub-arrays at a time until we reach an array of _n_ elements also takes _log n_ steps.
  Overall, each level takes _O(n)_ time. There are _O(log n)_ such levels. Resulting in an overall time complexity of O(n log n) for merge sort.

Note: We will look closer at merge sort and its implementation when we discuss _Recursive algorithms_ in the future.

For small arrays insertion sort performs better than merge sort, but as the size of the array grows merge sort becomes much more performant. There are other O(n log n) sorting algorithms, notably [Quick Sort](https://www.geeksforgeeks.org/quick-sort/), and [Heap Sort](https://medium.com/@allegranzia/heap-sort-in-ruby-acab02b57d44).

## Exercise - Merging Two Sorted Arrays

[To be worked on together in repl.it](https://repl.it/@ChrisMcAnally/MergeSortedArrays#main.rb)

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

**Note:**

The number of elements initialized in nums1 and nums2 are m and n respectively.

You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

**Example:**

**Input:**
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

**Output:**
[1,2,2,3,5,6]

## Summary

Divide & Conquer is an algorithmic strategy which involves breaking down a large problem into easier-to-solve subproblems.

In a divide and conquer solution we break a large problem into one or more smaller subproblems and then use the solution to the subproblems to solve the larger problem.

## Resources

- [Wikipedia: Divide & Conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)
- [Daniel Liang's Binary Search Animation](https://yongdanielliang.github.io/animation/web/BinarySearchNew.html)
- [Geeks for Geeks: Python Program for QuickSort](https://www.geeksforgeeks.org/python-program-for-quicksort/)
- [hackerearth: QuickSort Animation](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/)
