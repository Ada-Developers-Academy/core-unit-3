# Destructuring Objects

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=451968fb-cee3-408a-b3c8-ade2000e6320&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=true&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Introduction

In JavaScript we will work with objects regularly. At times we will want to work _directly_ with specific key-value pairs within a larger object.  

Let's look at the example below:

```javascript
const isUserAuthorized = function(user) {
  const id = user.id;
  const name = user.name;
  const authorized = user.authorized;
  
  if (authorized) {
    console.log(`${id}: ${name} is authorized`);
  } else {
    console.log(`${id}: ${name} is not authorized`);
  }
};
```

However, it can be time consuming to individually take elements from one object, like `user.id` in the example above, and store them in local variables.  We _could_ repeatedly type `user.id` and `user.name` and `user.authorized` when we need to access them instead, but this is time consuming as well. 

Thankfully, JavaScript has a shorthand notation for this known as **destructuring**.

## How To Destructure

If we want to take specific key-value pairs from a given object, we can use the following style of notation.

```javascript
const { id, name, authorized } = user;
```

By enclosing  `id`, `name` and `authorized` in curly braces, we can specify which key-value pairs we want to take from the object.  The values of `id`, `name` and `authorized` will now be assigned to the local variables `id`, `name` and `authorized` respectively.

This makes it easier to use specific attributes of an object without having to write the full `user.id` and `user.name` each time.

We can even destructure an object when passed as an argument into a function.

```javascript
const isUserAuthorized = function({ id, name, authorized }) {

    if (authorized) {
        console.log(`${name} is authorized.`);
    } else {
        console.log(`${name} is not authorized.`);
    }    
};

const user = {
    id: 1,
    name: 'Siobhan Thacker',
    authorized: true,
    group: 'admin',
};

isUserAuthorized(user); // Siobhan Thacker is authorized.

const unAuthorizedUser = {
    id: 2,
    name: 'Chantay Jarrell',
    authorized: false,
    group: 'guest',
};

isUserAuthorized(unAuthorizedUser); // Chantay Jarrell is not authorized.
```

In the above example `user` and `unAuthorizedUser` are passed into the function as arguments. The function will take the user object's `id`, `name` and `authorized` fields and assign them to the local variables `id`, `name` and `authorized`, very much like the prior example.

## Destructuring Arrays

We can apply similar destructuring to arrays as well.

```javascript
const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

const [ firstDog, secondDog, ...otherDogs ] = dogs;

console.log(firstDog); // Fido
console.log(secondDog); // Buddy
console.log(otherDogs); // [ 'Snoopy', 'Sparky' ]
```

This syntax lets us take specific elements from an array and assign them to local variables similar to object destructuring.  We can also use the `...` syntax to take all remaining elements from an array and assign them to another local variable.

We can also use array destructuring to only take the first element from an array.

```javascript
const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

const [ firstDog ] = dogs;

console.log(firstDog); // Fido
```

And we can use the syntax to create a new array of all the elements from an array except the first one.

```javascript
const dogs = ['Fido', 'Buddy', 'Snoopy', 'Sparky'];

const [ , ...otherDogs ] = dogs;

console.log(otherDogs); // [ 'Buddy', 'Snoopy', 'Sparky' ]
```

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-info

## Why Is This Useful?

Destructuring is useful for a couple of reasons.  

1.  It reduces the amount of typing needed (carpal tunnel is an issue).
1.  Destructuring is widely used in examples with common libraries... like React.  We will make extensive use of destructuring later in the curriculum.

### !end-callout

<!-- temporarily commented until we can complete this section
## Object Shorthand
-->

## Summary

In this lesson we introduced destructuring in JavaScript.  Destructuring allows us to take specific key-value pairs from an object and assign them to local variables.  We also examined how to use array destructuring to take specific elements from an array and assign them to local variables.

Destructuring can be a useful tool when working with objects and arrays, and it helps us keep our code compact and readable.

## Resources

- [MDN on Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
