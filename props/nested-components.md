# Nested Components

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=a00e70f9-9402-4fc9-b7f1-ad49003c147a&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Goals

In order to manage the increasing complexity of our React webapps, we should practice nesting components.

We can apply a design pattern for our components that will help us separate the responsibilities of the components in our applications.

## Format

This lesson will take the following steps:

1. Introduce two design patterns for components:
   - presentational components
   - container components
1. Follow Sofia's journey to create an attendance app, applying these design patterns

## Nested Components

When components are rendered, they can contain one or more elements or _other components_.

For example, consider this definition of an `App` component:

<!-- prettier-ignore-start -->
```js
function App() {
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      <StudentList></StudentList>
    </main>
  );
}
```
<!-- prettier-ignore-end -->

When an `App` component is rendered, it begins with a `<main>` element.

The `App` component has two _nested_ components, or components rendered inside it:

1. One instance of a `ClassInfo` component
1. One instance of a `StudentList` component

The `ClassInfo` and `StudentList` components are _siblings_ to each other.

As React webapps increase in complexity, more and more components are defined and rendered.

Deciding how to design a React webapp and its components can be challenging. We can learn about and apply two design patterns to help us:

1. Presentational components
1. Container components

These are design patterns; these labels don't affect the syntax used to define them. The difference between these two kinds of components is the nature of their responsibilities, and how we use them.

## Presentational Components

Presentational components are components that are responsible for displaying data.

Presentational components are not responsible for modifying data.

## Container Components

Container components are components responsible for:

- Using presentation components
- Holding data
- Modifying and managing data
- Sending data to presentation components

Container components often have presentation components _nested_ inside them.

## Example: `StudentList` and `Student` Components

Sofia is a teacher creating an attendance app. Her app should display a list of students. Initially, she starts with this implementation of a `StudentList` component in `src/components/StudentList.js`.

> `className` attributes have been omitted from this code snippet for clarity.

<!-- prettier-ignore-start -->
```js
import React from 'react';
import './StudentList.css';

const StudentList = () => {
    return (
        <section>
            <h2>Student List</h2>
            <ul>
                <li>Student A</li>
                <li>Student B</li>
                <li>Student C</li>
            </ul>
        </section>
    )
}

export default StudentList;
```
<!-- prettier-ignore-end -->

This component displays a list of students, where each student is in an `<li>` element.

However, Sofia knows that she needs to display a lot of data about each student, such as their name and email address.

Sofia can apply the container and presentational component design patterns, and:

1. Create a `Student` component, which will act as a presentational component
1. Use the `Student` component in `StudentList`, which will act as a container component

### `Student` Component

Sofia's `Student` component should display a student's name and email address. She creates a new file, `src/components/Student.js`, and writes this code:

<!-- prettier-ignore-start -->
```js
import React from 'react';

const Student = () => {
    return (
        <ul>
            <li>Nickname: Ada</li>
            <li>Email: ada@dev.org</li>
        </ul>
    )
}

export default Student;
```
<!-- prettier-ignore-end -->

### Rendering `Student`s in `StudentList` Component

Now, Sofia can update her `StudentList` component.

First, she imports the `Student` component into `src/components/StudentList.js` with `import Student from './Student';`.

Then, she replaces the contents of the `<ul>` element.

> Imports, exports, and `className` attributes have been omitted from this code snippet for clarity.

<!-- prettier-ignore-start -->
```js
const StudentList = () => {
    return (
        <section>
            <h2>Student List</h2>
            <ul>
                <li><Student></Student></li>
                <li><Student></Student></li>
                <li><Student></Student></li>
            </ul>
        </section>
    )
}
```
<!-- prettier-ignore-end -->

### !callout-info

## Closing Tags Are Required

React is very strict about closing tags. Even tags that are self-closing in HTML (such as `<br>` and `<hr>`) must be explicitly closed in React components. This requirement is very similar to a variant of HTML called [XHTML](https://www.w3schools.com/html/html_xhtml.asp).

<br />

Rather than forcing us to write something like `<br></br>`, we can use a shorthand: `<br />`.

<br />

We can use this same shorthand for our own components, so instead of `<Student></Student>`, we could have written `<Student />`.

### !end-callout

Sofia's app now looks like this, which includes three rendered `Student` components!

![Sophia's attendance web app with a heading "Student List," and a list of three students. All three students read "Nickname: Ada" and "Email: ada@dev.org."](../assets/props_nested-components_render.png)  
_Fig. Updated `StudentList` output. The previously implemented `ClassInfo` component is also displayed._

## Summary

Sofia has applied the presentational and container component design patterns to her project.

- The `Student` component is a presentational component, responsible for displaying student data (name and email)
- The `StudentList` component is a container component, responsible for using presentational components

The `StudentList` component will soon _hold_ and _manage_ the student data. It will _pass_ this data _into_ the presentational components.

## Check for Understanding

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: a131b999
* title: Nested Components
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
