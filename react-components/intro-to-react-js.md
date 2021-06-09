# Intro to React JS

## Learning Goals

- What is React?
- Why do we learn React?
- Who is using React?
- Intro to the Virtual DOM
- Intro to Components

## Introduction

Consider a social media website, such as [Reddit.com](https://www.reddit.com/r/reactjs/). Every given web page needs to do soooo many things! To name a few, each web page needs to:

- List posts, the number of upvotes, and the comments
- Display upvote and downvote buttons
- Handle upvote and downvote buttons
- List related communities
- Handle the buttons to "join" those communities
- Display and handle the UI to create a new post

![](../assets/react-components_intro-to-react-js_reddit.png)

Imagine creating all of this functionality using HTML and vanilla JavaScript. It wouldn't be impossible, but our resulting code is probably:

- Huge! There's a lot of code in that logic to write!
- Unorganized. Is there one file that holds all the JS? Are there multiple files? How are they organized?
- Full of repetition. We need to create event handlers all the time. Is there a way to simplify this repetition?

Great software is maintainable, functional, and performant. How can we strive towards those values in our front-end code?

## Vocabulary and Synonyms

| Vocab               | Definition                                                                                                                                                                                               | How to Use in a Sentence                                                                                                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Interface (UI) | The elements that a user uses in order to interact with a machine. UI elements are usually visual, but UI also describes _how_ a user interacts with a webapp, such as buttons, text fields, or sliders. | "This UI was easy to use and enjoyable, because the text was readable, and the buttons were intuitive," "This UI was difficult to use, because I didn't understand the navigation menu, and the data was unorganized." |
| Components (React)  | Independent, reusable pieces of UI.                                                                                                                                                                      | "My recipe webapp has a `Recipe` component, which renders a recipe," "I created a `RedButton` component to reuse. All `RedButton` components are red and animate on click."                                            |

## Create Complex UIs with React Components

React is an [open-source](https://github.com/facebook/react) JavaScript library for building user interfaces.

The React library will give users the ability to create React _components_.

**Components** are rendered UI elements. Components in React may contain:

- Styles
- Complex logic
- Data
- State
- Event-handling

Components are intended to be flexible and reusable, too! A single web page can render many components inside it.

## Who is using React?

React launched in 2013, and grew in popularity beginning in 2016.

As of June 2021, the following webapps use React:

- Netflix
- Khan Academy
- Asana
- Facebook
- Airbnb
- Reddit
- UberEats
- PayPal
- Twitter
- Instacart
- OkCupid

## Resources

Like any new technology, it's great to some resources handy.

- [Official React website](https://reactjs.org/)
- [Official React documentation](https://reactjs.org/docs/getting-started.html)
- [React's list of React communities](https://reactjs.org/community/support.html)
- [React community code of conduct](https://github.com/facebook/react/blob/master/CODE_OF_CONDUCT.md)

## Check for Understanding

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: ca52c8b2
* title: Intro to React JS
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
