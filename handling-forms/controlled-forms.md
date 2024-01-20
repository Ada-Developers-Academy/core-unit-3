# Controlled Forms

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=d0f1e2e1-99c6-4938-816e-ad5301700cfe&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Introduction

In our exploration of handling button clicks in React, we might have started to recognize some patterns for how we build our apps to respond to user input. To handle clicks, we can expect:

1. We will need a button with an `onClick` event handler.
1. If the button is inside a presentational component, it should invoke a function that updates another component's state. This function is usually passed through props.

However, there are a variety of other form input fields, and working with them may require observing new patterns.

Consider these different form inputs:

| Form Input Type | <div style="min-width:250px;">HTML Tag</div>                  | Description                           |
| --------------- | ------------------------- | ------------------------------------- |
| Text            | `<input type="text">`     | Users can type in any text            |
| Checkbox        | `<input type="checkbox">` | Users can select zero or more options |
| Radio Button    | `<input type="radio">`    | Users can select exactly one option   |
| Number Field    | `<input type="number">`   | Users can only input numbers          |

All of these form inputs are more complex than a button click—they hold and maintain some data themselves... they maintain their own state!

Because these form inputs maintain some of their own state, we need to apply a different design pattern to them.

React's _controlled component_ design pattern can help us here!

## More About `<input>` Elements

Before we consider React patterns, let's consider plain HTML `<input>` elements.

[MDN describes `<input>` elements with high praise](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input):

> The `<input>` element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.

Each `<input>` element type (such as text, checkbox, radio button, or number field) has its own set of attributes and logic to work with. If we find ourselves needing to use some of these other `<input>` types in our own apps, additional research will definitely be beneficial!

Let's highlight a few examples:

| <div style="min-width:150px;">Input Type</div> | Attribute | Description of the Value
--- | --- | ---
[Text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) | `value` | Contains the current value of the text entered into the text field.
[Checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) | `checked` | Boolean which indicates whether the checkbox is currently checked.
[Radio Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) | `checked` | Boolean which indicates whether the radio button is currently checked.
[Number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) | `value` | Contains the current value of the number entered into the input.

When elements are clicked, they emit an event specifically named `"click"`.

When an `<input>` element is changed, it emits an event specifically named `"change"`. This emitted "change" event is an object that contains all details about the event.

### !callout-info

## The `<form>` Element

The `<form>` element itself is unique. This element usually contains one or more `<input>` elements.

<br/>

`<form>`s have default HTML behavior. If the `<form>` element ever receives [an event called "submit"](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit), it will bundle all of the form data together (looking through the `<input>` elements), and then **_send an HTTP request_**.

<br/>

This default behavior can be changed by setting either the `<form>` tag's `method` and/or `action` attributes, or with JavaScript.

### !end-callout

## Controlled Forms Control `<input>` Values

[**Controlled components**](https://legacy.reactjs.org/docs/forms.html#controlled-components) follow a design pattern that states that a form's values should be controlled by _the component's state_, **not** by user interaction.

Instead, user interaction will update _the component's state_, which will in turn be reflected in the form input's value.

Therefore, we can summarize controlled forms as having these elements:

- The component holds state
- For every input, its value comes from the component's state
- For every input, every time it handles an event, it updates the component's state

![How controlled components update state. Five boxes are arranged in a cycle with arrows connecting them. Starting from the top and going clockwise, the boxes are labelled: Component is rendered, User types into HTML input field, Event handler runs, Event handler sets state, State gets updated. From here the cycle loops back to Component is rendered.](../assets/handling-forms_controlled-forms_controlled-forms-flowchart.png)  
_Fig. How controlled forms work in React_

### !callout-info

## The Alternative Requires Multiple Updates

Without using controlled components, user interaction would need to update the component's state _and_ the `<input>`'s state. Surprisingly, this can get out of sync really quickly! In those cases, the component's state and what the user sees in the `<input>` fields can be different, which is dangerous for the user and the web app.

<br/>

We want a component's state and all form inputs to be as aligned as possible. The controlled form design pattern promotes a _single source of truth_.

### !end-callout

## Syntax Example: Generic Form

Let's see how this all plays out by creating a small example.

Let's create a component named `CityNameInput`. This component has a text input field, where users will be able to enter the name of a city. The city name will be displayed, too.

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';

const CityNameInput = () => {
    const [cityName, setCityName] = useState('Seattle');

    return (
        <section>
            <h2>{cityName}</h2>
            <input type="text" />
        </section>
    );
};
```
<!-- prettier-ignore-end -->

In order to complete this form, we will do the following:

1. Ensure that our text input field's value comes from the component's state
1. Ensure that when our text input field changes, it updates the component's state

We set the text input field's value by using the `value` attribute:

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';

const CityNameInput = () => {
    const [cityName, setCityName] = useState('Seattle');

    return (
        <section>
            <h2>{cityName}</h2>
            <input type="text" value={cityName} />
        </section>
    );
};
```
<!-- prettier-ignore-end -->

Because component's re-render every time state updates, we can trust that the appearance of the text field will always be aligned with state.

### !callout-info

## Stateful Value, but No Updates

If we were to try to use this component as it currently is, we would see some interesting behavior. The input has its value set by state, but nothing updates that state. Even if we try to type into the displayed field, no change would occur.

<br/>

Is this useful? Not particularly. But if we run into a case where we are trying to type into a field, but nothing happens, we should check our event handling to make sure its state is getting updated.

### !end-callout

Next, we need to create our event handler for the "change" event that will update the component state.

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';

const CityNameInput = () => {
    const [cityName, setCityName] = useState('Seattle');

    const renameCity = (changeEvent) => {
        console.log('Details about the element that fired the event:', changeEvent.target);
        console.log('The value of that element:', changeEvent.target.value);
        setCityName(changeEvent.target.value);
    };

    return (
        <section>
            <h2>{cityName}</h2>
            <input type="text" value={cityName} onChange={renameCity} />
        </section>
    );
};
```
<!-- prettier-ignore-end -->

In this example, we added the attribute `onChange` to our text field. Then, we created an event handler function called `renameCity`.

`renameCity` takes in one argument, `changeEvent`, which we expect to be information about the event that triggered our event handler.

Recall that every event-handling function is automatically passed [an Event object](https://developer.mozilla.org/en-US/docs/Web/API/Event), whether we use it or not!

We rarely need additional information for a click event, so we tend to leave off the event parameter for click handlers, but we can use a change event to get information about the input that changed.

Event objects include all sorts of details about the event, and we can look through [the Event documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) to find anything we need.

Our goal is to update our `cityName` piece of state to whatever value is in the text field. To achieve this, we use our update function, `setCityName`, and pass in `changeEvent.target.value`.

### Verifying

Now if we use this component in an app, we can see our text field and component state all aligned!

### !callout-info

## Displaying Logged DOM Elements

Note that depending on the browser, the value displayed as part of the `<input>` may appear to be following just behind the event target value, or it may update live so that it takes on the new value.

### !end-callout

![A small application using an instance of the CityNameInput component. Displays the following elements: a heading, "Seattlehi", and a text input, "Seattlehi". The developer tools console is open, showing the result of logging the last few key presses. The logged messages are: Details about the element that fired the event: <input type="text" value="Seattle">, The value of that element: Seattleh, Details about the element that fired the event: <input type="text" value="Seattleh">, The value of that element: Seattlehi.](../assets/handling-forms_controlled-forms_renamecity.png)  
_Fig. The messages logged as we typed h and i_

The most important thing about this code is that we used the data from the event to update our component's state. We can confirm this happened using our React Dev Tools in the Components tab.

![A small application using an instance of the CityNameInput component. Displays the following elements: a heading, "Seattlehi", and a text input, "Seattlehi". The developer tools Components tab is open. The CityNameInput component is selected. Under the Hooks display, there is a state entry containing "Seattlehi".](../assets/handling-forms_controlled-forms_renamecity-dev-tools.png)  
_Fig. The CityNameInput component's state matches the input value_

## Extended Example: The Attendance App

Sofia is developing some new features to her attendance app. She wants to be able to add a new student to her class whenever she wants!

> As in the previous lesson, all subsequent code examples and screen shots will omit the `ClassInfo` component to focus on the `StudentList` part of the application. However, the `ClassInfo` component will still appear in the reference branches found in GitHub. 

Sofia's app currently has the following components:

<br/>

<details>

<summary>An <code>App</code> component, responsible for managing all the student data</summary>

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';
import StudentList from './components/StudentList';

function App() {
    const [studentData, setStudentData] = useState([
        {
            id: 1,
            nameData: 'Ada',
            emailData: 'ada@dev.org',
            isPresentData: false,
        },
        {
            id: 2,
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org',
            isPresentData: false,
        },
        {
            id: 3,
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org',
            isPresentData: true,
        },
    ]);

    const toggleStudentPresence = (studentId) => {
        const students = studentData.map(student => {
            if (student.id === studentId) {
                return { ...student, isPresentData: !student.isPresentData };
            } else {
                return student;
            }
        });

        setStudentData(students);
    };

    return (
        <main>
            <h1>Attendance</h1>
            <StudentList
                students={studentData}
                onStudentPresenceToggle={toggleStudentPresence}
            ></StudentList>
        </main>
    );
}

export default App;
```
<!-- prettier-ignore-end -->

</details>

<details>

<summary>A <code>StudentList</code> component, responsible for displaying a list of students</summary>

<!-- prettier-ignore-start -->
```js
import './StudentList.css';
import PropTypes from 'prop-types';
import Student from './Student';

const StudentList = (props) => {
    const studentComponents = props.students.map(student => {
        return (
            <li key={student.id}>
                <Student
                    id={student.id}
                    name={student.nameData}
                    email={student.emailData}
                    isPresent={student.isPresentData}
                    onPresenceToggle={props.onStudentPresenceToggle}
                ></Student>
            </li>
        );
    });

    return (
        <section>
            <h2 className="student-list__heading">Student List</h2>
            <ul>{studentComponents}</ul>
        </section>
    );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nameData: PropTypes.string.isRequired,
            emailData: PropTypes.string.isRequired,
            isPresentData: PropTypes.bool.isRequired,
        })
    ),
    onStudentPresenceToggle: PropTypes.func.isRequired,
};

export default StudentList;
```
<!-- prettier-ignore-end -->

</details>

<details>

<summary>A <code>Student</code> component, responsible for displaying the details of one student. It contains a button that toggles whether the student is present or not.</summary>

<!-- prettier-ignore-start -->
```js
import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {

    const attendanceButtonClicked = () => {
        props.onPresenceToggle(props.id);
};

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={attendanceButtonClicked}>
                Toggle if {props.name} is present
            </button>
        </div>
    );
};

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool.isRequired,
    onPresenceToggle: PropTypes.func.isRequired,
};

export default Student;
```
<!-- prettier-ignore-end -->

</details>

### Sofia's Plan

Sofia is putting her new student form into its own component: `NewStudentForm`.

Inside `src/components/NewStudentForm.jsx`, she begins this component:

<!-- prettier-ignore-start -->
```js
const NewStudentForm = () => {

    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input id="fullName" name="fullName" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

export default NewStudentForm;
```
<!-- prettier-ignore-end -->

Each new student should have a name and an email. Her form contains one text input field for name, one for email, and a final submit button.

### !callout-info

## Labels, Inputs, and Their Attributes

What's up with the attributes `name`, `id` , and `for` (mapped in React as `htmlFor`)? These attributes are used by HTML forms when submitting data and for improving a web page's usability. 

<br/>

The `id` and `for` attributes enable us to [associate a `<label>` element with its corresponding `<input>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#labels_2). This improves usability because the browser can tell which `input` the `label` is for, which allows a user to click the `label` in addition to the `input` elements to start interacting with the `input`. Making click targets larger often makes it easier for users to interact with them.

<br/>

The [name attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) on an `<input>` element is primarily used during traditional HTML form submission. It's a little more flexible than `id` though, and while it may seem redundant to set both, we'll see a refactoring opportunity later where we'll use the `name` value. 

<br/>

An `id` attribute is required if we want to associate a label with the `input`, but recall that in an HTML page, all `id`s must be unique across the *entire* DOM. What if we want to use the same component on a page more than once? Perhaps we're building an application that lets a user perform bulk updates on inventory data, and each inventory item has a small embedded form component in its display component. Then any `id` in that form component, would also appear on the page more than once. In this scenario, the `id`s would not be unique across the entire DOM.

<br/>

React provides the [`useId` hook](https://react.dev/reference/react/useId) for cases where we need an `id` in a component that might appear multiple times on a page. Sofia won't need to use this in her app, but feel free to read more about it on your own, or expand the section below for an example!

<br/>

<details>

<summary>How to Generate Unique IDs for Components</summary>

<br/>

Since we need to use the `id` attribute when we have `<label>` and `<input>` elements, we must ensure that the `id` will be a unique value. In general, React recommends that we avoid hardcoding IDs. This is especially true for components since they are meant to be reused.
<br/>

React 18 introduced a new [hook for generating unique IDs](https://react.dev/reference/react/useId). We can use this hook to [generate a unique ID for our controlled form](https://react.dev/reference/react/useId#generating-ids-for-several-related-elements), and use that to build a unique ID for each `input` on the form.

<br/>

We invoke `useId()` in our component and use the value returned as a prefix for each of our `input` `id`s. See the example below.

```js
import { useId } from 'react';

const NewStudentForm = () => {
    const inputId = useId();

    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input id={`${inputId}-fullName`} name="fullName" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id={`${inputId}-email`} name="email" />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

```

</details>


### !end-callout

Recall that the steps for creating a controlled form are:

1. Ensure that our text input field's value comes from the component's state.
1. Ensure that when our text input field changes, it updates the component's state.

Sofia will:

1. Create a new piece of state to hold all of her form data, and make all input values read from state.
1. Create an event handler for each input field. Each event handler will update state.

### New Piece of State: An Object of `formFields`

Sofia needs to introduce state into the `NewStudentForm` component.

She's made pieces of state that were strings and booleans before, but she's never put an object in state!

To practice that, she'll make one piece of state named `formFields`. It will be an object that will hold `name` and `email` as key-value pairs.

Her vision is that `formFields` will be an easy, nice way to organize the different form fields. By default, a new student's name and email should be blank. The initial state of `formFields` should be:

<!-- prettier-ignore-start -->
```js
{
    name: '',
    email: '',
}
```
<!-- prettier-ignore-end -->

Therefore, introducing this new piece of state will look like:

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';

const NewStudentForm = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
    });
```
<!-- prettier-ignore-end -->

Now she needs to make the input fields read from this state. Since `formFields` is an object, she can use dot notation to access the `name` and `email` values from the object stored in state.

<!-- prettier-ignore-start -->
```js
    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    id="fullName"
                    name="fullName"
                    value={formFields.name} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    value={formFields.email} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
```
<!-- prettier-ignore-end -->

### Event Handling To Update `formFields`

Sofia's next step is to ensure that changes in an input field affect the component state.

She can create two event handlers, `onNameChange` and `onEmailChange`. These event handlers need to do two things:

- Read the current value inside the input field
- Update state to that current value

<!-- prettier-ignore-start -->
```js
    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value,
        })
    };

    const onEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value,
        })
    };
```
<!-- prettier-ignore-end -->

Sofia uses [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) for a quick way to clone the original `formFields` object. Each event handler should add a specific key-value pair. `onNameChange` adds the key-value pair `name: event.target.value`, while `onEmailChange` adds `email: event.target.value`.

Even though both value expressions appear the same, the event handlers are registered on different inputs, so the `event.target` will refer to different input elements!

The cloned `formFields` object will already have a `name` and `email` key from the cloning, but listing the new value afterward will overwrite the cloned value.

### !callout-info

## Cloning the State Object Lets React See the Change

Recall that when Sofia modified the student data to update a student's `isPresentData`, she had to copy the entire array of student data, replacing only the student value whose presence was updated. This was necessary so that React would notice that the array reference changed, meaning the state had changed, causing the control to be re-rendered.

<br/>

Sofia must do the same thing here. If she doesn't clone the current state to get a new object, React won't notice that the state has changed, and won't re-render the component.

### !end-callout

Now, Sofia needs to make sure that the input fields use these event handlers when they're changed:

<!-- prettier-ignore-start -->
```js
    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    id="fullName"
                    name="fullName"
                    value={formFields.name}
                    onChange={onNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="email"
                    id="email"
                    value={formFields.email}
                    onChange={onEmailChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
```
<!-- prettier-ignore-end -->

She did it! 🎉🎉

Sofia can verify that her form works as expected, allowing her to type in the name and email input fields. She can't _quite_ add the new student yet—she needs to handle submitting the form first—but she can confirm that her inputs are updating the component state in the React Dev Tools Components tab.

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. The browser output shows the student output for Ada, Soo-ah, and Chrissy. Below the students, a form appears allowing name and email input. The name field contains Sofia, and the email field contains sofia@dev.org. In the the component hierarchy, the NewStudentForm component is selected (cut off in the image). Under the section titled Hooks, we see a State value displaying the formFields contents, with email set to sofia@dev.org and name set to Sofia.](../assets/handling-forms_controlled-forms_newstudentform-dev-tools.png)  
_Fig. State object values match the values in the input fields_

### !callout-info

## The `NewStudentForm` Source

Sofia's in-progress version of the `NewStudentForm` is available here.

<br/>

<details>

<summary>A <code>NewStudentForm</code> component, responsible for containing a form to add a new student.</summary>

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';

const NewStudentForm = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
    });

    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value,
        })
    };

    const onEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value,
        })
    };

    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    id="fullName"
                    name="fullName"
                    value={formFields.name}
                    onChange={onNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    name="email"
                    value={formFields.email}
                    onChange={onEmailChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

export default NewStudentForm;
```
<!-- prettier-ignore-end -->

</details>

### !end-callout

### !callout-info

## Refactoring Opportunity: Combining Multiple Change Handlers into One

Notice that the functions `onNameChange` and `onEmailChange` are nearly identical. The only difference between the two event handlers is that one updates the value for the name property and one updates the value for the email property in the formFields state object.

<br/>

We can refactor our code to combine `onNameChange` and `onEmailChange` into one event handler called `handleChange` to reduce repetition in the `NewStudentForm` component. `handleChange` will use details from the change event to figure out which part of the state to update! 

<br/>

<details>

<summary>Expand the section below for more details on our refactor and to see the solution.</summary>

<br/>

To combine the event handlers, we'll need to use information about the `input` that was changed, which we can get from the event data. With a reference to the changed `input`, we can access its attribute data specific to that `input`, such as the `name` attribute, and use that as the key we need to update in our form state. To do this with shorthand notation, we use [`computed property notation`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names). Essentially, the expression to calculate the key is placed within brackets `[]`.
 
<br/>

In the unified `handleChange` function below, we access the `name` attribute of the changed `input` as `event.target.name`. This will be used as the key we update in our `form` state. We used the key `"name"` in our state, but notice that we originally used `"fullName"` as the `name` attribute of our related `input`. This was primarily done to reduce the possibility of confusion between all the things called `name` and the value `"fullName"` in explanations.
	
<br/>

When we use a unified change handler and get the key name from the changed `input` `name`, then we should plan to use the same state key name as the `input` `name` attribute. We would probably then also use similar names for the `id` and `forHtml` attributes for consistency as shown.

```js
import { useState } from 'react';

const NewStudentForm = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
    });

    // two event handlers that can be combined into a single event handler
    // const onNameChange = (event) => {
    //     setFormFields({
    //         ...formFields,
    //         name: event.target.value,
    //     })
    // };

    // const onEmailChange = (event) => {
    //     setFormFields({
    //         ...formFields,
    //         email: event.target.value,
    //     })
    // };

    const handleChange = (event) => {
        setFormFields({ ...formFields, [event.target.name]: event.target.value });
    };

    return (
        <form>
            <div>
                {/* the for attribute is now `name` instead of `fullName` for consistency */} 
                <label htmlFor="name">Name:</label>
                <input
                    {/* name attribute is changed to `name` instead of `fullName` 
                    and the id attribute is changed too for consistency*/} 
                    id="name"
                    name="name"
                    value={formFields.name}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    name="email"
                    value={formFields.email}
                    onChange={handleChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

export default NewStudentForm;
```
</details>

### !end-callout

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 2c36b6ce-cc23-455c-b6f5-41de229d3a05 
* title: Controlled Forms
##### !question

Controlled components follow a design pattern that states that...

##### !end-question
##### !options

a| A form's values should be controlled by the component's state, not by user interaction.
b| A form's values should be controlled by user interaction, not by the component's state.
c| A form's values should be controlled by what a user types into a form's input element.

##### !end-options
##### !answer

a|

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: ordering
* id: 114a72bf-6850-4e12-aae7-3195d372fc5d
* title: Controlled Forms
##### !question

You are helping an animal rescue organization add a form to their website to collect applicants' information. Arrange the following steps for creating a controlled component called `AdoptionApplicationForm`.

##### !end-question
##### !answer

1. Create a new component called AdoptionApplicationForm.jsx that has a form element. The form has input elements (along with label elements) for an applicant's first name, last name, and email.
1. Add a piece of state `formFields` that is an object that will hold first name, last name and email as key-value pairs.
1. Make the input fields read from the `formFields` state
2. Create an event handler that will read the current values inside the input fields and use those values to update the corresponding state  variables.

##### !end-answer
### !end-challenge

<!-- prettier-ignore-end -->