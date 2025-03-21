# Intro to Functions

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ef1f5de9-d033-400e-b5ff-ad4000f5c37f&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### !callout-info

## This video uses an online JavaScript REPL

The video will walk through the code examples in this lesson, however, in the video the instructor is walking through the code using an online REPL tool rather than VS Code. If you choose to run code examples locally, you will see some differences between how you run the code and how the instructor will run the code in the online tool. 

### !end-callout

## Introduction

There are _many_ ways to define functions. For now, we will dive into two ways:

- Function expressions
- Function declarations

Both of these methods have the same result: defining a function.

The most important difference between them is the context that we typically use them in. There are technical differences between them, but these are not relevant at an introductory level.

There is no repo for this lesson, but feel free to follow instructions from earlier lessons on how to set up a local JavaScript project to run the code examples.

## Function Expressions

The name "function expression" refers to using the `function` keyword in an expression to create a new function reference. We often store the reference in a `const` variable for later use.

Let's look at this code, which defines a function named `increaseQuantity`:

<!-- prettier-ignore-start -->
```js
const increaseQuantity = function(initial_qty) {
    return initial_qty + 1;
}
```
<!-- prettier-ignore-end -->

Let's break down the details of this `increaseQuantity` function:

- We create a `const` variable with the name we want our function to have, `increaseQuantity`.
- We assign `increaseQuantity` the right-hand value.
- The right-hand value starts with the `function` keyword.
- We create the parameter list using parentheses `()`. If there are zero parameters, we must include the parentheses and leave it empty.
- The function opens and closes with curly braces `{}`.

We call this function using parentheses `()` next to the function name, passing in any arguments:

<!-- prettier-ignore-start -->
```js
increaseQuantity(30);
```
<!-- prettier-ignore-end -->

### !callout-warning

## Missing Arguments Are `undefined`

When we call functions with missing arguments, the value of these parameters will be `undefined`. This is different from most languages, which would raise an error about mismatched arguments!

<br/>

If we invoked `increaseQuantity` with zero arguments, like `increaseQuantity()`, the value of `initial_qty` in the function would be `undefined`.

### !end-callout

## Function Declarations

To define `increaseQuantity` as a function declaration, we leave off the variable assignment part and place the desired name after `function`, rather than making a separate variable. (Note that even in function expressions, an optional name can be supplied.)

We can write this code:

<!-- prettier-ignore-start -->
```js
function increaseQuantity(initial_qty) {
    return initial_qty + 1;
}
```
<!-- prettier-ignore-end -->

In this case, we begin the function definition with the `function` keyword. We provide the function's name after this keyword, and before the parameter list in parentheses.

We still call this function using parentheses next to the function name:

<!-- prettier-ignore-start -->
```js
increaseQuantity(31);
```
<!-- prettier-ignore-end -->

## Foreshadowing: We Prefer Function Expressions

We may see the function declaration style in different contexts, and especially in older JavaScript code online.

This curriculum text will prefer function expressions. Function expressions:

- Proactively guard against bugs with scope and _hoisting_, topics not covered in this curriculum
- Set up patterns and habits needed for future, more advanced JavaScript syntax

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: ordering
* id: 72f9c062
* title: Intro to Functions
##### !question

Arrange the options below so that they match these terms in this order:

1. Function Expression
1. Function Declaration
1. A function named `clearCanvas`
1. Calling a function named `clearCanvas`

##### !end-question
##### !answer

1. `const clearCanvas = function(){ ... }`
1. `function clearCanvas(){ ... }`
1. `clearCanvas`
1. `clearCanvas()`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
