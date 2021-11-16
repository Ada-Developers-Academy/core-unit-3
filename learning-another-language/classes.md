# Object-Oriented Classes in JavaScript

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=79449fb4-4505-4ff1-a6a0-ade2015090af&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=true&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Learning Goals
- Understand on a high-level that ES6 introduced classes as syntactical sugar
- By the end of this you should be able to:
  - Create your own classes with instance variables and methods
  - Use `static` to create class methods
  - Use `extends` to create subclasses using inheritance
  - Use `super` to access a parent class' attributes & methods


## Introduction: JavaScript uses Prototype-Based Objects

JavaScript uses [prototype-based objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes), which allows developers to extend JavaScript object templates into reusable bits.  At Ada, we will not cover prototypical objects, but you are free to optionally read about some fascinating under-the-hood stuff that JS does in order to make objects inherit from other objects. Otherwise, we will not expect any knowledge about prototypes going forward.

## Introducing Classes

Prototype-based languages work, but it is very awkward for OOP-trained developers.  Fortunately, as of [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), `class`es were introduced as "syntactical sugar" to allow developers to write classes and _classical_ OOP code, like we did in Python, for JavaScript. The interpreter converts it all behind the scenes into prototype based OOP. This syntactical sugar, which makes complex code _sweeter_ to write, lets us use familiar syntax and get the Object-Oriented results we're used to.


### Our Example: `Zine`

For this lecture, we will be building the class `Zine`. [A zine](https://en.wikipedia.org/wiki/Zine), short for magazine or fanzine, is a small-circulation self-published work of text and images, usually reproduced via photocopier. Zines are either the product of a single person, or of a very small group and are popularly photocopied into physical prints for circulation.

A zine is like a small, self-published book. They have titles and authors (or contributors, illustrators, editors, writers, etc.), pages, and content.

We chose the example class `Zine` because we were bored of teaching `Book`.

## Syntax

In Python, defining a class and then creating an instance of one looks like this:

```python
class Zine:
  def __init__(self,title)
    self.title = title

zine = Zine('So you want to be a pastry chef')
```

In JavaScript, defining a class and then creating an instance of one looks like this:

```javascript
class Zine {
  constructor(title) {
    this.title = title;
  }
}

const zine = new Zine('So you want to be a pastry chef');
```

### Try it
Let's make our first instances of the `Zine` class! Open up the node console and put in the definition for the `Zine` class (typing the code from above into the node console or copying/pasting it into the node console will both work).

Then, make many instances of the `Zine` class. Make an instance of `Zine` with the following titles:

1. So you want to be a pastry chef
1. Bite Size Command Line!
1. Linux debugging tools you'll love

You should get input that looks like this:

```javascript
const chefZine = new Zine('So you want to be a pastry chef');
> undefined
chefZine
> Zine { title: 'So you want to be a pastry chef' }
const commandLineZine = new Zine('Bite Size Command Line!');
> undefined
commandLineZine
> Zine { title: 'Bite Size Command Line!' }
const linuxZine = new Zine("Linux debugging tools you'll love");
> undefined
linuxZine
> Zine { title: "Linux debugging tools you'll love" }
```

Congratulations! You made your first class in JavaScript!

How do you read attributes?

In JavaScript, instances of classes aren't anything special, you just get objects. So, reading an attribute from an instance of a class is the same as reading an attribute from any other object with the same attributes.

To read or write the `title` we set in the constructor, we can use both dot notation and subscript notation (square brackets):

```javascript
// You can read/write with 'dot notation'
console.log(chefZine.title);
> So you want to be a pastry chef

chefZine.title = 'A much better title';
console.log(chefZine.title);
> A much better title

// Or with bracket notation
console.log(chefZine['title']);
> A much better title

chefZine["title"] = 'Frankly, this title is a little mediocre'
console.log(chefZine['title']);
> Frankly, this title is a little mediocre
```

<details style="max-width: 700px; margin: auto;">
  <summary>
  **Experiment:** What happens if you try to read or write an attribute that isn't set in the constructor?
  </summary>
  
  Any attribute not defined in the constructor is `undefined`.
</details>

**Question:** How are dot notation and bracket notation different? Is there something you can do with one that you can't with the other?

This syntax should seem familiar - it's exactly the same syntax we used to read and write attributes on variables created from object literals (remember Python dictionaries). This isn't a coincidence. Under the hood, they're the same thing. Anything you can do with an object from a literal, you can do with an object from a class, and vice versa. This is a big difference from Python (and many other languages), so it's worth emphasizing:

**In JavaScript, there is no difference between objects from literals and objects from classes.**

### A Fuller Class

In Python, a more fully-developed class with methods may look like this:

```python
class Zine:
  def __init__(self, title, contributor)
    self.title = title
    self.contributor = contributor

  def to_str(self):
    return f"#{self.title} by #{self.contributor}"

# Test it out
zine = Zine('So you want to be a pastry chef', 'Julia Childs')
print(zine.to_str())
```

When you create a new `Zine` instance, the `__init__` method runs and sets the instance variables to starting values.  

Below is this `Zine` class written in JavaScript.  It has `title` and `contributor` attributes set in the `constructor` method and a `toString` method which outputs the object as a String.  Notice that everything in a class falls between the curly braces.

```javascript
class Zine {
  constructor(title, contributor) {
    this.title = title;
    this.contributor = contributor;
  }

  toString() {
    return `${this.title} by ${this.contributor}`;
  }
}

const zine = new Zine('So you want to be a pastry chef', 'Julia Child');

console.log(zine.toString());
// > So you want to be a pastry chef by Julia Child
```

Classes can also be declared as an expression:

```javascript
const Zine = class {
 // code
};
```

## Methods

In a JavaScript class, methods are functions declared inside the class, without the `function` keyword.  There are a number of special functions, and we will go over the special __constructor__ method.

### Constructor Methods

The constructor method is a special method named `constructor` which is called when a new instance is created.  You can think of it like the `__init__` method from Python.  Constructors exist to start our instances off in a proper state.  Use them to set your attributes with initial values using `this.<attributeName>` to create attributes (similar to using `self` in Python).

```javascript
class Zine {
  constructor(title, contributor) {
    console.log('The constructor ran!');
    this.title = title;
    this.contributor = contributor;
  }
}

const chefZine = new Zine('So you want to be a pastry chef', 'Julia Child');
// > The constructor ran!
```

**Exercise**:  Try creating an `Animal` class similar to `Zine` above.  The `constructor` should take a `sound` parameter and save it in an instance variable.  Then create an instance of the class.  Verify that it works.  


<details style="max-width: 700px; margin: auto;">
  <summary>Click here for a solution</summary>

  ```javascript
  class Animal {
    constructor(sound) {
      this.sound = sound;
    }
  }

  const hyena = Animal('heehehehehe hehehe hehehehe!')
  ```
</details>

### Instance Methods

Instance methods are created like constructors but with their own names.

```javascript
const SALESTAX = 0.08;

class Zine {
  constructor(title, contributor, price) {
    this.title = title;
    this.contributor = contributor;
    this.price = price;
  }

  totalPrice() {
    return this.price * (1 + SALESTAX);
  }
}

const chefZine = new Zine('So you want to be a pastrychef', 'Julia Child', 1.00);
console.log(chefZine.totalPrice());
// > 1.08
```

**Exercise**:  For our `Animal` class, create a `speak` method which will print the sound to the console.  Try it out to verify that the method is working.  


<details style="max-width: 700px; margin: auto;">
  <summary>Click here for a solution</summary>

  ```javascript
  class Animal {
    constructor(sound) {
      this.sound = sound;
    }
    speak() {
      print(sound);
    }
  }

  const hyena = Animal('heehehehehe hehehe hehehehe!')
  heyna.speak();
  ```
</details>

### Static Methods

Static methods are equivalent to class methods in Python.  They are attached to the class rather than instances of the class.

```javascript
class Zine {
  constructor(title, contributor, price) {
    this.title = title;
    this.contributor = contributor;
    this.price = price;
  }

  static lowestPrice(zineA, zineB) {
    if (zineA.price <= zineB.price) {
      return zineA.title;
    } else {
      return zineB.title;
    }
  }
}

const chefZine = new Zine('So you want to be a pastry chef', 'Julia Child', 2.00);
const linuxZine = new Zine("Linux debugging tools you'll love", 'Evans', 1.00);

console.log(Zine.lowestPrice(chefZine, linuxZine));
// > Linux debugging tools you'll love

```

Just like a Python class method, the above example calls the static method on the name of the class as `Zine.lowestPrice`.  Trying to call the method with `chefZine.lowestPrice(chefZine, linuxZine);` will result in a TypeError.

**Exercise**:  Add a static method to Animal called `createAnimals`, which takes an array of Strings (sounds) and returns an array of Animals which make those sounds.  


<details style="max-width: 700px; margin: auto;">
  <summary>Click here for a solution</summary>

  ```javascript
  class Animal {
    constructor(sound) {
      this.sound = sound;
    }
    // speak() removed for brevity
    static createAnimals(sounds) {
      const animals = [];
      for(const s in sounds) {
        animals.push(new Animal(s));
      }
      return animals;
    }
  }

  const newAnimals = Animal.createAnimals(['tweet tweet!', 'bark!', 'glub glub', 'meeeow!'])
  ```
</details>

## Inheritance

Classes can be subclassed using the `extends` keyword.  

```javascript
class Zine {
  constructor(title, contributor) {
    this.title = title;
    this.contributor = contributor;
  }

  toString() {
    return `${this.title} by ${this.contributor}`;
  }

}

class Fanzine extends Zine {
  constructor(title, contributor, subject) {
    super(title, contributor);
    this.subject = subject;
  }
  toString() {
    return `${super.toString()} about: ${this.subject}`;
  }
}

const janusAndAurora = new Fanzine('Janus & Aurora', 'Ursula K. Le Guin', 'Science Fiction');
console.log(janusAndAurora.toString());
// >  Janus & Aurora by Ursula K. Le Guin about: Science Fiction
```

In the example above we can use the `super` keyword to access the parent class' version of the `toString` method and we overrode the parent class' method to add our own functionality.

**Exercise**:  Create a `Cat` class that extends `Animal` and has a name attribute.  All `Cat` instances should "Meow" when speaking.  


<details style="max-width: 700px; margin: auto;">
  <summary>Click here for a solution</summary>

  ```javascript
  // first solution
  class Cat extends Animal {
    constructor(name) {
      super('Meow');
      this.name = name;
    }
  }
```
</details>

## Summary

In this lesson we have seen:
- How to use classes to create object instances
- How to use a constructor to set up a new object in proper state
- Create static methods using the `static` keyword
- Extend existing classes with subclasses using inheritance

## Resources
- [MDN on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript ES6 Class Syntax](https://coryrylan.com/blog/javascript-es6-class-syntax)