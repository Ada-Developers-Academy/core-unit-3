# FizzBuzz

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ad3fad3f-c5e3-482d-8021-ad4000f5e363&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### !callout-info

## This video uses an online JavaScript REPL

The video will walk through the same FizzBuzz code that is in the repo linked in this lesson. However, in the video the instructor is walking through the code using an online REPL tool rather than VS Code, so you will see some small differences between how you run the code locally and how the instructor has to run the code in the online tool. 

### !end-callout

## Introduction

When learning another language, implementing FizzBuzz is a great way to jump into it. This program allows us to explore how to:

- use variables
- use conditionals
- use equality-checking and comparison
- define functions
- use parameters
- use `return`
- call functions

The requirements of the FizzBuzz program are as follows:

Create a function named `fizzBuzz`. It takes in one parameter, `num`.

- If `num` is a multiple of 3, then return `'Fizz'`.
- If `num` is a multiple of 5, then return `'Buzz'`.
- If `num` is a multiple of 3 _and_ 5, then return `FizzBuzz`.
- If `num` is not a multiple of 3 or 5, then return the number itself.

## Set Up

We're going to practice creating our own FizzBuzz JavaScript project. Wherever you keep your code, create a folder named `FizzBuzz-JS`.

```bash
$ mkdir FizzBuzz-JS
```

To create a `package.json` file, `cd` into the project folder, then run `npm init`.

```bash
$ cd FizzBuzz-JS
$ npm init
```

Follow the prompts from `npm init` to create a `package.json`. 
- When the prompt `entry point:` comes up, we want to use the path `src/index.js`
- It's okay to leave most fields empty for this example since we do not have a repo URL and will not be implementing tests in this example.

Once our `package.json` file is generated we want to open the file and make a change to the scripts section. When we start out, the scripts section will likely look like:

```bash
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

We need to add a `"start"` entry to tell our project how to run our implementation file. Beneath the `"test"` key, add a new key-value pair using the key `"start"` and the value `"node src/index.js"`:

```bash
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node src/index.js"
}
```

Once we create our `src` folder and `index.js` file, we will be able to run our code with the command `npm start`. 

Let's create the `index.js` file so we have a place to put our code!  

```bash
mkdir src
touch src/index.js
```

We could follow prior examples to set up dependencies like ESLint, but for this example, there are no require dependencies we need to install.

At this point we can use `code .` to open our project in VS Code and implement FizzBuzz!

## Implementation

To implement FizzBuzz, we can write:

<!-- prettier-ignore-start -->
```js
const fizzBuzz = function(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
```
<!-- prettier-ignore-end -->

When we run our code, we should see this output:

```
1
Fizz
Buzz
FizzBuzz
```

### Variable Assignment and Function Definition

Let's dive into this fragment:

```js
const fizzBuzz = function(num) {
```

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `const fizzBuzz`                                    | This _declares_ a variable named `fizzBuzz`. This specific type of variable is a `const` variable. The variable's name is in camelCase. |
| `=`                                                 | This is the assignment operator. This will assign whatever value is on the right-side to the variable on the left side, `fizzBuzz`.     |
| `function`                                          | The keyword to begin the definition of a function expression                                                                                      |
| `(num)`                                             | This section defines the function parameters. This function has one parameter, named `num`.                                             |
| `{`                                                 | This opening curly brace (`{`) begins the function body.                                                                                |

## Conditionals, Comparisons, and Returns

Now, let's dive into this fragment of code inside the function body:

<!-- prettier-ignore-start -->
```js
if (num % 15 === 0) {
  return 'FizzBuzz';
} else if (num % 3 === 0) {
  return 'Fizz';
}
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                                 |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `if`                                                | The keyword to begin an if-statement.                                                                                                                                 |
| `(...)`                                             | We put the conditional expression in parentheses `()`. If the expression evaluates to `true`, then the if-statement will execute the block of code.                   |
| `num % 15 === 0`                                     | The conditional expression. It reads the parameter `num` and uses the mod operator `%`. It checks if `num % 15` is equal to `0` using equality comparison, with `===`. This checks whether a number is divisible by 15, or in other words, whether a number is divisible by both 3 and 5 (since 3 * 5 = 15). |
| `{`                                                 | We begin the block of code to execute with an open curly brace `{`. **Everything inside the code block is indented one level**. In JavaScript, the indentation has no semantic meaning, but it still helps us understand the code intent.                                      |
| `return 'FizzBuzz';`                                | A return statement. This returns the string literal `'FizzBuzz'`. The return statement ends in a semicolon `;`.                                                       |
| `}`                                                 | The block of code to execute for the if-statement ends with a closing curly brace `}`. **The end of this code block is indented to match the opening `if`**.          |
| `else if`                                           | This begins an else-if-statement. If the first conditional didn't return `true`, we will check if this next conditional will.                                         |
| `(...)`                                             | Identical to before, this holds the conditional expression to check.                                                                                                  |
| `num % 3 === 0`                                      | This conditional expression checks if `num` is divisible by `3`, as required by the problem statement.                                                               |
| `{`                                                 | We open another block of code, which executes if _this_ conditional was `true`. Again, note that **everything inside the code block is indented one level**.          |
| `return 'Fizz';`                                    | We return `'Fizz'` if `num` is divisible by `3`. This ends in a semicolon.                                                                                            |
| `}`                                                 | This ends our else-if-statement. Again, **the indentation of this `}` matches the opening `else-if`**.                                                                |

At the end of this section, we should feel some comfort when reading:

- if, else-if, and else statements
- conditional expressions
- return statements

## Observe and Apply Patterns

Instead of going through the rest of the syntax chunk-by-chunk, let's pattern-match!

The rest of the function:

1. Checks if `num` is divisible by five
1. If it is, it will return `'Buzz'`
1. Else, it will return `num`

### End of the Function

It's good to note that the function ended with a closing curly brace (`}`).

The indentation of this curly brace matches the indentation-level of the line that _began_ the function definition.

### Invoking More Functions

Now, let's dive into the series of print statements after the function.

<!-- prettier-ignore-start -->
```js
console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                                                                     |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `console.log(...)`                                  | This invokes the function that prints output to the console. More specifically, it invokes the `log` function that is part of the `console` object. _It prints the value that is the passed-in argument_. |
| `fizzBuzz(1)`                                       | This invokes the function `fizzBuzz` with the argument `1`. From the problem statement, we can expect it to return the number `1`.                                                                                                    |
| `;`                                                 | The `console.log()` statement ends in a semicolon.                                                                                                                                                        |
| `console.log(...);`                                 | Again, this function call will print out whatever value is passed into it.                                                                                                                                |
| `fizzBuzz(3)`                                       | This invokes the function `fizzBuzz`, passing in `3`. Its eventual return value is `'Fizz'`.                                                                                                              |

With this section, we should feel a little more confident reading when functions are being invoked.

## Observe and Apply Patterns

We saw how we printed the result of calling `fizzBuzz` twice. We can apply those learnings to the remaining lines:

```js
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
```

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: a06614f2
* title: FizzBuzz
##### !question

Consider the FizzBuzz implementation again:

```js
const fizzBuzz = function(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}
```

True or False: The variable `fizzBuzz` has a value. Its value is a function.

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
* id: bf778db4
* title: FizzBuzz
##### !question

True or False: The function body is in the parentheses after the keyword `function`.

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* False

##### !end-answer
##### !explanation

The parameter list is in parentheses `()` after the keyword `function`.

The function body is in curly braces `{}` after the parameter list.

##### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 23caf02f
* title: FizzBuzz
##### !question

True or False: All the contents of a function body, if, else if, and else statements are indented once. The indentation of the function's closing curly brace `}` is also indented once.

##### !end-question
##### !options

* True
* False

##### !end-options
##### !answer

* False

##### !end-answer
##### !explanation

The indentation of the function's closing curly brace is **_not_** indented once.

##### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->
