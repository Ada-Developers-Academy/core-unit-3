# Variables

## Vocabulary and Synonyms

| Vocab            | Definition                                                                                                                 | How to Use in a Sentence                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Declaring        | Stating a variable's name and the type of variable it is.                                                                  | "We need to declare the variable before we assign a value to it," "We only need to declare a variable once." |
| Assigning        | Creating a reference between a variable and an object.                                                                     | "I assigned the value `42` to the `let` variable named `jingsFavNum`."                                       |
| `let` variable   | A variable that is block-scoped and re-assignable.                                                                         |
| `const` variable | A constant variable. This variable is block-scoped and read-only. Constants are the type of variable we'll use most often. |

## Declare Variables, Then Assign (Then Maybe Re-Assign)

In JavaScript, there are two distinct steps when dealing with variables:

1. declaration
1. assignment

**Declaration** is the step of stating a variable's name and the type of variable it is.

Different variable types determine the variable's scope and re-assignment properties. Details are covered below!

This is an example of variable declaration:

```javascript
let myFavoriteGreeting;
```

**Assignment** is the step of assigning a value to the variable, using the assignment operator `=`. Re-assignment also uses the assignment operator.

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

## Types of Variables

All variables must be declared before we assign values to them.

Variables are declared as one of three types:

| Keyword | Definition                                                                                         |
| ------- | -------------------------------------------------------------------------------------------------- |
| `let`   | A block-scoped variable. Actively encouraged.                                                      |
| `const` | A block-scoped variable that is read-only. Reassignment raises a `TypeError`. Actively encouraged. |
| `var`   | A globally-scoped variable. Actively discouraged.                                                  |

Observe [variable declaration and assignment](https://replit.com/@adacore/Variable-Type-Demonstration#index.js) below:

<!-- prettier-ignore-start -->
```javascript
let jingsFavNum = 72;
const jingsFavGame = 'night in the woods';
var jingsFavColor = 'green';
```
<!-- prettier-ignore-end -->

### Prefer `let` for Re-assignable Variables

`let` variables are block-scoped variables, meaning that if they are declared in a function, they are local to that function. `let` variables are similar to local variables in other programming language.

`let` variables are the second-most common variable we will use.

### We Prefer `const` for All Other Variables

JavaScript programs tend to emphasize _mutating_ values over time. Therefore, since we expect to be re-assigning and changing a lot and frequently, it's important to know _what values **don't** change_.

Constants (`const` variables) cannot change their value through reassignment. When we re-assign constants, we'll run into a `TypeError`. Consider [this code](https://replit.com/@adacore/Variable-Type-Demonstration#index.js):

<!-- prettier-ignore-start -->
```js
const jingsFavGame = 'night in the woods';
jingsFavGame = 'butterfly soup'; // <- Raises a TypeError
```
<!-- prettier-ignore-end -->


Constants, like `let` variables, are also block-scoped.

`const` variables are the most common variable we will use! We can form good habits by starting every variable as `const`, and then refactoring to `let` when we need to.

### Avoid `var`

`var` variables are globally-scoped re-assignable variables. `var` was the best type of variable to declare in older versions of JavaScript. It may make sense to use `var` if we are working with an older version of the JavaScript interpreter. We may also see `var` when looking at old JavaScript resources.
