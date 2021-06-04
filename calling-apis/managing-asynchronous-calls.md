# Managing Asynchronous Calls

## Goal

The goal for this lesson is to witness how asynchronous code can effect our data management.

We should walk away from this lesson with one strategy to manage asynchronous code. We should also be able to question and research what other strategies may exist.

## Experiment: Making Multiple Calls

Raffy is building a map web app. He wants to run an experiment!

He wants to make two API requests to the [LocationIQ APIs](https://locationiq.com/docs):

1. First, he wants to make a request to the Forward Geocoding API to find the latitude and longitude of "Seattle, Washington, USA."
1. Then, he wants to make a request to the Reverse Geocoding API with the latitude and longitude he found, and see if the results come back as "Seattle, Washington, USA."

He decides to run his experiment with [this code](https://replit.com/@adacore/Managing-Asynchronous-Requests)!

### !callout-warning

## Raffy's LocationIQ API Key

Raffy knows that it's important to keep his API key private, so he set up a secret in his REPL to keep the key out of his code. If we want to try running Raffy's code, we'll need to do the same thing by opening the Secrets panel, and adding a new key named `api_key` with our LocationIQ API key as the value.

### !end-callout

<!-- prettier-ignore-start -->
```js
const axios = require('axios');

const LOCATIONIQ_KEY = process.env['api_key'];

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  axios.get('https://us1.locationiq.com/v1/search.php',
  {
    params: {
      key: LOCATIONIQ_KEY,
      q: 'Seattle, Washington, USA',
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
  });

  return {
      seattleLat: latitude,
      seattleLon: longitude
  }
}

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
  });
}

const seattleCoordinates = findLatitudeAndLongitude('Seattle, Washington, USA');

const locations = findLocation(seattleCoordinates.seattleLat, seattleCoordinates.seattleLon);

console.log(locations);
```
<!-- prettier-ignore-end -->

This code:

- Defines `findLatitudeAndLongitude`, which searches for the best latitude and longitude coordinates using the given query
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

Raffy could [refactor his code to this](https://replit.com/@adacore/Managing-Asynchronous-Requests):

<!-- prettier-ignore-start -->
```js
const axios = require('axios');

const LOCATIONIQ_KEY = process.env['api_key'];

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  axios.get('https://us1.locationiq.com/v1/search.php',
  {
    params: {
      key: LOCATIONIQ_KEY,
      q: 'Seattle, Washington, USA',
      format: 'json'
    }
  })
  .then( (response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);

    // make the next API call here!
    findLocation(latitude, longitude);
  })
  .catch( (error) => {
    console.log('error in findLatitudeAndLongitude!');
  });
}

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
  })
  .catch( (error) => {
    console.log('error in findLocation!');
  });
}

findLatitudeAndLongitude('Seattle, Washington, USA');
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

This solution successfully uses the results of one API call to make another API call, but it has a few drawbacks:

- `findLatitudeAndLongitude` _does_ find the coordinates, but that's not _all_ it does. At the least, we might want to rename the function to more accurately describe what the entire chain of functionality does. In general, we might say this method now violates the Single Responsibility Principle.
- What if we _do_ only need to get the coordinates? By calling the second method directly from inside the first, we have linked these two functions together, so it's harder to use one without the other.
- What if there were a third operation we needed to perform using the location result that was looked up by latitude and longitude? Would we call that third method from inside the second? Would that make it difficult to keep track of what this growing chain of function calls is doing?

### !callout-info

## Promises, Promises

There are many ways to approach situations like this. For some ideas on where to start our own research, we could look for information about "Promise chaining" or "JavaScript async await". We could also think about how we could use callback functions to help us customize the behavior here. Follow your curiosity!

### !end-callout
