# Problem Set: Forms and APIs

## Directions

Create a small, practice React app named `react-geocoder`.

Decide whether to start entirely from scratch, or whether to use some already scaffolded code.

Keep your work on your local machine. There is no submission for this problem set. Be prepared to share your work in small groups.

### Starting from Scratch

Run this command to create the practice project.

```
$ npm create -y vite@latest react-geocoder -- --template react
```

As usual, we can follow the prompt when the command completes to start up the default template application.

Spend some time cleaning up the Vite template code, removing unnecessary styles, images, etc. It's also a good idea to add the semicolon eslint rule to the `.eslintrc.cjs` file. The resulting `rules` section should look like this:

```js
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': [ 'warn', 'always'],
  },
```

### Using Scaffolded Code

Fork and clone the project files using the link in the **Resources** section below.

## Practice

In this problem set, we will use all of the React and JavaScript skills we've learned so far to create a web app that uses an API to get data.

## Goal

Consider this user story:

> As a curious traveler, I want to type in the name of a location and see its latitude and longitude determined by [the LocationIQ API](https://locationiq.com/docs), so that I get accurate coordinates and avoid getting lost.

Create a web app that has a form. This form should include:

- A text input field, where users will type their search query
- A submit button, which users will press when they're ready to search

The web app should also display:

- The search query itself (repeated outside the text field)
- The latitudinal coordinate of the search result
- The longitudinal coordinate of the search result

## Resources

Scaffold code is available to help you get started quickly.

- [Forms and APIs Problem Set](https://github.com/AdaGold/problem-set-forms-and-apis)

After forking and cloning the project, run `npm install` to install the necessary dependencies. The development server is started with `npm run dev`.

The scaffold code removes a lot of the default Vite template code and simplifies the applied styles. The `App` component renders an empty body.

A `.env.sample` file is provided that can be used to store the API key. Make a copy of the file and name it `.env`. Then update the LocationIQ key in that file. The `.env` file is already added to the `.gitignore` file, so it will not be committed to the repository. We should still avoid attempting to deploy this to any public location, as the API key will still be visible in the source code.

## Implement

### Wave 1: Implement the Goal User Story

Build and implement the described interface and functionality. We will need to make use of `axios` to make API calls. Note that the API call is to be performed in response to a user action, not on page load.

While it is possible to implement the entire project in a single component, consider breaking the project into smaller components. For example, we could have a `SearchForm` component that handles the form input, and a `SearchResult` component that displays the results. When splitting up the project, consider the following:
- What data must be tracked by the app?
- Where should the single source of truth for the data be?
- What props are needed to pass data between components?
- How should the data be updated?
- How can we ensure that data is updated after the API call is complete?
- What logic must reside in a component, and what logic can be relocated to other locations?

### !callout-info

## Use the First Result of the Search/Forward Geocoding API

For this assignment, find the latitude and longitude using [the LocationIQ Search/Forward Geocoding API](https://locationiq.com/docs). Always use the first result of the response, if there is a successful response.

### !end-callout

An example implementation may look like this:

![Sample solution user interface. Displays the following elements: a header, "Get Latitude and Longitude", an input text box initially empty, a button, "Search Now!", a subheader, "Results for:", 2 list items, "Latitude:", and "Longitude:".](../assets/handling-forms_problem-set-forms-and-apis_wave-1-no-query.png)  
_Fig. A possible interface layout for this problem set_

![Sample solution user interface after user interactions. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Seattle" typed in, a button, "Search Now!", a subheader, "Results for: Seattle", 2 list items, "Latitude: 47.6038321", and "Longitude: -122.3300624".](../assets/handling-forms_problem-set-forms-and-apis_wave-1-seattle.png)  
_Fig. Displaying the results of a user query for Seattle_

![Sample solution user interface after user interactions. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Atlanta" typed in, a button, "Search Now!", a subheader, "Results for: Atlanta", 2 list items, "Latitude: 33.7490987", and "Longitude: -84.3901849".](../assets/handling-forms_problem-set-forms-and-apis_wave-1-atlanta.png)  
_Fig. Displaying the results of a user query for Atlanta_

### Wave 2: Handle Unsuccessful Calls

If the API gives back an error, handle it by displaying an error message. The web app should _not_ crash.

An example implementation may look like this:

![Sample solution user interface displaying an error message. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "thisdoesntexistandwillgivebackanerror" typed in, a button, "Search Now!", a subheader, "Results for: thisdoesntexistandwillgivebackanerror", 2 list items, "Latitude:", and "Longitude:". An error message is displayed, enclosed by a rounded rectangle with a thick red border and pink interior. It displays the following elements: a header, "Uh oh! Error!", a message, "Unable to geocode".](../assets/handling-forms_problem-set-forms-and-apis_wave-2-error.png)  
_Fig. Searching for thisdoesntexistandwillgivebackanerror results in an error_

### Optional Enhancement: Search History

Consider this user story:

> As a user, I want to see a history of all locations I've searched before, so that I can easily remember what I've looked up.

Create a section that displays a list of _all_ search queries that have been made, along with their latitude and longitude.

The web app should continue to handle errors, and _not_ crash.

An example implementation may look like this:

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Seattle" typed in, a button, "Search Now!", a subheader, "Results for: Seattle", 2 list items, "Latitude: 47.6038321", and "Longitude: -122.3300624", a subheader, "Search History", a small header, "Seattle", and some result text, "Latitude: 47.6038321 Longitude: -122.3300624"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-seattle.png)  
_Fig. Displaying the search history after a search for Seattle..._

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Atlanta" typed in, a button, "Search Now!", a subheader, "Results for: Atlanta", 2 list items, "Latitude: 33.7490987", and "Longitude: -84.3901849", a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.3300624", a small header, "Atlanta", and some result text, "Latitude: 33.7490987 Longitude: -84.3901849"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-atlanta.png)  
_Fig. After searching for Atlanta..._

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Manila" typed in, a button, "Search Now!", a subheader, "Results for: Manila", 2 list items, "Latitude: 14.5907332", and "Longitude: 120.9809674", a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.3300624", a small header, "Atlanta", some result text, "Latitude: 33.7490987 Longitude: -84.3901849", a small header, "Manila", and some result text, "Latitude: 14.5907332 Longitude: 120.9809674"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-manila.png)  
_Fig. And after searching for Manila_

![Sample solution user interface with a search history after encountering an error. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "thisshouldbebroken" typed in, a button, "Search Now!", a subheader, "Results for: thisshouldbebroken", 2 list items, "Latitude: 14.5907332", and "Longitude: 120.9809674", an error message enclosed by a rounded rectangle with a thick red border and pink interior displaying the following elements: a header, "Uh oh! Error!", a message, "Unable to geocode". After the error, the elements continue with a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.3300624", a small header, "Atlanta", some result text, "Latitude: 33.7490987 Longitude: -84.3901849", a small header, "Manila", and some result text, "Latitude: 14.5907332 Longitude: 120.9809674"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-error.png)  
_Fig. Errors should still be handled without crashing_

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Seattle" typed in, a button, "Search Now!", a subheader, "Results for: Seattle", 2 list items, "Latitude: 47.6038321", and "Longitude: -122.3300624", a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.3300624", a small header, "Atlanta", some result text, "Latitude: 33.7490987 Longitude: -84.3901849", a small header, "Manila", some result text, "Latitude: 14.5907332 Longitude: 120.9809674", a small header, "Seattle", and some result text, "Latitude: 47.6038321 Longitude: -122.3300624".](../assets/handling-forms_problem-set-forms-and-apis_wave-3-seattle-again.png)  
_Fig. Searching for the same item adds another entry to the history_