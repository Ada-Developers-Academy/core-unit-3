# POST Requests With axios

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=f4e605e5-6ac5-4308-92a4-ad420104620c&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

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

<details>

  <summary>
    Here is what Matteo discovers with the documentation and Postman.
  </summary>

1. `get` `https://trektravel.onrender.com/trips`
1. Depends, but Matteo will note the shape of the expected JSON response
1. `post` `https://trektravel.onrender.com/trips`
1. verb: `POST`, and URL: `https://trektravel.onrender.com/trips`
1. Required: `name`, `continent`, `category`, `weeks`, and `cost`. Optional: `about`

</details>

## Making a `POST` request

Matteo wants to be able to add new Trip packages to the service, and from his initial research, that requires making a `POST` request.

The syntax for making a `POST` request using `axios` is very similar to making a `GET` request, but instead of using the `get` function, `axios` provides a `post` function.

### An Aside: Working With Vague Documentation

Matteo is going to need to make a `POST` request using `axios`, but sometimes a library's official documentation, even one as popular as `axios`, can be lacking in details.

For example, when he visits the [`POST` Requests](https://axios-http.com/docs/post_example) documentation, he finds this example code, with no further explanation:

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

Matteo could perform additional web searches to find other documentation about the `post` method, but instead he decides to take this opportunity to practice making inferences from seeing how a method is used.

To practice this skill, Matteo will:

1. Make hypotheses, using context clues and what he knows about APIs
1. Test them

Matteo supposes that the string `'/user'` provided for the first argument to `post` is the URL of the endpoint. This mirrors the meaning of the first argument to a `get` call, so he feels good making this assumption.

Continuing with the example, he sees that the second argument for `axios.post` is this object literal:

<!-- prettier-ignore-start -->
```js
{
    firstName: 'Fred',
    lastName: 'Flintstone'
}
```
<!-- prettier-ignore-end -->

Matteo sees that there are two keys, `firstName` and `lastName`. From his knowledge of APIs, these keys don't look like they're describing parts of an HTTP request like HTTP headers or params. Unlike the `get` call, the second argument doesn't seem to hold "config" data, which was where the `get` call had passed its query params.

Matteo hypothesizes that this object literal holds the HTTP request body data.

Now, with an idea of how he can set the URL endpoint and the request data, Matteo could test his hypothesis against an API of his own to confirm it. Or if he's feeling confident, he can move on to working with his target API!

### Sending a Request to the Ada Trip Reserving Service™ Trip API™™™

Matteo decides that he is ready to try to make a `POST` request to the back-end service. He [determines from the API documentation](https://github.com/AdaGold/trip-api) that the request he wants to make is:

- `POST` request to `https://trektravel.onrender.com/trips`
- Request Body:
  - `name`
  - `continent`
  - `about`
  - `category`
  - `weeks`
  - `cost`

From the limited `axios` documentation, he has determined that the `post` function takes in two parameters: a URL, and an object. This object represents the HTTP request body data that we want to send.

Matteo could write this code:

<!-- prettier-ignore-start -->
```js
const axios = require('axios');

const tripData = {
  name: 'Matteo\'s Chill Trip to Chicago',
  continent: 'North America',
  about: 'A tour around good architecture and hot dogs.',
  category: 'casual',
  weeks: 1,
  cost: 180,
};

axios
  .post('https://trektravel.onrender.com/trips', tripData)
  .then((response) => {
    console.log('response:', response);
    console.log('response data:', response.data);
  })
  .catch((error) => {
    console.log('error:', error);
    console.log('error response:', error.response);
  })
  .finally(() => {
    console.log('finally done!');
  });
```
<!-- prettier-ignore-end -->

Fingers crossed, Matteo runs his code. After a brief moment, he receives a successful response! With this working code, Matteo can begin to make more `POST` requests in JavaScript!

### !callout-warning

## Trip Names Must Be Unique

If we try running Matteo's code, we're likely to get an error! The Trip API requires the trip package names to be unique, and Matteo has already used the name in the example. But we can supply a new name to try running the code ourselves!

### !end-callout

#### Refactoring: Inline `tripData`

<details>

  <summary>
    Let's refactor our code! Instead of initializing the <code>tripData</code> variable, let's pass in an object literal.
  </summary>

<!-- prettier-ignore-start -->
```js
const axios = require('axios');

axios.post('https://trektravel.onrender.com/trips', {
  name: 'Matteo\'s Chill Trip to Chicago',
  continent: 'North America',
  about: 'A tour around good architecture and hot dogs.',
  category: 'casual',
  weeks: 1,
  cost: 180,
})
//   proceed as normal...
//   .then((response) => { })
//   .catch((error) => { })
//   .finally(() => { });
```
<!-- prettier-ignore-end -->

</details>

## Verifying Error Handling

Matteo wants to confirm that his code can handle unsuccessful HTTP requests.

To do so, he will temporarily make an API call with bad trip data on purpose.

He modifies his code to use a new object, `badTripData`, which has a blank `name`. According to [the API documentation](https://github.com/AdaGold/trip-api), it should not be a successful call.

<!-- prettier-ignore-start -->
```js
const axios = require('axios');

const badTripData = {
  name: '',
  continent: 'North America',
  about: 'A tour around good architecture and hot dogs.',
  category: 'casual',
  weeks: 1,
  cost: 180,
};

axios
  .post('https://trektravel.onrender.com/trips', badTripData)
  .then((response) => {
    console.log('response:', response);
    console.log('response data:', response.data);
  })
  .catch((error) => {
    console.log('error:', error);
    console.log('error response:', error.response);
  });
```
<!-- prettier-ignore-end -->

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

