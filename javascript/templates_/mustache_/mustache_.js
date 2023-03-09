// npm install -g mustache

const Mustache = require('mustache');
var fs = require('fs');

const view = {
  title: "Joe",
  calc: () => ( 2 + 4 )
};

const output = Mustache.render(`
{{title}} spends {{calc}}
`, view);

const output1 = Mustache.render(
fs.readFileSync("index.html.mustache",'utf8').toString(), view);

const output2 = Mustache.render(
fs.readFileSync("index.js.mustache",'utf8').toString(), view);

const output3 = Mustache.render(
fs.readFileSync("index.ts.mustache",'utf8').toString(), view);

const output4 = Mustache.render(
fs.readFileSync("index.js.wrapper.mustache",'utf8').toString(), view);


console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);