# Working with Objects

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=451968fb-cee3-408a-b3c8-ade2000e6320&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=true&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### !callout-info

## This video uses an online JavaScript REPL

The video will walk through code similar to what is shown in this lesson, however, not all examples exactly match what is in the lesson. In this course, the style and content of the code examples in this lesson are preferred over the examples shown in the video. Additionally, in the video the instructor is walking through the code using an online REPL tool rather than VS Code. You will see some differences between how you run the code locally and how the instructor will run the code in the online tool. 

### !end-callout

## Goals

In JavaScript we will work with objects regularly. We will take a look at strategies for accessing values of Objects and creating Objects that can help make our code a little cleaner and use the language to our best benefit. This lesson will explore examples and syntax for:
- Destructuring Objects to access their properties and values
- Creating JavaScript Objects using Object Shorthand Notation
- Creating property names for Objects at run time using Computed Properties

## Destructuring Objects

At times we will want to work _directly_ with specific key-value pairs within a larger object.  

Let's look at the example below:

```javascript
const isUserAuthorized = function(user) {
  const id = user.id;
  const fullName = user.fullName;
  const authorized = user.authorized;
  
  if (authorized) {
    console.log(`${id}: ${fullName} is authorized`);
  } else {
    console.log(`${id}: ${fullName} is not authorized`);
  }
};
```

However, it can be time consuming to individually take elements from one object, like `user.id` in the example above, and store them in local variables.  We _could_ repeatedly type `user.id` and `user.fullName` and `user.authorized` when we need to access them instead, but this is time consuming as well. 

Thankfully, JavaScript has a shorthand notation for this known as **destructuring**.

Feel free to clone down [the repository version](https://github.com/AdaGold/destructuring-objects-js) of the code we'll be looking at if you want to follow along locally!

### How To Destructure

If we want to take specific key-value pairs from a given object, we can use the following style of notation.

```javascript
const user = {
  id: 1,
  fullName: 'Siobhan Thacker',
  authorized: true,
  group: 'admin',
};

const { id, fullName, authorized } = user;
```

By enclosing  `id`, `fullName` and `authorized` in curly braces, we can specify which key-value pairs we want to take from the object.  The values of `id`, `fullName` and `authorized` will now be assigned to the local variables `id`, `fullName` and `authorized` respectively.

This makes it easier to use specific attributes of an object without having to write the full `user.id` and `user.fullName` each time.

We can even destructure an object when passed as an argument into a function.

```javascript
const isUserAuthorized = function({ id, fullName, authorized }) {
    if (authorized) {
        console.log(`${fullName} is authorized.`);
    } else {
        console.log(`${fullName} is not authorized.`);
    }    
};

const user = {
    id: 1,
    fullName: 'Siobhan Thacker',
    authorized: true,
    group: 'admin',
};

isUserAuthorized(user); // Siobhan Thacker is authorized.

const unAuthorizedUser = {
    id: 2,
    fullName: 'Chantay Jarrell',
    authorized: false,
    group: 'guest',
};

isUserAuthorized(unAuthorizedUser); // Chantay Jarrell is not authorized.
```

In the above example `user` and `unAuthorizedUser` are passed into the function as arguments. The function will take the user object's `id`, `fullName` and `authorized` fields and assign them to the local variables `id`, `fullName` and `authorized`, very much like the prior example.

### Destructuring Arrays

We can apply similar destructuring to arrays as well.

```javascript
const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

const [firstDog, secondDog, ...otherDogs] = dogs;

console.log(firstDog); // Fido
console.log(secondDog); // Buddy
console.log(otherDogs); // ['Snoopy', 'Sparky']
```

This syntax lets us take specific elements from an array and assign them to local variables similar to object destructuring.  We can also use the `...` syntax to take all remaining elements from an array and assign them to another local variable.

We can also use array destructuring to only take the first element from an array.

```javascript
const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

const [firstDog] = dogs;

console.log(firstDog); // Fido
```

And we can use the syntax to create a new array of all the elements from an array except the first one.

```javascript
const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

const [, ...otherDogs] = dogs;

console.log(otherDogs); // ['Buddy', 'Snoopy', 'Sparky']
```

One last trick we'll cover is how we can use destructuring syntax to swap variable's values. Let's say we have a couple variables `x` and `y`. Without destructuring, swapping their values might look something like:

```javascript
let x = 'first';
let y = 'second';

const tmp = x;
x = y;
y = tmp;

console.log(x); // second
console.log(y); // first
```

We can trade the `x` and `y` values without the `tmp` variable using destructuring with the following code:

```javascript
let x = 'first';
let y = 'second';

[x, y] = [y, x];

console.log(x); // second
console.log(y); // first
```

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-info

### Why Is This Useful?

Destructuring is useful for a couple of reasons.  

1.  It reduces the amount of typing needed (carpal tunnel is an issue).
1.  Destructuring is widely used in examples with common libraries... like React.  We will make extensive use of destructuring later in the curriculum.

### !end-callout

## Object Shorthand Notation

Object shorthand is a piece of "syntactic sugar" where, whenever we have a variable with the same name as a property we want to create on an object, we can omit the property name when constructing the object. This allows us to write slightly shorter code, with less repetition.

Let's say that we are building a collection of trading cards, and we have information in variables about each card such as the card name, the card's ID number, and the name of the release it is from like so:
```js
const name = 'Agumon'
const id = 'ST1-03'
const releaseSet = 'Digi-Battle Card Game Starter Set'
```

We want to create an Object to collect this information and make the data easy to pass around and manipulate. One option would be to manually write out the keys ourselves:
```js
const agumon = {
    'name': name,
    'id': id,
    'releaseSet': releaseSet
}
```

This works, but we have this duplication of the variable name as a string followed by the variable. By omitting the property name, our code can be a little more concise:
```js
const agumon = {
    name,
    id,
    releaseSet
}
```

## Computed Properties

Computed properties allow us to define an expression, a piece of code that results in a single value like a variable or function invocation, and use the result of that expression as a property name on an object. To do this we'll use square brackets to surround our expression in the object literal where we would declare the property name. An example with a simple expression could look like:

```js
const newAnimal = 'Pikachu';
const electric = 'electric';
...
const pokedex = {
    [newAnimal] : electric
}

console.log(pokedex) // {'Pikachu': 'electric'}
```

In the code above:
- `newAnimal` is a variable that stores some calculated value that we want to become a property name. 
    - For the purposes of our example, the value has been hardcoded to 'Pikachu'.
- `[newAnimal]` is a computed property name of the object literal `pokedex`. 
    - Inside our square brackets we have a single variable to evaluate in our expression: `newAnimal`.
    - The property name will be derived from the value of the `newAnimal` variable, becoming `'Pikachu'`.
- `electric` holds the value for the computed property, which can be any valid JavaScript expression.

We can also have more complicated expressions that do some work inside the square brackets.

Imagine that we have a site that lets people put together ideas for mix tapes by choosing 5 song titles. Once the user has chosen their song titles, to make this data easier to move around, we want to create an object with property names "Track_1" through "Track_5" that map to the song titles in the order the user chose.
```js
// Example data representing the songs the user chose
const songChoices = [
  'Song Title One',
  'Song Title Two',
  'Song Title Three',
  'Song Title Four',
  'Song Title Five'
];

// Acts as the index for accessing songChoices and for
// creating the property name with the correct track number
let songIndex = 0; 

// Since songIndex starts at 0, we need to add 1 to
// songIndex to create the correct track nmumber
const trackList = {
  [`Track_${songIndex + 1}`]: songChoices[songIndex++], // Increment songIndex after fetching the track name
  [`Track_${songIndex + 1}`]: songChoices[songIndex++],
  [`Track_${songIndex + 1}`]: songChoices[songIndex++],
  [`Track_${songIndex + 1}`]: songChoices[songIndex++],
  [`Track_${songIndex + 1}`]: songChoices[songIndex++],
};

console.log(trackList);
// Will print out:
// {
//   Track_1: 'Song Title One',
//   Track_2: 'Song Title Two',
//   Track_3: 'Song Title Three',
//   Track_4: 'Song Title Four',
//   Track_5: 'Song Title Five'
// }
```

In the code above:
- ```[`Track_${songIndex + 1}`]``` is our computed property. 
    - Inside the square brackets that denote the computed property, we do string interpolation to dynamically generate the property titles "Track_1" through "Track_5".
- `songChoices[songIndex++]` will fetch the title at `songIndex` and then increase the value of `songIndex` by 1. 
    - This is necessary so the next line can properly generate the next property name and fetch the next title in the song list.

This example is a bit trivial, we know there are other ways to generate a similar Object with less repetition, but it shows that we can use computed property names to do much more than read a variable's value!

## Summary

In this lesson we introduced 3 concepts for working with Objects in JavaScript: Destructuring, Object Shorthand, and Computed Properties.

Destructuring allows us to take specific key-value pairs from an object and assign them to local variables.  We also examined how to use array destructuring to take specific elements from an array and assign them to local variables Destructuring can be a useful tool when working with objects and arrays, and it helps us keep our code compact and readable.

Object Shorthand lets us create and fill Objects using less code and less repetition since we can define a property's name and value at the same time. When creating an Object literal, instead of first defining a property name and then defining the value, we can pass a variable and the name of the variable will become the property and the value of the variable will become the property's value.  

Computed Properties are a useful way to create property names when we don't know in advance what they should be called. We can place an expression in square brackets, and the result of that expression will be used as the name for a property. This allows us to do things like generate sequences, or use the contents of a variable as our property names.

When and how we use these tools will depend on the problem we are solving, but all together they help us write cleaner and more concise code!

## Resources

- [MDN on Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN on Property Definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions)
- [MDN on Computed Property Names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)
