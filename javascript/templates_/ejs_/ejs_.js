// npm install -g ejs
// https://ejs.co/#install

let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});
console.log(html)