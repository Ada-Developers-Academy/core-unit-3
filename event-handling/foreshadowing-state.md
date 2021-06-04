# Foreshadowing: "State"

## Introduction

Keira wants to build a crab counter feature on [the crab site](https://replit.com/@adacore/Foreshadowing-State-Demo), which will show how many crabs there are.

![Crab Fan Site, with a heading titled "Crab Count: 0" and zero crabs](../assets/event-handling_foreshadowing-state_count_0.png)  
_Fig. The Crab Fan Site devoid of crabs_

![Crab Fan Site, with a heading titled "Crab Count: 7" and seven crabs](../assets/event-handling_foreshadowing-state_count_7.png)  
_Fig. After clicking the Add Crab button 7 times, the site is crawling with 7 crabs_

There are _many_ ways to accomplish this feature. We will demonstrate a possible approach, because it will help us explore one of the challenges that front-end developers often face: sharing state between different parts of a website.

## "State"

**State** is a general term to describe the information held in a web app at one specific moment in time.

In object-oriented programming, we said that an object's _state_ is its attributes, which are stored within the object. Similarly, we can say that a web app's state is the data that is stored within the web app.

In this experiment, we'll keep track of state using a global variable.

Again, the goal for this section is to observe an interesting problem in front-end development. We'll learn one way to solve this problem, and anticipate better ways in other JavaScript environments.

### Modifying "State"

Our strategy to create a crab counter will follow these steps:

- In [our HTML](https://replit.com/@adacore/Foreshadowing-State-Demo), create the HTML element that will hold our crab counter
- In [our JS](https://replit.com/@adacore/Foreshadowing-State-Demo):
  - Create a `state` object that will hold the number of crabs on our site
  - Modify the `addCrab` event-handler to modify the crab count number on `state`
  - Modify the `addCrab` event-handler to update how we show this content in the DOM

Let's do this!

First, let's add in our HTML element that holds our crab counter. We're keeping the structure simple for the sake of clarity, but we could use whatever arbitrarily complex HTML was needed to achieve our visual design goals.

For our purposes, the most important thing is that we have an element with the ID `crabCount`. We placed it inside our crab container, where we currently add new elements each time the user clicks the "Add Crab" button.

```html
<!-- ... other content, including the section holding the Add Crab button -->

<section id="crabContainer">
  <h2 id="crabCount">Crab Count: 0</h2>
</section>

<!-- remaining index.html content ... -->
```

Next, above the definition of the `addCrab` function in `index.js`, let's create an object stored in a variable named `state`. This object is accessible in all of our functions because variables defined outside a function are globally-scoped.

```js
const state = {
  crabCount: 0,
};

// const addCrab = (event) => { ...
```

### !callout-info

## Making `state` a `const`

If it seems strange that we're making `state` a `const` variable, even though we will be modifying it, remember that the `const` applies only to whether we can change _which_ object the variable references. By declaring that `state` is a `const`, we can't change `state` to point at a different object, but we can still modify the key-value pairs _within_ `state`!

### !end-callout

Now let's update our `addCrab` event-handler function to modify `state`, and then modify the DOM.

```js
  // ... other addCrab functionality ...

  state.crabCount += 1;
  const crabCountContainer = document.querySelector("#crabCount")
  crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
};
```

### Verify

If everything went according to plan, our crab counter feature should work after we reload the page! If we don't have this result, we can:

- Check the HTML and ensure there is a valid HTML element for our counter
- Check the JS and ensure we're selecting it correctly
- Check the location that `state` is defined, and it's key-value pair

## Global Variables

Our feature works! In some ways, it's a robust solution, too.

If we had more key-value pairs that we needed to track, we could add them to the `state` object. We wouldn't need to make more variables, we'd just add a new key-value pair.

Also, this `state` object is accessible by all of our functions, so we can re-use it however we like!

The solution _isn't_ ideal, however, if we consider scaling the project up. When we have twenty event-handler functions for twenty buttons, and 222 properties on `state`, this code may feel clunky and difficult to update and use.

For now, we can keep track of state through our global variables and look forward to how other libraries and frameworks deal with this.

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: d25e045b
* title: Foreshadowing State
##### !question

In this lesson's example, which of the following is the most accurate description of `state`?

##### !end-question
##### !options

* `state` is the collection of attributes that the event handlers modify
* `state` is what we use as `crabCount`, and its value is the number of crabs
* `state` is the container of the `crabCount` element, event handler, and value
* `state` is an object that holds key-value pairs, such as `crabCount` and the number of crabs

##### !end-options
##### !answer

* `state` is an object that holds key-value pairs, such as `crabCount` and the number of crabs

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 303ddde1
* title: Foreshadowing State
##### !question

In this lesson's example, which of the following is the most accurate description of how `state` is updated?

##### !end-question
##### !options

* We update state outside all the functions
* We update state as part of the `addCrab` event handler
* We update state as part of the `registerEventHandlers` event handler
* We attach state to our HTML element, and it updates automatically

##### !end-options
##### !answer

* We update state as part of the `addCrab` event handler

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
