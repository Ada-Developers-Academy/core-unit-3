# Test Syntax Detail

We've read through some Jest tests, run them, and maybe even made them pass!

These steps make it easier for us to take a step back, and formally consider the syntax.

## `describe` Blocks

Describe blocks are responsible for grouping and organizing similar unit tests.

Describe blocks often group tests by a common object they're testing, or a common function they're testing.

Describe blocks:

- Can contain unit tests (details below), other describe blocks, and helper functions.
- Are optional! A test suite doesn't require a `describe` block to exist.

Let's dive into `describe` blocks in detail.

<!-- prettier-ignore-start -->
```js
describe('fizzBuzz', () => {
    // Placeholder Content
});
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                                         |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `describe(...);`                                    | A describe block begins with the Jest function `describe`. This function takes in two arguments: a name for this describe block, and a function that contains our unit tests. |
| `'fizzBuzz'`                                        | **Replace this** with any string that describes how all the contained tests are related. In this situation, we're using the name of our function, `fizzBuzz`.                 |
| `() => { ... }`                                     | The second parameter of `describe` is a function. This function will contain the unit tests.                                                                                  |

## `test` Blocks

<!-- prettier-ignore-start -->
```js
describe('fizzBuzz', () => {
  test('returns Buzz on multiples of 5', () => {
    expect(fizzBuzz(25)).toEqual('Buzz');
  });
});
```
<!-- prettier-ignore-end -->

`test` blocks define one distinct test.

The first argument to `test` is a description string. This string should describe the specific scenario that we're targeting and testing.

The second argument is a function that ultimately contains the assertion lines.

## `expect` and Matchers

In order to define the conditions under which a test passes or fails, we combine an `expect` call and a matcher.

<!-- prettier-ignore-start -->
```js
expect(someReceivedValue).toEqual(someExpectedValue);
```
<!-- prettier-ignore-end -->

The value that we pass into `expect` is the value we receive from our targeted function. We can call this the _actual_ value or the _received_ value.

The value that we pass into `toEqual` is the value we expect, if our code is correct!

### Matchers

The Jest library provides more _matchers_.

[Jest matchers](https://jestjs.io/docs/expect) are methods that describe how our _received_ value relates to our _expected_ value.

`toEqual(expected)` is a matcher that says that the received value should _equal_ the expected value.

Here are some example matchers and their descriptions. To learn about them all in detail, we should visit the [Jest documentation](https://jestjs.io/docs/expect).

| <div style="min-width:300px;"> Matcher </div> | Description                                                                                                                          |
| :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `expect(x).toEqual(y);`                       | Compares objects `x` and `y` and passes if they are equivalent                                                                       |
| `expect(x).toBeNull();`                       | Passes if `x` is null                                                                                                                |
| `expect(x).toBeTruthy();`                     | Passes if `x` evaluates to true                                                                                                      |
| `expect(x).toBeFalsy();`                      | Passes if `x` evaluates to false                                                                                                     |
| `expect(x).toContain(y);`                     | Passes if the array or string `x` contains `y`                                                                                       |
| `expect(x).toBeDefined();`                    | Passes if `x` is **not** undefined                                                                                                   |
| `expect(x).toBeLessThan(y);`                  | Passes if `x` is less than `y`                                                                                                       |
| `expect(x).toBeGreaterThan(y);`               | Passes if `x` is greater than `y`                                                                                                    |
| `expect(x).toBe(y);`                          | Compares objects `x` and `y` and passes if they are the same object, do **not** use this to test two objects or arrays for equality. |
| `expect(x).toMatch(pattern);`                 | Compares `x` to the string or regular expression in `pattern` and passes if they match                                                        |
| `expect(fn).toThrow(e);`                      | Passes if a function, `fn`, throws exception `e` when executed                                                                       |

Often, more than one matcher is appropriate for our test.

We decide which matcher to use based on what we're testing, and how we want to express it.

## Jest Resources

Ultimately, to get deeper into Jest syntax, we should dive into the documentation and other tutorials!

- [Jest's main website](https://jestjs.io/)
- [Jest's introduction to matchers](https://jestjs.io/docs/using-matchers)

Some Jest resources will be centered around the context that the tests are in. For example, Jest tests in Replit.com will be configured differently compared to Jest tests in React.

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: ordering
* id: 8f266959
* title: Test Syntax Detail
##### !question

Imagine a function named `convertToFahrenheit`, which takes in a temperature in Celsius. It's responsible for converting the input to Fahrenheit.

Arrange the following syntax to test this behavior.

Assume that each line would be indented correctly.

##### !end-question
##### !answer

1. `describe(`
1. `'convertToFahrenheit', () => {`
1. `test(`
1. `'converts 0 deg Celsius', () => {`
1. `expect(`
1. `convertToFahrenheit(0)`
1. `).toEqual(32);`
1. `}); });`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: 527a2552
* title: Test Syntax Detail
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
