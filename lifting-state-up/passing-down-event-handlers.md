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

## Help React Notice That `studentData` Changed

Notice that during the update, we made a temporary array that is more or less a copy of the data we already had. For every student whose ID does not match the `updatedStudent`, we reuse the student data that was previously in our state. So why couldn't we simply find the matching student data in our existing state and update that?

<br/>

Think about why we need a whole new array. Then expand the section below to see an explanation.

<br/>

<details>
<summary>Click here to see an explanation</summary>

<br />

We need to use a whole new array because otherwise React wouldn't notice the change! For container types, like arrays and objects, if we update an inner value (an item in an array, or a field in an object) and then call the relevant set function, React will see that the reference to the object currently in state is the same reference as the object being passed into the set function. For performance reasons, it assumes that if the same reference is passed in to a set function, it _is_ the same object. It will not look within the array or object for changes!

<br/>

So to get React to notice that a value in our array or object has changed, we need to make a new outer reference, and copy the existing values into it. Then when we call a set function, it will see the change and trigger a re-render.

</details>

### !end-callout

<!-- available callout types: info, success, warning, danger, secondary, star  -->
### !callout-info

## Refactoring Opportunity: Using Function-Passing State Updates

We can update arrays using the function-passing style of calling state update functions. Recall that the function we pass to the updater will be called with the current value of the state (our students array) as its first parameter. Our function should return a new value (a new students array) that React will use to update the related piece of state.

<br />

Think about what changes we would need to make to `toggleStudentPresence`, then expand the section below to see a possible solution.

<br />

<details>
<summary>Click here to see a possible solution</summary>

```js
  const toggleStudentPresence = (studentId) => {
    setStudentData(students => {
      return students.map(student => {
        if (student.id === studentId) {
          return { ...student, isPresentData: !student.isPresentData };
        } else {
          return student;
        }
      });
    });
  };
```

<br />

While the behavior of both this version and the previous version are the same at present. If we extended the application to work with data from a server, this version would be more robust. It would ensure that the data we are updating is the most recent version of the data, rather than the version that was in state when the function was defined, avoiding potential bugs.

<br />

So while this code may appear more dense or hard to read, it's actually more robust and easy to maintain, making it well worth spending the time to learn to read and write code in this style.

</details>

### !end-callout

## Pass This Function to `StudentList`

Now that we've defined `toggleStudentPresence`, imagine if other components could _use_ this function.

If other components could use this function, they'd have the ability to update the `studentData` in `App`! We want _the `Student` component_ to update the `studentData` in `App`.

Other components _can_ use the `toggleStudentPresence` function if they can reference it... and they can, _using props_. We can pass a reference to the `toggleStudentPresence` function down to a component through its `props`!

First, let's change `App` so that it passes this function to `StudentList` through a new prop named `onStudentPresenceToggle`. Notice that we indicate that this is related to a single student by including Student in the name, even though the component takes a list of students. We also mimic the DOM event naming style of `onEventName` for this prop. In the same way that we can pass a function to the `onClick` prop of a button to say how to handle when a click occurs, we can pass a function to the `onStudentPresenceToggle` prop of `StudentList` to indicate how to handle when a student has their presence toggled.

<!-- prettier-ignore-start -->
```js
  return (
    <main>
      <h1>Attendance</h1>
      <StudentList
        students={studentData}
        onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
    </main>
  );
```
<!-- prettier-ignore-end -->

Let's update the PropTypes for `StudentList`. Our `StudentList` component now expects a `prop` named `onStudentPresenceToggle`, whose value is a _reference to a function_.

<!-- prettier-ignore-start -->
```js
StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool.isRequired,
    })),
    onStudentPresenceToggle: PropTypes.func.isRequired,
};
```
<!-- prettier-ignore-end -->

## Pass This Function to `Student`

Now, let's pass this _exact same function reference_ from the `StudentList` component to each of the `Student` components it renders.

We access this function through `StudentList`'s `props`, and we pass it to `Student` through `Student`'s `props`.

The keys to reading and writing this code are to:

1. Check that we're _reading_ the correct `prop` that was passed in
2. Recognize that we can use any name for any `prop` we pass to `Student`, so long as we use the same name when we _read_ the `prop` in `Student`

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
                    onPresenceToggle={props.onStudentPresenceToggle}
                ></Student>
            </li>
        );
    });

    // ... return some JSX
```
<!-- prettier-ignore-end -->

Here, we're saying that each `Student` component has a `prop` named `onPresenceToggle`. There's no longer any need to have `Student` included in the name of the `prop`, since we're working directly with the `Student` component now. The value of `onPresenceToggle` will be whatever was passed in `StudentList`'s `props.onStudentPresenceToggle`, which we expect to be a reference to our `toggleStudentPresence` function. More generally, we expect it to be a reference to a function that takes a single parameter, the ID of a student, and returns nothing.

Let's update the PropTypes for `Student`:

<!-- prettier-ignore-start -->
```js
Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool.isRequired,
    onPresenceToggle: PropTypes.func.isRequired,
};
```
<!-- prettier-ignore-end -->

Now, what do we do with this new `onPresenceToggle` `prop` in `Student`? We still need to complete re-enabling our toggle behavior by adding a click handler in our `Student` component. And now we have a function that we can use to update the `studentData` in `App`!

We'll finish putting this together in the next lesson.

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

a| `App` needs a function that updates the student data, because the student data is managed in `App`'s state. In order to use this function, we need to pass this function to `StudentList` and `Student` through `props`.
b| `StudentList` needs a function that updates student data, because it's between `App` and `Student`. In order to use this function, the `StudentList` component needs to pass down an event handler.
c| `Student` needs a function that updates the student data, because `isPresent` is managed in `Student`'s state. The initial student data is passed to `StudentList` and `Student` through `props`.

##### !end-options
##### !answer

a|

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

##### !end-question
##### !options

a| This function creates an array `studentData`, which shares the same name as `studentData` in state, but it isn't the same.
b| This function creates an array `students`, which contains objects of student data. It updates `studentData` in state by invoking `setStudentData`.
c| This function updates `studentData` by invoking `setStudentData`, and passing in the student ID `studentId`.

##### !end-options
##### !answer

b|

##### !end-answer
### !end-challenge

<!-- prettier-ignore-end -->
