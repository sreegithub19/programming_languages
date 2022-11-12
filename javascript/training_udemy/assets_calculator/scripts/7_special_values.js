// Special values - null, undefined , NaN
//"use strict";


// https://github.com/denysdovhan/wtfjs

let a;
console.log(a)  // undefined
console.log(typeof a)  // undefined
console.log(+a)  // NaN
console.log(typeof +a)  // number
console.log(NaN) 
console.log(typeof NaN) // number
console.log(typeof undefined) // undefined
console.log(undefined) // undefined
console.log(typeof null) // object
console.log(null)  // null
console.log(null + null) // 0
console.log(typeof (null + undefined)) // number
console.log((null + undefined)) // NaN

console.log(typeof 23 + null + undefined) // numbernullundefined
console.log(typeof (23 + null + undefined)) // number
console.log(typeof (NaN + null + undefined)) // number
