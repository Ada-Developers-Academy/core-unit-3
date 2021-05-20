# POST Requests With axios

## Introduction

Matteo is making the front-end for the **Ada Trip Reserving Service™**. This service:

1. helps tour guides create Trip packages catered to global travelers
2. helps travelers find Trip packages that fit their needs, and make a reservation for that trip

Matteo's front-end should make calls to [the back-end Ada Trip Reserving Service™ Trip API™™™](https://github.com/AdaGold/trip-api). The first feature he needs to build is enabling users to create new trip packages.

Matteo's first step is to [research the API documentation](https://github.com/AdaGold/trip-api). He'll use the documentation and Postman to answer the following questions:

1. What is the API call that lists all existing Trip packages?
2. How many existing trips are there?
3. What is the API call that creates a new Trip package?
4. What is the verb and URL of that request?
5. What are the required query parameters? What are the optional query parameters?

<br/>

<details style="max-width: 700px; margin: auto;">

  <summary>
    Here is what Matteo discovers with the documentation and Postman.
  </summary>

1. `get` `https://trektravel.herokuapp.com/trips`
1. Depends, but Matteo will note the shape of the expected JSON response
1. `post` `https://trektravel.herokuapp.com/trips`
1. `post`, and `https://trektravel.herokuapp.com/trips`
1. Required: `name`, `continent`, `category`, `weeks`, and `cost`. Optional: `about`

</details>

## Making a `POST` request

The syntax for making a POST request using `axios` is very similar to making a GET request, but we will use the `post` function instead.

### An Aside: Working With Ambiguous Documentation

What happens if Matteo [finds that the official `POST` request documentation is ambiguous](https://axios-http.com/docs/post_example), and he can't find more satisfactory resources?

For example, Matteo could go to the POST request page and see this code, with zero explanation:

<!-- prettier-ignore-start -->
```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
```
<!-- prettier-ignore-end -->

The best thing for Matteo to do in this situation is:

1. Make hypotheses, using context clues and what he knows about APIs
1. Test them

From this example code, we can see that the second argument for `axios.post` is this object literal:

<!-- prettier-ignore-start -->
```js
{
    firstName: 'Fred',
    lastName: 'Flintstone'
}
```
<!-- prettier-ignore-end -->

Matteo sees that there are two keys, `firstName` and `lastName`. From his knowledge of APIs, these keys don't look like they're describing parts of an HTTP request like HTTP headers or params. Additionally, this example request is being made to `/user`.

Matteo hypothesizes that this object literal holds the HTTP request body data, and he can test his hypothesis against his API.

### Sending a Request to the Ada Trip Reserving Service™ Trip API™™™

Matteo is ready to try to make a `POST` request to the back-end service. He [determines from the API documentation](https://github.com/AdaGold/trip-api) that the request he wants to make is:

- `POST` request to `https://trektravel.herokuapp.com/trips`
- Request Body:
  - `name`
  - `continent`
  - `about`
  - `category`
  - `weeks`
  - `cost`

The `post` function takes in two parameters: URL, and an optional object. This optional object represents the HTTP request body data that we want to send.

Matteo could write this code:

```js
const axios = require("axios");

const tripData = {
  name: "Matteo's Chill Trip to Chicago",
  continent: "North America",
  about: "A tour around good architecture and hot dogs.",
  category: "casual",
  weeks: 1,
  cost: 180,
};

axios
  .post("https://trektravel.herokuapp.com/trips", tripData)
  .then((response) => {
    console.log("response:", response);
    console.log("response data:", response.data);
  })
  .catch((error) => {
    console.log("error:", error);
    console.log("error response:", error.response);
  })
  .finally(() => {
    console.log("finally done!");
  });
```

With this code, Matteo can begin to make more `POST` requests in JavaScript!

#### Refactoring: Inline `tripData`

<details style="max-width: 700px; margin: auto;">

  <summary>
    Let's refactor our code! Instead of initializing the tripData variable, let's pass in an object literal.
  </summary>

```js
const axios = require("axios");

axios.post("https://trektravel.herokuapp.com/trips", {
  name: "Matteo's Chill Trip to Chicago",
  continent: "North America",
  about: "A tour around good architecture and hot dogs.",
  category: "casual",
  weeks: 1,
  cost: 180,
});
//   proceed as normal...
//   .then((response) => { })
//   .catch((error) => { })
//   .finally(() => { });
```

</details>

## Verifying Error Handling

Matteo wants to confirm that his code can handle unsuccessful HTTP requests.

To confirm this, he will temporarily purposely make an API call with bad trip data.

He refactors his code to use a new object, `badTripData`, which has a blank `name`. According to [the API documentation](<(https://github.com/AdaGold/trip-api)>), it should not be a successful call.

```js
const axios = require("axios");

const badTripData = {
  name: "",
  continent: "North America",
  about: "A tour around good architecture and hot dogs.",
  category: "casual",
  weeks: 1,
  cost: 180,
};

axios
  .post("https://trektravel.herokuapp.com/trips", badTripData)
  .then((response) => {
    //
  })
  .catch((error) => {
    console.log("error:", error);
    console.log("error response:", error.response);
  });
```

</details>

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: multiple-choice
* id: f17bde22
* title: POST Requests With axios
##### !question

Which of the following objects has this value, and why?

```json
{
  "errors": {
    "name": ["can't be blank"]
  }
}
```

##### !end-question
##### !options

* `error` because this is the response that the API defined and sent back
* `error.response` because this is the default response that `axios` defined and sent back
* `error.response.data` because this is the response that the API defined and sent back
* `error.response.data` because this is the default response that `axios` defined and sent back

##### !end-options
##### !answer

* `error.response.data` because this is the response that the API defined and sent back

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

