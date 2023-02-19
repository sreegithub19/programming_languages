var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://restapi.adequateshop.com/api/Traveler',
  'headers': {
    'X-Client-UserAgent': 'test framework',
    'X-Content-Escaping': 'none',
    'Content-Type': 'application/xml'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(
    response.body,
    response
  );
});
