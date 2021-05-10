# Anonymous Functions

---

<!-- Old Content -->


## Learning Goals

- Explore that functions can be defined and used inline, in a pattern we call _anonymous functions_
- Recognize the syntax of anonymous functions
- Practice writing anonymous functions in `forEach` loops

## Sometimes It's Not Worth A Name

Callback functions, aka functions that are passed in as an argument to another function, are used often in JavaScript. It's a cool, powerful ability to be able to pass around functions into different functions, and we'll do it a lot!

We do it so often, that sometimes it isn't worth naming the function. Sometimes, we know that a callback function passed into another function will only be used once, and it sure would be nice to bypass the whole ceremony of declaring and assigning.

You can do this by defining an anonymous callback function inside the argument list itself:

```javascript
const doMath = function(operation) {
  for (let i = 0; i < 10; i += 1) {
    const result = operation(i);
    console.log(`${i}: ${result}`);
  }
};

doMath(function(num) {
  return num * num;
});
```

Note the weird `});` on the last line. Anonymous functions can quickly become difficult to read, so use them judiciously.


Answer the following questions:

1. For the `doMath` function, how many parameters does it take in, what are the names of the parameters, and what data type are we expecting for each parameters?
1. What line _invokes_ the `doMath` function? What do we pass in as an argument? What data type is that argument?
1. Where is the anonymous function? For the anonymous function, how many parameters does it take in, what are the names of the parameters, and what data type are we expecting for each parameters?
1. What does the anonymous function do?
1. In the `doMath` function, how do we use the variable `operation`?
1. What does running this script print out?

<details>

  <summary>
    Check your answers here!
  </summary>

  1. 1 parameter named `operation` that is a function
  1. `doMath(...)`. We pass in an anonymous function as an argument.
  1. The anonymous function is in the line where we invoke `doMath()`. It takes in 1 parameter named `num` that is a number
  1. The anonymous function squares the number (multiplies it with itself)
  1. Because `operation` is a function, we _invoke_ the `operation` function with `let result = operation(i);`
  1.
      ```
      0: 0
      1: 1
      2: 4
      3: 9
      4: 16
      5: 25
      6: 36
      7: 49
      8: 64
      9: 81
      ```

</details>

### Exercise: Create More Anonymous Math Operation Callbacks

```javascript
const doMath = function(operation) {
  for (let i = 0; i < 10; i += 1) {
    const result = operation(i);
    console.log(`${i}: ${result}`);
  }
};

// doMath(...)
```

Given the above code, call `doMath()` three more times, with three different anonymous function callbacks.

Each of these anonymous function callbacks should take in 1 number, and return either a number or a string.

Ideas for anonymous functions to write include:
- Cubing one number
- Formatting the input like it was currency
- Multiplying it by 1 million and then formatting it like currency and then adding text saying that it belongs to the Ada instructors

Run your script to make sure it works!
