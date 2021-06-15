# Passing Down Event Handlers

## Move `studentData` into State

In the `App` component, we know we want these two things:

1. We should be able to modify and update `studentData`
1. Every time `studentData` is updated, it should affect the UI, and the `App` component should re-render

These two qualities make it _perfect_ to turn into state.

<!-- prettier-ignore-start -->
```js
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

- Creates a new piece of state named `studentData`
- Creates a new update function named `setStudentData`
- Sets the initial value of `studentData`
- Passes the value of `studentData` to `StudentList` in the `prop` `students

## Create a Function to Update `studentData` in `App`

We can create as many functions and helper functions inside our React components as we want!

In `App`, let's create a function named `updateStudentData`. It's responsible for taking in the updated data for one student, and updating `studentData` on state.

Since this function updates _one_ student, it needs to receive the updated student data. This function should accept a parameter, `updatedStudentData`.

This function should go inside the `App` component, after `studentData` is defined, and before the `return` statement.

<!-- prettier-ignore-start -->
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
  }
```
<!-- prettier-ignore-end -->

| <div style="min-width:300px;"> Piece of Code </div> | Notes                                                                                                                                                                |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `const updateStudentData = `                        | We're creating a function named `updateStudentData`.                                                                                                                 |
| `updatedStudent`                                    | This function accepts one argument: an object that holds updated student data. We expect this object to have the key `id`, at the very least.                        |
| `const students = ;`                                | For this function, we'll create a helper array, `students` to contain the updated student data.                                                                      |
| `studentData.map(...)`                              | We'll map over `studentData`...                                                                                                                                      |
| `student => {...}`                                 | Inside `map`, we'll reference each item with `student`...                                                                                                            |
| `if (student.id === updatedStudent.id) {`           | If we found the student that our `updatedStudent` is updating...                                                                                                     |
| `return updatedStudent`                             | The item we should map to our `students` array is the updated student data!                                                                                          |
| `else { return student; }`                          | Otherwise, we should map the unchanged `student` into `students`.                                                                                                    |
| `setStudentData(students);`                         | Ultimately, we want to update the `studentData` on state. We use our state update function, `setStudentData`, and we update it to our newly formed `students` array. |

Our `App` now defines and holds a function that can update our `studentData`, named `updateStudentData`.

## Send This Function to `StudentList`

Now that we've defined `updateStudentData`, imagine if other components could _use_ this function.

If other components could use this function, they'd have the ability to update the `studentData` in `App`! We want _the `Student` component_ to update the `studentData` in `App`.

Other components _can_ use the `updateStudentData` function if they can reference it... and they can, _using props_.

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

Let's update the PropTypes for `StudentList`. Our `StudentList` component now expects a `prop` named `onUpdateStudent`, whose value is a _function_.

<!-- prettier-ignore-start -->
```js
StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool
    })),
    onUpdateStudent: PropTypes.func
};
```
<!-- prettier-ignore-end -->

## Send This Function to `Student`

Now, let's send this _exact same function_ from the `StudentList` component to the `Student` component.

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

Here, we're saying that each `Student` component has a `prop` named `onUpdate`. The value of `onUpdate` is `props.onUpdateStudent`.

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
  }
```

##### !end-question
##### !options

* This function creates an array `studentData`, which shares the same name as `studentData` on state, but it isn't the same.
* This function creates an array `students`, which contains objects of student data. It updates `studentData` on state by invoking `setStudentData`.
* This function updates `studentData` by invoking `setStudentData`, and passing in the single object `updatedStudent`.

##### !end-options
##### !answer

* This function creates an array `students`, which contains objects of student data. It updates `studentData` on state by invoking `setStudentData`.

##### !end-answer
### !end-challenge

<!-- prettier-ignore-end -->
