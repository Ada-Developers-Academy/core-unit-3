# Lifting State Up

We've made `App` manage our student data, and we've passed down some event handlers. Let's make our attendance button do something!

Again, our goal is to make the attendance button in `Student` update the `studentData` in `App`.

## Creating a New `onClick` Handler in `Student`

When we click the attendance button in one `Student` component, we should update that student's data by toggling whether they are present.

Because of how we are passing down the `toggleStudentPresence` function from `App`, the `prop` named `onPresenceToggle` references a function that does exactly this!

<br/>

<details>

<summary>Review our current implementation of <code>App</code>.</summary>

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
    </main>
  );
}

export default App;
```
<!-- prettier-ignore-end -->

</details>

<!-- prettier-ignore-start -->
```js
const Student = (props) => {

    const onAttendanceButtonClick = () => {
        const updatedStudent = {
            id: props.id,
            nameData: props.name,
            emailData: props.email,
            isPresentData: !props.isPresent
        };

        // Invoke the function passed in through the prop named "onUpdate"
        // This function is referenced by the name "updateStudentData" in App
        props.onUpdate(updatedStudent);
    };

    // ... other rendering logic
};
```
<!-- prettier-ignore-end -->

| <div style="min-width:250px;"> Piece of Code </div> | Notes                                                                                                                                                                                                                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const onAttendanceButtonClick = () => { ... };`     | We're creating an event-handling function named `onAttendanceButtonClick`. We don't need any details about the event, so we don't list `event` as a parameter.                                                                                                                                                                                    |
| `const updatedStudent = { ... };`                    | We create a variable, `updatedStudent`, to hold our updated student data.                                                                                                                                                                                      |
| `id: props.id, ... emailData: props.email,`         | The key-value pairs in this object should match exactly what is required in `App`'s `updateStudentData` function. In that function, we're looking for the keys `id`, `nameData`, `emailData`, and `isPresentData`, to match the existing `studentData` format. |
| `isPresentData: !props.isPresent`                   | When we click on the attendance button, we want to toggle the student's present status. So the value of `isPresentData` should be the opposite of the current `props.isPresent`.                                                                                                                                              |
| `props.onUpdate(...);`                              | The value of `props.onUpdate` is a function reference. We invoke this function using parentheses `()`.                                                                                                                                                                   |
| `updatedStudent`                                    | The function referenced by `props.onUpdate` ultimately accepts one argument, an updated student object. We can pass in our new `updatedStudent` object here.                                                                                                                 |

## Attaching `onAttendanceButtonClick` to the Attendance Button

Now that we have defined an event handler, let's ensure that we're _using_ this event handler!

We need to attach our function to the attendance button's `onClick` attribute:

<!-- prettier-ignore-start -->
```js
const Student = (props) => {

    const onAttendanceButtonClick = () => {
        const updatedStudent = {
            id: props.id,
            nameData: props.name,
            emailData: props.email,
            isPresentData: !props.isPresent
        };

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
```
<!-- prettier-ignore-end -->

## Verifying

Let's see whether our app still works!

Let's verify that user interactions affect the state of the app using React Dev Tools.

We should first observe that the `App` component indeed keeps `studentData` in its state.

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. The application has been set to show Ada and Soo-ah as absent, while Chrissy is present. In the the component hierarchy, the App component is selected. Under the section titled Hooks, we see a State value displaying the studentData contents. The data for both Ada and Soo-ah show their isPresentData set to false. The data for Chrissy cannot be seen, as it falls off the bottom of the screen.](../assets/lifting-state-up_lifting-state-up_app-state.png)  
_Fig. Ada and Soo-ah are displayed as absent, and their `isPresentData` is set to false_

And clicking on the attendance buttons updates the state in `App`!

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. The application has been set to show Ada and Soo-ah as present, while Chrissy is absent. In the the component hierarchy, the App component is selected. Under the section titled Hooks, we see a State value displaying the studentData contents. The data for both Ada and Soo-ah show their isPresentData set to true. The data for Chrissy cannot be seen, as it falls off the bottom of the screen.](../assets/lifting-state-up_lifting-state-up_app-state-updated.png)  
_Fig. After toggling the students, the `isPresentData` for Ada and Soo-ah can be seen to be true_

We did it! 🎉🎉

Let's observe two more things:

`StudentList` indeed has two `props`: a `students` array with the student data, and `onUpdateStudent`, which is a function reference, indicated by the curly 𝑓.

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. In the the component hierarchy, the StudentList component is selected. Under the section titled Props, we see onUpdateStudents, which holds a function reference to updateStudentData. We also see students, which holds the array of studentData.](../assets/lifting-state-up_lifting-state-up_studentlist-detail.png)  
_Fig. `StudentList` has both `onUpdateStudents` and `students` listed in its `props`_

Each `Student` component has five props:

1. `email`, a string
1. `id`, a number
1. `isPresent`, a boolean
1. `name`, another string
1. `onUpdate`, a reference to a function, again indicated by the curly 𝑓, originally named `updateStudentData`

![Web browser displaying Sofia's attendance app and the React Developer Tools Components tab. In the the component hierarchy, the first Student component is selected. Under the section titled Props, we see email, id, isPresent, and name, all with the expected values for the first student, Ada. We also see that onUpdate contains a function reference to updateStudentData.](../assets/lifting-state-up_lifting-state-up_student-detail.png)  
_Fig. `Student` showing all expected `props`, present and accounted for!_

## Did We Accomplish "Single Source of Truth"?

We've accomplished the following:

1. We set `App` as the "single source of truth" of student data, and removed state from `Student`
1. We created a function that updates the state of `studentData` in `App`. Then, we passed that function down to `Student` through `props`.
1. We created an event handler for the `onClick` event in `Student`. When the attendance button is clicked, it invokes the function, which updates the state of `studentData` in `App`.

From these steps, our `App`, `StudentList`, and `Student` components better follow the container component and presentational component design patterns.

### !callout-info

## Remove Unused Imports

Now is a great time to read through our code and delete any unused imports. In particular, the `Student` component should not import `useState` anymore.

### !end-callout

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 8ffcf3b5
* title: Lifting State Up
##### !question

Which of the following options best describes why this step is called "Lifting State Up"?

##### !end-question
##### !options

* The button for changing a student's attendance is rendered in the `Student` component, but the student data is managed in the state of the `App` component. Event handling that happens in `Student` needs to "bubble up" and affect the `App` component.
* The `Student` component stores the state of `isPresent`. The state of `isPresent` needs to be synchronized with the state of `isPresent` in the `App` component.

##### !end-options
##### !answer

* The button for changing a student's attendance is rendered in the `Student` component, but the student data is managed in the state of the `App` component. Event handling that happens in `Student` needs to "bubble up" and affect the `App` component.

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
