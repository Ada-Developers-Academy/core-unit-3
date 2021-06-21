# Inspecting React State

Sofia is creating an attendance app for her classroom.

She has been working hard and learning a lot! She has built the following components:

<br/>

<details>

<summary>An <code>App</code> component that holds student data and renders a <code>StudentList</code> component</summary>

`src/App.js`

<!-- prettier-ignore-start -->
```js
import StudentList from './components/StudentList';

function App() {
    const studentData = [
        {
            nameData: 'Ada',
            emailData: 'ada@dev.org'
        },
        {
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org'
        },
        {
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org'
        }
    ];

    return (
        <main>
            <h1>Attendance</h1>
            <StudentList students={studentData}></StudentList>
        </main>
    );
}

export default App;
```
<!-- prettier-ignore-end -->

</details>

<details>

<summary>A <code>StudentList</code> component that renders a <code>Student</code> component for each student in the student data</summary>

`src/components/StudentList.js`

Notice the PropTypes declared for this component. `StudentList` expects a prop named `students`.

The `students` prop should be an array of objects. Each object in this array should have a `nameData` and an `emailData` field.

<!-- prettier-ignore-start -->
```js
import './StudentList.css';
import PropTypes from 'prop-types';
import Student from './Student';

const StudentList = (props) => {

    const studentComponents = props.students.map((student, index) => {
        return (
            <li key={index}>
                <Student name={student.nameData} email={student.emailData}></Student>
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
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired
    }))
};

export default StudentList;
```
<!-- prettier-ignore-end -->

</details>

<details>

<summary>A <code>Student</code> component that renders student information, and contains a button that toggles the student's attendance</summary>

`src/components/Student.js`

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {
    const [isPresent, setIsPresent] = useState(false);

    const togglePresence = () => {
        setIsPresent(!isPresent);
    };

    const nameColor = isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={togglePresence}>Toggle if {props.name} is present</button>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default Student;
```
<!-- prettier-ignore-end -->

</details>

In Sofia's app, each `Student` component manages a piece of state named `isPresent`. When the button is clicked, we update `isPresent`. When `isPresent` is updated, the component re-renders.

Sofia already _sees_ what she wants to see! When she clicks the button, the appearance of her app changes, and a student's name toggles between red and green.

However, when she considers her student data, Sofia sees a problem.

## Debugging State With React Developer Tools

Sofia's `App` component is responsible for holding and managing all student data. However, when she marks a student as present or absent, _it doesn't affect the student data at all_!

She can prove this by debugging with React Developer Tools.

React Developer Tools is a browser extension available for several browsers.

- [React Developer Tools for Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [React Developer Tools for Google Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [React Developer Tools for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

This extension expands the browser Dev Tools whenever we inspect a page built with React. The extension gives us two new views, "Components" and "Profiler." We'll use this extension to inspect the component structure in a React app, and observe state and `props` in each component.

Let's use the Dev Tools to inspect the state and `props` of Sofia's current web app.

After installing and enabling the React Dev Tools, we can visit our running React app at `localhost:3000`. When we click on the "React Developer Tools" icon, a prompt will tell us to "Open the developer tools, and "Components" and "Profiler" tabs will appear to the right."

![Web browser displaying Sofia's attendance app and a status message after clicking the React Developer Tools. It reads: Open the developer tools, and "Components" and "Profiler" tabs will appear to the right.](../assets/lifting-state-up_intro_extension-modal.png)  
_Fig. React Develop Tools extension telling us to access its functionality through the developer tools_

When we open our Dev Tools, we can indeed see the new tabs, "Components" and "Profiler."

![The list of tabs available in the developer tools, which now includes Components and Profiler from the React Developer Tools.](../assets/lifting-state-up_intro_components-profile-tabs.png)  
_Fig. React Developer Tools added to the browser developer tools_

When we view the Components tab, we see the component structure of our web app! We see an `App` component, a `StudentList` component, and three `Student` components.

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. It shows the component hierarchy. App is at the top. It has StudentList as a child. The StudentList has three Student component children.](../assets/lifting-state-up_intro_components-tab-overview.png)  
_Fig. Component view of Sofia's attendance app_

We can select any of the components. The panels will update to reflect the `props` and state of each component.

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. The application has been set to show Ada and Chrissy as present, while Soo-ah is still absent. In the the component hierarchy, the first Student component (Ada) is selected. The props display "email: ada@dev.og" and "name: Ada". Under the section titled Hooks, we see a State value set to true.](../assets/lifting-state-up_intro_student-detail.png)  
_Fig. Displaying the `props` and state of the component holding Ada's data. Notice that React doesn't actually know the name of the state variable. It only knows that there is a state value set to true._

We can use the arrows to expand or collapse the different pieces of information.

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. All three students are absent. In the the component hierarchy, the StudentList component is selected. The value of the students prop is heavily condensed, and a message is displayed that we can Expand prop value.](../assets/lifting-state-up_intro_studentlist-expand-tooltip.png)  
_Fig. The `students` prop in the `StudentList` component is collapsed_

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. All three students are absent. In the the component hierarchy, the StudentList component is selected. The students prop was expanded by clicking the arrow to the left of the label. The full JavaScript object data for the three students: Ada, Soo-ah, and Chrissy, is displayed.](../assets/lifting-state-up_intro_studentlist-expanded.png)  
_Fig. The `students` prop in the `StudentList` component is expanded_

After playing around with these Dev Tools, we can observe:

- When we press the attendance button, the styles indeed change...
- But our student data does not!

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. All three students are absent. In the the component hierarchy, the StudentList component is selected, with its students prop expanded. The application has been configured to show Ada and Chrissy as present, but data stored in the students prop looks the same.](../assets/lifting-state-up_intro_unchanged-student-data.png)  
_Fig. Changes to the `isPresent` status of each `Student` component have no effect on the original data_

Sofia would like any user interactions to actually update the student data.

## Applying Design Patterns

Let's consider how container component and presentational component design patterns appear in Sofia's app:

| <div style="min-width:150px;">Component</div>     | Description                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| `App`         | Container component, because it holds and manages student data and passes it to its children components |
| `StudentList` | Presentational component, because it's responsible for rendering many students                          |
| `Student`     | Presentational component, because it's responsible for rendering student data. But it also owns the `isPresent` data for each student!                          |

Sofia's app currently manages toggling `isPresent` in the `Student` component, **_but this data has no way to get back up to the `App` component_**.

Sofia wants to make sure that the `App` component is handling and updating the student data. Additionally, Sofia wants to make sure that the two presentational components, `StudentList` and `Student`, are _not_ managing student data.

## Process

To refactor Sofia's attendance feature, we will follow these steps:

1. Create a "single source of truth"
1. Pass down data and event handlers to presentational components
1. Ensure that our event handlers "lift state up"

### !callout-success

## Don't Lose Sight of the Goal

Our goal is to ensure that `App` is managing each student's `isPresent` data.

<br/>

Whenever we need to remember what we're doing and why during this process, we should recall this bigger picture.

### !end-callout
