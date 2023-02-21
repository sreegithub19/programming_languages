/*
- npm install -g liquid

- https://www.npmjs.com/package/liquid
*/

const Liquid = require('liquid')
var fs = require('fs');
const engine = new Liquid.Engine()
 
// by string
engine
  .parse('hi {{name}}')
  .then(template => template.render({ name: 'tobi' }))
  .then(result => console.log(result))
 
// or
 
engine
  .parseAndRender('hi {{name}}', { name: 'tobi' })
  .then(result => console.log(result))


// by template

engine
  .parseAndRender(fs.readFileSync("liquid_.liquid",'utf8').toString(), { name: 'tobi' })
  .then(result => console.log(result))