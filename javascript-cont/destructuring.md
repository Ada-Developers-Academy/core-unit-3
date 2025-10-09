# Object Syntax

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

Let's say that we are building a collection of trading cards, and we have information in variables about each card such as the card name, the card's ID number, and the name of the release it is from like so:
```js
const name = 'Agumon'
const id = 'ST1-03'
const releaseSet = 'Digi-Battle Card Game Starter Set'
```

We want to create an Object to collect this information and make it easy to pass around and manipulate. One option would be to manually write out the keys ourselves:
```js
const agumon = {
    'name': name,
    'id': id,
    'releaseSet': releaseSet
}
```

This works, but any time we want our properties named after variables that already exist, we have this duplication of the variable name as a string followed by the variable.

## Computed Properties

Imagine that we have CSV files that contain an address book and we want to convert the contents of that file into an Object. Each line in the CSV contains the same kind of information: a name, email, phone number, and an address.
```
Name,Email,Phone
Carla Alves,carla@example.com,555-1234
Amina Ehsan,amina@example.com,555-5678
```

There are many ways and libraries that we could use to read a file, but in this case we are reading the file line by line

## Summary

In this lesson we introduced 3 concepts for working with Objects in JavaScript: Destructuring, Object Shorthand, and Computed Properties.

Destructuring allows us to take specific key-value pairs from an object and assign them to local variables.  We also examined how to use array destructuring to take specific elements from an array and assign them to local variables Destructuring can be a useful tool when working with objects and arrays, and it helps us keep our code compact and readable.

Object Shorthand lets us create and fill Objects using less code and less repetition since we can define a property's name and value at the same time. When creating an Object literal, instead of first defining a property name and then defining the value, we can pass a variable and the name of the variable will become the property and the value of the variable will become the property's value.  

Computed Properties are a useful way to create property names when we don't know in advance what they should be called. We can place an expression in square brackets, and the result of that expression will be used as the name for a property. This allows us to do things like generate sequences, or use the contents of a variable as our property names.

When and how we use these tools will depend on the problem we are solving, but all together they help us write cleaner and more concise Object code!

## Resources

- [MDN on Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
