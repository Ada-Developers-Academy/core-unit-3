# JSX

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=cc4ae742-d750-477b-aeec-ad490010cb45&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Goals

React JS provides a special syntax known as JSX. It's used when rendering components in our webapp, so we can expect to see JSX all over the place!

JSX is used to declare HTML-like UI in React JS. It determines what our webapp's rendered HTML looks like.

Before we start using JSX extensively, let's pause to understand what JSX is and how to write it.

## Introduction

In a newly created React app using `create-react-app`, we can see the following code snippets:

`src/index.js`

```js
<React.StrictMode>
  <App />
</React.StrictMode>
```

`src/App.js`

```js
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
```

What is this code? How do we read it? How do we write it?

## JSX

[**JSX**](https://reactjs.org/docs/introducing-jsx.html) is a _syntax extension_ to JavaScript that isn't normally available in vanilla JavaScript projects. It may look like HTML, but it's really JavaScript _in disguise_!

In our React projects, we'll write the logic for _how_ to render our components using JSX.

## Objects in JSX

We will create _objects_ in JSX.

An object in JSX contains at least one element.

```js
const welcomeMessage = <span>Welcome~</span>;
```

| <div style="min-width:230px;"> Piece of Code </div> | Notes                                                                                                                            |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `const welcomeMessage =`                            | We declare a `const` variable `welcomeMessage`, which will refer to our JSX object.                                              |
| `<span>Welcome~</span>`                             | A JSX object. When this JSX object is rendered in React, it will become a `<span>` HTML element, with the text `Welcome~` in it. |
| `;`                                                 | This variable assignment should end with a semicolon.                                                                            |

### JSX Objects With Children

An object in JSX can contain any number of inner elements.

```js
const welcomeMessage = (
  <section>
    <h1>Welcome~</h1>
    <p>It's nice to hear from you again!</p>
  </section>
);
```

The JSX object `welcomeMessage` will look like this HTML when it's rendered:

```html
<section>
  <h1>Welcome~</h1>
  <p>It's nice to hear from you again!</p>
</section>
```

In this case,

- The `<section>` element has two direct children
- The `<h1>` and `<p>` elements are siblings

### !callout-info

## Wrapping JS in Parentheses `()`

Because of automatic semicolon insertion, JavaScript developers need to be vigilant about line breaks. However, JSX is easier to read when we can use multiple lines and indentations freely!

<br/>

In most contexts, we can wrap JavaScript expressions in parentheses `()`, which may contain a single object that spans multiple lines. These wrapped parentheses help guarantee that JavaScript correctly interprets our code.

### !end-callout

### JSX Objects With Children: `App.js`

Let's revisit this `src/App.js`:

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

The `App` function returns one JSX object. This JSX object opens with a `<div>` element.

This `<div>` element has one child: the `<header>` element. The `<header>` element has three children: `<img>`, `<p>`, and `<a>`.

### !callout-info

## Modifying `App` to Use Variables

We can modify our `App` function to use more variables. The JSX object can be defined inside the function, and then returned.

```js
function App() {
  const appElements = <div className="App">... more elements ...</div>;
  return appElements;
}
```

Here, we are creating the `const` variable `appElements`, setting it to a JSX object, and then returning it.

### !end-callout

## Embedding Expressions in JSX

When we have a JavaScript expression, such as a variable or function call, to add into a JSX object, we can do so with `{}`.

<!-- prettier-ignore-start -->
```js
const guestName = 'Megha';

const welcomeMessage = (
  <section>
    <h1>Welcome {guestName}~</h1>
    <p>It's nice to hear from you again!</p>
  </section>
);
```
<!-- prettier-ignore-end -->

In this situation, the rendered HTML would look like:

```html
<section>
  <h1>Welcome Megha~</h1>
  <p>It's nice to hear from you again!</p>
</section>
```

### Embedding Expressions: `App.js`

Let's revisit this `src/App.js` again!

<!-- prettier-ignore-start -->
```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
<!-- prettier-ignore-end -->

We can focus on this part of the JSX:

```js
<img src={logo} className="App-logo" alt="logo" />
```

The value of the `src` attribute for this element will be the value of `logo`. `logo` was imported from `./logo.svg` at the top of `App.js`!

## Element Attributes in JSX Objects

We can set the element attributes for JSX objects just like we can for the HTML elements they resemble. For most element attributes, the JSX object syntax is identical to what we'd use for HTML elements.

```js
<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  Learn React
</a>
```

This `<a>` element will have the following HTML attributes when it's rendered:

- `href`
- `target`
- `rel`

## CSS Classes in JSX Objects

One of the most important differences between JSX objects and HTML elements is how to add CSS classes.

While HTML elements use the `class` attribute, in JSX we use the `className` attribute.

For example, this JSX object:

```js
<header className="App-header"></header>
```

will ultimately be rendered as:

```html
<header class="App-header"></header>
```

This will be crucial for styling!

## Comments in JSX Syntax

A JSX object can contain code comments only if the comments are embedded as a JavaScript expression.

For example:

```js
function App() {
  return (
    <div className="App">
      {/* Creates a header tag */}
      <header className="App-header">
        {/* Add in the logo */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Replaced the link with another paragraph */}
        <p>Learn React</p>
      </header>
    </div>
  );
}
```

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: tasklist
* id: 2d179669
* title: JSX
##### !question

Run the following experiments in your own React project.

The goal of this exercise is to practice creating and using JSX objects.

##### !end-question
##### !options

* Add another child element to `App` while the server is running
* Create a variable inside the `App` function to hold a string
* Embed a variable in the `App` component
* Add or modify an attribute in an element

##### !end-options
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: 50007c75
* title: JSX
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
