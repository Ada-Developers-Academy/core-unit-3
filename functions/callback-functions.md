# Callback Functions

## Goal

One of the ways we'll solve problems in JavaScript is using callback functions. Getting the hang of callback functions takes practice.

The goal of this lesson is to introduce callback functions, so we can use this vocabulary as we see functions passed around as arguments in the future.

## Another Way to Look at Functions

We might have been in situations before where we thought, "Ugh! This logic is reusable. The only thing that needs to change is one piece of behavior." If we've ever thought, "If only we could take in behavior as an argument," we're in luck!

For example, let's imagine this problem and pseudocode:

We need to build one calculator function that can add, subtract, multiply, and divide two numbers.

In order to accomplish that goal, we need three arguments:

1. The first number
2. The second number
3. Something that represents to operation we need, to help us determine if we're adding, subtracting, multiplying, or dividing

We could approach the third argument by expecting a string, such as `'add'`, `'+'`, `'multiply'`, or `'*'`.

<!-- prettier-ignore-start -->
```js
const calculator = function(a, b, operation){
  // if (operation === 'add') {
  //  return a + b;
  // }
}
```
<!-- prettier-ignore-end -->

However, wouldn't it be grand if we could _pass in_ the actual operation, whether it's addition or subtraction, and execute it?

## Callback Functions

In order to pass around behavior, we pass around functions.

More specifically, a function can _take in a function_ as an _argument_, and then call that function.

To help us talk about functions, we can use specific vocabulary around these functions. A **callback function** is a nickname for a function that is _passed into_ another function.

We can reverse that definition and imagine a function that _takes in another function as an argument_. The function passed in as an argument can be labeled as a _callback function_.

### Passing Around Cleaning Up Behavior

Let's dive into an example! Let's define these two functions, `cleanKitchen` and `bakeCake`.

<!-- prettier-ignore-start -->
```js
const cleanCountertop = function () {
  console.log('I\'m cleanin\' my counters now! Scrubba scrub scrub.');
}

const bakeCake = function () {
  console.log('Make the batter...');
  console.log('Put it in the oven...');
}

bakeCake();
```
<!-- prettier-ignore-end -->

The variable `cleanCountertop` references a function that prints details about cleaning a kitchen.

The variable `bakeCake` references a different function that prints details about baking a cake.

When we bake a cake, maybe there's always cleanup behavior that we want to call, whether it's cleaning our counters, sink, or stove-top.

We can _change the function signature_ of `bakeCake` to accept an argument, `cleanupBehavior`. Inside our `bakeCake` function, we can take that argument and _invoke_ whatever function it references, by attaching `()` to it.

<!-- prettier-ignore-start -->
```js
const bakeCake = function (cleanupBehavior) {
  console.log('Make the batter...');
  console.log('Put it in the oven...');
  cleanupBehavior();
}
```
<!-- prettier-ignore-end -->

We can refer to `cleanupBehavior` as a _callback function_ inside our `bakeCake` function. After we look at the big picture, we can think about the phrase "callback."

<!-- prettier-ignore-start -->
```js
const cleanCountertop = function () {
  console.log('I\'m cleanin\' my counters now! Scrubba scrub scrub.');
}

const bakeCake = function (cleanupBehavior) {
  console.log('Make the batter...');
  console.log('Put it in the oven...');
  cleanupBehavior();
}

bakeCake(cleanCountertop);
```
<!-- prettier-ignore-end -->

When we ultimately _invoke_ the `bakeCake` function with `bakeCake()`, we need to pass in an argument.

<!-- prettier-ignore-start -->
```js
bakeCake(cleanCountertop);
```
<!-- prettier-ignore-end -->

We're passing in `cleanCountertop`, the variable that refers to our cleaning function. We're specifically _not_ invoking the function. If we were _invoking_ it, we would use `cleanCountertop()`.

Reviewing our `bakeCake` function, we can see that we invoke our `cleanupBehavior` function with `cleanupBehavior()`, without knowing if it's cleaning the countertop, cleaning the sink, cleaning the stove-top, or cleaning the bathroom!

<!-- prettier-ignore-start -->
```js
const bakeCake = function (cleanupBehavior) {
  console.log('Make the batter...');
  console.log('Put it in the oven...');
  cleanupBehavior();
}
```
<!-- prettier-ignore-end -->

We call `cleanupBehavior` a _callback function_ inside `bakeCake`. It refers to the expectation that `bakeCake` should _call back_ a function... the function that was passed in, when `bakeCake` was invoked in the first place.

## Revisiting Calculator

Let's consider how we can build our calculator function using callbacks. This process will be very similar to our `bakeCake` example, but we'll be mindful about how arguments are passed in.

Consider this code:

<!-- prettier-ignore-start -->
```js
const multiply = function (factor_a, factor_b) {
  console.log('Now we\'re in multiply~~');
  return factor_a * factor_b;
}

const calculate = function (a, b, operate) {
  console.log('We\'re inside the calculate function!');
  return operate(a, b);
}

const result = calculate(7, 6, multiply);
console.log('Our final result from calculate is:', result);
```
<!-- prettier-ignore-end -->

After running this code, we'll see this output:

```
We're inside the calculate function!
Now we're in multiply~~
Our final result from calculate is: 42
```

### Practice Tracing Code

Let's practice tracing code, going through it and following the flow of execution. The first several lines of this snippet define functions. Our first moment of action is the line `const result = calculate(7, 6, multiply);`.

We invoke our `calculate` function when we call it with parentheses `()`, in the expression `calculate(7, 6, multiply)`. Here, we're passing in the `multiply` function, without invoking it.

When we enter our `calculate` function, we have these values:

| Local variable | Value      |
| -------------- | ---------- |
| `a`            | `7`        |
| `b`            | `6`        |
| `operate`      | `multiply` |

Our `calculate` function eventually invokes `operate` with the expression `operate(a, b)`. When we run `operate(a, b)`, we're invoking the `multiply` function with those arguments.

Inside the `multiply` function, we have these values:

| Local variable | Value |
| -------------- | ----- |
| `factor_a`     | `7`   |
| `factor_b`     | `6`   |

Ultimately, our `multiply` function returns `42`...

<!-- prettier-ignore-start -->
```js
return factor_a * factor_b; // 42
```
<!-- prettier-ignore-end -->

Which in turn, after we get back to our `calculate` function...

<!-- prettier-ignore-start -->
```js
return operate(a, b); // 42
```
<!-- prettier-ignore-end -->

Returns `42` itself.

This comes all the way back to our line where we originally started all of this!

<!-- prettier-ignore-start -->
```js
const result = calculate(7, 6, multiply);
```
<!-- prettier-ignore-end -->

We finally get a value for our variable `result`, which is `42`.

### !callout-info

## Compare to Python

Python actually supports passing around functions, too! Python uses _lambdas_ as a popular pattern for passing around functions.

### !end-callout
