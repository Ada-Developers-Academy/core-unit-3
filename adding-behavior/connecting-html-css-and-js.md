# Connecting HTML, CSS, and JS

## Goals and Introduction

JavaScript is special. It's a language that can run directly within web browsers, letting it access and modify the structure of any HTML being displayed! It is able to do this even for web pages that aren't served by a web server.

Over the years, other languages have tried to fulfill this function, but JavaScript has consistently remained the most popular browser-embedded language! This makes it our default programming language to use when adding behavior to websites.

Even though we won't need to start and run a server, we still need to connect our HTML, CSS, and JS files together before our JavaScript will run!

## Project Folder Structure

In our web projects, generally speaking, we can arrange our HTML, CSS, and JS files however we'd like. However, the following is a great structure to mimic:

```
.
├── src
│   └── index.js
├── styles
│   └── style.css
└── index.html
```

- We keep our main HTML file, `index.html`, in the root project folder.
  - Other HTML files can also be placed here, or in a folder named `pages`.
- We keep our CSS files in a folder named `styles`.
  - `style.css` is a great name for a generic CSS file.
  - If we made a CSS file for each HTML file, they files could share names (such as `index.css` to correspond to `index.html`).
- We keep our JS files inside a folder named `src`.
  - We can name our JS files based on their content, such as a `changeCursor.js` file to hold code that changes the mouse cursor, or a `scrollToTop.js` file to define scrolling behavior.
  - We can make a JS file for each HTML file, where the files could share names (such as `index.js` to correspond to `index.html`).

## Adding the Script Tag

In order for our website to load HTML, we add a link to our JavaScript file in our HTML, similar to how we've included CSS.

```html
<!-- index.html -->
...
<body>
  <!-- ... -->

  <script src="src/index.js" type="text/javascript"></script>
</body>
```

Let's dive into this line, which we'll place at the end of the body, right before the closing `</body>` tag.

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                              |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `<script`                                           | Begins a `<script>` tag, a tag used to embed JavaScript                            |
| `src=`                                              | The `src` attribute holds the relative path to the JavaScript file we want to load |
| `"src/index.js"`                                | **Replace this** with the relative path from this HTML file to the JS file         |
| `type="text/javascript">`                           | An attribute that specifies that we're linking a JS file                           |
| `</script>`                                         | A closing tag                                                                      |

Just like CSS links, we can include multiple `<script>`s in one page, and the scripts will be loaded in order.

### !callout-info

## Location of `<script>`

Where should the script tag go? Believe it or not, people have a lot of opinions on this topic. 

<br />

<details>

<summary>If you'd like to learn more, click here to expand and see our thoughts.</summary>

<br />

When the browser encounters a `<script>` tag, it stops loading the HTML document. Instead, the browser pauses to download the _entire_ script, which might take a long time to load. The browser continues rendering the page only after the script has finished downloading.

<br/>

If we put our `<script>` tags before the site's content, the user may be looking at an empty white screen while the scripts load—not a great user experience.

<br/>

If we put our `<script>` tags at the bottom of the `<body>`, then the browser renders the whole page first, before loading the scripts.

<br>

There are more techniques to work with this problem, such as downloading the scripts asynchronously. They're interesting solutions, follow your curiosity!

</details>

### !end-callout

## Example: Hello, World!

[Let's make a Hello, World! program](https://replit.com/@adacore/Connecting-HTML-CSS-and-JS-Demo#index.html) that helps us see how HTML, CSS, and JS connect.

In a project, we can create this file, `src/index.js`:

```js
console.log('Hello, World!');
```

Then, we can create a minimal `index.html` file. The contents don't matter in this exercise, except that we need to keep the `<script>` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Connecting HTML, CSS, and JS Demo</title>
    <link href="styles/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <main>
      <h1>🦀 Welcome to my Crab Fan Site 🦀</h1>
      <p>Here is my website where I post interesting facts about crabs.</p>
    </main>
    <script src="src/index.js"></script>
  </body>
</html>
```

### Observing the Console

When we [open our HTML file in our browser](https://replit.com/@adacore/Connecting-HTML-CSS-and-JS-Demo#index.html), we should see our beautiful crab fan site.

When our HTML page loads the JS file designated in the `<script>` tag, _the browser runs the JS file immediately_. Therefore, our `console.log('Hello, World!');` should have been executed.

We can look at the console by:

- Using the provided console, if the website is being built on Replit.com
- Using the browser Dev Tools, in the tab labeled "Console."

![Browser Dev Tools console opened, with the string Hello, World! printed to the console](../assets/adding-behavior_connecting-html-css-js_hello-world.png)  
_Fig. Inspecting the browser console using the browser Dev Tools._

This experiment proves the following things to us:

1. We can connect our HTML, CSS, and JS files successfully
1. JS files run immediately after our HTML file loads them using the `<script>` tag
1. We can access the console through the browser Dev Tools

### !callout-info

## Refresh Often

If we cannot see the print statement in the console, try refreshing the page while the Dev Tools are open. Refreshing the page reloads the HTML page, and therefore also reloads and re-runs the JS file. We'll need to refresh the page any time we want to see changes in our HTML, CSS, or JS files.

### !end-callout

## Example: Random Number

We can put any valid JavaScript code we want in the script file, as long as our browser can run it. This includes making functions, calling them, creating objects, and so on.

For example, we can add in the following code to our `src/index.js` file:

```js
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
}

console.log(getRandomNumber(10));
console.log(getRandomNumber(100));
```

The above code creates a function `getRandomNumber`, which takes in a number `max`, and returns a random integer between 0 and `max` (inclusive).

Then, it calls that function, and prints out the result to the console. First, it calls the function after passing in `10`, and then again with the argument `100`.

When we reload our HTML page, our random numbers should print to the console. When we reload again, we'll (probably) get other random numbers.

![Browser Dev Tools console opened, with the results of getRandomNumber printed to the console: 7 and 59](../assets/adding-behavior_connecting-html-css-js_random.png)

## Example: Current Time

Let's extend our JavaScript with one more example.

We can add the following code to `src/index.js`:

```js
const getCurrentTime = () => {
    const currentDate = new Date();
    return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}

console.log(`The current time is ${getCurrentTime()}.`);
```

This code creates a function `getCurrentTime`, which will return a formatted string of the current time when the function is called. Then, we call that function and print it to the console.

![Browser Dev Tools console opened, with the result of getCurrentTime printed to the console: 22:24:53](../assets/adding-behavior_connecting-html-css-js_current-time.png)  
_Fig. The result of printing the current time in the console_

As we would expect, we see the time when the script executed printed to the console. As we refresh the page, we will see the updated time printed.

## Check for Understanding

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: deff39a1
* title: Connecting HTML, CSS, and JS
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
