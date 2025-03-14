# Hello, World!

<!-- REPLIT-REMOVAL-UPDATE  -->
<!-- <iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=1273d731-b286-4a6e-9b0c-ad4000f5c3d3&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe> -->

## Introduction

A well-known exercise to accomplish when learning another programming language is "Hello, World!" We'll know we're successful if we see the text `Hello, World!` appear somewhere after running the code.

![A picture of Grumpy Cat with the text "Hello World" over it](../assets/learning-a-new-language_hello-world_grumpy-cat-hello-world.jpg)  
_Fig. Grumpy Cat sharing a "Hello World"_

## Running the Example Code

To run JavaScript code, we need to consider its _runtime environment_. A **runtime environment** is a set of technologies that determine _how_ to execute the code.

Some examples of runtime environments that can run JavaScript:

- The runtime environment of a web browser like Mozilla Firefox and Google Chrome
- [Node.js](https://nodejs.org/en/)
- Online language shells called Read-Eval-Print Loops (REPLs) like [replit.com](https://replit.com/)

Our VS Code environment should be set up from a previous lesson, so we'll continue to practice writing and running code locally to get used to that development flow. 

To kick off our JavaScript journey, we'll take a look at an example repo containing a Hello World application.

Let's Fork [this project](https://github.com/AdaGold/hello-world-js) and see what that lets us do!

If we check out the README, we can see a refresher on our steps to run the code. Once we fork and clone the repo we need to:
1. run `npm install` or `npm i` to install dependencies.
2. Open up src/index.js to see the "Hello World" code.
3. Use npm start to run the src/index.js file.

## Implementation

To print `Hello, World!` in JavaScript, [we can write](https://github.com/AdaGold/hello-world-js/blob/main/src/index.js):

<!-- prettier-ignore-start -->
```js
console.log('Hello, World!');
```
<!-- prettier-ignore-end -->

When we run our code, we should see `Hello, World!` in the console.

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `console`                                           | A variable. The word "console" usually refers to the Terminal, command line, or wherever output logs get printed. |
| `console.log( ... )`                                | A function call that takes in some arguments.                                                                    |
| `'Hello, World!'`                                   | A string literal. This string is surrounded by single-quotes (`'`).                                               |
| `;`                                                 | A semicolon.                                                                                                      |

Let's debrief in slightly more detail.

### The Console

`console` seems a little random here. It's lowercase, like Python variables, but there seems to be no variable assignment. We don't see any `import`s or anything like that, so where did `console` come from?

`console` is a variable that references a specific object: the console! This console object gives us access to wherever the program prints out output.

Since we were able to use it without any setup, we might guess that `console` is in scope in our JavaScript file by default.

At this moment, at the beginning of our JavaScript journey, we won't go deeper into this, but feel free to check out [`console`'s documentation](https://developer.mozilla.org/en-US/docs/Web/API/console) if you're interested!

### Calling a Function

`console.log()` is calling a function. We might not know all the details about this function, but we're pretty sure that it's responsible for logging (printing) objects to the console.

We may make guesses that:

1. The function being called here is named `log`
1. The function `log` is a method of `console` (hence the dot-operator to access it)
1. We use the dot-operator to access members of objects
1. The parens `()` are how we call and invoke the function

### Single Quotes for Strings

The string literal `'Hello, World!'` is surrounded by single-quotes, instead of double-quotes.

If we experiment and replace it with double-quotes...

<!-- prettier-ignore-start -->
```js
console.log("Hello, World!");
```
<!-- prettier-ignore-end -->

...we'll see that the rules set up for ESLint will underline it as an error, but our code still runs as expected! In JavaScript, we are allowed to create string literals with either syntax.

### !callout-info

## This Curriculum Will Prefer Single-Quotes

The text in this curriculum will prefer single-quotes. In the grand scheme of things, the most important thing is consistency within a team.

### !end-callout

### Ends With a Semicolon

This line of code ends with a semicolon (`;`).

In JavaScript, semicolons are used to conclude statements.

### !callout-info

## Statements

In programming, a statement is a unit of code that contains an action to execute. We use statements mainly in the forms of expressions that update values, or control statements that affect the flow of the program. The following are examples of statements:

- `foo = 'A value for foo';`
- `return foo;`
- `if` statements

### !end-callout

Many modern JavaScript flavors, standards, and teams are beginning to prefer _excluding_ semicolons, relying on "Automatic Semicolon Insertion." But there are still many teams who prefer to _include_ semicolons due to the sometimes surprising effects of Automatic Semicolon Insertion.

We can get deeper into JavaScript's semicolon and Automatic Semicolon Insertion later!

### !callout-info

## This Curriculum Will Use Semicolons

The text in this curriculum will prefer to include semicolons at the end of every statement. As with single quotes, in the grand scheme of things, the most important thing is consistency within a team.

### !end-callout

![A person with glowing fingers and an excited expression with the text "When you just learned how to "Hello World!" in a new language"](../assets/learning-a-new-language_hello-world_new-language-meme.jpg)
_Fig. Final step: celebrate your success!_

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 2dc59ebe
* title: Hello, World!
##### !question

True or False: JavaScript can be run in a web browser, in Terminal locally using Node.js, as well as in online JavaScript REPLs.

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* True

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 05776350
* title: Hello, World!
##### !question

True or False: We must import `console` before we use it.

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* False

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 3332d0a3
* title: Hello, World!
##### !question

True or False: The name of the function we called is `console.log`

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* False

##### !end-answer
##### !explanation

The name of the function we called is `log`. We accessed it through the `console` object.

##### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 4 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 067fa65a
* title: Hello, World!
##### !question

True or False: We used parens `()` to invoke the function `log`.

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* True

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 5 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 03e1a54e
* title: Hello, World!
##### !question

True or False: We can use single-quotes or double-quotes to create string literals.

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* True

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 6 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: a704ffc1
* title: Hello, World!
##### !question

True or False: Semicolons are used to conclude statements.

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* True

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
