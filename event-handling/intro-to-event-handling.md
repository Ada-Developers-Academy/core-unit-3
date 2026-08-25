# Intro to Event Handling

## Goals

Our goal for this lesson is to introduce concepts related to event handling, so we can write event-handling code later.

## Introduction

At the heart of front-end development is event handling. Our web apps are most useful when they can _react_ to different user interactions.

The browser is great at responding to user interactions. Every time the user interacts with a page, the browser recognizes it as an _event_.

Therefore, to handle user interactions, we should write code to handle _events_.

## Vocabulary

| Vocab | Definition                       | How to Use in a Sentence                                             |
| ----- | -------------------------------- | -------------------------------------------------------------------- |
| Event | A named action within a browser. | "The browser detected a "click" event after we clicked on the form." |

## Browsers Listen for User Events

The browsers provide a standard library of functions that enable JavaScript developers to manipulate websites. This standard library is called [the Web API](https://developer.mozilla.org/en-US/docs/Web/Reference/API).

As part of the Web API, browsers allow JavaScript to interact with **events** that happen on websites.

## Events

**Events** are named actions within a browser. Events are:

- "fired," "triggered," or "sent" when the event occurs. We will hear these terms used interchangeably.
- "listened to," "handled," or "received" when we write JavaScript code to watch for these events and define what happens next. We will hear these terms used interchangeably.

Whenever _anything_ happens in the browser, the browser can recognize it, and react to it.

Plenty of events are handled by the browser by default. Here are a few example events, and how the browser might handle them:

| <div style="min-width:270px;">When a user...</div>                  | Then...                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| clicks a link              | the user goes to the link's destination, such as the home page |
| submits a form                  | the form data is sent somewhere, possibly to complete a purchase |
| types the letter `V`            | the character `V` displays, and the blinking text cursor moves   |
| hovers the cursor over an image | the alt text displays                                            |

### Event-Driven Programming

We can write JavaScript to more specifically handle events. We write JavaScript event handling code to watch for a certain event, and then define what happens next.

Here are some specific examples we could write:

| When a user...                         | Then...                                             |
| -------------------------------------- | --------------------------------------------------- |
| Clicks on the "dark mode" button       | The website's entire theme and appearance changes   |
| Submits a "share to social media" form | API calls are made to Facebook, Twitter, and GitHub |
| Scrolls to the bottom of a page        | The website loads more articles                     |

In JavaScript:

1. Events have names, like `click` or `scroll`
1. Events always happen on an HTML element. For example, a `click` event happens on a `<button>`... or a `<section>`... or a `<body>`. Every event happens on at least one element.
1. Events need a way to be fired/triggered/activated at the time of the event
1. Events need a way to be listened to

With those points in mind, when we write event-handling code, we should consider the following questions:

- When does a specific element (`<button>`, `<form>`, `<section>`, etc.) fire a specific event?
  - What is the element? What is the event name?
- How is the event handled? How do we write a function that can listen for a specific event on a specific element?

## Default Events in the Browser

This is a list of some events that the browser fires. We can watch for and handle any of these, and many others. We can learn more [from MDN](https://developer.mozilla.org/en-US/docs/Web/Events).

| <div style="min-width:150px">Event Name</div>   | Fired When                                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `keydown`    | any key is pressed                                                                                                |
| `keyup`      | any key is released                                                                                               |
| `click`      | A pointing device button (such as left, right, or middle button; soon to be primary button only) has been pressed and released on an element |
| `dblclick`   | A pointing device button is clicked twice on an element                                                           |
| `mousemove`  | A pointing device is moved over an element. (Fired continuously as the mouse moves.)                              |
| `mouseenter` | A pointing device is moved onto the element that has the listener attached                                        |
| `mouseleave` | A pointing device is moved off the element that has the listener attached                                         |
| `focus`      | An element has received focus                                                                   |
| `offline`    | The browser has lost access to the network                                                                        |
| `online`     | The browser has gained access to the network                                                                      |

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: ordering
* id: 7d057d6d
* title: Intro to Event Handling
##### !question

Arrange the options below so that they match these terms in this order:

1. Event
1. Browser
1. Example of an event
1. Example of how to handle an event

##### !end-question
##### !answer

1. An object that represents a named action that occurred
1. A platform that can detect changes on a website
1. Typing a letter into a text box
1. Displaying a letter on the page in a small font

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
