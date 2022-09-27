//"use strict";

// var is changeable
var a = 23;
a = 43;
document.write(a+"<br>");
a = "vfvfv"+a
document.write(a+"<br>")

// let is changeable
let b = 23;
b = 43;
document.write(b+"<br>")
b = "vfvfv"
document.write(b+"<br>")

// const is non-changeable, and requires initialization of variables
const c = 23;
// c = 43; -> throws error
document.write(c+"<br>")


// Assignment to a non-writable global (throws error in strict mode, and the code after this does not execute in strict mode)
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// const is non-changeable
const d = 33;
// c = 43; -> throws error
document.write(d+"<br>")


var A, A_, A__ ;
console.log(A,A_,A__) // undefined undefined undefined

let B, B_, B__ ;
console.log(B,B_,B__) // undefined undefined undefined

// const requires initialization of variables
const C=0, C_=-0, C__=null ;
console.log(C,C_,C__) // 0 -0 null

let bool;
document.writeln(typeof(bool)) // undefined
bool = true;
document.writeln(typeof(bool)) // boolean
bool = null;
document.writeln(typeof(bool)) // object
bool = NaN;       // In JavaScript, NaN is short for "Not-a-Number".
document.writeln(typeof(bool)) // number
bool = -1;
document.writeln(typeof(bool)) // number
bool = "-1";
document.writeln(typeof(bool)+"<br>") // string

document.write(`
Some variable values: ${bool}, ${C__} <br>
`)


// type coercion
console.log(2+"2") // 22
console.log("2"-"4") // -2
console.log("2e"-"e4")  // NaN
console.log(typeof("2e"-"e4"))  // number
console.log(typeof("2"-"4"))  // number
console.log(false+true*3) // 3 (false->0, true-> 1)

// type conversion
document.write(typeof(Number("22"))); // number
