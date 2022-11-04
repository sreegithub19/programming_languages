// if using node.js
var TempMail = require('tempmail.js');

// ES6
// import TempMail from 'tempmail.js';


// create a random address
var account = new TempMail();

console.log(account.address); // a0953d5f9e1c01573d290823b1bbe8d1@walkmail.ru


// Create your own address at one of the tempmail domains
// var account = new TempMail('example@walkmail.ru');

// console.log(account.address); // example@walkmail.ru