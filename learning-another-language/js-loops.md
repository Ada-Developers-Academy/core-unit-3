# Looping in Javascript
### Learning Goals
* Understand several different looping mechanisms in JS
* By the end of this, you should be able to:
    * Iterate over data in a list, set, or map using several different types of `for` and `while` loops
    * Understand how to terminate a loop early or skip a loop iteration using the `break` and `continue` keywords

### How JS loops are different than (& similar to) other loops we've seen

Javascript has several variations of the basic `for` and `while` loops.

The `for` family of loops includes the `for` loop, `for ... of` loop and `for ... in` loop. The `while` family of loops includes both the `while` loop and `do-while` loop.

These loops work similarly to the loops we have seen in Python, but with syntax and quirks that are particular to Javascript.

Similar to Python, Javascript also provides flow control statements such as `break` and `continue`.

## For Loop Family

### `for` loop

```js
for (let i = 1; i <= 5; i++) {
	console.log(i);
}
```

When we run our code, we should see this output:
```
1
2
3
4
5
```

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `for`                                    | The keyword used to begin the loop |
| `let i = 1`                                                 | This expression runs before the execution of the first loop. The initialization expression is usually used to create a counter. |
| `i <= 5`                                          | This expression is checked each time before the loop runs. If it evaluates to true, the code in the loop is executed. If it evaluates to false, the loop stops. If this expression is omitted, it automatically evaluates to true, and the code block is executed. |
| `i++`                                             | This expression is executed after each iteration of the loop. This is usually used to increment (or increase) a counter, but can also be used to decrement (or decrease) a counter.   |
| `{ console.log(i) }`                                                 | This is the body of the loop. This is the code that is executed each time the loop is run.  |


#### Common Pitfall: Exceeding the Bounds of an Array
```js
const arr = [ "foo", "bar", "baz" ];

for (let i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
}
```

When the code above is run, we will see this output:
```
foo
bar
baz
undefined
```

When iterating over an array, it is possible to accidentally exceed the bounds of the array. One thing to note about the indices of an array: 

- As with most other languages, JavaScript arrays are zero indexed meaning the first element of an array is stored at index 0. Therefore, the index of the last element of an array is equal to `arr.length - 1`. In the code block above, `arr.length` = 3, so accessing `arr[3]` leads to an `undefined` element.

When constructing a `for-loop`, there are a couple ways to handle exceeding the bounds of an array. They both involve altering the conditional statement in the `for-loop` to either:

- `i < arr.length` or
- `i <= arr.length - 1`

```js
const arr = [ "foo", "bar", "baz" ];

// Replace <= with < in the condition statement
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```

```js
const arr = [ "foo", "bar", "baz" ];

// Replace arr.length with arr.length - 1
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}
```

Both of the above code blocks will give us the following output:
```
foo
bar
baz
```

### `for … of` loop

The `for … of` loop can be used to iterate over arrays, sets, and [maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) (or dictionaries). When using the `for … of` loop, there’s no danger of going out of bounds! The loop will go over each item in the iterable object.

```js
const monsters = [
	"Michael Myers", 
	"Jason Voorhees", 
	"Freddy Krueger"
];

for (let monster of monsters) {
	console.log(monster);
}
```

When the code block above is run, we will see this output:
```
Michael Myers
Jason Voorhees
Freddy Krueger
```

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `for` | The keyword used to declare the loop. |
| `let monster of monsters`  | Assigns the variable `monster` to each item in the array `monsters` as the iteration through the loop occurs.     |
| `console.log(monster)` | The block of code executed each time the loop runs. This line logs out the `monster` in the current iteration.   |

### !callout-info

#### let vs var vs const

We use `let` to declare the variable `monster` in the above code block because `let` allows us to block-scope the variable. In contrast, if we were to use `var`, we may inadvertently leak the variable `monster` into a parent scope, which may not be something we necessarily want. Similarly, we would not want to use `const` here as the variable needs to overwrite itself, and we cannot assign the same variable twice.

If curious, you may learn more about why we want to use `let` for loops in Javascript [here](https://wesbos.com/for-of-es6).

### !end-callout

#### Alternative Example

**Iterate over items in a map**
```js
const m = new Map();
m.set(1, "red");
m.set(2, "black");
m.set(3, "green");

for (let item of m) {
	console.log(item);
}
```

We'll get the following output for the code block above:
```
[1, red]
[2, black]
[3, green]
```

### `for … in` loop
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
```

The above code block will have the following output:
```
2008: The Dark Knight
2009: Avatar
2010: Toy Story 3
```

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `for` | The keyword used to declare the loop. |
| `let key in movies` | Assigns the variable `key` to each property in the object `movies` as the iteration through the loop occurs.     |
| `console.log(...)` | The block of code executed each time the loop runs. This line logs out the object's property key and the resulting value for the property.   |

#### Common Pitfall: Unexpected Behavior When Iterating over an Array

While we can use the `for … in` to iterate over an array, it is recommended we use one of the aforementioned for-loops instead. 

The reason for this is because the `for … in` loop iterates over **all** of the enumerable properties in an object, including any that may be inherited. This particular loop is not always recommended to use due to the ability to modify object prototypes in JS libraries. Details about prototypes are out of scope for this lesson, but the reader is invited to follow their curiosity, if interested in learning more: [Object Prototypes in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

Check out the example below for a potentially non-intuitive demonstration.

```js
const arr = [1, 2, 3];

Array.prototype.newMethod = true;

for (const i in arr) {
	console.log(i);
}
```

The above code block will have the following output:
```
1
2
3
newMethod
```

It is also worth mentioning that the `for … in` loop is meant for _objects_, and thus will be slower than other loops (such as the aforementioned for-loops or the upcoming while loop) which are better suited for arrays.

#### Practical Usage

So, wait, why use the `for … in` loop at all?

The `for … in` loop may be most practically used as a tool to debug. It is an easy way to check the properties of an object. 

## While Loop Family

### while loop
```js
while (condition) {
	// do some repetitive task
}
```

The `while` loop will evaluate the `condition` before the loop is run each time. If the `condition` evaluates to `true`, the loop executes the statement(s) in the block. Otherwise, the loop exits and stops executing the statement(s) in the block.

`While` loops evaluate the `condition` *before* each iteration. The loop will never execute if the condition evaluates to `false` before entering the loop.

#### Example

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

### do…while loop
```js
do {
	// perform repetitive task at least once
} while(condition)
```

The `do...while` statement creates a loop that executes a block of code until a condition evaluates to `false`.

In contrast to a `while` loop, a `do...while` loop will **always** execute the statements in the block once _before_ the condition is checked. 

#### Example
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

#### Common Pitfall: Indefinite Loop

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

## Additional Statements

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

#### Example
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

#### Example
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

#### Example
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