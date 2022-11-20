const request = require("request");
const breed = process.argv[2];
const breedSearch = `ttps://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetcher = function (url) {
  request(url, function (error, response, body) {
    if (error) {
      console.log("Request failed", error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] && data[0].description) {
      console.log(data[0].description);
    } else {
      console.log("Breed name is not found");
    }
  });
};
if (!breed) {
  console.log("Breed name is required");
} else {
  fetcher(breedSearch);
}
