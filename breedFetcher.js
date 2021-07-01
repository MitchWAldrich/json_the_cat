const request = require('request');
const args = process.argv.slice(2);

const fetchBreedDescription = (args, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      return callback(error);
    }
    if (data.length === 0) {
      return callback(error);
    }
    let desc = data[0].description;
    return callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };