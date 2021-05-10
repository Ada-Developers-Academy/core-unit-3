# Anonymous Functions and Loops

---

<!-- Old content -->

# Anonymous Functions and `forEach` Loops

## Practical Example: `forEach` Loops

We've touched on iteration in JavaScript with a regular `for` loop and a `while` loop. However, going forward, `forEach` loops are going to be our most reliable loops to use.

The `forEach` loop in JavaScript is a function that operates off of a collection (like an array). It takes in one argument: a function, which takes in one argument that represents one iteratee item from the array.

Because of the nature of iteration (it's usually an operation we need to do one time, in a very specific manner), we will use an anonymous function.

Observe the following example, which has an array of numbers that represent a collection of cash tips, and then iterates through the array to increment a `sum` variable. Then, we use the sum to calculate the average cash tip.

```javascript
const cashTips = [4, 7, 9, 12, 3, 18, 6];
let sum = 0;

cashTips.forEach( function(tip) {
  sum += tip;
});

const average = sum / cashTips.length;
console.log(`The average cash tip is ${average}`);
```

## Danger Will Robinson!!!  Danger!!!

There is one thing to note about the `forEach` loop.  Consider this linear search:

```javascript
const list = ['Alice', 'Cooper', 'Maria', 'Alyokhina', 'Alicia', 'Keys'];

list.forEach( function(element) {
  if (element === 'Cooper') {
    console.log('Found it!');
    return true;
  }
  console.log(`${element} is not Cooper`);
});
```

You would think that this would print out:

```
Alice is not Cooper
Fount it!
```

And stop.  However this is **wrong**.  Because `forEach` method takes a _function_ as a parameter the `return` causes us to leave the _anynomous function_ and **not** the entire loop.  

This code segment actually prints:

```
Alice is not Cooper
Found it!
Maria is not Cooper
Alyokhina is not Cooper
Alicia is not Cooper
Keys is not Cooper
```

You **cannot** break out of a `forEach` loop.  It will iterate throughout the collection.  This can be good, if this is the behavior you want, but if you want to short-circuit the loop, [another method might be preferable.](http://frontendcollisionblog.com/javascript/2015/08/15/3-reasons-you-should-not-be-using-foreach.html) Just remember if you are in a `forEach` loop, you are in for the full ride.

If you wanted to see if `Cooper` was in the list using `.find` is a better choice.

```javascript
const list = ['Alice', 'Cooper', 'Maria', 'Alyokhina', 'Alicia', 'Keys'];

const foundElement = list.find( function(element) {
  return element === 'Cooper'
});

if (foundElement != undefined) {
  console.log('I found Cooper!')
}
```

### Exercise: `forEach`

Complete the following exercises in JavaScript using `forEach` and anonymous functions.

1. Given the array `[ 2, 5, 8, 11, 14 ]`, iterate through the array. For each item `num`, print to the terminal `2 * num + 7`
1. Given the array `['puppies', 'meerkats', 'red pandas']`, iterate through the array. For each item `critter`, print to the terminal `"I am as amazing as"` critter!
1. Given the array `['puppies', 'meerkats', 'red pandas']`, iterate through the array. Print out only the longest string in the array.

## Vocab List

- The `this` keyword
- Callback function
- Anonymous function
- "Higher order" or "first-class" functions

## Summary

Often we want to pass a function as an argument in JavaScript.  One term for these is a _callback function_.  Sometimes these callback functions are only used in one function call and do not need a name.  These nameless functions are called _anonymous functions_.  

Similar to Ruby's `.each` method, JavaScript arrays have a `.forEach` function.  The difference between the two is that `.forEach` takes a *function as a parameter*.  This takes advantage of JavaScript's functional features, but means we _cannot_ break out of a loop mid-iteration.

## Resources

- [Three Reasons `forEach` is dangerous](http://frontendcollisionblog.com/javascript/2015/08/15/3-reasons-you-should-not-be-using-foreach.html)
- [MDN on `forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)