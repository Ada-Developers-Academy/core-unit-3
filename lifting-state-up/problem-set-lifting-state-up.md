# Problem Set: Lifting State Up

## Directions

Keep your work on your local machine.

There is no submission for this problem set. Be prepared to share your work in small groups.

## Practice

Recreate Sofia's app, so that a user can mark a student as present or not present.

### Add a Delete Button

Consider this user story:

> As a teacher, I want to be able to delete all student data and see zero students listed, so that I can prepare for a new class.

Consider an implementation of `App` that also renders a `ClassInfo` component:

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
            <ClassInfo memberCount={studentData.length}></ClassInfo>
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

In a `src/components/ClassInfo.js`, consider this starter code for a `ClassInfo` component:

<!-- prettier-ignore-start -->
```js
import PropTypes from 'prop-types';

const ClassInfo = (props) => {
    return (
        <section>
            <h2>Class Information</h2>
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
    memberCount: PropTypes.number
};

export default ClassInfo;
```
<!-- prettier-ignore-end -->

Create a delete button that will clear all student data.

An example implementation looks like this:

![Web browser displaying Sofia's attendance app, displaying the following output: the heading Attendance; the sub-heading Class Information; a bulleted list showing Name: Team Semicolons, and Number of members: 0; a button labelled Delete All Students!; and the sub-heading Student List with no students listed.](../assets/lifting-state-up_problem-set-lifting-state-up_delete-example.png)  
_Fig. After clicking the Delete All Students! button, the app no longer displays any students._
