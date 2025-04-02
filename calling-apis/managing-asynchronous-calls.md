# Managing Asynchronous Calls

## Goal

The goal for this lesson is to witness how asynchronous code can effect our data management.

We should walk away from this lesson with one strategy to manage asynchronous code. We should also be able to question and research what other strategies may exist.

## Experiment: Making Multiple Calls

Raffy is building a map web app. He wants to run an experiment!

He wants to make two API requests to the [LocationIQ APIs](https://locationiq.com/docs):

1. First, he wants to make a request to the Forward Geocoding API to find the latitude and longitude of "Seattle, Washington, USA."
1. Then, he wants to make a request to the Reverse Geocoding API with the latitude and longitude he found, and see if the results come back as "Seattle, Washington, USA."

He decides to run his experiment using [this repository](https://github.com/AdaGold/managing-asynchronous-calls-demo)!

### !callout-warning

## Raffy's LocationIQ API Key

Raffy knows that it's important to keep his API key private, so he set up a .env locally to keep the key out of his code. If we want to try running Raffy's code, we'll need to do the same thing by creating a .env file in the root of the project, and adding a new variable named `API_KEY` with our LocationIQ API key as the value.

### !end-callout

<!-- prettier-ignore-start -->
```js
const axios = require('axios');
const dotEnv = require('dotenv');

dotEnv.config(); // Load variables from .env
const LOCATIONIQ_KEY = process.env.API_KEY; // Access the API_KEY from .env file


const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  axios.get('https://us1.locationiq.com/v1/search.php',
    {
      params: {
        key: LOCATIONIQ_KEY,
        q: query,
        format: 'json'
      }
    })
    .then( (response) => {
      latitude = response.data[0].lat;
      longitude = response.data[0].lon;
      console.log('success in findLatitudeAndLongitude!', latitude, longitude);
    })
    .catch( (error) => {
      console.log('error in findLatitudeAndLongitude!');
      // console.log(error); // If we want to see more info about the issue
    });

  return {
    seattleLat: latitude,
    seattleLon: longitude
  };
};

const findLocation = (latitude, longitude) => {
  axios.get('https://us1.locationiq.com/v1/reverse.php',
    {
      params: {
        key: LOCATIONIQ_KEY,
        format: 'json',
        lat: latitude,
        lon: longitude
      }
    })
    .then( (response) => {
      console.log('success in findLocation!', response.data);
      return response.data;
    })
    .catch( (error) => {
      console.log('error in findLocation!');
      // console.log(error); // If we want to see more info about the issue
    });
};

const seattleCoordinates = findLatitudeAndLongitude('Seattle, Washington, USA');
const locations = findLocation(seattleCoordinates.seattleLat, seattleCoordinates.seattleLon);
console.log(locations);
```
<!-- prettier-ignore-end -->

This code:

- Defines `findLatitudeAndLongitude`, which searches for the most likely latitude and longitude coordinates using the given query
- Defines `findLocation`, which searches for location records using the given latitude and longitude
- Finds the coordinates of Seattle by calling `findLatitudeAndLongitude`, and stores the result in `seattleCoordinates`
- Finds the location records for the retrieved `seattleCoordinates` by calling `findLocations`, and stores the result in `locations`

However, when he runs this code, Raffy sees the following in his console output:

```
error in findLocation!
success in findLatitudeAndLongitude! 47.6038321 -122.3300624
```

Raffy's experiment doesn't look successful at all! What's noticeable is that `error in findLocation!` prints out **_before_** `success in findLatitudeAndLongitude!` does.

Because `findLatitudeAndLongitude` prints a success message, it seems like the API call in `findLatitudeAndLongitude` works. The latitude and longitude values print just fine!

Why would there be an error when calling `findLocation`? And why would this print **_before_** we see a print statement from `findLatitudeAndLongitude`?

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: e723527e
* title: Managing Asynchronous Calls
##### !question

Make a hypothesis:

Why would there be an error when calling `findLocation`? And why would this print **_before_** we see a print statement from `findLatitudeAndLongitude`?

##### !end-question
### !end-challenge
<!-- prettier-ignore-end -->

### Debugging Our Problem

Raffy adds some additional debug logging statements, which leads him to focus on one line in particular:

```js
const locations = findLocation(seattleCoordinates.seattleLat, seattleCoordinates.seattleLon);
```

Raffy makes two observations while debugging:

- `seattleCoordinates.seattleLat` _and_ `seattleCoordinates.seattleLon` are `undefined` at the time of calling `findLocation`
- The print statements in `findLocation` printed, meaning that `findLocation` was definitely called and got into the `catch` block

Raffy decides to trace further back to check the values in the object being assigned to `seattleCoordinates`. He knows this is the return value from `findLatitudeAndLongitude`, so he adds some logging before the return statement to check on the `latitude` and `longitude`.

<!-- prettier-ignore-start -->
```js
  console.log('latitude:', latitude);
  console.log('longitude:', longitude);

  // existing return in findLatitudeAndLongitude
  return {
      seattleLat: latitude,
      seattleLon: longitude
  }
```
<!-- prettier-ignore-end -->

He is surprised by the result.

When the object being returned from `findLatitudeAndLongitude` is created, `latitude` and `longitude` are both `undefined`. On top of that, the logging statements print out before the success message prints out. The return is running before the API call returns!

After diagramming, thinking, researching, and rubber-ducking, Raffy comes to this conclusion:

- The fields in `seattleCoordinates` have `undefined` values
- `seattleCoordinates` is assigned the object returned from `findLatitudeAndLongitude`
- When `findLatitudeAndLongitude` returns, the API call hasn't completed yet
- Since the API call hasn't completed, `latitude` and `longitude` are both still `undefined` when they are used to initialize the returned object
- Somehow, he needs to wait until after the first API call has completed to use the `latitude` and `longitude` values

The asynchronous nature of the API calls means that Raffy needs to think about more than the typical program flow!

### Refactoring: Utilize `then`

How can Raffy ensure that `findLocation`, which needs the `latitude` and `longitude`, executes only after the API call in `findLatitudeAndLongitude` finishes?

Raffy has a few options:

- Re-order the code, so that the second API call happens **inside** the `then` chained to the first API call
- Depending on our depth of knowledge in JavaScript, approach this from a different design perspective
- Depending on the tools/libraries available, approach this using a different design pattern

When working on a smaller JavaScript project, one way we can approach solving this problem is by refactoring our second API call into a `then` block of the first API call.

Raffy could [refactor his code to this](https://github.com/AdaGold/managing-asynchronous-calls-demo/blob/main/src/index.js):

<!-- prettier-ignore-start -->
```js
const axios = require('axios');
const dotEnv = require('dotenv');

dotEnv.config(); 
const LOCATIONIQ_KEY = process.env.API_KEY;

const getLocationFromQuery = (query) => {
  // Make the first API call to get latitude and longitude
  findLatitudeAndLongitude(query)
    .then((response) => {
      // `response` is the data returned from the findLatitudeAndLongitude promise.
      // Make the next API call here, where we can use 
      // the `response` data from the previous call.
      findLocation(response.latitude, response.longitude);
    })
    .catch((error) => {
      console.log('getLocationFromQuery: error fetching location from query!');
      // console.log(error); // If we want to see more info about the issue
    });
};

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;

  // Return the promise chain created by the axios call
  return axios.get('https://us1.locationiq.com/v1/search.php',
    {
      params: {
        key: LOCATIONIQ_KEY,
        q: query,
        format: 'json'
      }
    })
    .then((response) => {
      latitude = response.data[0].lat;
      longitude = response.data[0].lon;
      console.log('success in findLatitudeAndLongitude!', latitude, longitude);

      return {latitude, longitude}; // Return the data we want to pass on
    })
    .catch((error) => {
      console.log('error in findLatitudeAndLongitude!');
      // console.log(error); // If we want to see more info about the issue
    });
};

const findLocation = (latitude, longitude) => {
  axios.get('https://us1.locationiq.com/v1/reverse.php',
    {
      params: {
        key: LOCATIONIQ_KEY,
        format: 'json',
        lat: latitude,
        lon: longitude
      }
    })
    .then((response) => {
      console.log('success in findLocation!', response.data);
    })
    .catch((error) => {
      console.log('error in findLocation!', error);
      // console.log(error); // If we want to see more info about the issue
    });
};

getLocationFromQuery('Seattle, Washington, USA');
```
<!-- prettier-ignore-end -->

Read through this code, and then answer the questions below.

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 72400dc5
* title: Managing Asynchronous Calls
##### !question

Which of the following most accurately describes where we invoke `findLocation`?

##### !end-question
##### !options

* After we define `findLocation`
* After we invoke `findLatitudeAndLongitude`
* Inside the `then` block that is chained after making the first API call
* Inside `findLatitudeAndLongitude`, after making the first API call

##### !end-options
##### !answer

* Inside the `then` block that is chained after making the first API call

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: 9b3c1438
* title: Managing Asynchronous Calls
##### !question

When we invoke `findLocation`, we pass in a latitude and longitude. Where did these values come from?

##### !end-question
##### !options

* The response from the first API call
* The response from the second API call
* The return value of `findLocation`
* The return value of `findLatitudeAndLongitude`

##### !end-options
##### !answer

* The response from the first API call

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 4 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: fa009186
* title: Managing Asynchronous Calls
##### !question

Which of the following most accurately describes where we print the results from the second API call?

##### !end-question
##### !options

* After we invoke `findLocation`
* After we invoke `findLatitudeAndLongitude`
* Inside the `then` block that is chained after making the second API call
* Inside `findLocation`, after making the first API call

##### !end-options
##### !answer

* Inside the `then` block that is chained after making the second API call

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

Raffy chose to create a new function `getLocationFromQuery` to manage calling the existing functions `findLatitudeAndLongitude` and `findLocation`. He could have called the second method directly from inside the first, with `.then` chaining, but doing so would have linked these two functions together, making it harder to use one without the other.

To use `findLatitudeAndLongitude` from another function and pass on its `response` data to another network call, we needed to make a couple updates in `findLatitudeAndLongitude`: 
- `return` the result of the `axios` call which returns the promise chain the axios call creates.
- Inside the `.then` block, we unpack the `latitude` and `longitude` from the `response` object and return just those values we want in a new Object. This allows us to pass these values to a new `.then` block wherever we invoke the function.

Something else to note: our implementation only prints out the location response. Since we don't take further actions on the location result, the `findLocation` function has not been updated to return its promise chain created by the axios call. 

If we wanted to take the location information and perform some operations or make further network calls, we would likely want to update `findLocation` to:
- Return the promise chain created by the axios call
- Return the location information inside of `findLocation`'s `.then` block

### !callout-info

## Promises, Promises

There are many ways to approach situations like this. For some ideas on where to start our own research, we could look for information about "Promise chaining" or "JavaScript async await". We could also think about how we could use callback functions to help us customize the behavior here. Follow your curiosity!

### !end-callout
