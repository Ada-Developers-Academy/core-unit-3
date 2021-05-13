# Methods in Objects

## Introduction

Ember is a web developer working on her front-end project. She's making a website where there is a number of cookies 🍪 starting from zero. Clicking the "cookie button" will increase the number of cookies by one.

She might start her code like this, creating a `cookieButton` object, which has a `cookieCount` property. But how can we increase the `cookieCount`? More importantly, how do we set it up so that the `cookieButton` object can increase its `cookieCount` when it's clicked?

<!-- prettier-ignore-start -->
```js
const cookieButton = {
  cookieCount: 100,
  // how do we increase the cookieCount...?  
}
```
<!-- prettier-ignore-end -->

We could write a function that accesses the `cookieButton`'s property...

<!-- prettier-ignore-start -->
```js
const cookieButton = {
  cookieCount: 100
}

const onCookieButtonClick = function() {
  cookieButton.cookieCount += 1;
}

onCookieButtonClick();
console.log(cookieButton.cookieCount);
```
<!-- prettier-ignore-end -->

But this feels fishy to us: our `onCookieButtonClick` function modifies our `cookieButton` object, even though the two are unrelated.

Our ideal situation is that the `cookieButton` object manages its own behavior, which modifies its own properties.

## Methods Are Behavior

Objects are responsible for holding _state_ and _behavior_. This usually translates into defining _properties/attributes_ and _methods_.

We've practiced creating properties in our objects as key-value pairs.

Overall, we also attach methods to objects with the same concept!

## "Normal" Method Declaration

We can attach a "normal," non-arrow function to an object, like so:

<!-- prettier-ignore-start -->
```js
const cat = {
  name: 'Heathcliff',
  age: 13,
  meow: function() {
    console.log('Meeee-ow!');
  }
}

cat.meow();
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                 |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `meow`                                              | This sets up the key-value pair in the `cat` object, and `meow` will be the key.                      |
| `function() { ... }`                                | The value to the `meow` key is a function. Here, we are specifically using non-arrow function syntax. |
| `console.log('Meeee-ow!');`                         | This is our function body, where we can put all sorts of things!                                      |

### Alternative Syntax

We can also add a method to our object this way:

<!-- prettier-ignore-start -->
```js
const cat = {
  name: 'Heathcliff',
  age: 13,
  meow() {
    console.log('Meeee-ow!');
  }
}

cat.name;
cat.meow();
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `meow() { ... }`                                    | Instead of establishing the property name, or using the `function` keyword, we use the property name in front of the parameter list. |

This syntax breaks the visual pattern of key-value pairs inside an object, in favor of shorter syntax.

### Methods Defined Outside the Object

We have seen this form before, which continues to be valid. We can create a function outside the object, and bring it into the object by name.

<!-- prettier-ignore-start -->
```js
const longMeow = function () {
  console.log('Meeee-ow!');
}

const cat = {
  name: 'Heathcliff',
  age: 13,
  meow: longMeow
}

cat.meow();
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `const longMeow = function() { ... }`               | We create the function `longMeow` outside the object.                                   |
| `meow: longMeow`                                    | This establishes a property named `meow`, whose value is the function named `longMeow`. |

## Accessing Other Members Using `this` in "Normal" Methods

Our objects can hold properties and methods, but most behavior needs to reference other things in the same object.

When we add methods to our object with non-arrow functions, we can access the other members using the variable `this`.

`this` is a variable we can access inside any object definition. All objects and all functions have a `this` value!

Inside a method, the value of `this` changes based on how the method is called.

_When inside a method that is inside an object_, _when we call the method through the object_, `this` refers to the object.

<!-- prettier-ignore-start -->
```js
const cat = {
  name: 'Heathcliff',
  age: 13,
  meow: function () {
    console.log('Meeee-ow!');
  },
  introduceSelf: function() {
    console.log(`Hello, I'm ${this.name}.`);
    this.meow();
  }
}

cat.introduceSelf();
```
<!-- prettier-ignore-end -->

This code produces this output:

```
Hello, I'm Heathcliff.
Meeee-ow!
```

Let's dive into the `introduceSelf` method, which accesses the object's property `name`, and another method `meow`.

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                               |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `introduceSelf: function(){ ... }`                  | Even if we're accessing other object members in our `introduceSelf` method, we still define it as-expected with a non-arrow function.               |
| `this.name`                                         | In this context, `this` refers to the object itself (that we named `cat`). This object has a property `name`, so we access `name` with `this.name`. |
| `this.meow();`                                      | Here, `this` still refers to the `cat` object itself. This object has a member named `meow`. We access it, and invoke the value, using `()`.        |

Let's observe this example which _modifies_ a value inside the object:

<!-- prettier-ignore-start -->
```js
const cookieButton = {
  cookieCount: 100,
  onCookieButtonClick: function() {
    this.cookieCount += 1;
  }
}

console.log('cookieCount before calling onCookieButtonClick', cookieButton.cookieCount);

cookieButton.onCookieButtonClick();

console.log('cookieCount after calling onCookieButtonClick', cookieButton.cookieCount);
```
<!-- prettier-ignore-end -->

Our output shows us that our `cookieCount` value changed, just by calling `onCookieButtonClick` and using `this.cookieCount`!

## Methods as Arrow Functions

We can add a method to our object with an arrow function.

<!-- prettier-ignore-start -->
```js
const cat = {
  name: 'Heathcliff',
  age: 13,
  meow: () => {
    console.log('Meeee-ow!');
  }
}

cat.meow();
```
<!-- prettier-ignore-end -->

Here, we set the value of the `meow` property to an arrow function.

### Using `this` in Arrow Functions

Non-arrow functions and arrow functions define `this` different.

| Non-arrow functions                                                  | Arrow functions                             |
| -------------------------------------------------------------------- | ------------------------------------------- |
| In an object's method, `this` is the object the method is called on. | `this` refers to where the code is written. |

### !callout-info

## More Nuances to `this`

In non-arrow functions, there are even more possibilities about what `this` means, based on the context. For now, we will focus on `this` inside of object methods.

### !end-callout

Let's consider using `this` in an arrow function. Here is the code that was working above, but `introduceSelf` is defined as an arrow function:

<!-- prettier-ignore-start -->
```js
const cat = {
  name: 'Heathcliff',
  age: 13,
  meow: () => {
    console.log('Meeee-ow!');
  },
  introduceSelf: () => {
    console.log(`Hello, I'm ${this.name}.`);
    this.meow();
  }
}

cat.introduceSelf();
```
<!-- prettier-ignore-end -->

We'll get this output:

```
Hello, I'm undefined.
TypeError: this.meow is not a function
```

JavaScript printed out `Hello, I'm undefined.` because `this.name` is undefined in the arrow function's `this`. We saw that `this.meow` was not found; there is no `meow` member in this `this`.

### !callout-info

## Using > Understanding

`this` is one of those topics where it's valid to use the concept and patterns, without deeply understanding it.

### !end-callout

In summary, when we create object methods, we will likely use a non-arrow function!

### !callout-info

## Foreshadowing: Intentionally Using Arrow Functions for This `this`

In some modern JavaScript libraries, such as React JS, there is an intentional use of arrow functions in objects that take advantage how `this` works. Look forward to it!

### !end-callout
