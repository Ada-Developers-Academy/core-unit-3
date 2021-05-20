# Instructor: Problem Set: Requests With JS

This isn't autograded for these reasons:

1. Seven Wonders has been tricky in the past, and this is supposed to take one evening. The current format allows students to rely on single requests in JavaScript and/or Postman if they need to and then asks them to challenge themselves
1. I didn't put in the work of making a custom snippet that installs `axios`
1. Actually getting this to work and circumvent rate limiting (using something like `setTimeout` or a fake `sleep` function using `async` and `await`) is pretty tricky
1. Actually getting this to work with a for loop is pretty tricky

Here's the answer I got formatted:

```js
{
  'Great Wall of China': {latitude: '40.3587621', longitude: '116.0136394' },
  Petra: { latitude: '47.0690658', longitude: '15.4382621' },
  Colosseum: { latitude: '36.1178803', longitude: '-115.174895683984' },
  'Chichen Itza': { latitude: '20.68285195', longitude: '-88.5687196355205' },
  'Machu Picchu': { latitude: '-13.16441865', longitude: '-72.5447639743184' },
  'Taj Mahal': { latitude: '27.1750123', longitude: '78.0420968366132' },
  'Christ the Redeemer': { latitude: '-22.9519173', longitude: '-43.210495' }
}
```

And the solution I had:

```js
const axios = require("axios");

const YOUR_API_KEY = "pk.faf2e66100f4dafc47888bcec6a8368a";

const wonders = [
  "Great Wall of China",
  "Petra",
  "Colosseum",
  "Chichen Itza",
  "Machu Picchu",
  "Taj Mahal",
  "Christ the Redeemer",
];

const locations = {};

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  axios
    .get("https://us1.locationiq.com/v1/search.php", {
      params: {
        key: YOUR_API_KEY,
        q: query,
        format: "json",
      },
    })
    .then((response) => {
      latitude = response.data[0].lat;
      longitude = response.data[0].lon;
      console.log("success in findLatitudeAndLongitude!", latitude, longitude);
      locations[query] = { latitude, longitude };
    })
    .catch((error) => {
      console.log("error in findLatitudeAndLongitude!", error.response.data);
    });
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function findLocations() {
  for (let i = 0; i < wonders.length; i++) {
    await sleep(1000);
    findLatitudeAndLongitude(wonders[i]);
  }
}

findLocations();

setTimeout(() => {
  console.log("locations", locations);
}, 10000);
```
