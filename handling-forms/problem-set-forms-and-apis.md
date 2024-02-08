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

To avoid noise when running `npm run lint`, we should also add `'vite.config.js'` to the list of files under the `ignorePatterns` key, which should look like this:

```js
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
```

It may also be helpful to add a line to the `.gitignore` file to ignore a `.env` file. This is discussed in more detail in the "API Keys" section below. Add the following line to the end of the `.gitignore` file:

```txt
.env
```

### Using Scaffolded Code

Scaffold code is available to help you get started quickly. Fork and clone the following repository to your local machine:

- [Forms and APIs Problem Set](https://github.com/AdaGold/problem-set-forms-and-apis)

After forking and cloning the project, run `npm install` to install the necessary dependencies. The development server is started with `npm run dev`.

The scaffold code removes a lot of the default Vite template code and simplifies the applied styles. The `App` component renders an empty body.

## Goal

In this problem set, we will use all of the React and JavaScript skills we've learned so far to create a web app that uses an API to get data.

Consider this user story:

> As a curious traveler, I want to type in the name of a location and see its latitude and longitude determined by [the LocationIQ API](https://locationiq.com/docs), so that I get accurate coordinates and avoid getting lost.

Create a web app that has a form. This form should include:

- A text input field, where users will type their search query
- A submit button, which users will press when they're ready to search

The web app should also display:

- The search query itself (repeated outside the text field)
- The latitudinal coordinate of the search result
- The longitudinal coordinate of the search result

## API Keys

### !callout-error

## Use Caution When Committing Your Work

This is a front end application that uses an API key. Be careful not to commit the API key to a public repository (such as by hardcoding it into a JavaScript file).

<br />

*Do not deploy this application to a public server.* Even if we use React's version of a `.env` file (described below), the API key will be visible to anyone who views the source code using the browser development tools.

<br />

If we ever accidentally commit an API key, we should immediately revoke the key and generate a new one.

### !end-callout

In this project, we will use the [LocationIQ API](https://locationiq.com/docs) to get latitude and longitude data. To use the API, we must supply our API key with each request. We can reuse any existing LocationIQ API key we have, or we can sign up for a new one at their web site.

Just as when we work with API keys in backend projects, we should avoid committing the API key to a public repository. To do so, we can use a `.env` file to store the key, and ensure that the `.env` file is listed in the `.gitignore` file so that it will not be committed to the repository.

The scaffolded [`.gitignore`](https://raw.githubusercontent.com/AdaGold/problem-set-forms-and-apis/main/.gitignore) file already includes a line for `.env`, but if starting from scratch, we must add it ourselves.

After updating the `.gitignore`, we can use the [`.env.example`](https://raw.githubusercontent.com/AdaGold/problem-set-forms-and-apis/main/.env.example) file included in the scaffold code to make our own `.env` file.

<br />

<details>
<summary><code>.env.example</code></summary>

```bash
# Make a copy of this file and name it .env

# DO NOT DEPLOY THIS APPLICATION
# Values in the .env file ARE NOT private (nor can they be made to be)
# and can be accessed by anyone using the application

VITE_BASE_URL=https://us1.locationiq.com/v1/
VITE_API_KEY=YOUR_KEY_HERE

# Seriously. NEVER put an API key in a real front end .env file
# This is only being done for convenience.
```

</details>

Copy the contents of the `.env.example` file into a new file named `.env`. Then update the value of `VITE_API_KEY` to the API key to be used by replacing `YOUR_KEY_HERE` with the actual key (quotes are optional).

The `VITE_BASE_URL` value is included for convenience, but feel free to remove it if it is not needed. The sample solution uses it rather than hard-coding the base URL directly in the API call. Though not fully developed in the sample solution, it's usually a good idea to place values we don't control ourselves (such as the locations of external APIs) outside of the code so that they can be more easily updated if the external API changes.

In Python, we would need to install the `python-dotenv` package to use the `.env` file. This lets us read the `.env` variables through the keys of the `os.environ` `dict`-like object, which provides access to all system environment variables.

Vite-created React projects automatically load variables from a `.env` file, but only those that begin with `VITE_`. Vite stores all loaded variables in the `import.meta.env` object. For example, the `VITE_API_KEY` variable can be accessed in the React app using `import.meta.env.VITE_API_KEY`.

By storing the API key in the `.env` file, we can avoid committing it to the repository. *We should still avoid deploying this application to a public server*, as the API key will be visible in the source code.

## Implement

### !callout-info

## Use the First Result of the Search/Forward Geocoding API

For this assignment, find the latitude and longitude using [the LocationIQ Search/Forward Geocoding API](https://locationiq.com/docs). Always use the first result of the response, if there is a successful response.

### !end-callout

### Wave 1: Implement the Goal User Story

Build and implement the described interface and functionality. We will need to make use of `axios` to make API calls. Note that the API call is to be performed in response to a user action, not on page load.

While it is possible to implement the entire project in a single component, consider breaking the project into smaller components. For example, we could have a `SearchForm` component that handles the form input, and a `SearchResult` component that displays the results. When splitting up the project, consider the following:
- What data must be tracked by the app?
- Where should the single source of truth for the data be?
- What props are needed to pass data between components?
- How should the data be updated?
- How can we ensure that data is updated after the API call is complete?
- What logic must reside in a component? Are there pieces of logic or functions that could be placed in another location or even their own file?

An example implementation may look like this:

![Sample solution user interface. Displays the following elements: a header, "Get Latitude and Longitude", an input text box initially empty, a button, "Search Now!", a subheader, "Results for:", 2 list items, "Latitude:", and "Longitude:".](../assets/handling-forms_problem-set-forms-and-apis_wave-1-no-query.png)  
_Fig. A possible interface layout for this problem set_

![Sample solution user interface after user interactions. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Seattle" typed in, a button, "Search Now!", a subheader, "Results for: Seattle", 2 list items, "Latitude: 47.6038321", and "Longitude: -122.330062".](../assets/handling-forms_problem-set-forms-and-apis_wave-1-seattle.png)  
_Fig. Displaying the results of a user query for Seattle_

![Sample solution user interface after user interactions. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Atlanta" typed in, a button, "Search Now!", a subheader, "Results for: Atlanta", 2 list items, "Latitude: 33.7489924", and "Longitude: -84.3902644".](../assets/handling-forms_problem-set-forms-and-apis_wave-1-atlanta.png)  
_Fig. Displaying the results of a user query for Atlanta_

### Wave 2: Handle Unsuccessful Calls

If the API gives back an error, handle it by displaying an error message. The web app should _not_ crash.

An example implementation may look like this:

![Sample solution user interface displaying an error message. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "thisdoesntexistandwillgivebackanerror" typed in, a button, "Search Now!", a subheader, "Results for:", 2 list items, "Latitude:", and "Longitude:". An error message is displayed, enclosed by a rounded rectangle with a thick red border and pink interior. It displays the following elements: a header, "Uh oh! Error!", a message, "Unable to geocode".](../assets/handling-forms_problem-set-forms-and-apis_wave-2-error.png)  
_Fig. Searching for thisdoesntexistandwillgivebackanerror results in an error_

### Optional Enhancement: Search History

Consider this user story:

> As a user, I want to see a history of all locations I've searched before, so that I can easily remember what I've looked up.

Create a section that displays a list of _all_ search queries that have been made, along with their latitude and longitude.

The web app should continue to handle errors, and _not_ crash.

An example implementation may look like this:

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Seattle" typed in, a button, "Search Now!", a subheader, "Results for: Seattle", 2 list items, "Latitude: 47.6038321", and "Longitude: -122.330062", a subheader, "Search History", a small header, "Seattle", and some result text, "Latitude: 47.6038321 Longitude: -122.330062"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-seattle.png)  
_Fig. Displaying the search history after a search for Seattle..._

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Atlanta" typed in, a button, "Search Now!", a subheader, "Results for: Atlanta", 2 list items, "Latitude: 33.7489924", and "Longitude: -84.3902644", a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.330062", a small header, "Atlanta", and some result text, "Latitude: 33.7489924 Longitude: -84.3902644"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-atlanta.png)  
_Fig. After searching for Atlanta..._

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Manila" typed in, a button, "Search Now!", a subheader, "Results for: Manila", 2 list items, "Latitude: 14.5906346", and "Longitude: 120.120.9799964", a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.330062", a small header, "Atlanta", some result text, "Latitude: 33.7489924 Longitude: -84.3902644", a small header, "Manila", and some result text, "Latitude: 14.5906346 Longitude: 120.9799964"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-manila.png)  
_Fig. And after searching for Manila_

![Sample solution user interface with a search history after encountering an error. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "thisshouldbebroken" typed in, a button, "Search Now!", a subheader, "Results for: Manila" (nt updated since the search failed), 2 list items, "Latitude: 14.5906346", and "Longitude: 120.120.9799964", an error message enclosed by a rounded rectangle with a thick red border and pink interior displaying the following elements: a header, "Uh oh! Error!", a message, "Unable to geocode". After the error, the elements continue with a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.330062", a small header, "Atlanta", some result text, "Latitude: 33.7489924 Longitude: -84.3902644", a small header, "Manila", and some result text, "Latitude: 14.5906346 Longitude: 120.120.9799964"](../assets/handling-forms_problem-set-forms-and-apis_wave-3-error.png)  
_Fig. Errors should still be handled without crashing_

![Sample solution user interface with a search history. Displays the following elements: a header, "Get Latitude and Longitude", an input text box with "Seattle" typed in, a button, "Search Now!", a subheader, "Results for: Seattle", 2 list items, "Latitude: 47.6038321", and "Longitude: -122.330062", a subheader, "Search History", a small header, "Seattle", some result text, "Latitude: 47.6038321 Longitude: -122.330062", a small header, "Atlanta", some result text, "Latitude: 33.7489924 Longitude: -84.3902644", a small header, "Manila", some result text, "Latitude: 14.5906346 Longitude: 120.120.9799964", a small header, "Seattle", and some result text, "Latitude: 47.6038321 Longitude: -122.330062".](../assets/handling-forms_problem-set-forms-and-apis_wave-3-seattle-again.png)  
_Fig. Searching for the same item adds another entry to the history_

<br />

<details>
<summary>Here's an example solution for review after completing the problem set
</summary>

[Forms and APIs Problem Set Solution](https://github.com/AdaAnswers/problem-set-forms-and-apis)

Be sure to select the branch for the solution functionality you want to review. The `main` branch has no solution in it.

It's ok if these solutions look different than what you came up with. Consider discussing your approach with a classmate to see how others tackled this problem set.

Refer to the [Sample Solution Discussion](./problem-set-sample-solution-discussion.md) resource for additional details about the approaches used in this sample solution.

</details>
