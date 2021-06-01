# Anonymous Functions

## Introduction

Yet another permutation of the function in the JavaScript language!

Anonymous functions are a useful way to define functions in the context they're used. This usage can be more readable sometimes, especially when it's more convenient to read a function's definition immediately over chase its definition, which may be in a different file.

## Anonymous Functions

An **anonymous function** is a function created with any valid syntax, defined in the one place that it's used.

### Demonstration

Let's demonstrate the difference between a named function and an anonymous function.

Every function has a property named `name`, which holds the name of the function. We can access it through dot notation. For example, we can create a function named `helloWorldFn`:

```js
const helloWorldFn = function () {
  console.log("hello world!");
};
```

When we print this function's `name`, we'll get `helloWorldFn` back.

```js
console.log("the name of the function helloWorldFn is:", helloWorldFn.name);
```

Output:

```
the name of the function helloWorldFn is: helloWorldFn
```

An anonymous function is defined in the one place that it's used. These functions do not have a defined `name` property.

For example, let's:

1. Create an anonymous function that returns `0` (to make it small!)
1. Print the `name` of this anonymous function

```js
console.log("The name of this anonymous function is blank!:", (() => 0).name);
```

Our anonymous function is `() => 0`. It's defined inside the `console.log()` statement, which is the only place that this function is used.

We wrapped it with parentheses `()` and then accessed its `name` property. When we run this code, we get this output:

```
The name of this anonymous function is blank!:
```

Each function was created exactly where it was intended to be used, and afterwards it effectively disappears!

### !callout-info

## A Function Is a Function Is a Function

Whether or not a function has a name, or gets stored in a variable for later use, a function is still a function. There's nothing special about passing an anonymous function as a callback. Anywhere that we pass an anonymous function that we create right when we need, we could pass a named function that we created elsewhere.

<br />

As we will see, using an anonymous function, a function we created right where we needed it, can simply be more convenient.

### !end-callout

## Uses for Anonymous Functions: `forEach` Loops

An anonymous function is useful to create a certain kind of for-each loop.

The `forEach` method in JavaScript is defined on arrays. It takes in one argument: a **function**.

_The passed-in function_ also takes in one argument, which represents one item from the collection.

<!-- prettier-ignore-start -->
```js
const myArray = ['red', 'yellow', 'blue'];

myArray.forEach(item => {
  console.log('Inside this anonymous function, each item of myArray will be accessed as item:', item);
});
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `const myArray = [...];`                            | Here we create an array, `myArray`.                                                                                                      |
| `myArray.forEach(...);`                             | To iterate over each element in `myArray`, we call the `forEach` function of `myArray`.                                                  |
| `item => { ... }`                                   | The `forEach` function takes in one argument: another function! This anonymous function is using arrow function syntax.                  |
| `item`                                              | The anonymous function we pass into `forEach` should take in one argument itself. This argument will always represent the iterated item. |
| `console.log(..., item);`                           | In the function body, we can access the value of `item` and read it!                                                                     |

Anonymous functions can be arrow functions or non-arrow functions! Whether we use an arrow function or non-arrow function depends on the context of the problem, and which form of `this` we need.

More often than not, our first instinct for creating anonymous functions should be to use arrow functions.

### !callout-info

## Many Ways to Iterate

JavaScript could be said to have _too many_ ways to iterate over arrays. In general, `forEach` is the _least flexible_ way of iterating over an array. As an example, notice that there is no way to stop iterating early if we were looking for a particular value in the array. `forEach` should only be used when we know that we need to apply the supplied function operations to _every_ item in the array.

<br />

Even then, one of JavaScript's several `for` loop styles, especially the `for`/`of` loop may give us iteration behavior more like we might be used to in other languages. Follow your curiosity!

### !end-callout

### Example: Iterating Through Tips

Let's look at another example! Here, we have an array of cash tips, `cashTips`. We want to find the average cash tip. We will create a `sum` variable. Then, we'll iterate through `cashTips`. For each tip in the array, we'll increment `sum`. Then we'll calculate the average cash tip.

```javascript
const cashTips = [4, 7, 9, 12, 3, 18, 6];
let sum = 0;

cashTips.forEach((tip) => {
  sum += tip;
});

const average = sum / cashTips.length;
console.log(`The average cash tip is ${average}`);
```

To create the loop, we call `cashTips.forEach()`. The `forEach` function takes in one argument: another function.

Here, we pass in an anonymous function:

<!-- prettier-ignore-start -->
```js
tip => {
  sum += tip;
}
```
<!-- prettier-ignore-end -->

This function takes in one argument, `tip`. Our `forEach` function will use this anonymous function, and as the iteration runs, `tip` will be set to each item in `cashTips`. Inside our anonymous function, we increment `sum` by `tip`.

### Anonymous Functions in Context

This is a great example of an anonymous function because:

- The logic of this function isn't reused anywhere
- The function is more readable in the context of the `forEach` loop than outside it

## Uses for Anonymous Functions: `map`

Another great use of anonymous functions is with the `map` function.

The responsibility of `map` is to loop through an array, and create another array whose items are transformed, or _mapped_, from the original array.

For example, imagine that we're working with an API to look at our social media users. We get back an array of user IDs, but each ID in this array is a string. Let's assume that we need to convert these strings into numbers in order for us to use them!

Observe how we can use the `map` function to achieve our goal:

<!-- prettier-ignore-start -->
```js
const userIds = ['401', '403', '404', '500', '518'];

const parsedUserIds = userIds.map(userId => {
  return parseInt(userId);
});

console.log(parsedUserIds);
```
<!-- prettier-ignore-end -->

Our output shows that `parsedUserIds` is indeed an array of numbers:

```
[ 401, 403, 404, 500, 518 ]
```

| <div style="min-width:220px;"> Piece of Code </div> | Notes                                                                                                                                                                |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const parsedUserIds =`                             | The `map` function on the right-hand side of the `=` will eventually evaluate to an array. We want to store that array in a `const` variable named `parsedUserIds`.  |
| `userIds.map( ... );`                               | Just like `forEach`, we want to call the `map` function on our array, `userIds`.                                                                                     |
| `userId => { ... }`                                 | `map` takes in a function. Here is an anonymous arrow function with one parameter, `userId`. `userId` will refer to each item in `userIds` as `map` goes through it. |
| `return`                                            | **Unlike** the `forEach` loop, **this function must `return` the value that we want** in our new array.                                                              |

### `forEach` vs. `map`

The `forEach` function is useful when we want to execute an identical action for each item. `map` is useful when we want a result array that is the same length as the original array, and each item in the result array is based on the parallel item (the item in the same position) in the original array.

## Uses for Anonymous Functions: `reduce`

Let's look at one more useful function, `reduce`. This function has similarities to both `forEach` and `map`, but has a significant difference.

The responsibility of `reduce` is to look through an array and apply some operation to eventually _reduce_ the array into _one value_.

Let's return to our code that calculated our average cash tip, but let's focus on how we get the _sum_ of our tips.

```javascript
const cashTips = [4, 7, 9, 12, 3, 18, 6];
let sum = 0;

cashTips.forEach((tip) => {
  sum += tip;
});
```

Our current logic for getting the sum of all tips is:

1. Initialize a `sum` variable at `0`
1. Iterate through each `tip` in `cashTips`
1. Increment `sum` by `tip`

Essentially, we're _reducing_ our `cashTips` array into _one value_. This is a great chance to refactor!

The `reduce` function takes in a function (and an optional starting value). _This_ function takes in _two_ arguments:

1. An argument to represent the accumulated value. This will let us avoid updating the `sum` variable each time through our loop.
1. One `item` from our array.

<!-- prettier-ignore-start -->
```js
const cashTips = [4, 7, 9, 12, 3, 18, 6];

const sum = cashTips.reduce((total, tip) => {
  return total + tip;
});
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                               |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const sum =`                                       | The `reduce` function on the right-hand side of the `=` will evaluate to one value. Let's keep that single value in a `const` variable named `sum`. |
| `cashTips.reduce( ... );`                           | Just like `forEach`, we want to call the `reduce` function on our array, `cashTips`.                                                                |
| `((...) => { ... });`                               | `reduce` takes in a function. Here we pass in an anonymous arrow function!                                                                          |
| `total`                                             | The first parameter for this function, `total`, will hold the running value that carries over between the iterated `tip`s.                          |
| `tip`                                               | The second parameter that will reference an item in `cashTips` one at a time.                                                                       |
| `return total + tip;`                               | **Unlike** the `forEach` loop, **this function must `return` the running value that we want to accumulate** for our `sum`.                          |

In the context of our greater problem, finding the average, our code will look like this:

```javascript
const cashTips = [4, 7, 9, 12, 3, 18, 6];

const sum = cashTips.reduce((total, tip) => {
  return total + tip;
});

const average = sum / cashTips.length;
console.log(`The average cash tip is ${average}`);
```
