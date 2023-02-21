/*
- npm install -g pug
- npm install pug-cli -g

Reference: https://pugjs.org/api/reference.html
*/

var pug = require('pug');


// render
var html = pug.render(`
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5);
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
`);

console.log(html);

// renderFile
var html = pug.renderFile('index.pug');
console.log(html);