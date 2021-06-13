# Event Handling

## Goals

Our React web apps are more fulfilling when they handle user events. To handle events in React, we must learn the React conventions.

## Handling Events

As with general web development, handling events in React requires:

- A way for an element to listen to events
- Behavior that should happen when the event occurs

In React, we'll add event listeners by using special attributes in our JSX.

## Event Listeners

For any element to listen to an event, we set an attribute to the element.

For click events, we set the `onClick` attribute.

When submitting a form, for submit events, we set the `onSubmit` attribute. To handle when a `<input type="text">` element changes, we set the `onChange` attribute.

In general, to handle events in React, the proper attribute follows the pattern of "on`<blank>`" in camelCase, where `<blank>` is the name of the event. To confirm, we should research the correct attribute in the React docs, though!

Consider this example JSX, where a `SomeElement` element will listen for click events.

<!-- prettier-ignore-start -->
```js
<SomeElement onClick={...}></SomeElement>
```
<!-- prettier-ignore-end -->

## Event Handling Functions

The value of our event listener should be a function.

This function will be invoked whenever the appropriate event occurs.

Consider this `Post` component. It defines a function named `printMessage`. Then, it returns JSX that includes a "like" button.

The "like" button listens for click events. By setting the value of `onClick` to `printMessage`, our web app invokes `printMessage` whenever we click the like button.

<!-- prettier-ignore-start -->
```js
const Post = () => {
    const printMessage = () => {
        console.log('Hello! We\'re in printMessage!');
    }

    return (<section>
        <button onClick={printMessage}>Like</button>
    </section>)
}
```
<!-- prettier-ignore-end -->

![An app with a "like" button, and browser Dev Tools that read "Hello! We're in printMessage!" in the console.](../assets/state-and-event-handling_event-handling_printMessage.png)  
_Fig. An app with a "like" button, and browser Dev Tools that read "Hello! We're in printMessage!" in the console._

Every time we click our "Like" button, we'll see our message in the console!

```
Hello! We're in printMessage!
```

### Event Handling Functions Can Accept `event`

We can get details about our events in our event-handling functions.

If our event-handling function accepts arguments, the first argument will be an event object.

Consider this code, where `printMessage` accepts an event object, and then prints it.

<!-- prettier-ignore-start -->
```js
const Post = () => {
    const printMessage = (event) => {
        console.log('Hello! We\'re in printMessage!');
        console.log('This event object contains details about the event:', event);
    }

    return (<section>
        <button onClick={printMessage}>Like</button>
    </section>)
}
```
<!-- prettier-ignore-end -->

This is what prints to the browser console. (Your results may vary depending on your browser.)

```
Hello! We're in printMessage!
This event object contains details about the event: 
Object { _reactName: "onClick", ...
```

### Event Handling Functions Are Functions

It's helpful to know that our event handling functions are, otherwise, normal functions.

They can call other functions inside them, and pass arguments to them, too.

Consider this `Post` component. It:

- Defines a function, `printName`, which takes in a `name` argument
- Defines another function, `printMessage`. It calls `printName` with the argument `"Ada Lovelace"`.
- Sets `printMessage` as the click event handler for a "Like" button

<!-- prettier-ignore-start -->
```js
const Post = () => {
    const printName = (name) => {
        console.log('We\'re in printName!');
        console.log(`Hello, ${name}!`);
    }

    const printMessage = () => {
        printName('Ada Lovelace');
        console.log('Now, we\'re in printMessage!');
    }

    return (<section>
        <button onClick={printMessage}>Like</button>
    </section>)
}
```
<!-- prettier-ignore-end -->

Our output proves that our `printMessage` event handler can invoke other functions.

```
We're in printName!
Hello, Ada Lovelace!
Now, we're in printMessage!
```

## Pattern: Anonymous Functions

Our event handlers can be _anonymous functions_.

Consider our `printMessage` and `printName` example. Let's refactor our `printMessage` into an inline, anonymous function:

<!-- prettier-ignore-start -->
```js
const Post = () => {
    const printName = (name) => {
        console.log('We\'re in printName!');
        console.log(`Hello, ${name}!`);
    }

    return (<section>
        <button onClick={() => printName('Ada Lovelace')}>Like</button>
    </section>)
}
```
<!-- prettier-ignore-end -->

This code produces the output:

```
We're in printName!
Hello, Ada Lovelace!
```

Every time we click on our "like" button, our anonymous function will fire. This, in turn, invokes `printName('Ada Lovelace')`!

This is a common pattern in React code.

When our event handler has at least one parameter, we can use this technique.

### !callout-info

## Foreshadowing: Event Handlers With a Parameter

Instead of passing in `'Ada Lovelace'` to `printName`, what would happen if we passed in a variable?

<br/>

Look forward to handling events based on an input variable!

### !end-callout
