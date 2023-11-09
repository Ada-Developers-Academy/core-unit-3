# JSX

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=cc4ae742-d750-477b-aeec-ad490010cb45&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Goals

React JS provides a special syntax known as JSX. It's used when rendering components in our webapp, so we can expect to see JSX all over the place!

JSX is used to declare HTML-like UI in React JS. It determines what our webapp's rendered HTML looks like.

Before we start using JSX extensively, let's pause to understand what JSX is and how to write it.

## Introduction

In a newly created React app using Vite, we can see the following code snippets:

`src/main.jsx`

```js
<React.StrictMode>
  <App />
</React.StrictMode>,
```

`src/App.jsx`

```js
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
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
const welcomeMessage = <span>Welcome</span>;
```

| <div style="min-width:230px;"> Piece of Code </div> | Notes                                                                                                                            |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `const welcomeMessage =`                            | We declare a `const` variable `welcomeMessage`, which will refer to our JSX object.                                              |
| `<span>Welcome</span>`                             | A JSX object. When this JSX object is rendered in React, it will become a `<span>` HTML element, with the text `Welcome` in it. |
| `;`                                                 | This variable assignment should end with a semicolon.                                                                            |

### JSX Objects With Children

An object in JSX can contain any number of inner elements.

```js
const welcomeMessage = (
  <section>
    <h1>Welcome</h1>
    <p>It's nice to hear from you again!</p>
  </section>
);
```

The JSX object `welcomeMessage` will look like this HTML when it's rendered:

```html
<section>
  <h1>Welcome</h1>
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

### JSX Objects With Children: `App.jsx`

Let's revisit this `src/App.jsx`:

```js
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
```

<br />

<details>
<summary>HMR: Hot Module Reloading</summary>

Hot Module Reloading, or HMR, as mentioned in `App.jsx` is a feature that the Vite development server comes with that automatically reloads the app when we edit the source code. 

<br />

This is a useful development feature, but because of how it can interact with editing files in VS Code, this is why we recommend turning off the VSCode Auto Save feature when working with a React project.

</details>

<br />

### !callout-info

## JSX Expressions Must Have One Parent Element!

In JSX, there is a rule that states that a JSX object must always return a single element. This rule applies to React, which means that every component can only return a single root element.

<br />

The Vite template meets this requirement by wrapping its JSX markup in a special [Fragment](https://react.dev/reference/react/Fragment) tag. Keep reading for more about Fragments, and alternative approaches we can use in our own components.

<br />

<details>
<summary>Using A Fragment to Group Elements</summary>

<br />

If a component has two sibling elements, for example, instead of a single root element then we would need to update our component to make it valid.

```js
{/* Example of an invalid component because more than one element is returned*/}
return (
  <h1>Understanding Your Cat</h1>
  <p>Like humans, every cat has unique characteristics that make it different.</p>
)
```

<br />

There are a couple of ways to modify this component to make it valid. We can wrap the two elements in a single parent element, like a `<div>`. However, this means we would be modifying the structure of our component by adding another element. 

<br />

If we do not want add a parent element, we can use a Fragment to return multiple elements from a React component because the Fragment allows us to group elements without adding extra nodes to the DOM.

```js
{/* Example of a valid component because two sibling elements are wrapped in a Fragment*/}
return (
  <>
    <h1>Understanding Your Cat</h1>
    <p>Like humans, every cat has unique characteristics that make it different.</p>
  </>
)
```
</details>

### !end-callout

The `App` function returns one JSX object that starts with a Fragment, whose first child is the first `<div>` element of the output markup.

This first `<div>` element has two children: the `<a>`, or anchor, elements. Each `<a>` element has one child: `<img>` element.

Following the first `<div>` element is it's sibling, which is an `<h1>` element. Read through the rest of the JSX object. What other sibling elements can you identify? What are their children elements?

### !callout-info

## Creating JSX Objects and Assigning Their Values to Variables

JSX expressions can be defined inside our `App` function and their values can be assigned to variables, just like we would do with any other values in JavaScript. We can then return the variable that refers to the defined JSX expression, see the example below. 

```js
function App() {
  const appElements = <div>... more elements ...</div>;
  return appElements;
}
```

Here, we are creating the `const` variable `appElements`, setting it to a JSX object, and then returning the variable.

<br />

We can modify our `App` function to use more variables if we find that they make working with the layout of a component more convenient. We might not always use variables to reference our JSX object in our own code, but we should be familiar with this syntax because we may encounter it in React code from other sources.
### !end-callout

## Embedding Expressions in JSX

When we have a JavaScript expression, such as a variable or function call, to add into a JSX object, we can do so with `{}`.

<!-- prettier-ignore-start -->
```js
const guestName = 'Megha';

const welcomeMessage = (
  <section>
    <h1>Welcome {guestName}</h1>
    <p>It's nice to hear from you again!</p>
  </section>
);
```
<!-- prettier-ignore-end -->

In this situation, the rendered HTML would look like:

```html
<section>
  <h1>Welcome Megha</h1>
  <p>It's nice to hear from you again!</p>
</section>
```

### Embedding Expressions: `App.js`

Let's revisit this `src/App.jsx` again!

<!-- prettier-ignore-start -->
```js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```
<!-- prettier-ignore-end -->

We can focus on this part of the JSX:

```js
<img src={reactLogo} className="logo react" alt="React logo" />
```

The value of the `src` attribute for this element will be the value of `reactLogo`. `reactLogo` was imported from `./assets/react.svg` at the top of `App.jsx`!

## Element Attributes in JSX Objects

We can set the element attributes for JSX objects just like we can for the HTML elements they resemble. For most element attributes, the JSX object syntax is identical to what we'd use for HTML elements.

```js
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
```

This `<a>` element will have the following HTML attributes when it's rendered:

- `href`
- `target`

## CSS Classes in JSX Objects

One of the most important differences between JSX objects and HTML elements is how to add CSS classes.

While HTML elements use the `class` attribute, in JSX we use the `className` attribute.

For example, this JSX object:

```js
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
```

will ultimately be rendered as:

```html
<p class="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
```

This will be crucial for styling!

## Comments in JSX Syntax

A JSX object can contain code comments only if the comments are embedded as a JavaScript expression.

Two comments have been embedded in the Vite generated template in the example below:

```js
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Links for users to learn more about Vite and React */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Clicking the button will increase the count displayed on the page*/}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
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
