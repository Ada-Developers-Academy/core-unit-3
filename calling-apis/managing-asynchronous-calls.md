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

<!-- prettier-ignore-start -->
```js
const axios = require("axios");

const YOUR_API_KEY = 'YOUR API KEY';

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  axios.get('https://us1.locationiq.com/v1/search.php',
  {
    params: {
      key: YOUR_API_KEY,
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
      key: YOUR_API_KEY,
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

- Defines `findLatitudeAndLongitude`, which searches for latitude and longitude with the given query
- Defines `findLocation`, which searches for location with the given latitude and longitude
- Finds the coordinates of Seattle by calling `findLatitudeAndLongitude` and puts it in `seattleCoordinates`
- Finds the location results by calling `findLocations` and puts it in `locations`

However, when we run this code, our console outputs this:

```
error in findLocation!
success in findLatitudeAndLongitude! 47.6038321 -122.3300624
```

Raffy's experiment doesn't look successful at all! What's noticeable is that `error in findLocation!` prints out **_before_** `success in findLatitudeAndLongitude!` does.

It's apparent that the API call in `findLatitudeAndLongitude` works. We can get back a latitude and longitude just fine!

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

After debugging, Raffy should hone in on one specific line:

```js
const locations = findLocation(seattleCoordinates.seattleLat, seattleCoordinates.seattleLon);
```

Raffy found these two facts while debugging:

- `seattleCoordinates.seattleLat` _and_ `seattleCoordinates.seattleLon` are `undefined` at the time of calling `findLocation`
- The print statements in `findLocation` printed, meaning that `findLocation` was definitely called and got into the `catch` block

After diagramming, thinking, researching, and rubber-ducking, Raffy comes to this conclusion:

- `seattleCoordinates` has undefined values because it hasn't been assigned a value yet, and JavaScript gives `undefined` when accessing `seattleCoordinates.seattleLat` and `seattleCoordinates.seattleLon`
- `seattleCoordinates` is assigned a value from `findLatitudeAndLongitude`'s return
- `seattleCoordinates` wasn't assigned a value because `findLatitudeAndLongitude` didn't return yet
- Something that changes the flow of control in our code is our asynchronous API calls

### Refactoring: Utilize `then`

How can Raffy ensure that `findLocation` executes after `findLatitudeAndLongitude` finishes?

Raffy has a few options:

- Re-order the code, so that the second API call happens **inside** the `then` chained to the first API call
- Depending on our depth of knowledge in JavaScript, approach this from a different design pattern
- Depending on different tools/libraries available, approach this from a different design pattern

When working on a smaller JavaScript project, we can approach solving this problem by refactoring our work into the first `then` block.

Raffy could [refactor his code to this](https://replit.com/@adacore/Managing-Asynchronous-Requests):

<!-- prettier-ignore-start -->
```js
const findLocation = (latitude, longitude) => {
  axios.get('https://us1.locationiq.com/v1/reverse.php',
  {
    params: {
      key: YOUR_API_KEY,
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

const findLocationFromLatAndLon = (query) => {
  let latitude, longitude;
  axios.get('https://us1.locationiq.com/v1/search.php',
  {
    params: {
      key: YOUR_API_KEY,
      q: 'Seattle, Washington, USA',
      format: 'json'
    }
  })
  .then( (response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);

    findLocation(latitude, longitude);
  })
  .catch( (error) => {
    console.log('error in findLatitudeAndLongitude!');
  });
}

findLocationFromLatAndLon('Seattle, Washington, USA');
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

When we introduce other tools, libraries, and programming paradigms, we will approach this from a different angle.
