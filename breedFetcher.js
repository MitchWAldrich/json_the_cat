const args = process.argv.slice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  if (data.length === 0) {
    console.log('No cats found');
    return;
  }
  console.log(`first entry: ${data[0].description}`);
});