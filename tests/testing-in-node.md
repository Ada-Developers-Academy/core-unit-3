# Testing In Node.js

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=669a9f30-b65b-47ce-b80d-ade101895c32&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=true&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Goal

When writing any software, it is important to have confidence in the quality of the code. Tests can help us verify that our code is working as expected.

We have looked at Jest and experimented with tests in CodeSandbox.  However, we have not yet used them in Node.js. In this section, we will learn how to use tests in Node.js and debugging tests with VS Code.

Our goal for this lesson is to:

- Practice using `npm` to install dependencies
- Apply our knowledge of Node.js to examine the `package.json` file
- Use VS Code to examine and debug tests

## Looking at a Sample Node.js Application

Earlier in this lesson, we looked at a [CodeSandbox](https://codesandbox.io/s/fizzbuzz-with-tests-riytqu?file=/test/fizzbuzz.test.js) application testing the `fizzBuzz` function. We will use the same project as a `Node.js` application.  

To follow this lesson, clone the [FizzBuzz-JavaScript](https://github.com/AdaGold/fizzbuzz_javascript) repository. Forking isn't required unless you would like to be able to make changes, then push them up to your own repo.

### Install Dependencies

Examine the `package.json` file.  Under the key `"devDependencies"` we find a list of dependencies for the project.  Most of these are required for getting the tests to run with the modern JavaScript features.

- @babel/core
- @babel/node
- @babel/preset-env

By default Node.js handles importing and exporting JavaScript files using an older approach, but using Babel we can use more modern features of JavaScript.

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-info

## Babel Enables Modern JavaScript

Don't worry about the details of configuring Babel for now. It's sufficient to know that it's involved with being able to use newer JavaScript features. Any project in the curriculum requiring it will have it already configured in the `package.json` file. As we work more with JavaScript projects on our own, we can learn more about Babel and how to configure it.

### !end-callout

We have also included `jest` as a dependency.  This is our testing framework.

To install these dependencies, we run the following command in the project home directory:

```bash
$ npm install
```

### Inspect the `test/fizzbuzz.test.js` file

Open the `test/fizzbuzz.test.js` file.  This is a simple test file that tests the `fizzBuzz` function.  

<br/>

<details>
<summary>How does the test import the <code>fizzBuzz</code> function?</summary>

The test imports the `fizzBuzz` function with the statement
```js  
import fizzBuzz from '../src/fizzbuzz';
```

</details>

### Running The Tests

Under the `"scripts"` key in the `package.json` file we find a command to run the tests.  This command is `"test"`.

To run the tests in the terminal we use following command:

```bash
$ npm test
```

We should get output similar to the following:

```
 FAIL  test/fizzbuzz.test.js
  fizzBuzz
    ✕ returns Fizz on multiples of 3 (2 ms)
    ✓ returns Buzz on multiples of 5
    ✓ multiples of three and five return FizzBuzz
    ✓ non-multiples of three or five return the number itself (1 ms)

  ● fizzBuzz › returns Fizz on multiples of 3

    expect(received).toEqual(expected) // deep equality

    Expected: "Fizz"
    Received: 9

      12 |
      13 |     // Assert
    > 14 |     expect(result).toEqual('Fizz');
         |                    ^
      15 |   });
      16 |
      17 |   test('returns Buzz on multiples of 5', () => {

      at Object.<anonymous> (test/fizzbuzz.test.js:14:20)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        0.246 s, estimated 1 s
Ran all test suites.
```

Yay!  The tests run!  Three tests are passing, and one is failing.  This means we are on the **RED** stage of our red-green-refactor cycle.

To get all our tests to pass, it will help to take a closer look at that single failing test. This can be easier without the additional output from the passing tests. Let's see how to inspect and run individual JavaScript tests using VS Code.


## Running Tests in VS Code

Let's open our project in VS Code with the `code .` command (remember to run it in the project root).  Our tests are in the `test` directory. Open the `fizzbuzz.test.js` file and inspect the tests.

If this is our first time viewing JavaScript tests in VS Code, the tests will probably not be automatically detected. If they aren't detected, we won't see the flask icon of the Testing panel in icon bar on the left.

![Flask icon for inspecting tests](../assets/tests__testing-in-node__flask-icon.png)

Let's fix this by installing the [Jest Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest). This will allow us to see the tests by clicking the flask icon in the editor, which switches us to the Testing panel.

After installing the extension, we should now see that the Jest extension has detected our tests, so click the flask icon to switch to the Testing panel.

![Flask icon displays Fizzbuzz tests](../assets/tests__testing-in-node__tests-detected-by-jest-extension.png)

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-warning

## Troubleshooting Tests in VS Code

It's possible our tests won't appear even after installing the Jest extension. Or sometimes tests that had been previously shown in VS Code will no longer appear.

<br/>

<details>
<summary>Expand this section for some troubleshooting tips.</summary>

We should first ensure there are no syntax errors in our code, either in the tests or in the code being used by the tests. Check the Problems tab in VS Code to see if there are any errors. If there are, fix them and try again. If nothing is jumping out at us, we can try running the tests from the terminal with `npm test` to see if there are any syntax errors reported there.

<br/>

If the tests are running from the terminal, but VS Code still doesn't see them, we may need to start the "test runner" manually. Open the Command Palette (⇧⌘P) and type `runner`. Look for the option `Jest: Start All Runners` and select it. This should start the runner and display the tests.

<br/>

If none of the above tips help, restarting VS Code sometimes fixes the problem (be sure to quit _all_ running instances with ⌘Q, not just the current window), as can reinstalling the Jest extension.

</details>

### !end-callout

Just like with Python, we can now use VS Code to run our tests, and even use breakpoints to inspect and debug them.

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-warning

## Debug Tests from the Testing Panel, Not the Debug Panel

Remember when running a test with the debugger to use the Debug button that gets displayed when hovering over a test name on the Testing panel, or by right-clicking the test status icon beside the test definition in the test code file.

<br/>

Do not use the Debug button on the Debug panel.

### !end-callout

## Exercise

Try using the debugger to inspect the tests and identify the problem.  Then fix the `fizzBuzz` function so that it returns the correct value.  Lastly run all the tests again to make sure they pass.

<br/>

<details>
<summary>Expand this section for some debugging tips.</summary>

To start thinking about what might be going wrong with the failing test, we should consider what the test expected and what it received.

The test expected the string `'Fizz'`, but it received the number `9`. The name of the test implies we are testing the behavior when the input is a multiple of three, and nine is in fact a multiple of three. The `fizzBuzz` function is _supposed_ to return `'Fizz'` when given a multiple of three. Taken all together, this suggests that the test is correct (we should always confirm this assumption) and that it's the `fizzBuzz` function which is not returning the correct value when given a multiple of three.

So now we turn our attention to the `fizzBuzz` function itself. For a small function like this, it's certainly possible that a visual inspection of the code will reveal the problem. But we can also use the debugger to step through the function and see what it's doing.

To do this, we can set a breakpoint on the first line _inside_ the `fizzBuzz` function. Click in the gutter area to the left of the line number of the first line of code in `fizzBuzz`, line two. A red dot will appear, indicating a breakpoint has been set.

Next, we can run the failing test under the debugger. With the Testing panel open, hover over the failing test name, and click the Debug button that appears. Now when the test calls `fizzBuzz`, it will encounter the breakpoint and pause execution just before running any of the code within the function. If we ran the test with the Run button as usual, the breakpoint would be ignored.

With the test execution paused, we can inspect each line of code before it runs, and predict what the behavior will be based on the current variable values. Will a comparison be true or false? Will a condition be met or not? Debugging isn't a passive process of repeatedly clicking the Step Over button and hoping for the best. It's an active process of thinking about what the code is doing, and what we expect it to do, and then stepping through the code to see if our expectations are met.

In this case, we're getting back a number from `fizzBuzz` rather than the desired `'Fizz'` string. Which branch results in a number being returned? As the code is currently written, what logical conditions are covered by that branch? Make a prediction about how the code will behave then step through the code to see if your prediction is correct.

We see that there are branches that handle the cases of the input being a multiple of fifteen (that is, a multiple of both three and five), and of the input being a multiple of five. Any other case will be handled by the `else` branch, which returns the original input. `fizzBuzz` is supposed to return `'Fizz'` when the input is a multiple of three, but there is no condition checking for that case.

We can fix this by adding a condition that checks for multiples of three, and returns `'Fizz'`. Be sure to think about the order of the conditions. Does it matter where in the sequence of conditions we add our code checking for multiples of three? Why or why not?

Again, for a small example like this, it may not be necessary to fire up the debugger and step through our code. But as our code grows in complexity, the debugger becomes an invaluable tool for understanding what our code is doing, and for identifying and fixing problems. We can build our comfort with the debugger by using it on small examples like this, where we may already have a fairly good idea about what's going on.

</details>


## Summary

In this lesson we examined how to install dependencies and run tests in Node.js. We also looked at how to configure VS Code to run and debug tests.
