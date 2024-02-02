# PropTypes

<!-- VITE-UPDATE -->
<!-- <iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=0d353e83-0311-4a8d-9f81-ad49003d65fd&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe> -->

## Goals

- Define `PropTypes`

## Introduction

Sofia created an attendance app that displays a list of students using a `Student` component.

<!-- prettier-ignore-start -->
```js
const Student = (props) => {
    return (
        <ul>
            <li>Nickname: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
    );
};
```
<!-- prettier-ignore-end -->

However, when another component renders a `Student` component, but doesn't pass in the `name` and `email` properties, our `Student` component looks totally broken!

<!-- prettier-ignore-start -->
```js
const StudentList = () => {
    return (
        <section>
                <Student></Student>
                <Student name="Soo-ah" email="sooah@dev.org"></Student>
        </section>
    );
};
```
<!-- prettier-ignore-end -->

![An attendance web app with a list of two students. One student reads "Nickname: , Email: ." The second student reads "Nickname: Soo-ah, Email: sooah@dev.org"](../assets/props_proptypes_undefined.png)  
_Fig. Output of Sofia's attendance web app when a `Student` component is used without supplying the required props._

Wouldn't it be nice if the React library could enforce the presence or data type of our props?

## PropTypes

**PropTypes** is a React feature that allows us to explicitly list the props a component takes and their types.

When we use PropTypes effectively, PropTypes will:

- Provide type-checking and validation of props
- Create implied self-documentation of our components

Both of these benefit our developer workflow and communication!

## PropType Syntax

We define PropTypes per component.

For each component, we need to do the following:

1. Import `PropTypes` into our component file
1. Attach a `propTypes` member to our component function
1. Assign an object to the `propTypes` member, where each key-value pair in the object is a `prop` name and a _validator_

In the following example, we are adding PropTypes to a component `ComponentA`.

The PropTypes settings state that there are two expected `props` for `ComponentA`:

- `title`, which is a string, and required
- `operate`, which is a function

<!-- prettier-ignore-start -->
```js
import PropTypes from 'prop-types';

const ComponentA = (props) => {
    return (
        <span>{props.title}</span>
    );
};

ComponentA.propTypes = {
    title: PropTypes.string.isRequired,
    operate: PropTypes.func
};

export default ComponentA;
```
<!-- prettier-ignore-end -->

| <div style="min-width:265px;"> Piece of Code </div> | Notes                                                                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `import PropTypes from 'prop-types';`               | We need to import `PropTypes` properly before we use it. Notice that we use the `PropTypes` name literally in each validator we set up, which is why we must import `PropTypes` specifically.                                                                                      |
| `ComponentA.propTypes`                              | After and outside the `ComponentA` function definition, we will assign a value to a new `propTypes` member of `ComponentA`. Note that this is a member of the entire component function (like a class member) rather than belonging to any particular component instance.                        |
| `= { ... };`                                        | The value of `ComponentA.propTypes` should be an object.                                                                                       |
| `title:`                                            | **Replace this** with the exact name of a `prop` we want to validate.                                                                          |
| `PropTypes.string.isRequired`                       | **Replace this** with a PropType validator. Details below. This example validator checks whether the prop is a string, and whether it's present. |
| `operate: PropTypes.func`                           | Each props-validator pair is comma-separated, following regular JavaScript object syntax. This props-validator pair states that the value of the prop `operate` should be a function, but that it is optional (not required).      |

### Failing PropType Validations

PropTypes give us warnings in the Console tab of the browser's Developer Tools whenever a component is misused. It's important that we consult the Console tab regularly while working on our React code, since that's where the majority of React runtime errors and warnings will appear.

Imagine an `App` component that renders instances of `ComponentA`:

<!-- prettier-ignore-start -->
```js
function App() {
  const exampleTitle = 'Multiply';
  const exampleOperate = (a, b) => {
    return a * b;
  };
  return (
    <main>
      <ComponentA operate={exampleOperate}></ComponentA>
      <ComponentA title={exampleTitle} operate="Hello! I'm a string."></ComponentA>
    </main>
  );
}
```
<!-- prettier-ignore-end -->

When using `ComponentA`, excluding a value for `title` will produce this warning in the browser's Console tab:

```
Warning: Failed prop type: The prop `title` is marked as required in `ComponentA`, but its value is `undefined`.
```

When using `ComponentA`, passing in a string into `operate` produces this warning:

```
Warning: Failed prop type: Invalid prop `operate` of type `string` supplied to `ComponentA`, expected `function`.
```

## List of PropTypes Validators

Inside the `propTypes` object, we set each value to be a PropType validator.

Here is an abbreviated list of validators that we can access through the object `PropType`.

Even more validators, details, explanations, and examples can be found [in the React documentation for PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html).

| <div style="min-width:100px;">Validator</div>   | Description                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `string`    | A String                                                                                                                                                                                    |
| `array`     | An Array                                                                                                                                                                                    |
| `func`      | A function                                                                                                                                                                                  |
| `number`    | Any numeric value                                                                                                                                                                           |
| `object`    | A JavaScript object                                                                                                                                                                         |
| `element`   | A React element like `<img />`                                                                                                                                                              |
| `oneOf`     | Ensures that the prop is one of a list of specific values. Ex: `name: PropTypes.oneOf(['Ada', 'Soo-ah', 'Chrissy'])` ensures that the `name` prop can only be one of the given values.      |
| `oneOfType` | Ensures that the prop is one of a list of specific types. Ex: `name: PropTypes.oneOfType([PropTypes.string, PropTypes.number)` ensures that the `name` prop can only be a string or number. |
| `arrayOf`   | An array of a specific type. Ex: `ages: PropTypes.arrayOf(PropTypes.number)` would only accept an array of numbers.                                                                         |
| `objectOf`  | An object with fields whose values can only be a specific type. Ex: `courses: PropTypes.objectOf(PropTypes.string),`                                                                        |
| `shape`     | An object with specific fields and types. Ex: `student: PropTypes.shape({fullName: PropTypes.string, age: PropTypes.number})`                                                               |

## PropTypes in Sofia's `Student` Component

Sofia can define PropTypes validators for the `name` and `email` props in her `Student` component.

She defines:

- `name` is a string, and it is required
- `email` is a string, and it is required

```js
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <ul>
      <li>Nickname: {props.name}</li>
      <li>Email: {props.email}</li>
    </ul>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Student;
```

If Sofia's array of student data isn't valid, and there's missing information...

```js
const studentData = [
  {
    nameData: "Ada",
  },
  {
    nameData: "Soo-ah",
    emailData: "sooah@dev.org",
  },
  {
    emailData: "chrissy@dev.org",
  },
];
```

Then, when the `Student` components are rendered, Sofia will get the following warnings:

```
Warning: Failed prop type: The prop `email` is marked as required in `Student`, but its value is `undefined`
Warning: Failed prop type: The prop `name` is marked as required in `Student`, but its value is `undefined`.
```

These warnings will ultimately help Sofia debug her app!

When she sees these warnings, she will think about _why_ the `email` or `name` prop might be undefined. She should trace through her code, considering what components are rendering any `Student` components. Then, she'll ask if those components are properly passing in data through `props`.

Through this tracing, she'll eventually debug and realize that her student data has missing information!

### !callout-info

## Default Prop Values

We can set default values for `props` using a technique very similar to how we set the PropTypes. This is a useful skill! Follow your curiosity with independent research.

### !end-callout
