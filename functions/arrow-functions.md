# Arrow Functions

## Introduction

Arrow functions have minimized _syntax_ compared to regular JavaScript
functions.

Arrow functions are especially useful for making _anonymous functions_, discussed outside this topic.

Arrow functions and "regular" functions are different in two ways:

- Syntax
- How they define `this`, a keyword which refers to the "current" object, discussed in depth outside this topic.

In this lesson, we'll focus on the _syntax_ of creating arrow functions. This syntax may seem unnecessary now, but in later lessons, we'll use arrow functions in interesting contexts.

### !callout-info

## Arrow Functions Are ES6

Arrow function syntax was introduced in ECMAScript 2015, or ES6. This is to say that older JavaScript programs will not have arrow functions, and arrow functions are only supported in environments that can run ES6+. [All modern browsers support them](https://www.caniuse.com/arrow-functions), so this distinction may feel irrelevant to our daily development, but it's still good to know because there are dozens of kinds of JavaScript environments to anticipate!

### !end-callout

## Syntax With Zero Parameters

"Regular" functions defined with a function expression look like this:

<!-- prettier-ignore-start -->
```javascript
const sayHello = function() {
  return 'hey there.';
};

console.log(sayHello());
```
<!-- prettier-ignore-end -->

Using arrow function syntax, we can rewrite it as:

<!-- prettier-ignore-start -->
```javascript
const sayHello = () => {
  return 'hey there.';
};

console.log(sayHello());
```
<!-- prettier-ignore-end -->

| <div style="min-width:250px;"> Piece of Code </div> | Notes                                                                                                                                                                     |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const sayHello =`                                  | We continue to use function expression syntax to define this function: we declare a `const` variable and assign it the right-hand side, which is our arrow function. |
| `()`                                                | We list the parameter list in parentheses `()` here. Note that we did _not_ include the `function` keyword.                                                               |
| `=>`                                                | After the parameter list, we write an arrow `=>`. Note that though we call it an "arrow," it is made of an equal sign `=` and a greater than `>`.                                                                                                                        |
| `{`                                                 | An opening curly brace after the arrow begins the function body.                                                                                                          |
| `return 'hey there.';`                              | Our function body. In this case, it's a `return` statement, returning a string.                                                                                           |
| `}`                                                 | A closing curly brace to close the function body.                                                                                                                         |
| `;`                                                 | This semicolon terminates the expression that assigns the arrow function to `sayHello`.                                                                                                                         |
| `console.log(sayHello());`                          | We continue to invoke the `sayHello` function the same way we did other functions: add parentheses `()` next to the function name.                                        |

### !callout-info

## Arrow Functions Are Particular About Line Breaks

Note that the arrow `=>` must be on the same line as the parameter list `()`. If they are on separate lines, it will generate a syntax error.

### !end-callout

## Syntax With One-Line Return Function Bodies

Consider our `sayHello` arrow function:

<!-- prettier-ignore-start -->
```javascript
const sayHello = () => {
  return 'hey there.';
};

console.log(sayHello());
```
<!-- prettier-ignore-end -->

This function is responsible for one thing: returning the string `'hey there.'`.

When an arrow function is responsible for returning something, and has a function body that is one line long, we can use reduced arrow function syntax.

<!-- prettier-ignore-start -->
```js
const sayHello = () => 'hey there.';
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const sayHello =`                                  | We declare the `const` variable `sayHello` and begin to assign it an arrow function.                                                                                     |
| `()`                                                | In one-line arrow functions, the parameter syntax stays the same.                                                                                                           |
| `=>`                                                | In one-line arrow functions, we still need the arrow between the parameter list and the function body.                                                                      |
| `'hey there.'`                                      | In one-line arrow functions, we can exclude the curly braces and the `return` keyword. However, this expression **_must_** be on the same line as the rest of the function. |
| `;`                                                 | This semicolon terminates the expression that assigns the arrow function to `sayHello`.                                                                                                                          |

<!-- ### Exercise

Convert this into an arrow function and minimize the code typed.

```javascript
const hello = function () {
  return "hello world";
};
``` -->

## Syntax with Parameters

### With Multiple Parameters or Zero Parameters

Like "normal" functions, arrow functions have their parameters listed in the parentheses.

With zero parameters, we leave the parentheses empty:

```javascript
const sayHelloWorld = () => "Hello World!";
```

With multiple parameters, they are comma-separated.

```javascript
const add = (x, y) => x + y;
```

### With One Parameter

This arrow function takes a single number and returns that number squared:

```javascript
const squareNum = (number) => {
  return number * number;
};
console.log(squareNum(3)); // 9
```

When we have an arrow function that takes in _one and only one_ parameter, the parentheses around the single parameter are optional.

Consider this rewriting:

```javascript
const squareNum = number => {
  return number * number;
};
console.log(squareNum(3)); // 9
```

Remember that the parentheses are optional _only_ when there is _one and only one_ parameter. If we don't use parentheses when there are zero or more than one parameter, we'll get a syntax error!

### !callout-info

## Bonus Rewrite: One Parameter and One Line

We can rewrite our `squareNum` arrow function, taking advantage of its one parameter and one-line return:

<!-- prettier-ignore-start -->
```js
const squareNum = number => number * number;
```
<!-- prettier-ignore-end -->

### !end-callout

## One-Line Arrow Functions Returning Objects

Consider this `makePerson` function, whose responsibility is to return an object.

```javascript
const makePerson = function(id, name) {
  return {
    id: id,
    name: name,
  };
};
```

When we refactor it to a one-line arrow function, _because it specifically returns an object_, we need to wrap our object in parentheses.

```javascript
const makePerson = (id, name) => ({ id: id, name: name });
```

In general, wrapping a value in parentheses is a great way to ensure it's not interpreted as a function body.

### !callout-info

## JavaScript's Object Shorthand

In JavaScript, we'll make many object literals over time. Initializing object literals requires key-value pairs. Notice in the `makePerson` function above that the keys we used in our object happen to match **exactly** the parameter names, resulting in the repetitive `id: id, name: name`.

<br />

When we have **exactly** a _variable_ that references the _value_ we want to include **_and_** that variable is named **exactly** the name of the key we're inserting, we can use object literal shorthand.

<br/>

In object literal shorthand, we can comma-separate the variables we want to include in an object. The key-value pairs will be formed such that the _name_ of the variable is the _key_, and the _value_ of the variable is the _value_.

<!-- prettier-ignore-start -->
```js
const redFruit = 'apple';
const blueFruit = 'blueberry';

const coolFruitObject = { redFruit, blueFruit };
```
<!-- prettier-ignore-end -->

<br/>

The resulting `coolFruitObject` is:

<!-- prettier-ignore-start -->
```js
{
  redFruit: 'apple',
  blueFruit: 'blueberry'
}
```
<!-- prettier-ignore-end -->

<br/>

Here, one variable was named `redFruit`, and had the value `'apple'`. When we included it into our object, it used the variable name, `redFruit` as the key, and the value `'apple'` as the value. We included a second key-value pair by comma-separating `blueFruit` for the same effect.

<br/>

We can apply this syntax to our above `makePerson` function:

<!-- prettier-ignore-start -->
```js
const makePerson = (id, name) => ({id, name});
console.log(makePerson(999, 'J.'))
```
<!-- prettier-ignore-end -->

<br/>

This syntax is used only for readability and convenience; we will never be forced to use or not use this in our own code.

### !end-callout
