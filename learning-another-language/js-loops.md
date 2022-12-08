# Looping in Javascript
### Learning Goals
* Understand several different looping mechanisms in JS
* By the end of this, you should be able to:
    * Iterate over data in a list, set, or map using several different types of loops
    * Understand how to terminate a loop early or skip a loop iteration using the `break` and `continue` keywords

### What is a loop?

Loops are used to perform repeated tasks based on a condition. A condition is a statement which can evaluate to either **true** or **false**. A loop will continue running until the condition returns false.

## 1. `for` loop

```js
for (initialization; condition; finalExpression) {
  // do stuff
}
```

The `for-loop` consists of three optional expressions, followed by a block of code:

- **initialization** - This expression runs before the execution of the first loop. The initialization expression is usually used to create a counter.
- **condition** - This expression is checked each time before the loop runs. If it evaluates to true, the code in the loop is executed. If it evaluates to false, the loop stops. If this expression is omitted, it automatically evaluates to true, and the code block is executed.
- **finalExpression** - This expression is executed after each iteration of the loop. This is usually used to increment (or increase) a counter, but can also be used to decrement (or decrease) a counter.

### Examples

**1. Print integers 1 .. 5**
```js
for (let i = 1; i <= 5; i++) {
	console.log(i)
}

// Output:
// 1
// 2
// 3
// 4
// 5

// intialization statement: let i = 1
// condition statement: i <= 5
// final expression: i++, equivalent to i = i + 1
```

**2. Use a break statement to exit the loop immediately**
```js
for (let i = 1; i <= 5; i++) {
	if (i == 4) {
		break;
	}
	console.log(i);
}

// Output:
// 1
// 2
// 3
```

### Common Pitfall: Exceeding the Bounds of an Array
```js
const arr = [ "foo", "bar", "baz" ];

for (let i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
}

// Output:
// foo
// bar
// baz
// undefined

// In the above example, arr.length = 3, 
// so accessing arr[3] leads to an undefined element
```

When iterating over an array, it is possible to accidentally exceed the bounds of the array. One thing to note about the indices of an array: 

- As with most other languages, JavaScript arrays are zero indexed meaning the first element of an array is stored at index 0. Therefore, the index of the last element of an array is equal to `arr.length - 1`.

When constructing a `for-loop`, there are a couple ways to handle exceeding the bounds of an array. They both involve altering the conditional statement in the `for-loop` to either:

- `i < arr.length` or
- `i <= arr.length - 1`

```js
const arr = [ "foo", "bar", "baz" ];

// Replace the <= with < in the condition statement
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// Output:
// foo
// bar
// baz

// Replace arr.length with arr.length - 1
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}

// Output:
// foo
// bar
// baz
```

## 2.`for … of` loop
```js
for (variable of object) {
	// do something
}
```

The `for … of` loop can be used to iterate over arrays, sets, and maps. When using the `for … of` loop, there’s no danger of going out of bounds! The loop will go over each item in the iterable object.

### Examples

**1. Iterate over items in a list**
```js
const monsters = [
	"Michael Myers", 
	"Jason Voorhees", 
	"Freddy Krueger"
];

for (let monster of monsters) {
	console.log(monster);
}

// Output:
// Michael Myers
// Jason Voorhees
// Freddy Krueger
```

**2. Iterate over items in a map**
```js
const m = new Map();
m.set(1, "red");
m.set(2, "black");

for (let item of m) {
	console.log(item);
}

// Output:
// [1, red]
// [2, black]
```

## 3. `for … in` loop
```js
for (property in object) {
	// do stuff
}
```

The `for … in` loop iterates over all enumerable properties of an object. The code in the loop is executed for each property in the object. 

### Example
```js
const movies = {
	2008: "The Dark Knight",
	2009: "Avatar",
	2010: "Toy Story 3"
};

for (let key in movies) {
	console.log(key + ": " + movies[key]);
}

// Ouput:
// 2008: The Dark Knight
// 2009: Avatar
// 2010: Toy Story 3
```

### Common Pitfall: Unexpected Behavior When Iterating over an Array

While we can use the `for … in` to iterate over an array, it is recommended we use one of the aforementioned for-loops instead. 

The reason for this is because the `for … in` loop iterates over **all** of the enumerable properties in an object, including any that may be inherited.

If, for instance, a JS library modifies the `Array` prototype, the loop will iterate over any additional properties as well. Check out the example below for a potentially non-intuitive demonstration.

```js
const arr = [1, 2, 3];

Array.prototype.newMethod = true;

for (const i in arr) {
	console.log(i);
}

// Output:
// 1
// 2
// 3
// newMethod
```

It is also worth mentioning that the `for … in` loop is meant for objects, and thus will be slower than other loops which are better suited for arrays.

### Practical Usage

So, wait, why use the `for … in` loop at all?

The `for … in` loop may be most practically used as a tool to debug. It is an easy way to check the properties of an object. 

## 4. while loop
```js
while (condition) {
	// do some repetitive task
}
```

The `while` loop will evaluate the `condition` before the loop is run each time. If the `condition` evaluates to `true`, the loop executes the statement(s) in the block. Otherwise, the loop exits and stops executing the statement(s) in the block.

`While` loops evaluate the `condition` *before* each iteration. The loop will never execute if the condition evaluates to `false` before entering the loop.

### Example

```js
let count = 5;
while (count > 0) {
	console.log(count);
	count -= 1;
}

// Output:
// 5
// 4
// 3
// 2
// 1
```

Try converting the following `for-loop` into a `while` loop:
```js
for (int i = 0; i <= 20; i += 5) {
	console.log(i);
}
```

<details style="max-width: 700px; margin: auto;">
  <summary>
  Click here to reveal a possible solution
  </summary>

  ```javascript
    let i = 0;
    while (i <= 20) {
        console.log(i);
        i += 5;
    }

    // Output:
    // 0
    // 5
    // 10
    // 15
    // 20
  ```
</details>

## 5. do…while loop
```js
do {
	// perform repetitive task at least once
} while(condition)
```

The `do...while` statement creates a loop that executes a block of code until a condition evaluates to `false`.

In contrast to a `while` loop, a `do...while` loop will **always** execute the statements in the block once _before_ the condition is checked. 

### Example
```js
let i = 1
do {
	console.log(i);
	i += 1;
} while (i <= 5)

// Output:
// 1
// 2
// 3
// 4
// 5
```

### Common Pitfall: Indefinite Loop

It’s important to ensure the variable(s) used in the condition are updated such that the `while(condition)` evaluates to false. Otherwise, our program may crash due to an infinite loop.

Spot the bug below:
```js
let x = 5;
let y = 4;
let sum = 0
do {
	sum = x + y;
	console.log(sum);
	x = x * x;
	y = y * y;
} while(sum >= 0);
```

<details style="max-width: 700px; margin: auto;">
  <summary>Click here for an explanation</summary>

  The program will run indefinitely because the condition `sum >= 0` will always evaluate to `true`. We can fix this by changing the condition to `sum <= 100` or anything that will eventually evaluate to `false`.
</details>

## 6. Additional Statements
### forEach
```js
myArray.forEach(myFunction(currentValue, index, arr))
```

The `forEach` method calls a function and iterates over the elements of an array, map, or set. 

The syntax  for the `forEach` method has multiple parts, some of them being optional:

- `myArray` is the name of the array through which items you would like to iterate.
- `myFunction` is the name of the function you would like to run for each of the elements in the array.
- `currentValue` an element in the array which is currently being iterated upon. It is the only variable which is required to be passed into the function `myFunction`. This is the variable that will represent each element in the array.
- `index` is an **optional** variable used to indicate the index of the current element in the array which is being iterated upon.
- `arr` is an **optional** variable which is the array of the current elements.

### Example
```js
let instructors = ["Auberon", "Char", "Claire", "Kyra"];

function sayHello(instructor) {
	console.log(`Hello, ${instructor}!`);
}

instructors.forEach(sayHello);

// Output:
// Hello, Auberon!
// Hello, Char!
// Hello, Claire!
// Hello, Kyra!

function addHello(instructor, index, arr) {
	arr[index] = 'Hello, ' + instructor;
}

instructors.forEach(addHello);

console.log(instructors);

// Output:
// ['Hello, Auberon', 'Hello, Char', 'Hello, Claire', 'Hello, Kyra']
```

### break

The `break` statement can be used to terminate a loop early, before the condition evaluates to `false` and exits the loop.

### Example
```js
let arr = [5, 10, 15, 20, 25, 30];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
	if (arr[i] % 15 == 0) {
		break;
	}
}

// Output:
// 5
// 10
// 15
```

### continue

The `continue` statement is used to skip the current iteration and go to the next iteration.

### Example
```js
let arr = [5, 10, 15, 20, 25, 30];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 15 == 0) {
		continue;
	}
	console.log(arr[i]);
}

// Output:
// 5
// 10
// 20
// 25
```

## Summary
In this lesson, we have seen the following loops and loop control statements:
* `for-loop`
* `for ... of loop`
* `for ... in loop`
* `while loop`
* `do-while loop`
* `forEach loop`
* `break`
* `continue`