## Single Source of Truth

In software, we're reading, moving, and manipulating data all the time. ["Single source of truth"](https://en.wikipedia.org/wiki/Single_source_of_truth) is the practice of structuring our code so that data is managed in one place. All other places that use this data should use the data as read-only.

In Sofia's app, all components that read student data, should reference it from the same source.

Right now, Sofia's app introduces student data in two places:

- The `App` component, which holds student names and emails
- The `Student` component, which manages student `isPresent` details

### !callout-info

## The Flip Side: Managing Multiple Sources of "Truth"

Consider for a moment what it would be like if we _didn't_ strive for a single source of truth. As we continued to develop our app, we'd possibly ask the following questions:

- If another component needs to read a student's `isPresent` state, where do they look for that data?
  - For example, what if another component wanted to count how many students were absent that day?
- If there are multiple sources of truth, in what situations do we update one of source of truth, and don't update the others?
- What happens if our multiple sources of truth are out of sync with each other?

<br/>

These questions highlight problems that are challenging to work with!

### !end-callout

## Moving `isPresent` From `Student` to `App`

Sofia's first goal is to create a single source of truth for her app. She wants to move all student data to one place.

Sofia chooses to move the data to the `App` component. She chooses the `App` component because:

1. It's more appropriate for the responsibility we gave `App`
1. In React, we pass read-only data through `props`, which is passed into nested components. `Student` is more nested than `App`.

### New Student Data Shape in `App`

First, we should add `isPresent` into our student data in `App`.

While we're here, we're also going to add `id` data to each student. This helps the data feel a little more realistic, as if we're reading it from a database or API.

<!-- prettier-ignore-start -->
```js
function App() {
  const studentData = [
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
  ];

  return (
    <main>
      <h1>Attendance</h1>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}
```
<!-- prettier-ignore-end -->

In this example, we've chosen the name `isPresentData` to help us clarify that this is coming from the student dataset. We can change the name to anything else if we want to!

### Update PropTypes

Now that `id` and `isPresentData` are in our `studentData`, and we pass that data into `StudentList` and `Student`, we should update our PropTypes.

The PropTypes for `StudentList` can look like this:

<!-- prettier-ignore-start -->
```js
StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool
    }))
};
```
<!-- prettier-ignore-end -->

And for `Student`:

<!-- prettier-ignore-start -->
```js
Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool
};
```
<!-- prettier-ignore-end -->

### Ensure `StudentList` Passes the New `App` Data

We introduced the new pieces of data, `id` and `isPresentData`, in `App`. This data gets sent to `StudentList` through the prop named `students`.

Let's ensure that this data gets used!

`StudentList` should read this data, and then sends it to `Student` components.

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
                ></Student>
            </li>
        );
    });

    // ... return some JSX
}
```
<!-- prettier-ignore-end -->

<!-- available callout types: info, success, warning, danger, secondary  -->
### !callout-info

## Refactoring Opportunity: `key=student.id`

In a later commit, we could update our `map` call so that the `key` pulls the ID from the student data, not from the list index.

<!-- prettier-ignore-start -->
```js
const StudentList = (props) => {
    const studentComponents = props.students.map((student) => {
        return (
            <li key={student.id}>
                <Student
                    id={student.id}
                    name={student.nameData}
                    email={student.emailData}
                    isPresent={student.isPresentData}
                ></Student>
            </li>
        );
    });

    // ... return some JSX
}
```
<!-- prettier-ignore-end -->

We'll do this in a later commit, so that we're working on only one task at a time.

### !end-callout

### Use `isPresent` as a `prop` in `Student`

Now, let's remove our "other source of truth," and remove the piece of state `isPresent` from `Student`.

_Instead_, we will use `isPresent` as a read-only `prop` that `StudentList` sends.

<!-- prettier-ignore-start -->
```js
const Student = (props) => {

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={/* togglePresence */}>Toggle if {props.name} is present</button>
        </div>
    )
}
```
<!-- prettier-ignore-end -->

Here, we've:

- Deleted the line that initialized the piece of state `isPresent` with `useState`
- Deleted the function `togglePresence`, which updated `isPresent`
- Modified how `nameColor` is set: the conditional logic should read from `props.isPresent`
- _Commented out_ the `onClick` event handler of the button

We can't use the `togglePresence` event handler anymore. What does our button do when it's clicked, then?

We'll pass down an event handler!

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: f8249c66
* title: Single Source of Truth
##### !question

Which of the following options best describes why this step is called "Create a Single Source of Truth"?

##### !end-question
##### !options

* The "single source of truth" of student data is in `App`. We need to make `isPresent` in `Student` a read-only prop.
* The "single source of truth" of student data is in `StudentList`. We need to make `isPresent` in `Student` a read-only prop.
* The "single source of truth" of student data is in `Student`. We need to make `isPresentData` in `App` a read-only prop.

##### !end-options
##### !answer

* The "single source of truth" of student data is in `App`. We need to make `isPresent` in `Student` a read-only prop.

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 20e554e8
* title: Single Source of Truth
##### !question

Which of the following options best describes the role of `StudentList` in this step?

##### !end-question
##### !options

* `StudentList` receives the student data in a `prop` named `studentData`. `StudentList` passes pieces of the student data into each `Student` component.
* `StudentList` receives the student data in a `prop` named `students`. `StudentList` passes pieces of the student data into each `Student` component.

##### !end-options
##### !answer

* `StudentList` receives the student data in a `prop` named `students`. `StudentList` passes pieces of the student data into each `Student` component.

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
