# Passing Down Event Handlers

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=726ccb3c-77b8-49eb-885b-ad510022c7e4&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Move `studentData` into State

In the `App` component, we know we want these two things:

1. We should be able to modify and update `studentData`
1. Every time `studentData` is updated, it should affect the UI, and the `App` component should re-render so that the UI reflects the updated `studentData`

These two qualities make it _perfect_ to turn into state.

<!-- prettier-ignore-start -->
```js
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
    }
  ]);

  return (
    <main>
      <h1>Attendance</h1>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}
```
<!-- prettier-ignore-end -->

This code:

- Creates a new piece of state and refers to is as `studentData`
- Creates a new update function and refers to is as `setStudentData`
- Sets the initial value of `studentData` to our array of student records
- Passes the value of `studentData` to `StudentList` in the `prop` `students`

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-info

## Refactoring Opportunity: Moving large initial values out of components

In the code above, the largest number of lines is the initial value of `studentData`. This is a great opportunity to refactor our code to make it more readable. By moving large data values out of our components, we can make our code more readable and easier to maintain by keeping more related code closer together.

<br />

In app such as this, it's likely that we would eventually want to fetch the initial student data from a server rather than having it hard coded into the app, as we'll see in later lessons. But for now, we could at least move the initial data out of the component function body.

<br />

Think about how we might do this. Then compare your idea to the possible solution below.

<br />

<details>
<summary>Click here to see a possible solution</summary>

```js
const kInitialStudentData = [
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
  }
];

function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);

  return (
    <main>
      <h1>Attendance</h1>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}
```

<br />

Notice how this allows the logic of the `App` component to be more condensed. Our eyes no longer need to jump over the large array of student data to find the logic of the component. And imagine still how much more difficult it would be to read if there were *multiple* large arrays of data in the component! Much of the art to arranging code is to do so in a way that makes it easy to *ignore* the parts that we don't need to pay attention to at the moment.

<br />

On your own, try moving the `kInitialStudentData` array into a separate file, and importing it into `App`. If moving it to a JavaScript file, Don't forget to export it from the file where you define it! This may resemble the following:

```js
export const kInitialStudentData = [ /* array contents */ ];
```

<br />

Assuming that definition were in a file under the `src` folder named `data/studentData.js`, we could import it into `App` like this:

```js
import { kInitialStudentData } from './data/studentData';
```

</details>

### !end-callout

## Create a Function to Toggle Student Presence in `App`

We can create as many functions and helper functions inside our React components as we want!

In `App`, let's create a function named `toggleStudentPresence`. It will be responsible for taking in the student ID for one student, and toggling the `isPresentData` value for that student in the `studentData` piece of state.

Since this function updates _one_ student, it needs to know _which_ student to update. This function should accept a parameter, `studentId`.

This function should go inside the `App` component, after `studentData` is defined, and before the `return` statement. It needs to be defined inside the `App` component so that it can access the `studentData` state, as well as the `setStudentData` function, both of which are scoped to the `App` component function.

<!-- prettier-ignore-start -->
```js
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
```
<!-- prettier-ignore-end -->

| <div style="min-width:275px;"> Piece of Code </div> | Notes                                                                                                                                                                |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const toggleStudentPresence = `                    | We're creating a function named `toggleStudentPresence`. |
| `(studentId)`                                       | This function accepts one parameter: the ID of the student whose presence to toggle. Because there is only a single parameter, the parentheses may be omitted if desired. |
| `const students = ;`                                | For this function, we create a temporary array, `students` to contain the updated student array. |
| `studentData.map(...)`                              | We map over `studentData`, applying the function supplied as an argument to each student record in the array. `map` creates a new array with the result of each iterated function call being used to populate its values. |
| `student => {...}`                                  | `student` is the name of the parameter to the function we supplied to `map`. Within the function, we reference each iterated item as `student`...                                                                                                            |
| `if (student.id === studentId) {`                   | If we find the student that `studentId` indicates we should update... |
| `return { ...student, isPresentData: !student.isPresentData }` | Copy the student (with object spread notation) and update the copy's `isPresentData` to be the opposite value of what it had (toggle it). By returning this copy, it will replace the previous version of the data for this student record. The original student record in the original array of student records is unmodified. |
| `else { return student; }`                          | Otherwise, we should use the unchanged `student` in our new array of students. Since no change was made to the record, it's safe to use it in the new array of students. |
| `setStudentData(students);`                         | Ultimately, we want to update the `studentData` in our state. We use our state update function, `setStudentData`, and we update it to our newly created `students` array. |

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-info

## Use Object Spread and Object Shorthand to Update a Single Student

In the code above, we use object spread notation to create a copy of the student record, and combined that with object shorthand notation to update the `isPresentData` field of the copy. For a reminder of what the object spread code above would be equivalent to written out long hand, expand the section below.

<br/>

<details>
<summary>Click here to see the long hand version of the code above</summary>

```js
  // return { ...student, isPresentData: !student.isPresentData };
  const updatedStudent = {
    id: student.id,
    nameData: student.nameData,
    emailData: student.emailData,
    isPresentData: student.isPresentData,
  };

  updatedStudent.isPresentData = !student.isPresentData;

  return updatedStudent;
```
<br />

This is why we like to use object spread notation! It's much more concise, and it becomes easier to read with practice.
</details>

### !end-callout

Our `App` now defines and holds a function that can toggle the presence of a student in our `studentData`, named `toggleStudentPresence`.

### !callout-info

## Helping React Notice That `studentData` Changed

Notice that during the update, we made a helper array that is more or less a copy of the data we already had. For every student whose ID does not match the `updatedStudent`, we reuse the student data that was previously in our state. So why couldn't we simply find the matching student data in our existing state and update that?

<br/>

Because React wouldn't notice the change! For container types, like arrays and objects, if we update an inner value (an item in an array, or a field in an object) and then call the relevant set function, React will see that the reference to the object currently in state is the same reference as the object being passed into the set function. For performance reasons, it assumes that if the same reference is passed in to a set function, it _is_ the same object. It will not look within the array or object for changes!

<br/>

So to get React to notice that a value in our array or object has changed, we need to make a new outer reference, and copy the existing values into it. Then when we call a set function, it will see the change and trigger a re-render.

### !end-callout

## Send This Function to `StudentList`

Now that we've defined `updateStudentData`, imagine if other components could _use_ this function.

If other components could use this function, they'd have the ability to update the `studentData` in `App`! We want _the `Student` component_ to update the `studentData` in `App`.

Other components _can_ use the `updateStudentData` function if they can reference it... and they can, _using props_. We can pass a reference to the `updateStudentData` down to a component through its `props`!

First, let's change `App` so that it sends this function to `StudentList` through a new prop named `onUpdateStudent`.

<!-- prettier-ignore-start -->
```js
  return (
    <main>
      <h1>Attendance</h1>
      <StudentList
        students={studentData}
        onUpdateStudent={updateStudentData}
      ></StudentList>
    </main>
  );
```
<!-- prettier-ignore-end -->

Let's update the PropTypes for `StudentList`. Our `StudentList` component now expects a `prop` named `onUpdateStudent`, whose value is a _reference to a function_.

<!-- prettier-ignore-start -->
```js
StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool
    })),
    onUpdateStudent: PropTypes.func.isRequired
};
```
<!-- prettier-ignore-end -->

## Send This Function to `Student`

Now, let's send this _exact same function reference_ from the `StudentList` component to the `Student` component.

We access this function through `props`, and we send it to `Student` through `props`.

The keys to reading and writing this code are to:

1. Check that we're _reading_ the correct `prop` that was passed in
2. Recognize that we can use any name for any `prop` we send to `Student`

<!-- prettier-ignore-start -->
```js
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

    // ... return some JSX
```
<!-- prettier-ignore-end -->

Here, we're saying that each `Student` component has a `prop` named `onUpdate`. The value of `onUpdate` will be whatever was passed in `props.onUpdateStudent`, which we expect to be a reference to our `updateStudentData` function.

Let's update the PropTypes for `Student`:

<!-- prettier-ignore-start -->
```js
Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
};
```
<!-- prettier-ignore-end -->

Now, what do we do with this new `onUpdate` `prop` in `Student`?

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 5313259b
* title: Passing Down Event Handlers
##### !question

Which of the following options best describes why this step is called "Pass Down Event Handlers"?

##### !end-question
##### !options

* `App` needs a function that updates the student data, because the student data is managed in `App`'s state. In order to use this function, we need to pass this function to `StudentList` and `Student` through `props`.
* `StudentList` needs a function that updates student data, because it's between `App` and `Student`. In order to use this function, the `StudentList` component needs to pass down an event handler.
* `Student` needs a function that updates the student data, because `isPresent` is managed in `Student`'s state. The initial student data is passed to `StudentList` and `Student` through `props`.

##### !end-options
##### !answer

* `App` needs a function that updates the student data, because the student data is managed in `App`'s state. In order to use this function, we need to pass this function to `StudentList` and `Student` through `props`.

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: f581b6de
* title: Passing Down Event Handlers
##### !question

Which of the following options best describes this function, `updateStudentData`?

```js
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
```

##### !end-question
##### !options

* This function creates an array `studentData`, which shares the same name as `studentData` in state, but it isn't the same.
* This function creates an array `students`, which contains objects of student data. It updates `studentData` in state by invoking `setStudentData`.
* This function updates `studentData` by invoking `setStudentData`, and passing in the single object `updatedStudent`.

##### !end-options
##### !answer

* This function creates an array `students`, which contains objects of student data. It updates `studentData` in state by invoking `setStudentData`.

##### !end-answer
### !end-challenge

<!-- prettier-ignore-end -->
