# Adding onclick Handling

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=ac2483cc-a37a-4b76-a463-ad4100fee632&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

### !callout-info

## These videos use an online JavaScript REPL

The videos will walk through code very similar to what is shown in this lesson, however, not all examples exactly match the style we are following in this curriculum. In this course, the style and content of the code examples in this lesson are preferred over the examples shown in the video. 

<br>

Additionally, in the video the instructor is walking through the code using an online REPL tool rather than VS Code. You will see some differences between how you run the code locally and how the instructor will run the code in the online tool. 

### !end-callout

## Goals

Our goal for this lesson is to implement event handling in JavaScript. 

## Introduction

Keira is a web developer creating [a website dedicated to the science and beauty of crabs](https://adagold.github.io/adding-onclick-handling-demo/). Keira wants to add crabs to her website every time the user clicks a button named "Add Crab."

Keira will need to do two things every time she wants to handle an event:

1. Build an event handler
1. Register the event handler on some HTML element(s)

## Vocabulary

| Vocab         | Definition                                                                                                           | How to Use in a Sentence                                                                                                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Event Handler | A function whose responsibility is to perform necessary, required, or desired actions after a certain event is fired | "The function is a click event handler because we expect it to run after the button is clicked," "In order for something to happen after we scroll, we need to make an event handler for what should happen when the user scrolls." |

## Preparing the Page

We can follow along with Keira's code [in this repo](https://github.com/AdaGold/adding-onclick-handling-demo).

Before we look at how to set up our event handler, we need to have an element that can raise the events we want to receive. We should aso set up any other elements that we will modify in response to the event.

We know that we need a button named "Add Crab", so we add the following HTML to our page:

```html
<section>
  <button id="addCrabButton">Add Crab</button>
</section>
```

The `<section>` is optional, but it can be useful to wrap controls in another grouping element to help with styling.

Next, we need to make sure there's place for us to add all those crabs! We can add another section to act as a container for them all.

```html
<section id="crabContainer"></section>
```

And that's it! Moving forward, we'll look at how to listen for events coming from the button, and then add lots and lots of crabs to crab container using an event handler!

## Building an Event Handler

In order to add our behavior, let's start by defining our _event handler_ in [our JavaScript code](https://github.com/AdaGold/adding-onclick-handling-demo/blob/main/src/index.js). An **event handler** is a function whose responsibility is to perform necessary, required, or desired actions after a certain event is fired.

Let's add a function named `addCrab` to our `index.js` file. There's no specific pattern to follow, so we can code it in any style that works. This function should:

- Create a `span` element that will contain our new crab
- Find the HTML element that matches the given selector rule (our crab container!), which is where we will add our new `span`
- Set the new crab element (`span`) content to something appropriately "crabby," then add it to our crab container which we just selected

```js
const addCrab = () => {
  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');
  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);
};
```

Note that this code relies on a very specific HTML element existing: our crab container! The variable `crabContainer` is set to the first HTML element that matches the CSS selector `#crabContainer`. There should be only a single candidate element, since `id` attributes are supposed to be unique within a document.

## Registering the Event Handler

Now that we have our event handler, we need to set it up to run when the "Add Crab" button is clicked. To do so, we need to register the event handler on the button.

Let's inspect the main method we'll use to register an event: `addEventListener`.

```js
someElement.addEventListener('some event name', reactToEvent);
```

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                                                                              |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `someElement`                                       | **Replace this** with a reference to an HTML element in the DOM. This is the element that _raises_ the event we're waiting for.                                                                                  |
| `addEventListener( ... );`                            | All HTML elements have this method. It takes in two arguments: an event name and an event-handling function. Its responsibility is to make `someElement` _listen_ for the given event, and react appropriately.    |
| `'some event name'`                                 | **Replace this** with the name of the event for which we're listening. We can use [research and documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element#events) to find the names of the events we need. |
| `reactToEvent`                                      | **Replace this** with a function that should execute whenever `someElement` receives a `'some event name'` event. This function can optionally take in a parameter, often called `event`, which is an object representing the actual Event.   |

### !callout-secondary

## `reactToEvent` Can Accept an Event Argument

In this introduction, we've mentioned that `reactToEvent` can accept an event parameter. Hold that thought! We'll leave `addCrab` as is for now, but we'll come back to this before we move on to the next topic.

### !end-callout

### Example: Registering Handlers to Add Crabs

Let's finish wiring up our Crab Site example! We want the `addCrab` handler to run every time we click an "Add Crab" button.

We already have the HTML element representing our button:

```html
<button id="addCrabButton">Add Crab</button>
```

as well as our crab container:

```html
<section id="crabContainer"></section>
```

and our `addCrab` event handler:

```js
const addCrab = () => {
  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');
  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);
};
```

Now we can register our `addCrab` event handler with our "Add Crab" button. Let's examine the following code, which registers our event handler in response to handling a _different_ event: `DOMContentLoaded`.

```js
// ... addCrab ...

const registerEventHandlers = () => {
  const crabButton = document.querySelector('#addCrabButton');
  crabButton.addEventListener('click', addCrab);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
```

| <div style="min-width:300px;"> Piece of Code </div> | Notes                                                                                                                                         |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `const registerEventHandlers = () => { ... }`       | First, we'll make a helper function named `registerEventHandlers`, whose responsibility will be to connect elements and their event handlers  |
| `const crabButton`                                  | We create a `const` variable to hold our crab button element                                                                                  |
| `document.querySelector( ... )`                       | We use this function to find our crab button. We could have used `getElementById` or another similar method if we wanted.                       |
| `'#addCrabButton'`                                  | The method `querySelector` takes in a CSS selector. In this case, we _must_ ensure there's an element with the ID `addCrabButton` in the DOM. |
| `crabButton.addEventListener( ... )`                  | We call `addEventListener` on `crabButton` because that's the element that will be clicked, resulting in the click event being raised.                                                 |
| `'click'`                                           | The name to use to listen for the click event is "[click](https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events)."         |
| `addCrab`                                           | We want the `addCrab` function to run when the `crabButton` is clicked.                                                                       |
| `document.addEventListener( ... )`                    | After defining the `registerEventHandler` function, we call this function. We want the _document itself_ to react to an event.                |
| `'DOMContentLoaded'`                                | The name of the event that fires when the DOM has loaded completely is "DOMContentLoaded."                                                    |
| `registerEventHandlers`                             | This is the function that should execute when the `document` receives an event named "DOMContentLoaded."                                      |

### !callout-info

## Why Do We Listen for DOMContentLoaded?

We need to ask our document to wait and register the event handlers _after_ the DOM has been completely loaded. This is because the JavaScript file often loads faster than the DOM does! If we don't wait for the DOM to load, then our JS code will not find our `crabButton` in the DOM, and `crabButton` will be `null`. It's important to consider what's in the DOM whenever we search for an element.

<br/>

In other libraries, this problem may already be solved by the library, without us registering a DOMContentLoaded handler.

### !end-callout

### Verifying

Let's check our website now to see if we can add some crabs!

![Crab Fan Site, with seven crabs added to the bottom as a result of clicking the "Add Crab" button seven times.](../assets/event-handling_adding-onclick-handling.png)  
_Fig. The Crab Fan Site, now with extra crabs thanks to JavaScript!_

If everything went according to plan, when we click the "Add Crab" button, it adds a crab to the page.

If we don't have this result, different ways we can debug include:

- Checking the HTML and JS to make sure there is:
  - A valid "Add Crab" button that can be found
  - A valid "Crab" section that can be found
- The names of events are case-sensitive

### The Event Object

When we introduced the `addEventListener` function, we mentioned that the _event-handling_ _callback_ function we passed in could accept an _event_ argument.

"Events" are _themselves_ objects. Event objects contain all the information about the event, such as what type of event it is, and where it happened. The following events would all be separate event objects:

1. A click event that happens on the `addCrab` button at 12:00
1. A click event that happens on the `addCrab` button at 12:01
1. A click event that happens on the `addCrab` button at 12:02, and so on.

By default, our browser will pass in the event object (the object that represents the event) into every event-handler function.

Access to the Event object can give us extra details about the event, and can help us customize our event-handling.

Let's change our JS code to access the event object that every event handler receives. Notice that we are only changing two things:

1. Add `event` parameters for our event-handling functions
1. Access the events inside the functions in print statements

```js
const addCrab = (event) => {
  console.log('in addCrab:', event);
  // ... other addCrab functionality
};

const registerEventHandlers = (event) => {
  console.log('in registerEventHandlers:', event);
  // ... other registerEventHandler functionality
};

// ...
```

When we run this, we can see in the console that we get details about the `DOMContentLoaded` event when the page loads. And every time we add a crab, we get details about the "click" event (helpfully labeled as `MouseEvent` in the console).
