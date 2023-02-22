// npm install -g ejs
// https://ejs.co/#install

let ejs = require('ejs');
var fs = require('fs');

// from string
var people = ['geddy', 'neil', 'alex'];
var html = ejs.render('<%= people.join(", "); %>', {people: people});
console.log(html)

// from file
people = ['geddy', 'neil', 'alex'];
html = ejs.render(fs.readFileSync("ejs_.ejs",'utf8').toString(), {people: people});
console.log(html)