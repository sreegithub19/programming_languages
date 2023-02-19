var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://jsonplaceholder.typicode.com/todos',
  'headers': {
    'X-Client-UserAgent': 'test framework',
    'X-Content-Escaping': 'none',
    'Content-Type': 'application/json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(
    // response.body,
    // response.statusCode,
    // response.statusMessage,
    // response.headers,
    // response.log,
    response,
    );
});

