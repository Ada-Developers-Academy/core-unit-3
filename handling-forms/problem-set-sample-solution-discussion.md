# Problem Set: Forms and APIs Sample Solution Discussion

The sample solution is available in the [Forms and APIs Problem Set Solution](https://github.com/AdaAnswers/problem-set-forms-and-apis) repository.

Be sure to select the branch for the solution functionality you want to review. The `main` branch has no solution in it.

This resource provides some supporting details about the approaches used in the sample solution.

## Wave 1: Implement the Goal User Story

Refer to the [`search-solution`](https://github.com/AdaAnswers/problem-set-forms-and-apis/tree/search-solution) branch for the solution to Wave 1.

This solution follows many of the patterns presented in the curriculum.

The functionality is split among several components. The `App` component is the main component. It holds the state for the result of the most recent search. It also holds the callback function that will be notified when a new search term has been submitted. Finally, in order to be able to call the set function for the `result` state, the `App` also holds the logic for making the API call, and using the result. This will be refactored in a later wave. Notice that because the `SearchResult` component expects the latitude and longitude to be numeric, we explicitly convert them from the strings returned by LocationIQ using the `Number()` function. Alternatively, we could have decided to keep them as strings and update the associated `propTypes` to reflect that.

The `SearchForm` component is a form with a single text input and a submit button. It takes a callback function as a prop. When the form is submitted, it prevents the default browser form submission behavior, it calls the callback function with the form data, allowing additional logic to take place, but notice that the decision was made to *not* clear the form input. This can be useful if the user made a typo in their search term, as they can quickly modify the term rather than needing to type it all out again. The `SearchForm` component follows the patterns for controlled components. It tracks the value of its text input in its own state, uses that state to set the input value, and updates that state as the input changes.

The `SearchResult` component is a small component that takes a `result` prop and displays it. Notice that the `propTypes` do not mark it as required. This is because until the first search is made, the `result` state is set to `null`, and will be passed in to the component. This means the component needs to be able to handle the case where it is passed `null` as a prop, which it does by using a conditional check to access the fields of the result only if the result is not *falsy*. For example, the code

```js
result && result.location
```

will stop evaluating the expression if `result` is *falsy*, and will not attempt to access the `location` field. In that case, the value of the expression will be the value of `result`, in other words, `null`. React doesn't render any visible output for `null`, so the expression will not display anything if `result` is `null`. Alternatively, we could have decided to make `result` be required, and added logic outside the component to prevent it from showing at all if we didn't have a search result.

## Wave 2: Handle Unsuccessful Calls

Refer to the [`error-solution`](https://github.com/AdaAnswers/problem-set-forms-and-apis/tree/error-solution) branch for the solution to Wave 2.

When the API call fails, `axios` raises an error. Since we are working with promises, we can use the `.catch()` method to handle the error. In the `App` component, we add a `.catch()` method to the end of the `axios.get()` promise chain. In the function we pass to `.catch()` we can inspect the error object we receive to extract the error message. We can use this to set a new `error` state to the error message. We can pass this state down to a new `SearchError` component that will display the error message.

The `SearchError` component requires a string `error` prop. So when there is no error, we can pass an empty string. An empty string is a *falsy* value. We can check for that and exit early, returning `null` from the component. This will prevent the component from rendering anything. If there is an error, we can instead encounter the main `return` with the JSX markup to display the error message.

## Optional Enhancement: Search History

Refer to the [`history-solution`](https://github.com/AdaAnswers/problem-set-forms-and-apis/tree/history-solution) branch for the solution to this optional wave.

The key change in this wave is to switch from a single result piece of state to an array of results. This allows us to store the results of multiple searches. We can then use this array to display a list of previous searches.

To make it easier to add a single result to the state, we introduced the `addResult` helper function, which makes a copy of the current collection of search results, appending the new result. With this new helper, the only change we need to make to `performSearchAsync` is to replace the call to `setResult` with a call to `addResult`.

We still show the last successful search, but rather than storing that in it's own piece of state, we look it up from the array of results.

Finally, we add new `HistoryList` and `History` components to display the contents of the `results` state. The `HistoryList` component is a small component that takes an `entries` prop and maps over it, rendering a `History` component for each result. The `History` component takes an `entry` prop and displays it. Since we don't have a unique identifier for each search result, we use the index of the result in the array as the `key` prop. This is not ideal, but it is acceptable in this case because we are not adding or removing elements from arbitrary positions in the array. If we were, generating a unique identifier for each result would be preferable.

## Refactoring Pass

Refer to the [`refactored-solution`](https://github.com/AdaAnswers/problem-set-forms-and-apis/tree/refactored-solution) branch to consider some refactors that we could apply to the history solution.

One of the objectives of this refactor is to move as much logic out of the React components as possible. This makes the components easier to understand and maintain, and makes it easier to test the logic in isolation from the components.

The largest piece of logic we can move out of the components is the API call. In fact, we can move it entirely out of the file! We can create a new module, `LocationIQ.js`, that exports a class encapsulates making the API call. Since we're using only a single endpoint, we could have made a single function, but using a class lets us think about how we might encapsulate other related functionality in the future. We pass in the API key and base URL as constructor arguments, since they could apply to any additional endpoints we might add in the future.

Our `getLatLonAsync` only needs to receive the location search string. Notice that the end of the promise chain is returned from the function. This is important, because it allows the caller to use `.then()` and `.catch()` on the result of the function call. This is how we can handle the result of the API call in the `App` component. Also, for both the `.then()` and `.catch()`, we don't return the raw `axios` result or error. We extract only the parts that we need to give back to the caller. For the result, this is the location string, latitude, and longitude. For the error, this is the error message. This is important because it means that the caller doesn't need to know anything about `axios` or how we're making the API call. This makes it easier to change the implementation of `getLatLonAsync` in the future, without needing to change any of the callers.

An version of the API code that uses `async` and `await` is also provided. Notice where `try` and `catch` are used to handle the result of the API call.

With the API logic moved into this helper, `App` can import and use it, significantly simplifying the `performSearchAsync` function. A version of the `performSearchAsync` function that uses `async` and `await` is also provided.

Another common refactoring goal is to reduce repetition. Our existing implementation repeated the `propType` description of what a search result looked like in several components: `SearchResult`, `HistoryList`, and `History`. We can take the shared description and move it into a separate module. A popular convention is to put this, and other shared `propType` descriptions, in a folder called `types` in a file named `index.js`. If we `import` a folder name rather than a file, React will look for an `index.js` file. We could have placed the description in its own file and explicitly imported it with no change in behavior.

In addition to `propTypes`, it can make it more clear exactly what props a component expects by explicitly listing them in the component parameters using destructuring syntax. This is done in the `History`, `HistoryList`, `SearchForm`, and `SearchResult` components.

Finally, we can look for alternate syntax that might make our code more readable. Where we had been using the `&&` operator to conditionally evaluate expressions, we can use the *optional chaining* operator `?.` instead. This is done in the `SearchResult` component.

```js
result?.location
```

means to evaluate `result` and if it is not *nullish* (`null` or `undefined`), evaluate `result.location`. If `result` is nullish, the expression will evaluate to `undefined`. React doesn't render anything for `undefined`, so the expression will not display anything if `result` is nullish. This gives us the same behavior as we had before with a little less repetition and chance for error.

## Conclusion

There are many ways to approach this problem set, so be sure to discuss your own approach with your classmates. Some questions that could aid in those discussions are:

- Can you think of pros or cons to the approach you took? 
  - What are some other ways you could have approached the problem?
- What are some other ways you could refactor the solution? 
  - What other decisions could you make about when to hide or show parts of the application?
- What are some other features you could add to the application? 
  - Could you add a button to clear the search history? 
  - Could you add a button to remove a single search result from the history? 
  - Could you add a button to re-run a search from the history?

There are always more perspectives to consider, more ways to approach a problem, and more potential features to add. See what other ideas come up in your discussions!

Building our muscle memory for React patterns comes with writing a lot of React code, so don't be discouraged if you're not yet comfortable with all of the patterns used in the sample solution. Keep practicing and see what else you can build!
