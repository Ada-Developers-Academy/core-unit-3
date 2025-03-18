# Variables

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ba6bb1e9-6f16-4338-8a78-ad4000f5c3b5&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### !callout-info

## This video uses an online JavaScript REPL

The video will walk through the same code in this lesson, however, in the video the instructor is walking through the code using an online REPL tool rather than VS Code, so you will see some differences between how you run the code locally and how the instructor will run the code in the online tool. 

### !end-callout

## Vocabulary and Synonyms

| Vocab            | Definition                                                                                                                 | How to Use in a Sentence                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Declaring        | Stating a variable's name with details about its scoping and mutability.                                                                  | "We need to declare the variable before we assign a value to it," "We only need to declare a variable once." |
| Assigning        | Creating a reference between a variable and an object.                                                                     | "I assigned the value `42` to the `let` variable named `jingsFavNum`."                                       |
| `let` variable   | A variable that is block-scoped and re-assignable.                                                                         |
| `const` variable | A constant variable. This variable is block-scoped and read-only. Constants are the type of variable we'll use most often. |

## Declare Variables, Then Assign (Then Maybe Re-Assign)

In JavaScript, there are two distinct steps when dealing with variables:

1. declaration
1. assignment

**Declaration** is the step of stating a variable's name, and what kind of variable it is.

Different kinds of variables have different scope and re-assignment properties. Details are covered below!

This is an example of variable declaration:

```javascript
let myFavoriteGreeting;
```

**Assignment** is the step of giving a value to the variable, using the assignment operator `=`. Re-assignment also uses the assignment operator.

```javascript
let myFavoriteGreeting; // <- declaration
myFavoriteGreeting = "Hello, World!"; // <- assignment
myFavoriteGreeting = "Hello, Internet!"; // <- re-assignment
```

We only need to declare a variable once. We never need to re-declare it.

### Declaration and Assignment Together

We can do declaration and initial assignment on one line:

```javascript
let clicheGoodbye = "Don't forget to like and subscribe";
```

## Kinds of Variables

All variables must be declared before we assign values to them.

Variables are declared as one of three kinds:

| Keyword | Definition                                                                                         |
| ------- | -------------------------------------------------------------------------------------------------- |
| `let`   | A block-scoped variable. Actively encouraged.                                                      |
| `const` | A block-scoped variable that is read-only. Reassignment raises a `TypeError`. Actively encouraged. |
| `var`   | A variable without block scoping. If defined within a function, it will have scope throughout the _entire_ function. If defined outside a function it will have global scope. Actively discouraged.                                                  |

Feel free to clone down [the repository version](https://github.com/AdaGold/variable-demo-js) of the code we'll be looking at if you want to follow along locally.

Observe the [variable declarations and assignments](https://github.com/AdaGold/variable-demo-js/blob/main/src/index.js) below:

<!-- prettier-ignore-start -->
```javascript
let jingsFavNum = 72;
const jingsFavGame = 'night in the woods';
var jingsFavColor = 'green';
```
<!-- prettier-ignore-end -->

### Scope of `var` versus `let` and `const`

When creating a variable, using `let` and `const` will scope the variable to the block that contains it. In the example below, `name` is defined inside of the `for-of` loop's block. It is _scoped_ to the block. It is not accessible outside of the block. This applies to all blocks of code in JavaScript.

In JavaScript, the `for` family of loops (`for`, `for-in`, `for-of`) consider the loop's condition to be within the block scope of the loop as well. So the variable `i`, defined in the condition of the `for-of` loop, is also _scoped_ to the block, and cannot be accessed outside of the block.

```javaScript
const nums = [14, 15, 16, 18, 19, 20];

for (let i of nums) {
    console.log(`i is ${i}`);
    const name = 'peter';
    console.log(`name is ${name}`);
}

console.log(i); // ReferenceError: i is not defined
console.log(name); // ReferenceError: name is not defined

```

On the other hand, when using `var`, the variable is instead scoped to the _function_ that contains it, or if not in a function, to the global scope.

```javascript
const nums = [14, 15, 16, 18, 19, 20];

for (var i of nums) {
    console.log(`i is ${i}`);
    var name = 'peter';
    console.log(`name is ${name}`);
}

console.log(i); // 20
console.log(name); // peter
```

This can be very confusing! Variables defined with `let` and `const` are scoped to the block they are defined in, whereas variables created with `var` are scoped to the function, or to the global scope. This is easy to overlook and can lead to bugs. As a result, it is a best practice to **always** use `let` and `const`.

### Prefer `let` for Re-assignable Variables

`let` variables are block-scoped variables. Their visibility is limited to the closest enclosing block, typically the closest enclosing braces `{}`. After leaving a block, any `let` variable names that were defined in that block become inaccessible. `let` variables are similar to local variables in other block-scoped programming language.

`let` variables are the second-most common variable we will use.

### We Prefer `const` for All Other Variables

It's entirely possible in JavaScript to initialize a variable with a numeric value, reassign the value by performing some calculations, then turn around and assign a string to that same variable.

Consider the following code.

<!-- prettier-ignore-start -->
```js
let aNumber = 15;  // holds a Number
aNumber = aNumber / 2;  // holds a different Number
aNumber = 'or am I?';  // now holds a String!!!
```

It's possible, but that doesn't mean we should do it!

Once we assign a value to a variable, it can be helpful to know the next time we see it, that the variable is referring to the same value. We don't want to worry that a stray typo caused us to assign a new value to the wrong variable.

Consider this version of the same code. This time we give a distinct name to each value we create.

<!-- prettier-ignore-start -->
```js
const aNumber = 15;  // holds a Number
const anotherNumber = aNumber / 2;  // holds a different Number in a different variable
const definitelyNotANumber = 'or am I?';  // no confusion here!
```
<!-- prettier-ignore-end -->

JavaScript helps us prevent re-assignment by providing the concept of constant variables.

Constants (`const` variables) cannot change their value through reassignment. If we try to re-assign constants, whether intentional or by accident, we'll run into a `TypeError`. Consider this code:

<!-- prettier-ignore-start -->
```js
const jingsFavGame = 'night in the woods';
jingsFavGame = 'butterfly soup'; // <- Raises a TypeError
```
<!-- prettier-ignore-end -->

Constants, like `let` variables, are also block-scoped.

`const` variables are the most common variable we will use! We can form good habits by starting every variable as `const`, and then refactoring to `let` only when we need to.

### Avoid `var`

`var` variables are non-block-scoped re-assignable variables. If defined outside of a function they are global. If defined within a function, they have scope throughout the entire function.

When it came to variables, `var` was the best we had in older versions of JavaScript. It may make sense to use `var` if we are working with an older version of the JavaScript interpreter. We may also see `var` when looking at old JavaScript resources. We should _not_ use `var` when writing new JavaScript code.

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: ordering
* id: cc598973
* title: Variables
##### !question

Arrange the following syntax.

Assume that each line would be indented correctly.

##### !end-question
##### !answer

1. `const`
1. `recordCount`
1. `=`
1. `613`
1. `;`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: ordering
* id: 52480b95
* title: Variables
##### !question

Arrange the following syntax.

Assume that each line would be indented correctly.

##### !end-question
##### !answer

1. `let`
1. `recordCount;`
1. `recordCount`
1. `=`
1. `875`
1. `;`

##### !end-answer
##### !explanation

`recordCount` is a `let` variable. Here, we declare `recordCount` in one line. Then, we assign it to `875`.

##### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: ordering
* id: 60796a14
* title: Variables
##### !question

Arrange the following syntax.

Assume that each line would be indented correctly.

The correct answer for the first line is `const initialCount = 613;`.

##### !end-question
##### !answer

1. `const initialCount = 613;`
1. `let`
1. `currentCount;`
1. `currentCount`
1. `=`
1. `initialCount + 1;`

##### !end-answer
##### !explanation

`initialCount` is a `const` variable, which cannot be re-assigned.

<br/>

`currentCount` is a `let` variable. Here, we declare `currentCount` in one line. Then, we assign it to `initialCount + 1`.

<br/>

The entire block of code looks like this when assembled:

```js
const initialCount = 613;
let currentCount;
currentCount = initialCount + 1;
```

##### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->
