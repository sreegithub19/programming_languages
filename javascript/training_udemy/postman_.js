// const request = require('postman-request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('response:', response); // Print the HTML for the Google homepage.
// });

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://www.google.com',
  'headers': {
    'X-Client-UserAgent': 'test framework',
    'X-Content-Escaping': 'none',
    'Content-Type': 'application/xml',
    'Cookie': 'NID=511=HOHtijd-lTKFTBJ-i0zeDLaqro9I4corSmIYaCmjGjRRSbr0wcQ-mz8zcuDCEbpp98OmE7DxW9kJeaLkq16OLhqUnLQexlDE6DEkbdFo1hunkAQZ0KcuUy-p-9-4l8vQcm8w3SAiO3f6fd4q6EBhlHNkJpPdFSvX5jYRFe2aad0'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.rawHeaders[1]);
});
