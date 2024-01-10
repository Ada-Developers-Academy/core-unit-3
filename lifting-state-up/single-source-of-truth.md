## Single Source of Truth

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=29e18bda-5c3b-488a-a56c-ad510024995e&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

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
- If there are multiple sources of truth, in what situations do we update one source of truth, but don't update the others?
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

First, Sofia adds `isPresent` to the student data in `App`.

While she's there, she also adds `id` data to each student. This helps the data feel a little more realistic, as if it were coming from a database or API. Having a unique value we can use to identify a particular student record will also be important when we need to figure out which student is having their `isPresentData` value updated.

<!-- prettier-ignore-start -->
```js
function App() {
  const studentData = [
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

  return (
    <main>
      <h1>Attendance</h1>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}
```
<!-- prettier-ignore-end -->

### !callout-info

## <code>Data</code> used as a visual aid

The data uses the name `isPresentData` rather than simply `isPresent` to match the existing data field naming pattern, which was done to help clarify that these values are coming from the student dataset. If we don't like that name, we can choose to give it any other name that helps us keep track of the data! Our chosen name would need to be used in configuring the `PropTypes` for the components that receive this data (see next section), as well as anywhere else we use the data.

<br />

In a production application, using `isPresent` alone would be more common than having `Data` as part of the name. But for this example, having this distinction may be helpful in keeping track of whether we're working with a data record (`Data` in the name) or `Student` props (lacking `Data` in the name).

### !end-callout

### Update PropTypes

Since Sofia changed the structure of `studentData`, she also needs to update the PropTypes for the components that receive `studentData` through their `props`: `StudentList` and `Student`.

She added `id` and `isPresentData` to the `studentData`, so these need to be added to the PropTypes shape.

She updates the PropTypes for `StudentList` like this:

<!-- prettier-ignore-start -->
```js
StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool.isRequired,
    }))
};
```
<!-- prettier-ignore-end -->

And for `Student` she does this:

<!-- prettier-ignore-start -->
```js
Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool.isRequired,
};
```
<!-- prettier-ignore-end -->

### Ensure `StudentList` Passes the New `App` Data

The new pieces of data, `id` and `isPresentData`, have been added to `App`. Now Sofia needs to make sure this data gets used in the rest of the app!

The data gets sent from `App` to `StudentList` through the prop named `students`.

`StudentList` should read `students`, and send the data for each student to a new `Student` component.

Sofia updates the code that builds the array of `Student` components like this:

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
};
```
<!-- prettier-ignore-end -->

### !callout-info

## Refactoring Opportunity: `key=student.id`

In a later commit, Sofia will update the `map` call so that the `key` pulls the ID from the student data, not from the list index.

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
};
```
<!-- prettier-ignore-end -->

She decides to do this in a later commit, so that she can concentrate on working on only one task at a time.

<br />

Any time we have a unique identifier for a record, we should use that as the `key` value. In the long run, using the list index as the `key` value can lead to unexpected behavior.

### !end-callout

### Use `isPresent` as a `prop` in `Student`

Now, the other "source of truth" has to go! The piece of state `isPresent` in `Student` competes with the `isPresentData` set in the `App` and needs to be removed.

Sofia removes that piece of state, and updates her code to use `isPresent` from the read-only `props` that were set by `StudentList`.

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
    );
};
```
<!-- prettier-ignore-end -->

Here, Sofia:

- Deleted the line that initialized the piece of state `isPresent` with `useState`
- Deleted the function `togglePresence`, which updated `isPresent`
- Modified how `nameColor` is set: the conditional logic now reads from `props.isPresent`
- _Commented out_ the `onClick` event handler of the button

Sofia removed the `togglePresence` event handler, so she can't register it with the button anymore. So then what should the button do when it's clicked? And what piece of state can the `Student` component update since it no longer contains `isPresent`?

Sofia had previously defined `togglePresence` in `Student` since that was where the piece of state being managed was located. Now that `isPresent` for each student has been moved to `App` (as `isPresentData`), Sofia needs to move the event handler to `App` as well, providing this new handler to each `Student` component via props as a way to modify the student data. Additionally, she'll need to store the student data itself in a piece of state so that React can be notified when the data changes, and then re-render.

Next stop on Sofia's journey: the revised event handler!

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

a| The "single source of truth" of student data is in `App`. We need to make `isPresent` in `Student` a read-only prop.
b| The "single source of truth" of student data is in `StudentList`. We need to make `isPresent` in `Student` a read-only prop.
c| The "single source of truth" of student data is in `Student`. We need to make `isPresentData` in `App` a read-only prop.

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
* id: 20e554e8
* title: Single Source of Truth
##### !question

Which of the following options best describes the role of `StudentList` in this step?

##### !end-question
##### !options

a| `StudentList` receives the student data in a `prop` named `studentData`. `StudentList` passes pieces of the student data into each `Student` component.
b| `StudentList` receives the student data in a `prop` named `students`. `StudentList` passes pieces of the student data into each `Student` component.

##### !end-options
##### !answer

b|

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
