# Problem Set: Lifting State Up

## Directions

Keep your work on your local machine.

There is no submission for this problem set. Be prepared to share your work in small groups.

## Practice

To help reinforce the concepts from the lesson, we strongly encourage recreating Sofia's app individually from scratch, up to the point where she left off in the last lesson. A user should be able to mark a student as present or not present.

Getting a "feel" for the code required, where it goes, and how it works, will help us build confidence as we continue using React in new applications.

## Goal

Complete this user story:

> As a teacher, I want to be able to delete all student data and see zero students listed, so that I can prepare for a new class.

## Resources

For most of the excerpts from Sofia's journey, we've left out the `ClassInfo` component that was originally a part of the application. If you would like to reincorporate that component into your solution, feel free to use the sample code below.

If focusing on the new feature feels like the best way to engage with this material, then you may wish to refer to the [`05-lifting-state-up`](https://github.com/AdaGold/student-app/tree/05-lifting-state-up) branch of the `student-app` repo as a starting point.

<br />

<details>
<summary><code>src/App.jsx</code> <i>(using <code>ClassInfo</code>)</i></summary>

<!-- prettier-ignore-start -->
```js
import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

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
            <ClassInfo memberCount={studentData.length}></ClassInfo>
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
<summary><code>src/components/ClassInfo.jsx</code></summary>

<!-- prettier-ignore-start -->
```js
import './ClassInfo.css';
import PropTypes from 'prop-types';

const ClassInfo = (props) => {
    return (
        <section>
            <h2 className="class-info__heading">Class Information</h2>
            <ul>
                <li>
                    Name: Team Semicolons
                </li>
                <li>
                    Number of members: {props.memberCount}
                </li>
            </ul>
        </section>
    );
};

ClassInfo.propTypes = {
    memberCount: PropTypes.number.isRequired,
};

export default ClassInfo;
```
<!-- prettier-ignore-end -->

</details>

<details>
<summary><code>src/components/ClassInfo.css</code></summary>

```css
.class-info__heading {
    color: darkblue;
    font-style: oblique;
}
```

</details>

## Implement

### Add a Delete Button

Create a delete button that will clear all student data. We don't currently have a way to add additional students, but Sofia will be implementing that feature soon. For now, if we need to bring back the list of students as we work on the feature, we can refresh the browser.

A possible implementation might look like this:

![Web browser displaying Sofia's attendance app, displaying the following output: the heading Attendance; the sub-heading Class Information; a bulleted list showing Name: Team Semicolons, and Number of members: 0; a button labelled Delete All Students!; and the sub-heading Student List with no students listed.](../assets/lifting-state-up_problem-set-lifting-state-up_delete-example.png)  
_Fig. After clicking the Delete All Students! button, the app no longer displays any students._

<br />

<details>
<summary>Here's an example solution for review after completing the problem set
</summary>

<br />

[Lifting State Up Problem Set Solution](https://github.com/AdaAnswers/lifting-state-up-problem-set)

It's ok if this solution looks different than what you came up with. Consider discussing your approach with a classmate to see how others tackled this problem set.

</details>
