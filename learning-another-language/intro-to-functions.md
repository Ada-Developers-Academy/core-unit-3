# Intro to Functions

## Introduction

There are _many_ ways to define functions. For now, we will dive into two ways:

- Functional expressions
- Function declarations

Both of these methods have the same result: defining a function.

The most important difference between them is the context that we typically use them in. There are technical differences between them, but these are not relevant on the introductory level.

## Functional Expressions

The name "functional expression" refers to the function acting as an expression that a variable references.

Let's look at this code, which defines a function named `increaseQuantity`:

<!-- prettier-ignore-start -->
```js
const increaseQuantity = function(initial_qty) {
    return initial_qty + 1;
}
```
<!-- prettier-ignore-end -->

Let's break down the details of this `increaseQuantity` function:

- We create a `const` variable named our function name, `increaseQuantity`.
- We assign `increaseQuantity` to the right-hand value.
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

Function declarations may feel similar to declaring variables, where we stated the type of variable and its name.

To define `increaseQuantity` as a function declaration, we can write this code:

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

## Foreshadowing: We Prefer Functional Expressions

We may see the function declaration style in different contexts, and especially in older JavaScript code online.

This curriculum text will prefer functional expressions. Functional expressions:

- Proactively guard against bugs with scope and hoisting, topics not covered in this curriculum
- Setup patterns and habits needed for future, more advanced JavaScript syntax

## Check for Understanding
