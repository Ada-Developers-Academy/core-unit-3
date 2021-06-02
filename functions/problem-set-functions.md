# Problem Set: Functions

## Directions

Complete all questions below.

## Practice

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: 5b1e614a
* title: Functions
* docker_directory_path: /custom-snippets/isOdd
##### !question

Complete the function `isOdd` using arrow function syntax.

`isOdd` should take in one number, `num`. It returns a Truthy value if `num` is an odd number. It returns a Falsy value if `num` is an even number.

| `num`   | Expected Return Value |
| ------- | --------------------- |
| `1`     | Truthy                |
| `3`     | Truthy                |
| `5`     | Truthy                |
| `999`   | Truthy                |
| `2`     | Falsy                 |
| `4`     | Falsy                 |
| `6`     | Falsy                 |
| `1000`  | Falsy                 |
| `-1`    | Truthy                |
| `-3`    | Truthy                |
| `-5`    | Truthy                |
| `-999`  | Truthy                |
| `-2`    | Falsy                 |
| `-4`    | Falsy                 |
| `-6`    | Falsy                 |
| `-1000` | Falsy                 |

##### !end-question
### !explanation

An example of a working implementation:

```js
const isOdd = (num) => {
    if (num % 2 == 0) {
        return false;
    } else {
        return true;
    };
};
```

Another example of a working implementation:

```js
const isOdd = (num) => {
    return num % 2;
};
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: a44b8bfc
* title: Functions
* docker_directory_path: /custom-snippets/isOdd
##### !question

For the fun of it, submit a solution to `isOdd` using an alternative syntax. Even if your original implementation is better, practice solving the same problem a different way!

Consider trying:

- Taking advantage of arrow function shortcut syntax
- Making the function smaller
- Making the function longer
- Writing the conditional logic differently

`isOdd` should take in one number, `num`. It returns a Truthy value if `num` is an odd number. It returns a Falsy value if `num` is an even number.

##### !end-question
### !explanation

An example of a working implementation:

```js
const isOdd = num => {
    return num % 2;
};
```

Another example of a working implementation:

```js
const isOdd = num => num % 2;
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: 0d7fc6c9
* title: Functions
* docker_directory_path: /custom-snippets/isOddNumber
##### !question

Implement the function `isOddNumber`.

`isOddNumber` should take in one number, `num`. It returns a Truthy value if `num` is an odd number. It returns a Falsy value if `num` is an even number.

If `num` is not a number, the function should return a Falsy value.

| `num`   | Expected Return Value |
| ------- | --------------------- |
| `1`     | Truthy                |
| `2`     | Falsy                 |
| `hello` | Falsy                 |
| `[]`    | Falsy                 |
| `{}`    | Falsy                 |

##### !end-question
### !explanation

- The result of `'hello' % 2` is `NaN`, which is falsy
- The result of `[] % 2` is `0`, which is falsy
- The result of `{} % 2` is `NaN`, which is falsy

<br/>

An example of a working implementation:

```js
const isOddNumber = num => {
    return num % 2;
};
```

Another example of a working implementation:

```js
const isOddNumber = num => num % 2;
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 4 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: d522a65a
* title: Functions
* docker_directory_path: /custom-snippets/giveGreetingChallenge
##### !question

Implement the following three functions:

- `giveCasualGreeting`
- `giveFormalGreeting`
- `writeLetter`

`giveCasualGreeting` takes in one parameter, `name`.

`name` | Expected Return Value
--- | ---
`'Miranda'` | `'Howdy, Miranda!'`
`'Jonathan'` | `'Howdy, Jonathan!'`

`givesFormalGreeting` takes in one parameter, `name`.

`name` | Expected Return Value
--- | ---
`'Miranda'` | `'Dear Mx. Miranda 🤵'`
`'Jonathan'` | `'Dear Mx. Jonathan 🤵'`

`writeLetter` takes in _two_ parameters:
1. `giveGreeting`, which is a reference to a function that accepts a single string parameter
1. `name`

| <div style="width:200px;">`giveGreeting`</div> | <div style="width:125px;">`name`</div> | Expected Return Value
--- | --- | ---
`giveCasualGreeting` | `'Miranda'` | `'Howdy, Miranda! I hope this letter finds you well.'`
`giveCasualGreeting` | `'Jonathan'` | `'Howdy, Jonathan! I hope this letter finds you well.'`
`giveFormalGreeting` | `'Miranda'` | `'Dear Mx. Miranda 🤵 I hope this letter finds you well.'`
`giveFormalGreeting` | `'Jonathan'` | `'Dear Mx. Jonathan 🤵 I hope this letter finds you well.'`

##### !end-question
### !hint

Inside the function `writeLetter`, `giveGreeting` is a function. We invoke this function with `giveGreeting()`. We can pass in a variable into `giveGreeting`:

```js
giveGreeting(myCoolVariableThatHoldsAValue);
```

### !end-hint
### !explanation

An example of a working implementation:

```js
const giveCasualGreeting = (name) => {
    return `Howdy, ${name}!`;
};

const giveFormalGreeting = (name) => {
    return `Dear Mx. ${name} 🤵`;
};

const writeLetter = (giveGreeting, name) => {
    return `${giveGreeting(name)} I hope this letter finds you well.`;
};
```

Another example of a working implementation:

```js
const giveCasualGreeting = name => `Howdy, ${name}!`;

const giveFormalGreeting = name => `Dear Mx. ${name} 🤵`;

const writeLetter = (giveGreeting, name) => `${giveGreeting(name)} I hope this letter finds you well.`;
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->
