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
// reading from string
async function f() {

const html = await edge.renderRaw('<p> Hi {{ greeting }} </p>', {
  greeting: 'Hello world'
})

console.log(html)

}
f()