// npm install -g edge.js

const { join } = require('path')
var fs = require('fs');

// CommonJS
const { Edge } = require('edge.js')

// Typescript import
// import { Edge } from 'edge.js'

// ----------------------------------------------------------------//
// reading from file
var edge = new Edge({ cache: false })
edge.mount(join(__dirname, 'views'))

async function f() {

const html = await edge.render('welcome', {
  greeting: 'Hello world'
})

console.log(html)

}
f()

// ----------------------------------------------------------------//
// reading from string (for now edge supports only reading from file)