# Problem Set: Forms and APIs

## Directions

Create a small, practice React app named `react-geocoder`.

Run this command to create the practice project.

```
$ npx create-react-app react-geocoder
```

Change into the `react-geocoder` directory created by `create-react-app`, and run the server.

Keep your work on your local machine. There is no submission for this problem set. Be prepared to share your work in small groups.

## Practice

Consider this user story:

> As a curious traveler, I want to type in the name of a location and see its latitude and longitude determined by [the LocationIQ API](https://locationiq.com/docs), so that I get accurate coordinates and avoid getting lost.

Create a web app that has a form. This form should include:

- A text input field, where users will type their search query
- A submit button, which users will press when they're ready to search

The web app should also display:

- The search query itself (repeated outside the text field)
- The latitudinal coordinate of the search result
- The longitudinal coordinate of the search result

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