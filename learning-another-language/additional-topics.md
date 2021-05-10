# Additional Topics

## Consider Over Time

The following are questions that we may have already about the JavaScript language.

With these specific topics, we should feel confident that we can look these up when we need to.

## General Syntax

What is the syntax for...

- Mathematical operations, such as addition, subtraction, and multiplication?
- Comparing values (less than, greater than, less than or equal to, greater than or equal to)

Other questions to consider:

- What is considered truthy?
- What is considered falsey?
- What does `null` mean?
- How do we do string interpolation?

### !callout-info

## Checking Equality in JavaScript

Checking for object equality in JavaScript is interesting. JavaScript has two equality comparators: `==` and `===`. They are similar to Python's own equality comparators, `==` and `is`. It's worth looking up!

### !end-callout

## Arrays (Lists)

In JavaScript, an ordered collection of values (elements) is called an array.

An array literal is made with square brackets `[]`, and each item is comma-separated.

```js
const myPlants = ['Succulent #1', 'Succulent #2', 'Succulent #3'];
```

What is the syntax for...

- Creating an array?
- Accessing an element from an array?
- Adding something to an array?
- Removing something from an array?

## Dependencies

These questions are best answered when we have more context.

- How do we manage dependencies?
    - Find them?
    - Learn about them?
    - Install them?
    - Use them?

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: checkbox
* id: 46c55181
* title: Additional Topics
##### !question

Mickey is writing some code. He needs this function to print out "Access Denied" if the user is not authorized.

```js
const loginUser = function(user, isAuthorized) {
    if (!isAuthorized) {
        console.log('Access Denied: User Not Authorized');
    }
}
```

What values can `isAuthorized` be in order to be considered falsey?

Do independent research. Check all the options below that are considered falsey values in JavaScript.

##### !end-question
##### !options

* `false`
* `0`
* `''` (Empty String)
* `[]` (Empty Array)
* `{}` (Empty Object)
* `null`
* `undefined`
* `NaN`

##### !end-options
##### !answer

* `false`
* `0`
* `''` (Empty String)
* `null`
* `undefined`
* `NaN`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->


<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 572afa53
* title: Additional Topics
##### !question

Mickey wants to use the user's name when printing a message.

Instead of "Access Denied: User Not Authorized," he wants to print "Access Denied: Mickey Not Authorized" if the user's name is "Mickey."

Assume that he can access the name using `user.name`.

Do independent research. Which of the following best describes the syntax Mickey needs for string interpolation?

##### !end-question
##### !options

* `'Access Denied: #{user.name} Not Authorized'`
* `'Access Denied: ${user.name} Not Authorized'`
* `'Access Denied: {user.name} Not Authorized'`
* `` `Access Denied: ${user.name} Not Authorized` ``

##### !end-options
##### !answer

* `` `Access Denied: ${user.name} Not Authorized` ``

##### !end-answer
##### !explanation

String interpolation must be done inside a string surrounded by backticks ``(`)`` (the character typically above the left tab key on the keyboard.) The expression to interpolate goes inside `${ }`.

##### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

