# Objects

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=5c27e408-f21f-4ca2-8076-ad4000f5c359&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### !callout-info

## This video uses an online JavaScript REPL

The video will walk through the same code in this lesson, however, in the video the instructor is walking through the code using an online REPL tool rather than VS Code, so you will see some differences between how you run the code locally and how the instructor will run the code in the online tool. 

### !end-callout

## Introduction

Objects are instances of a data type that contains key-value pairs. They're foundational to organizing data and solving problems in JavaScript.

Object keys can be strings or numbers.

Object values can be any data type, including strings, numbers, booleans, arrays, other objects, and functions.

Feel free to clone down [the repository version](https://github.com/AdaGold/objects-demo-js) of the code we'll be looking at if you want to follow along locally!

## Object Literals

An object literal is made by placing comma-separated key-value pairs in curly braces `{}`.   

<!-- prettier-ignore-start -->
```js
{
  breakfast: 'Cereal',
  lunch: 'Sandwich',
  dinner: 'Japchae'
};
```
<!-- prettier-ignore-end -->

Note that the syntax above is not valid on its own. If we place this code as-is in a JavaScript file and try to run it, we will get a SyntaxError. 

```bash
objects-demo-js % npm start

> objects-demo-js@1.0.0 start
> node src/index.js

/Users/user_name/Documents/projects/objects-demo-js/src/index.js:8
  lunch: 'Sandwich',
       ^

SyntaxError: Unexpected token ':'
    at wrapSafe (node:internal/modules/cjs/loader:1670:18)
    at Module._compile (node:internal/modules/cjs/loader:1713:20)
    at Object..js (node:internal/modules/cjs/loader:1904:10)
    at Module.load (node:internal/modules/cjs/loader:1473:32)
    at Function._load (node:internal/modules/cjs/loader:1285:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:234:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:151:5)
    at node:internal/main/run_main_module:33:47

Node.js v23.6.1
```

An object literal is not allowed to stand alone, it needs to be part of an expression. Some ways to create an expression are: 
- wrapping the object literal in parentheses
- assigning the object literal to a variable
- placing the object literal in a function call 
  
For example:

<!-- prettier-ignore-start -->
```js
// An object literal wrapped in parentheses to create an expression
({
  breakfast: 'Cereal',
  lunch: 'Sandwich',
  dinner: 'Japchae'
});

// An object literal assigned to a variable
const myMealsObj = {
  breakfast: 'Cereal',
  lunch: 'Sandwich',
  dinner: 'Japchae'
};

// An object literal passed as an argument to a function
console.log('Object literal as a function argument:', {
  breakfast: 'Cereal',
  lunch: 'Sandwich',
  dinner: 'Japchae'
});
```
<!-- prettier-ignore-end -->

### !callout-info

## Mind Your Commas vs. Semicolons

Key-value pairs inside of objects are separated by commas! This might feel tricky to balance while typing so many semicolons, so we should keep our eye on it, and use the IDE and `SyntaxError`s to guide us!

### !end-callout

## Accessing Objects

We can access the values in objects by using keys. Let's examine a few different ways of accessing values while using this example object:

<!-- prettier-ignore-start -->
```js
const testObj = {
  someNum: 5,
  someStr: 'this is a test string',
  someNestedObj: {
    someOtherNum: 4,
  }
};
```
<!-- prettier-ignore-end -->

We can describe the object `testObj` with this table:

| Key             | Value                     |
| --------------- | ------------------------- |
| `someNum`       | `5`                       |
| `someStr`       | `'this is a test string'` |
| `someNestedObj` | `{ someOtherNum: 4 }`     |

### Dot Notation

To get `'this is a test string'` from this object, we access the key `someStr` using dot notation:

<!-- prettier-ignore-start -->
```js
testObj.someStr;
```
<!-- prettier-ignore-end -->

<br/>

Observe this code:
<details style="max-width: 700px; margin: auto;">
    <summary>
        What do <code>testObj.someNum</code>, <code>testObj.someNestedObj</code>, and <code>testObj.keyDoesNotExist</code> evaluate to?
    </summary>

1. `testObj.someNum` evaluates to `5`
2. `testObj.someNestedObj` evaluates to

   <!-- prettier-ignore-start -->

   ```js
   {
       someOtherNum: 4,
   }
   ```

   <!-- prettier-ignore-end -->

3. `testObj.keyDoesNotExist` evaluates to `undefined`

</details>

### !callout-info

## `undefined` for Missing Keys

If we try to access a value using a key that _doesn't_ exist in the object, JavaScript will give us `undefined`. `undefined` typically represents some sort of uninitialized or missing value. This is _different_ from `null`, which describes an **_intentional_** lack of value.

### !end-callout

### Square Bracket Notation

We can also use square bracket notation to access the values of keys in an object. Again, consider:

<!-- prettier-ignore-start -->
```js
const testObj = {
  someNum: 5,
  someStr: 'this is a test string',
  someNestedObj: {
    someOtherNum: 4,
  }
};
```
<!-- prettier-ignore-end -->

The following code gives us `'this is a test string'`.

<!-- prettier-ignore-start -->
```js
testObj['someStr'];
```
<!-- prettier-ignore-end -->

Note that square bracket notation allows us to pass in a _variable_ for our key. This is because we can put expressions within our square brackets. Observe this code:

<!-- prettier-ignore-start -->
```js
const keyToGetSomeValue = 'someStr';

testObj[keyToGetSomeValue];
```
<!-- prettier-ignore-end -->

We declared a `const` variable named `keyToGetSomeValue`, and assigned it the value `'someStr'`. When we use `keyToGetSomeValue` in square brackets while accessing `testObj`, this variable evaluates to `'this is a test string'`.

### Nested Objects

We can nest objects inside other objects.

<!-- prettier-ignore-start -->
```js
const testObj = {
  someNestedObj: {
    someOtherNum: 4,
  }
};
```
<!-- prettier-ignore-end -->

We can nest objects as deep as we like!

In order to access nested objects, we _chain_ our syntax.

To get `4` from within `testObj`, we can use any of the following approaches:

<!-- prettier-ignore-start -->
```js
testObj.someNestedObj.someOtherNum;

testObj['someNestedObj']['someOtherNum'];

testObj.someNestedObj['someOtherNum'];

testObj['someNestedObj'].someOtherNum;
```
<!-- prettier-ignore-end -->

We evaluate these lines from left to right.
1. First, `testObj.someNestedObj` or `testObj['someNestedObj']` accesses the inner object
2. Then, we use `.someOtherNum` or `['someOtherNum']` on the inner object to access its own key-value pairs.

Note that we _can_ mix styles in one line. This might be useful in _very_ specific cases, though the rest of the time we should strive for consistency.

## Functions Are Objects

Functions are objects, too!

Just like the object literals we've been working with, functions _also_ have key-value pairs, even though we don't normally see them.

Here are some example properties that all functions have:

- `name`, which is the name of the function
- `length`, which is the number of parameters the function expects

We won't normally use these properties, but they illustrate a powerful point: we can access these properties using dot notation or square bracket notation, just like any other object.

Observe this code:

<!-- prettier-ignore-start -->
```js
const sayHelloWorld = function() {
    console.log('yeah let\'s goooooooooo!');
};

console.log(sayHelloWorld.name);
console.log(sayHelloWorld['name']);
```
<!-- prettier-ignore-end -->

This may also clarify why we create functions with such long syntax. In the above code, we can now read it as the variable `sayHelloWorld` is assigned an object. This object is the function `sayHelloWorld`.

### !callout-info

## Foreshadowing: Functions Treated as Objects 😅

JavaScript is not the only language where functions are treated as objects. However, popular and well-known patterns in JavaScript frequently rely on this knowledge! Look forward to seeing functions being treated like objects. 😅

### !end-callout

## Demonstration: Objects Can Hold Functions

This additional topic can illustrate one way that we can treat functions as objects.

When we make objects, we make key-value pairs, where the value can be any object. Values can be numbers, strings, booleans, `null`, arrays, other objects, and _functions_.

Consider this code:

<!-- prettier-ignore-start -->
```js
const shoutMyName = function() {
  console.log('Kiki!!!');
};

const employee = {
  name: 'Kiki',
  pronouns: 'they/she',
  greeting: shoutMyName
};
```
<!-- prettier-ignore-end -->

In this example, the value of the `greeting` property _is_ the function `shoutMyName`.

<!-- prettier-ignore-start -->
```js
employee.greeting;
```
<!-- prettier-ignore-end -->

The above code gives us back the function, `[Function: shoutMyName]`.

We can invoke the function attached to the `greeting` property by attaching parentheses `()` to the function:

<!-- prettier-ignore-start -->
```js
employee.greeting();
```
<!-- prettier-ignore-end -->

This code will shout our `employee`'s name!

In conclusion, we can pass around a function just like how we can pass around any other object.

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 7ec214a0
* title: Objects
##### !question

Consider this object:

```js
const fabricBolt = {
  material: 'cotton',
  color: 'blue',
  pattern: 'solid',
  description: {
      longDescription: 'Beautiful, flowing fabric that reminds you of the ocean',
      shortDescription: 'It doesn\'t have holes in it'
  }
};
```

What do we get back with `fabricBolt.description.shortDescription`?

##### !end-question
##### !options

* `{shortDescription: 'It doesn\'t have holes in it'}`
* `'It doesn\'t have holes in it'`
* `'blue'`
* `undefined`

##### !end-options
##### !answer

* `'It doesn\'t have holes in it'`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 3d030ba5
* title: Objects
##### !question

Consider this object:

```js
const fabricBolt = {
  material: 'cotton',
  color: 'blue',
  pattern: 'solid',
  description: {
      longDescription: 'Beautiful, flowing fabric that reminds you of the ocean',
      shortDescription: 'It doesn\'t have holes in it'
  }
};

const descriptionKey = 'color';
```

What do we get back with `fabricBolt[descriptionKey]`?

##### !end-question
##### !options

* `{shortDescription: 'It doesn\'t have holes in it'}`
* `'It doesn\'t have holes in it'`
* `'blue'`
* `undefined`

##### !end-options
##### !answer

* `'blue'`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: c25d2bab
* title: Objects
##### !question

Consider this object:

```js
const fabricBolt = {
  material: 'cotton',
  color: 'blue',
  pattern: 'solid',
  description: {
      longDescription: 'Beautiful, flowing fabric that reminds you of the ocean',
      shortDescription: 'It doesn\'t have holes in it'
  }
};
```

What do we get back with `fabricBolt.texture`?

##### !end-question
##### !options

* `{shortDescription: 'It doesn\'t have holes in it'}`
* `'It doesn\'t have holes in it'`
* `'blue'`
* `undefined`

##### !end-options
##### !answer

* `undefined`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
