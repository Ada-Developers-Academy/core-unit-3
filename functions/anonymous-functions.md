# Anonymous Functions

## Introduction

## Syntax

An anonymous function is a function created with any valid syntax, but it is not referenced by a variable.

Instead, an **anonymous function** is a function defined in the one place that it's used.

Technically, many of the methods in objects we created are anonymous functions!

<!-- prettier-ignore-start -->
```js
const myTedTalk = {
  title: 'Inspiration From Inspiring Things',
  summary: 'A story about where inspiration comes from.',
  summarize: function() {
    return `${this.title}: ${this.summary}`;
  }
}

myTedTalk.summarize();
```
<!-- prettier-ignore-end -->

We never _named_ the value of the `summarize` property, or referenced it in a variable. We defined the function in the one place where it's needed, anonymously!

## Uses for Anonymous Functions: `forEach` Loops

An anonymous function is useful when create for-each loops.

The `forEach` loop in JavaScript is a function that operates off of a collection (like an array). It takes in one argument: a **function**.

_The passed-in function_ takes in one argument, which represents one item from the collection.

<!-- prettier-ignore-start -->
```js
const myArray = ['red', 'yellow', 'blue'];

myArray.forEach( item => {
  console.log('Inside this anonymous function, each item of myArray will be accessed as item:', item);
});
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `const myArray = [...];`                            | Here we create an array, `myArray`.                                                                                                      |
| `myArray.forEach(...);`                             | To iterate over each element in `myArray`, we call the `forEach` function off `myArray`.                                                 |
| `item => { ... }`                                   | The `forEach` function takes in one argument: another function! This anonymous function is using arrow function syntax.                  |
| `item`                                              | The anonymous function we pass into `forEach` should take in one argument itself. This argument will always represent the iterated item. |
| `console.log(..., item);`                           | In the function body, we can access the value of `item` and read it!                                                                     |

Anonymous functions can be arrow functions or non-arrow functions! Whether we use an arrow function or non-arrow function depends on the context of the problem, and which form of `this` we need.

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

This function takes in one argument, `tip`. Our `forEach` function will use this anonymous function, and each `tip` will be each item in `cashTips`. Inside our anonymous function, we increment `sum` by `tip`.

### Anonymous Functions in Context

This is a great example of an anonymous function because:

- The logic of this function isn't reused anywhere
- The function is more readable in the context of the `forEach` loop than outside it

## Uses for Anonymous Functions: `map`

Another great use of anonymous functions is with the `map` function.

The responsibility of `map` is to look at an array, and create another array whose items are transformed, or _mapped_, from the original array.

For example, imagine that we're working with an API to look at our social media users. We get back an array of user IDs, but each ID in this array is a string. We need to convert these strings into numbers in order for us to use them!

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

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                                      |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const parsedUserIds =`                             | The `map` function on the right-hand side of the `=` will eventually evaluate to become an array. We want to store that array in a `const` variable named `parsedUserIds`. |
| `userIds.map( ... );`                               | Just like `forEach`, we want to call the `map` function on our array, `userIds`.                                                                                           |
| `userId => { ... }`                                 | `map` takes in a function. Here is an anonymous arrow function with one parameter, `userId`. `userId` will refer to each item in `userIds` as `map` goes through it.       |
| `return`                                            | **Unlike** the `forEach` loop, **this function must `return` the value that we want** in our new array.                                                                    |

### `forEach` vs. `map`

The `forEach` function is useful when we want to execute an identical action for each item. `map` is useful when we want a result array that is the same length of the original array, and each item in the result array is based on a parallel item in the original array.

## Uses for Anonymous Functions: `reduce`

Let's look at one more useful function, `reduce`. This function has similarities to `forEach` and `map`, but this time we'll practice using the vocabulary _callback function_.

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

Essentially, we're _reducing_ our `cashTips` array into _one value_. This is a great time to refactor!

The `reduce` function takes in a function. _This_ function takes in _two_ arguments:

1. An argument to represent the accumulated value. This will replace our `sum` variable.
1. One `item` from our array.

<!-- prettier-ignore-start -->
```js
const cashTips = [4, 7, 9, 12, 3, 18, 6];
let sum = 0;

const ultimateTotal = cashTips.reduce((total, tip) => {
  return total + tip;
});
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                    |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const ultimateTotal =`                             | The `reduce` function on the right-hand side of the `=` will become one value. Let's keep that single value in a `const` variable named `ultimateTotal`. |
| `cashTips.reduce( ... );`                           | Just like `forEach`, we want to call the `reduce` function on our array, `cashTips`.                                                                     |
| `((...) => { ... });`                               | `reduce` takes in a function. Here we pass in an anonymous arrow function!                                                                               |
| `total`                                             | The first parameter for this function, `total`, will hold the running value that carries over between the iterated `tip`s.                               |
| `tip`                                               | The second parameter that will reference an item in `cashTips` one at a time.                                                                            |
| `return total + tip;`                               | **Unlike** the `forEach` loop, **this function must `return` the running value that we want to accumulate** for our `ultimateTotal`.                     |

In the context of our greater problem, finding the average, our code will look like this:

```javascript
const cashTips = [4, 7, 9, 12, 3, 18, 6];

const ultimateTotal = cashTips.reduce((total, tip) => {
  return total + tip;
});

const average = ultimateTotal / cashTips.length;
console.log(`The average cash tip is ${average}`);
```