const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const breedSearch = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(breedSearch, (error, response, body) => {
    if (error) {
      callback(`Request failed ${breedName}`, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Failed to find ${breedName}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
