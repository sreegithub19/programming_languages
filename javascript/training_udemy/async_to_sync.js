// asynchronous
console.time();
console.time("toss");
console.time("cross");
let globalAsync;
(async () => {
    globalAsync = ((await require('util').promisify(require('request'))('https://example.com/api')).body);
})();
setTimeout(() => { temp = globalAsync; console.timeEnd("toss") }, 1500); // working

let temp;
setTimeout(() => { console.log(temp); console.timeEnd("cross") }, 1500);

setTimeout(() => { console.log(temp); console.timeEnd() }, 1500);

//console.log(globalAsync); // undefined

/********************************************************* */
// synchronous
let globalSync;
setTimeout(async () => {
    globalSync = (await require('util').promisify(require('request'))('https://example.com/api')).body;
}, 1500);

//async () => { console.log(globalSync); } // working