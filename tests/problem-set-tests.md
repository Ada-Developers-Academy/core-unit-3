# Problem Set: Tests

## Directions

Complete all questions below.

## Practice

<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: efe7571a
* title: Tests
* docker_directory_path: /custom-snippets/mystery
##### !question

Implement the function `mystery`, which takes in one parameter, `text`.

Without knowing what the responsibility of `mystery` is, read these tests and implement the function.

```js
describe('mystery', () => {

  test('mystery is defined', () => {
    expect(mystery).toBeDefined();
  });

  test('returns true when entire english alphabet is present in lowercase', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = mystery(alphabet);
    expect(result).toBeTruthy();
  });

  test('returns false when one letter from the alphabet is missing', () => {
    const alphabetWithMissingX = 'abcdefghijklmnopqrstuvwyz';
    const result = mystery(alphabetWithMissingX);
    expect(result).toBeFalsy();
  });

  test('returns true when all letters of the alphabet are present, even with spaces and repetition', () => {
    const text = 'the quick brown fox jumps over the lazy dog';
    const result = mystery(text);
    expect(result).toBeTruthy();
  });

  test('returns false with empty input string', () => {
    expect(mystery('')).toBeFalsy();
  });

  test('returns true when all letters of the alphabet are present, even with symbols and numbers', () => {
    const text = 'the 1 /quick brown fox/ jumps over the _lazy dog_!';
    expect(mystery(text)).toBeTruthy();
  });
});
```

There are multiple hints to this challenge, feel free to utilize them!

##### !end-question
##### !placeholder
```js
const mystery = (text) => {

};
```
##### !end-placeholder
##### !hint

Copy and paste the tests into a file so you can look at these tests side-by-side.

##### !end-hint
##### !hint

There are many ways to implement `mystery`. Some implementations use one or more of these:

- `forEach` loops
- Using an object to map a key to a boolean (like a hash table)
- Using regular expressions
- `for ... of` loops

Note: You cannot use `return` to exit a `forEach` loop. If you need to break out of a `forEach` loop, try refactoring to a `for ... of` loop.

##### !end-hint
##### !hint

The responsibility of the function `mystery` is to return whether the input `text` is a [pangram](https://en.wikipedia.org/wiki/Pangram).

##### !end-hint
##### !explanation

An example of a working implementation:

```js
const mystery = (text) => {
  const requiredLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const letterPresenceMap = {};

  requiredLetters.forEach((letter) => {
    letterPresenceMap[letter] = false;
  });

  text.split('').forEach((character) => {
    letterPresenceMap[character] = true;
  });

  for (const letter of requiredLetters) {
    if (!letterPresenceMap[letter]) {
      return false;
    }
  }

  return true;
};
```

##### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

## Optional Additional Practice

For additional practice writing javascript and reading jest tests, you may complete an **optional** promblem set, _Tool Library_.
- [Tool Library - Wave 01](../tool-library/problem-set-tool-library.md): Javascript functions, loops, and nested data structures.
- [Tool Library - Wave 02](../tool-library/problem-set-tool-library-wave-2.md): Javascript classes.

