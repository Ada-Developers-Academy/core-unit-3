# Algorithmic Strategies

In this lesson we will look at some programming strategies, Divide & Conquer and Dynamic programming, and how they can be used to solve recursive problems.

## Video Lesson

- [Video Lesson](https://adaacademy.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cf2584b6-0cd7-48ca-ba90-ab020070f5cc)
- [Slides](https://docs.google.com/presentation/d/12RqNPG1B1ZTOijfKfL99Ewv4w1p6bR-L7Sj2EHN3Fv4/edit#slide=id.p1)
- [Exercise](https://github.com/Ada-C14/recursive-dynamic-programming)

## Learning Goals

By the end of this less you should be able to:

- Explain what a divide & conquer solution is
- Write some divide & conquer solutions
- Explain the concept of dynamic programming
- Explain the concept of memoization
- Use dynamic programming to optimize programming solutions

## Terms

| Term 	| Definition 	|
|---	|---	|
| Divide & Conquer 	|  In computer science, divide and conquer is an algorithm design paradigm based on multi-branched recursion. A divide-and-conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.	|
| Dynamic Programming 	| The algorithmic strategy of breaking a problem down into subproblems  in such a way to solve repeated subproblems and use the stored results to solve a larger problem.  |
| Memoization | An optimization technique used primarily to speed up algorithms by storing the results of subproblems and returning the cached result when the same subproblem occur again. |
| Pivot | An element used in Quicksort to divide the array into two sections, one section less than the pivot and the other greater than the pivot.  The choice of the pivot has enormous implications to the efficiency of QuickSort.


## Summary

In this lesson we looked at two common strategies for solving programming problems Divide & Conquer and Dynamic Programming.  Each strategy involves breaking down a large problem into easier-to-solve subproblems.

In a divide and conquer solution we break a large problem into one or more smaller subproblems and then use the solution to the subproblems to solve the larger problem.  

In a Dynamic Programming approach subproblems are solved saved for use in solving larger instances of the problem.  In this manner you often exchange larger space complexity for smaller time complexity.

## Resources

- [Wikipedia Divide & Conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)
- [Medium:  Quicksort implementation in Ruby](https://medium.com/@andrewsouthard1/quicksort-implementation-in-ruby-92de12470efd)
- [Geeks for Geeks - Dyanmic Programming](https://www.geeksforgeeks.org/dynamic-programming/#basicProblems)
- [Ugly Number Problem](https://www.geeksforgeeks.org/ugly-numbers/)
- [Quora - How should I explain dynamic programming to a 4-year-old?](https://www.quora.com/How-should-I-explain-dynamic-programming-to-a-4-year-old/answer/Jonathan-Paulson)
- [Dynamic Programming an Induction Approach on Medium](https://medium.com/@tiagot/dynamic-programming-an-induction-approach-b5c5e73c4a19)
