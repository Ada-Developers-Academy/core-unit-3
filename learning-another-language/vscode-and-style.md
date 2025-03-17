# Writing JavaScript Locally
<!-- VITE UPDATE -->
<!-- <iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=a7fe5712-e072-472c-867a-adda011baa7c&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=true&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe> -->

Before we get into Javascript syntax and writing our first programs, we need to set up our development environment! JavaScript was initially created to run in a browser, but it can be written locally and run using the [Node.js](https://nodejs.org/en/) runtime environment. This is useful for writing code that is not dependent on the browser, such as running backend logic on a server.

Even with our focus remaining primarily on front-end web development, we'll eventually make use of tools and libraries that require being processed with Node.js before the browser will be able to run it.

## Installing Node.js

We can use Homebrew to install Node.js.

```bash
$ brew install node
```

Running this command installs Node.js on our computer, including a tool called `npm`. Node.js is a framework for running JavaScript in the terminal, while `npm` is a package manager for Node.js, similar to `pip` for Python.

After installing Node.js we can now use the following command to run the Node.js REPL:

```bash
$ node
Welcome to Node.js v16.8.0.
Type ".help" for more information.
>
```

Just like when using the Python REPL, we can now interactively write and run JavaScript code. For example:

```javascript
$ node
Welcome to Node.js v16.8.0.
Type ".help" for more information.
> const x = 42;
undefined
> console.log(x);
42
undefined
>
```

The REPL executes each JavaScript statement as we enter them and prints the result to the console. We see the two `undefined` values in the output because variable declaration doesn't evaluate to a value, and the `console.log` function doesn't return a value. Python ascribes a value of `None` to functions with no return, while JavaScript uses `undefined`.

The REPL continues to run until we exit it. We exit the REPL by typing `Ctrl-D` or `.exit`.

### Running JavaScript Files

We can also create and run JavaScript files. For example we can create a new file called `hello.js` and add the code below. 
- For the moment, read through the code and make a hypothesis about what it is doing. We will explore creating our own "Hello, World" JavaScript program in an upcoming lesson!

```javascript
const helloWorld = function (name) {
  if (name === undefined) {
    name = "World";
  }
  console.log(`Hello ${name}!`);
};

helloWorld(); // Hello World!
helloWorld("Naya Spence"); // Hello Naya Spence!
```

With the content above pasted into our `hello.js` file, we can then run the file with:

```bash
$ node hello.js
Hello World!
Hello Naya Spence!
```

## Setting Up VS Code

Like Python, Visual Studio Code can be used to write and run JavaScript. VS Code also has a number of great extensions for use with JavaScript.

We'll install the following extension:

### Eslint

[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is an extension that allows VS Code to use a separately-installed `eslint` command line tool to check our JavaScript code for errors. Such a tool, which checks for code issues but isn't the actual language interpreter or compiler, is often called a [linter](<https://en.wikipedia.org/wiki/Lint_(software)>). Linters are useful for ensuring that our code is well-written and follows best practices. Recall that the name for the JavaScript standard is ECMAScript, so Eslint is a linter for JavaScript (ECMAScript).

### !callout-info

## There Are A LOT of Extensions

The JavaScript community is very active. There are many extensions for JavaScript. You are encouraged to experiment and explore, but we will only be requiring Eslint.

<br/>

Be aware that the Eslint extension only provides the connection between VS Code and the Eslint command line package. The Eslint command line package must be installed separately in each project. This is often handled by having an appropriate line in a project's configuration file, called the `package.json` file for Node.js projects. If starting our own project from scratch, we can add Eslint ourselves as we'll see below.

### !end-callout

We can give Eslint a configuration file to have it enforce a specific style guide. When an entire team uses the same style guide, this can ensure consistency and readability across an entire codebase even when many individuals are contributing to it.

## Style Guides

![How Coding Standards Proliferate](../assets/learning-another-language__vscode-and-style__coding-stanards.png)  
_Source: [XKCD](https://xkcd.com/927/)_

Many software teams adhere to a set of rules which serve as guidelines for how to write and organize code. Linters can be an integral part of a team's style conventions.

### Why Use a Style Guide?

Style guides are a common way for a group of people to create consistently formatted documents. Similar to how the MLA Guide or the Chicago Manual of Style helps authors clearly present their ideas in writing, a code style guide helps us express our intentions in code in a way that others on our team will be able to understand more easily.

As programmers, it's easy to fall into whatever habits our first programming language or learning materials encouraged. But small differences among programmers on concerns even as minor as spacing around operators, where to place curly braces, or how to name variables can make code more difficult to read. Each time we encounter a difference in style, we have to stop and think about it. Was this done intentionally? Is there a reason for it? Following a style guide helps us avoid these unnecessary context switches.

For a small team with only a few programmers, slight differences may go unnoticed. But as teams get bigger and more and more styles mix, code becomes increasingly inconsistent and unreadable. In the most extreme cases it can even lead to conflicts among team members, with time wasted arguing over the "right" way to do things, and needless churn as individuals try to "fix" each other's code, which itself can lead to the introduction of new bugs.

Simply put, style guides help us keep code formatted consistently between developers, resulting in fewer context switches, less conflict, and hopefully fewer silly mistakes.

Some common style guides include:

- [AirBNB](https://github.com/airbnb/javascript) has a well documented coding standard that is very popular.
- [Google](https://google.github.io/styleguide/jsguide.html) also has a popular coding style guide.

We will use the linting setting [ESLint Standard](https://eslint.org/docs/rules/) and [ESLint-React](https://github.com/yannickcr/eslint-plugin-react) (after introducing the React framework), which have a fairly minimal set of linting rules to highlight common JavaScript problems.

### Applying Style Rules to Our Code

Eslint reports violations of a style guide. We can then fix our code to follow our style rules. We encourage actively watching for Eslint errors, which appear both as wavy underlines and in the Problems VS Code tab, and fixing them as we write code. This trains our eyes to see style issue before they arise, while helping us develop a clean, consistent personal coding style.

![A style error being reported by Eslint. A string is using double quotes, but an active style rule requires single quotes. The double-quoted string is underlined with a wavy, red line. The Problems tab is also visible, and details about the error are displayed there with the text "Strings must use single quote. eslint(quotes)"](../assets/learning-another-language__vscode-and-style__error-display.png)  
*Fig. Keep an eye out for errors in the display!* [*(Full size image)*](../assets/learning-another-language__vscode-and-style__error-display.png)

On teams, however, this manual approach can lead to problems. It's possible to overlook errors, allowing style guide violations to be checked in to our codebase. To help with this, code formatters exist that can automatically reformat our code any time we save. When starting out, this can be jarring and frustrating. But it's often worth it when working with others to ensure that everyone really is working according to the style guide.

On our own, it's not as necessary to go completely automated. We can still use a code formatter, but we can also choose to run it manually when we want to. This can be a good way to learn about the style guide and how it works, and to see how our code changes as we apply the formatter.

<!-- available callout types: info, success, warning, danger, secondary, star  -->

### !callout-danger

## Use the Same Style Guide as Your Team!

If automatically applying style guides when saving, it's _essential_ that everyone work from the same style guide. Otherwise, the conflicting style guides will cause the formatter to repeatedly reformat code that was written according to a different style guide, and we'll be back to the same problem of unnecessary churn and conflict.

<br/>

Changes caused by a formatter can make it difficult to track changes in version control, as the important part of a commit can be hard to distinguish from the noise introduced by the formatter. If we notice that previously committed code isn't following the style guide, it's better to put any logic changes in one commit, and the style fixes in a separate commit that is clearly labeled to indicate that the changes were made to comply with styling rules. This makes it easier to see what's going on in the commit history.

### !end-callout

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is a popular code formatter. It's referred to as being "opinionated," meaning it has a specific way that it wants to format the code, with only a limited number of options that can be changed. This can be a problem if we have particular style rules that we want to enforce. On the other hand, by removing many decisions from coders, it can help reduce arguments over particular style choices.

There's also a code formatter built in to VS Code, without the need to install any further extensions.

To run either formatter, we can use the `Format Document` command. Use the keyboard shortcut ⇧⌘P (Shift-Command-P) to open the command palette, then type "format" to see the available commands. Select `Format Document` to run the formatter.

If there are multiple formatters installed, we can open the command palette, again search for "format", then pick `Format Document With...`. This lists the formatters available for the current file type, allowing us to choose which one to use.

When using a formatter, it's very important that the formatter and linter agree on the style guide to be used. Otherwise, the formatter will change the code to match its own style rules rather than those the linter is checking for, leading to the linter reporting errors caused by the formatter! Eslint can be configured to work smoothly with Prettier; there's a video linked in the Resources with more information. If you wish to try this, follow your curiosity!

## Typical Node.js Project Structure

A typical Node.js project has the following structure:

```
<project-root>
├── node_modules
│   ├── [folders with dependencies]
│   └── ...
├── src
│   ├── index.js
│   ├── [other files & folders]
│   └── ...
├── eslint.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

The `node_modules` folder contains packages installed with a package manager like `npm`. Similar to how `pip` downloads and installs packages in Python, `npm` downloads packages for us to use and places them in the `node_modules` folder. `npm` also adds the dependency information to our `package.json` file automatically, unlike `pip` which requires us to update our `requirements.txt` file in a separate step. The `node_modules` folder can grow very large as we install more packages. Make sure to add the `node_modules` directory to a project's `.gitignore` file so Git will ignore it when we make commits.

The `src` directory contains our application code.

The `eslint.config.mjs` file contains the linting rules that tell Eslint what code style rules to enforce. Depending on the age of the project and how the linting rules file was created, we may see this called any of the following: `.eslintrc`, `.eslintrc.json`, `.eslintrc.js`, `.eslintrc.cjs`, and potentially others. The `eslint.config.mjs` file is the current best practice from ESLint.

The `package.json` file contains information about the project including the dependencies (libraries required) and scripts to run the app.

The `package-lock.json` file primarily records the explicit version of each dependency installed. For example, if the `package.json` requests package `really-useful-package` of at least version 3, then the `package-lock.json` would record whether it was version 3.1, 3.2, or some other sub-version that was actually installed. Especially for projects involving more than one developer, this ensures that the same versions of dependencies are installed on all machines, minimizing isolated issues due to different versions of dependencies.

### An Example Node.js Project

Clone the [node-example](https://github.com/AdaGold/node-example) repository. Then run `npm install` or `npm i` to install the dependencies. There's no need to fork first, unless you would like to try making changes and then be able to commit your work to your own repo.

Examine the `package.json` file and look at the key-value pairs in the json file.

![Example package.json highlighting several areas of the file. "name" and "version" are described as "Name and version number". "scripts" is described as "Scripts to run the application. In this case, we can run the app with: npm start". "devDependencies" is described as "Dependencies for the development process, not for production." "dependencies" is described as "Dependencies used in production".](../assets/learning-another-language__vscode-and-style__package-json.png)  
*Fig. Several important areas of the `package.json` file.* [*(Full size image)*](../assets/learning-another-language__vscode-and-style__package-json.png)

The `scripts` key contains a list of commands that can be run from the command line. The `start` script is run when we issue the command `npm start`.

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-info

## Running Custom Scripts Requires <code>run</code>

Generally, scripts in the `scripts` key must be run as `npm run <script-name>`. However, a few script names are considered "well-known" and can be run without the `run` keyword. `start` is one of these well-known script names, which is why it can be run as `npm start` rather than `npm run start`.

<br/>

Other well-known scripts are `stop`, `restart`, and `test`. If we add a custom script entry not matching one of these names, then we must include the `run` keyword when running it.

### !end-callout

Examine the `eslint.config.mjs` file and look at the key-value pairs in the json file. These are the rules that Eslint enforces along with information about what version of ECMAScript and JavaScript file type are used.

![Example eslint.config.mjs highlighting several areas of the file. "languageOptions" is described as containing "The ECMAScript version of the code being linted and mode of the JavaScript file being used". The first line inside the export default block and "plugins" is described as "Pre-made rules to use as a starting point." "rules" is described as "Specific rules to enforce or ignore".](../assets/learning-another-language__vscode-and-style__eslint.config.mjs.png)  
*Fig. Several important areas of the `eslint.config.mjs` file.* [*(Full size image)*](../assets/learning-another-language__vscode-and-style__eslint.config.mjs.png)

### !callout-warning

## Alternative Node.js Package Managers

`npm` is not the only package manager in the JavaScript world. Another command we commonly see is `yarn`. It's an alternative package manager for Node.js. It functions very similarly to `npm` in that it can download packages for us to use in Node.js projects. It has a similar command line interface, but with some differences. We won't go into the details here, but if we run into a tutorial or package documentation that uses `yarn`, that would be a good time to have a closer look.

<br />

For now, the main thing for us to be aware of is that we should use only a single package manager in a project. If we use `yarn` to install packages, we should use `yarn` to run scripts and manage dependencies. Likewise, if we use `npm`, we should use `npm` for everything. Mixing the two can lead to problems. Some deployment hosts look for signs that a project has used both `npm` and `yarn` and will refuse to deploy it until we clean up the project files.

### !end-callout

### [Optional] Setting Up A Node.js Project From Scratch

To create a fresh Node.js project from scratch, we start by creating a new, empty directory, then add the project files we need, such as the `package.json` file. Note that in the steps below, names surrounded by angle brackets, such as `<project-folder-name>`, are placeholders for names we choose. We should replace the angle brackets and the text inside them with the name we want to use.

```bash
$ mkdir <project-folder-name>
```

To create a `package.json` file, `cd` into the project folder, then run `npm init`.

```bash
$ cd <project-folder-name>
$ npm init
```

`npm` will take us through a series of questions to generate a `package.json` file. For a small project such as this sample, we can accept the default values for each question by pressing `Enter`, with the exception of the location of the "entry point". For that, we should input `src/index.js`. We'll see why later.

For a larger project, we may want to provide more information. If we make a mistake or change our minds about something, we can always edit the `package.json` file later!

Creating a `package.json` file is the only thing required for a Node.js project. Unlike Python, we don't need to create or activate a virtual environment. Instead, we can install dependencies directly into the project folder. `npm` looks for the "nearest" `package.json` file it can find, and performs all its actions relative to that file.

So now that we have our `package.json` file, we can add dependencies with `npm install <dependency>`. For example, we can add the [underscore](https://underscorejs.org/) library (a common utility library) with:

```bash
$ npm install underscore
```

After running the command above, we'll see a new `node_modules` folder in our project directory. This folder contains the `underscore` library and any other dependencies we install. `npm` will also automatically add the dependency to our `package.json` file. Finally, it creates a `package-lock.json` file to record the exact version of each dependency installed.

Both the `package.json` and `package-lock.json` files _should_ be checked into version control. The `node_modules` folder, however, _should not_ be checked in. It's a good idea to add `node_modules` to a project's `.gitignore` file to ensure it's not accidentally checked in.

We can also add dependencies that will only be used during development with `npm install <dependency> --save-dev`. Development dependencies typically include things like linters, code formatters, and testing libraries.

For example, we can add the Eslint library, along with plugins to support linting both JavaScript code and Jest tests, using the command:

```bash
$ npm install eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise @eslint/eslintrc @eslint/js @stylistic/eslint-plugin globals --save-dev
```

Notice the version information for the development dependencies is added to the `package.json` file under the `devDependencies` key.

To use Eslint, we need to set up a `eslint.config.mjs` file to provide the rules we want to enforce.

In your terminal, from the root of your project directory, run the following command:

```bash
$ npm init @eslint/config@latest
```

Eslint will take us through several options to set up our project for linting. A basic project setup could respond to the prompts as follows:

<!-- The following was initially laid out using bullets, but it got very tall and
dominated this part of the material. The text layout is more concise and less
interrupts the flow of the surrounding material. -->

```text  
How would you like to use ESLint?
  > To check syntax and find problems
What type of modules does your project use?
  > JavaScript modules (import/export)
Which framework does your project use?
  > None of these
Does your project use TypeScript?
  > No
Where does your code run?
  > Node
The config that you've selected requires the following dependencies:
eslint, globals, @eslint/js
Would you like to install them now?
  > Yes
Which package manager do you want to use?
  > npm
```

In consultation with the Eslint [rules documentation](https://eslint.org/docs/latest/rules/), we can then edit the `eslint.config.mjs` file to add any additional rules we want to enforce.

Now we have the basic building blocks of a Node.js project. We can start working on our project by creating a `src` directory and an `index.js` file. It's due to this project structure (placing our `index.js` within the `src` directory) that we specified `src/index.js` as the entry point when we ran `npm init` earlier.

The following commands will create a `src` directory containing an `index.js` file with a simple `console.log` statement. Feel free to open the `index.js` file in VS Code and add your own code!

```bash
$ mkdir src
$ echo "console.log('Hello World!')" > src/index.js
```

We can also create scripts in the `package.json` file to run our application. For example, a `start` script for our project could look like:

```json
  "scripts": {
    "start": "node src/index.js"
  }
```

Keep in mind that the `package.json` file is a JSON file, so we need to use double quotes around the keys and values, commas between entries, but no trailing comma after the final entry in an object. The `npm init` command should have created a `scripts` section for us with a `test` line, so we can add our `start` script to that existing section as long as we're careful to follow the JSON syntax.

<br/>

<details>
<summary>Click to see part of the <code>package.json</code> file with our <code>start</code> script added.</summary>

```json
  (additional lines above)
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js"
  },
  "author": "",
  (additional lines below)
```

</details>

Congratulations! We have created a Node.js project. We can now run our application with `npm start`, which will display `Hello World!` in the terminal.

## Resources

- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - an opinionated code formatter
- [Youtube Video - The Common Coder: How to Set Up ESLint](https://www.youtube.com/watch?v=eieTlMwCwWU)
