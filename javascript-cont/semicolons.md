# Semicolons

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=14f2b362-da31-42b0-8043-ad40014eb7f1&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### !callout-info

## This video uses an online JavaScript REPL

The video will walk through the same FizzBuzz code in this lesson, however, in the video the instructor is walking through the code using an online REPL tool rather than VS Code, so you will see some differences between how you run the code locally and how the instructor will run the code in the online tool. 

### !end-callout

## Introduction: To Use or Not Use

In JavaScript, semicolons are used to mark the end of a statement:

```js
console.log('Do I need to put a semicolon at the end of this to work?');
```

Officially, JavaScript expects semicolons to end the following kinds of statements:

- variable assignment
- expressions (such as `1 + 2;`)
- do-while blocks
- `continue` statements
- `break` statements
- `return` statements
- `throw` statements (used to throw, or raise, errors)

Additionally, JavaScript expects semicolons at the end of variable declarations (covered later), `import`s, and `export`s.

However, if we take out the semicolon from our original line, our JavaScript code runs just fine!

```js
console.log('Do I need to put a semicolon at the end of this to work?')
```

Semicolons are optional. If semicolons are excluded, then JavaScript's Automatic Semicolon Insertion will... automatically insert semicolons into our code.

### !callout-info

## Developer Conversations in Real-Time

This is one of many topics that the developer community talks about all the time!

### !end-callout

## JavaScript's Automatic Semicolon Insertion

Automatic Semicolon Insertion (ASI) is a subsystem in JavaScript. It executes as the JavaScript runtime inspects our code, and it attempts to insert any missing semicolons.

For example, consider this code, which is missing expected semicolons:

```js
const favoriteGame = 'Night in the Woods'
const currentAge = 35 + 1
const shoeCollection = ['Fancy Windsor Shoes', 'TALL boots', 'The Chunkiest Sneakers']
```

ASI would automatically place the semicolons:

```js
const favoriteGame = 'Night in the Woods';
const currentAge = 35 + 1;
const shoeCollection = ['Fancy Windsor Shoes', 'TALL boots', 'The Chunkiest Sneakers'];
```

## A Case for the Semicolon: Clearly Prevent Bugs

The strongest case for always including semicolons in our code is because the ASI is sometimes _wrong_.

Feel free to clone down [the repository version(https://github.com/AdaGold/ASI-bug-example)] of the code we'll be looking at if you want to follow along locally.

Consider [the following code snippet](https://github.com/AdaGold/ASI-bug-example/blob/main/src/index.js). This example may not feel realistic, but hopefully illustrates the bug.

```js
let red
let blue = 20
let yellow

red = blue + 2
(yellow) = 42
```

This code _declares_ three `let` variables: `red`, `blue`, and `yellow`. Let's assume that we have a good reason why `yellow` should be in parentheses (which is valid in JavaScript).

This code raises `SyntaxError: Invalid left-hand side in assignment`. Why?

ASI will insert semicolons like so:

```js
let red;
let blue = 20;
let yellow;

red = blue + 2(yellow) = 42;
```

When we look at the variable assignments, ASI did _not_ correctly put a semicolon after `red = blue + 2`.

Now let's write this code with correct semicolon usage:

```js
let red;
let blue = 20;
let yellow;

red = blue + 2;
(yellow) = 42;
```

Our code runs as expected!

## A Case for No Semicolons: Style

Sometimes, semicolons are a visual distraction to our code, and takeaway from readability.

### !callout-info

## This Curriculum Prefers Semicolons

The text in this curriculum will use semicolons, in order to make our code clearer and less prone to bugs!

### !end-callout

## Stay Consistent and Understand ASI

The ultimate takeaway is to stay consistent in our code and conform to our team's code style. If we decide to not use semicolons, we should understand the risks that ASI presents.
