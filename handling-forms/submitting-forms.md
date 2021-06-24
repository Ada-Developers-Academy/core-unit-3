# Submitting Forms

## Introduction

Sofia has been working on making a new student form in her attendance app. Consider her progress with this list of components:

<br/>

<details>

<summary>An <code>App</code> component, responsible for managing all the student data</summary>

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';
import StudentList from './components/StudentList';
import NewStudentForm from './components/NewStudentForm';

function App() {
    const [studentData, setStudentData] = useState([
        {
            id: 1,
            nameData: 'Ada',
            emailData: 'ada@dev.org',
            isPresentData: false
        },
        {
            id: 2,
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org',
            isPresentData: false
        },
        {
            id: 3,
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org',
            isPresentData: true
        }
    ]);

    const updateStudentData = updatedStudent => {
        const students = studentData.map(student => {
            if (student.id === updatedStudent.id) {
                return updatedStudent;
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
                onUpdateStudent={updateStudentData}
                ></StudentList>
            <NewStudentForm></NewStudentForm>
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
    const studentComponents = props.students.map((student, index) => {
        return (
            <li key={index}>
                <Student
                    id={student.id}
                    name={student.nameData}
                    email={student.emailData}
                    isPresent={student.isPresentData}
                    onUpdate={props.onUpdateStudent}
                ></Student>
            </li>
        );
    });

    return (
        <section>
            <h2>Student List</h2>
            <ul>
                {studentComponents}
            </ul>
        </section>
    );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool
    })),
    onUpdateStudent: PropTypes.func.isRequired
};

export default StudentList;
```
<!-- prettier-ignore-end -->

</details>

<details>

<summary>A <code>Student</code> component, responsible for displaying the details of one student. Contains a button that toggles whether the student is present or not.</summary>

<!-- prettier-ignore-start -->
```js
import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {

    const onAttendanceButtonClick = () => {
        const updatedStudent = {
            id: props.id,
            nameData: props.name,
            emailData: props.email,
            isPresentData: !props.isPresent
        }

        // Invoke the function passed in through the prop named "onUpdate"
        // This function is referenced by the name "updateStudentData" in App
        props.onUpdate(updatedStudent);
    };

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={onAttendanceButtonClick}>Toggle if {props.name} is present</button>
        </div>
    );
};

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
};

export default Student;
```
<!-- prettier-ignore-end -->

</details>

<details>

<summary>A <code>NewStudentForm</code> component, responsible for containing a form to add a new student.</summary>

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';

const NewStudentForm = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: ''
    });

    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value
        })
    };

    const onEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value
        })
    };

    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    name="fullName"
                    value={formFields.name}
                    onChange={onNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="email"
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

The `NewStudentForm` component is all well and good. It follows the controlled component pattern, so its state is in sync with the input fields.

However, all student data is managed in the `App` component. Our new student form doesn't actually add a student!

<!-- TODO: It would be great to have a screenshot here of the aftermath of trying to click the add button, only to have the form submission occur. -->

To handle form submissions, and bring the data to the `App` component, we need to lift state up.

## Sofia's Plan

Passing down event handlers and lifting state up follows the exact same process that she's done before in React development. The _only exception_ is she needs to learn how to prevent the form's default submit behavior.

Sofia's goal is to get the data from the `NewStudentForm` up to the `App` component.

The `App` component is already the single source of truth for her student data, so the remaining steps of her plan are:

1. Pass down event handlers from `App` to the `NewStudentForm`
1. Configure the form submission in `NewStudentForm` to lift state up

## Passing Down New Student Handlers

Sofia starts by making a method in `App` that adds a new student to the student data:

<!-- prettier-ignore-start -->
```js
    const addStudentData = newStudent => {
        // Duplicate the student list
        const newStudentList = [...studentData];

        // Logic to generate the next valid student ID
        const nextId = Math.max(...newStudentList.map(student => student.id)) + 1;

        newStudentList.push({
            id: nextId,
            nameData: newStudent.nameData,
            emailData: newStudent.emailData,
            isPresentData: false,
        });

        setStudentData(newStudentList);
    };
```
<!-- prettier-ignore-end -->

There are no special rules about this `addStudentData` function. Sofia could have written this logic using any approach or code style that meets the needs of her project!

Sofia chose to implement `addStudentData` this way:

1. The function receives a new student object, `newStudent`.
1. She duplicates the `studentData` array into `newStudentList`, which will help React detect the change to the list of students.
1. She generates a new ID number, `nextId`.
   - [`Math.max`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) expects a variable number of numeric arguments, not a single array. Sofia spreads the array generated by mapping the student list to their IDs to match this expectation. The next ID is then one more than the max from this list.
1. She pushes a new object into `newStudentList`. The shape of this object matches the other objects in `studentData`.
1. The `newStudentList` now contains an object with the `newStudent` data. She updates `studentData` in state with `setStudentData`.

### !callout-info

## The Implied Shape of `newStudent`

Consider this implementation of `addStudentData` and how Sofia accessed the name and email of the `newStudent`.

<br/>

This implementation reaches into `newStudent` and grabs the values of `nameData` and `emailData` specifically... not `name`, or `newName`, or anything else! We should keep in mind that this function expects `newStudent` to have the keys exactly named `nameData` and `emailData`.

<br/>

If we want to change the name of the expected keys, we should refactor `App`'s definition of `addStudentData`.

### !end-callout

Now, Sofia needs to actually use her new function. She passes it into an instance of `NewStudentForm`, through a new prop named `addStudentCallback`.

<!-- prettier-ignore-start -->
```js
    return (
        <main>
            <h1>Attendance</h1>
            <StudentList
                students={studentData}
                onUpdateStudent={updateStudentData}
            ></StudentList>
            <NewStudentForm
                addStudentCallback={addStudentData}
            ></NewStudentForm>
        </main>
    );
```
<!-- prettier-ignore-end -->

Sofia updates the PropTypes of `NewStudentForm` to now anticipate this prop:

<!-- prettier-ignore-start -->
```js
import PropTypes from 'prop-types';

const NewStudentForm = (props) => {
    // ...
};

NewStudentForm.propTypes = {
    addStudentCallback: PropTypes.func.isRequired
};
```
<!-- prettier-ignore-end -->

## Handling Form Submissions 

Sofia's next step is to get `NewStudentForm` to call the supplied `addStudentCallback` prop when the form submits.

She starts by creating a new event-handler function, `onFormSubmit`. 

<!-- prettier-ignore-start -->
```js
    const onFormSubmit = (event) => {
    };
```
<!-- prettier-ignore-end -->

And she sets it as the handler for the `onSubmit` event of the control's form.

<!-- prettier-ignore-start -->
```js
    return (
        <form onSubmit={onFormSubmit}>
        ...
        </form>
    );
```
<!-- prettier-ignore-end -->

She then returns her attention to `onFormSubmit`.

`onFormSubmit` is being used as an event handler. This means that an `Event` object will be passed in as the first parameter, which Sofia has named `event`. Since `onFormSubmit` is registered for `onSubmit`, the object in `event` will represent the submit event, which if left alone will allow the form's default submit behavior to occur!

With this in mind, Sofia writes the following implementation for `onFormSubmit`:

<!-- prettier-ignore-start -->
```js
    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addStudentCallback({
            nameData: formFields.name,
            emailData: formFields.email
        });

        setFormFields({
            name: '',
            email: '',
        });
    };
```
<!-- prettier-ignore-end -->

Her implementation of `onFormSubmit` works like this:

1. She uses the passed in `event` object and calls `event.preventDefault()`. This prevents the unwanted default behavior of HTML forms.
1. She invokes the `addStudentCallback` function, which was passed in as part of the `props`, with `props.addStudentCallback()`. This prop was passed in by `App`, and holds a reference to `App`'s `addStudentData` function.
1. She knows that `props.addStudentCallback` (really, `App`'s `addStudentData` function) receives an object, `newStudent`. She knows that this object should have the keys `nameData` and `emailData`. She passes in an object literal, where the keys are `nameData` and `emailData`, with the values read from the `formFields` state.
1. She resets the form by updating the members of `formFields` to empty strings.

### !callout-danger

## Prevent the Form's Default Behavior

HTML forms have default behavior: when a form receives a "submit" event, it will make an HTTP request. This creates an effect where our web app reloads every time we submit a form! Be sure to include `event.preventDefault();` in any form submission event handler.

### !end-callout

## Verify

Sofia's app is now ready to handle new student form submissions!

Her `App` is the single source of truth, and passes a callback down to `NewStudentForm` that can be used to add a new student to the student data. `NewStudentForm` creates an event handler, `onFormSubmit`, that it provides to its `<form>` so that it knows when a new submission has occurred.

When the `<form>` gets submitted, it notifies `NewStudentForm` by calling the passed in event handler, `onFormSubmit`. In the event handler, `NewStudentForm` uses the controlled form data to build a new student object that it passes up to the `App` using the callback it was given in `addStudentCallback`.

![Towards the left, there is a label "props give info to a child component", which has an arrow pointing down. Starting from the top, there are blocks labelled: App, addStudentCallback={addStudentData}, NewStudentForm, onSubmit={onFormSubmit}, <form>. Towards the right, there is a label "callback child → parent", which has an arrow pointing up. Starting from the bottom, there are blocks labelled: <form>, onFormSubmit(event), NewStudentForm, addStudentCallback(newStudent), App.](../assets/handling-forms_submitting-forms_newstudentform-callback-diagram.png)  
_Fig. The flow of callbacks down through `props`, and values back up through the callbacks_

Sofia's last step is to verify her work.

In celebration of her effort and work, she inputs her own name...

![Web browser displaying Sofia's attendance app. The app shows the student output for Ada, Soo-ah, and Chrissy. Below the students, a form appears allowing name and email input. The name field contains "Sofia!", and the email field contains sofia@dev.org.](../assets/handling-forms_submitting-forms_sofia-input.png)  
_Fig. Sofia is ready to click the Add Student button_ 

And bam! 💥 Sofia's name and email are added to the list of students! The new student form even got reset!

![Web browser displaying Sofia's attendance app. The app shows the student output for Ada, Soo-ah, Chrissy, and a new entry for Sofia, with Nickname: Sofia! and Email: sofia@dev.org. Sofia is currently marked absent. The name and email inputs in the new student form below are reset to being empty.](../assets/handling-forms_submitting-forms_new-student.png)  
_Fig. Sofia! Successfully added to the student list!_

We should also take a moment to appreciate how the list of students updated without writing any additional code. By allowing one component, `App` in this case, to manage all of the student data, the other components could focus on displaying it. All Sofia had to do was get the student list in `App` to update, and the existing presentation components did what they do best: display the data!

## Check for Understanding

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: 90fd1d15
* title: Submitting Forms
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: d7afd88b
* title: Submitting Forms
##### !question

This is the end of Sofia's journey. What message or advice would you like to give her?

##### !end-question
##### !placeholder

My message for Sofia is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
