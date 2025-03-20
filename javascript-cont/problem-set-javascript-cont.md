# Problem Set: JavaScript, Cont.

## Directions

Complete all questions below.

## Practice

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: 3357aa77
* title: JavaScript, Cont.
##### !question

Create a function named `addFive`. It has one parameter, `num`. The function should add `5` to `num`, and return the sum.

| Example arguments | Example return value |
| ----------------- | -------------------- |
| `22`              | `27`                 |
| `0`               | `5`                  |

##### !end-question
##### !placeholder

```js
const addFive = function(num) {
    
}
```

##### !end-placeholder
##### !tests

```js
describe('addFive', function() {

  it('adds five to the argument', function() {
    expect(addFive(22)).to.deep.eq(27);
    expect(addFive(0)).to.deep.eq(5);
  })
})
```

##### !end-tests
### !explanation

An example of a working implementation:

```js
const addFive = function(num) {
    return num + 5;
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: 8d4e1172
* title: JavaScript, Cont.
##### !question

Create a function named `doubleAndAddTwo`. It has one parameter, `num`. The function should add `num` + `num` + `2`, and return the sum.

| Example arguments | Example return value |
| ----------------- | -------------------- |
| `50`              | `102`                |
| `0`               | `2`                  |

##### !end-question
##### !placeholder

```js
const doubleAndAddTwo = function(num) {
    
}
```

##### !end-placeholder
##### !tests
```js
describe('doubleAndAddTwo', function() {

  it('doubles and adds two to num', function() {
    expect(doubleAndAddTwo(50)).to.deep.eq(102);
    expect(doubleAndAddTwo(0)).to.deep.eq(2);
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const doubleAndAddTwo = function(num) {
    const sum = num + num + 2;
    return sum;
}
```

Another example of a working implementation:

```js
const doubleAndAddTwo = function(num) {
    return (num * 2) + 2;
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->


<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: f4f46b4e
* title: JavaScript, Cont.
##### !question

Following the current pattern in the code below, modify the function so that invoking `getExampleSentence('they/them')` returns `'They went to the park. I went with them. They brought their frisbee.'`, and doesn't alter the rest of the functionality.

##### !end-question
##### !placeholder

```js
const getExampleSentence = function(pronouns) {
    if (pronouns === 'she/her'){
        return 'She went to the park. I went with her. She brought her frisbee.';
    } else if (pronouns === 'he/him'){
        return 'He went to the park. I went with him. He brought his frisbee.';
    } else if (pronouns === 'ze/hir'){
        return 'Ze went to the park. I went with hir. Ze brought hir frisbee.';
    } else {
        return 'I\'m not quite sure how to use these pronouns, it\'s best to ask and confirm!';
    }
}
```

##### !end-placeholder
##### !tests
```js
describe('getExampleSentence', function() {

  it('creates an example sentence based on the pronouns', function() {
    expect(getExampleSentence('she/her')).to.deep.eq('She went to the park. I went with her. She brought her frisbee.');
    expect(getExampleSentence('he/him')).to.deep.eq('He went to the park. I went with him. He brought his frisbee.');
    expect(getExampleSentence('ze/hir')).to.deep.eq('Ze went to the park. I went with hir. Ze brought hir frisbee.');
    expect(getExampleSentence('they/them')).to.deep.eq('They went to the park. I went with them. They brought their frisbee.');
    expect(getExampleSentence('other')).to.deep.eq('I\'m not quite sure how to use these pronouns, it\'s best to ask and confirm!');
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const getExampleSentence = function(pronouns) {
    if (pronouns === 'she/her'){
        return 'She went to the park. I went with her. She brought her frisbee.';
    } else if (pronouns === 'he/him'){
        return 'He went to the park. I went with him. He brought his frisbee.';
    } else if (pronouns === 'ze/hir'){
        return 'Ze went to the park. I went with hir. Ze brought hir frisbee.';
    } else if (pronouns === 'they/them'){
        return 'They went to the park. I went with them. They brought their frisbee.';
    } else {
        return 'I\'m not quite sure how to use these pronouns, it\'s best to ask and confirm!';
    }
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->



<!-- Question 4 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: 3caa2527
* title: JavaScript, Cont.
##### !question

Create a function named `getThirdPlace`. It has one parameter, `finalists`. Assuming that the first item in `finalists` is first place and the second item in `finalists` is second place, return the finalist in third place.

| Example arguments                                   | Example return value |
| --------------------------------------------------- | -------------------- |
| `["Pikachu", "Bulbasaur", "Squirtle", "Charizard"]` | `"Squirtle"`         |
| `["Bulbasaur", "Squirtle", "Charizard"]`            | `"Charizard"`        |

##### !end-question
##### !placeholder

```js
const getThirdPlace = function(finalists) {
    
}
```

##### !end-placeholder
##### !tests
```js
describe('getThirdPlace', function() {

  it('gets third place, depending on order', function() {
    expect(getThirdPlace(["Pikachu", "Bulbasaur", "Squirtle", "Charizard"])).to.deep.eq("Squirtle");
    expect(getThirdPlace(["Bulbasaur", "Squirtle", "Charizard"])).to.deep.eq("Charizard");
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const getThirdPlace = function(finalists) {
    return finalists[2];
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 5 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: 1646431a
* title: JavaScript, Cont.
##### !question

Create a function named `getThirdPlace`. It has one parameter, `finalists`. If there are at least three finalists, return the finalist in third place. If there aren't at least three finalists, return `null`.

| Example arguments                                   | Example return value |
| --------------------------------------------------- | -------------------- |
| `["Pikachu", "Bulbasaur", "Squirtle", "Charizard"]` | `"Squirtle"`         |
| `["Squirtle", "Charizard"]`                         | `null`               |
| `[]`                                                | `null`               |

##### !end-question
##### !tests
```js
describe('getThirdPlace', function() {

  it('gets third place, depending on order', function() {
    expect(getThirdPlace(["Pikachu", "Bulbasaur", "Squirtle", "Charizard"])).to.deep.eq("Squirtle");
    expect(getThirdPlace(["Squirtle", "Charizard"])).to.be.null;
    expect(getThirdPlace([])).to.be.null;
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const getThirdPlace = function(finalists) {
    if (finalists.length < 3) {
        return null;
    } else {
        return finalists[2];
    }
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 6 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: a2de94b0
* title: JavaScript, Cont.
##### !question

Create a function named `compareVotes`. It has two parameters, `candidateA` and `candidateB`. Both `candidateA` and `candidateB` will be objects that look like this:

```js
{
    name: 'Mx. Candidate Name',
    votes: 5
}
```

Compare the votes inside `candidateA` and `candidateB`. Find the candidate with more votes, and return their name.

| Example `candidateA`             | Example `candidateB`               | Example return value |
| -------------------------------- | ---------------------------------- | -------------------- |
| `{ name: 'Pikachu', votes: 25 }` | `{ name: 'Bulbasaur', votes: 24 }` | `'Pikachu'`          |
| `{ name: 'Pikachu', votes: 0 }`  | `{ name: 'Bulbasaur', votes: 1 }`  | `'Bulbasaur'`        |

##### !end-question
##### !tests
```js
describe('compareVotes', function() {

  it('returns candidate name with more votes', function() {
    expect(compareVotes({ name: 'Pikachu', votes: 25 }, { name: 'Bulbasaur', votes: 24 })).to.deep.eq('Pikachu');
    expect(compareVotes({ name: 'Pikachu', votes: 0 }, { name: 'Bulbasaur', votes: 1 })).to.deep.eq('Bulbasaur');
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const compareVotes = function(candidateA, candidateB) {
    if (candidateA.votes > candidateB.votes){
        return candidateA.name;
    } else {
        return candidateB.name;
    }
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 7 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: a7339c5b
* title: JavaScript, Cont.
##### !question

Create a function named `compareIds`. It has two parameters, `candidateA` and `candidateB`. Both `candidateA` and `candidateB` will be objects that look like this:

```js
{
    id: 5,
    name: 'Mx. Candidate Name'
}
```

Compare the IDs inside `candidateA` and `candidateB`. Find the candidate that has an ID with a smaller numerical value, and return the candidate object itself.

| Example `candidateA`          | Example `candidateB`           | Example return value          |
| ----------------------------- | ------------------------------ | ----------------------------- |
| `{ id: 25, name: 'Pikachu'}` | `{ id: 1, name: 'Bulbasaur'}`  | `{ id: 1, name: 'Bulbasaur'}` |
| `{ id: 25, name: 'Pikachu'}` | `{ id: 26, name: 'Bulbasaur'}` | `{ id: 25, name: 'Pikachu'}` |

##### !end-question
##### !tests
```js
describe('compareIds', function() {

  it('returns candidate object with smaller ID', function() {
    expect(compareIds({ id: 25, name: 'Pikachu'}, { id: 1, name: 'Bulbasaur'})).to.deep.eq({ id: 1, name: 'Bulbasaur'});
    expect(compareIds({ id: 25, name: 'Pikachu'}, { id: 26, name: 'Bulbasaur'})).to.deep.eq({ id: 25, name: 'Pikachu'});
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const compareIds = function(candidateA, candidateB) {
    if (candidateA.id < candidateB.id){
        return candidateA;
    } else {
        return candidateB;
    }
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->


<!-- Question 8 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: 7db0cd35
* title: JavaScript, Cont.
##### !question

Create a function named `compareAlphabetically`. It has two parameters, `wordA` and `wordB`, which will be strings. Compare `wordA` and `wordB` and determine which one comes first alphabetically. Follow these rules:

- Assume all characters in both words use the English alphabet
- Order uppercase letters before lowercase letters

Return `wordA` if `wordA` comes first alphabetically. Return `wordB` if `wordB` comes first. Return either `wordA` or `wordB` if they are identical strings.

| Example `wordA` | Example `wordB` | Example return value |
| ---------------- | ---------------- | -------------------- |
| `'Pikachu'`      | `'Bulbasaur'`    | `'Bulbasaur'`        |
| `'Bulbasaur'`    | `'Pikachu'`      | `'Bulbasaur'`        |
| `'Pikachu'`      | `'Pikachu'`      | `'Pikachu'`          |
| `'Pikachu'`      | `'pikachu'`      | `'Pikachu'`          |

##### !end-question
##### !tests
```js
describe('compareAlphabetically', function() {

  it('returns the word that comes first alphabetically', function() {
    expect(compareAlphabetically('Pikachu', 'Bulbasaur')).to.deep.eq('Bulbasaur');
    expect(compareAlphabetically('Bulbasaur', 'Pikachu')).to.deep.eq('Bulbasaur');
    expect(compareAlphabetically('Pikachu', 'Pikachu')).to.deep.eq('Pikachu');
    expect(compareAlphabetically('Pikachu', 'pikachu')).to.deep.eq('Pikachu');
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const compareAlphabetically = function(wordA, wordB) {
    if (wordA < wordB){
        return wordA;
    } else {
        return wordB;
    }
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 9 -->
<!-- prettier-ignore-start -->
### !challenge
* type: code-snippet
* language: javascript
* id: d8cc50e2
* title: JavaScript, Cont.
##### !question

Create a function named `compareValues`. It has two parameters, `a` and `b`, which will be numbers. Compare `a` against `b`. If `a` is less than `b`, return `-1`. If `a` is equal to `b`, return `0`. If `a` is greater than `b`, return `1`.

| Example `a` | Example `b` | Example return value |
| ----------- | ----------- | -------------------- |
| `999`       | `-999`      | `1`                  |
| `-5`        | `-5`        | `0`                  |
| `80.5`      | `80.6`      | `-1`                 |

##### !end-question
##### !tests
```js
describe('compareValues', function() {

  it('returns 1, 0, or -1 depending on the comparison', function() {
    expect(compareValues(999, -999)).to.deep.eq(1);
    expect(compareValues(-5, -5)).to.deep.eq(0);
    expect(compareValues(80.5, 80.6)).to.deep.eq(-1);
  })
})
```
##### !end-tests
### !explanation

An example of a working implementation:

```js
const compareValues = function(a, b) {
    if (a < b){
        return -1;
    } else if (a === b){
        return 0;
    } else {
        return 1;
    }
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->
