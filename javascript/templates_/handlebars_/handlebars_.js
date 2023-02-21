/*
- npm install handlebars -g
- 
*/
const Handlebars = require("handlebars");
var fs = require('fs');


// by string
var template = Handlebars.compile(`

<div></div>

<script>
  <p>Use the <strong>{{power}}</strong>, {{name}}!</p>
</script>

`);
var rendered = template({name: "Luke", power: "force"});

console.log(rendered);


// by template
var template = Handlebars.compile(fs.readFileSync("handle.handlebars",'utf8').toString());
var rendered = template({name: "Luke", power: "force"});

console.log(rendered);

