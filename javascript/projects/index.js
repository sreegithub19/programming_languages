function consoles(){
    console.dir("Hello");
    console.log("Hello");
    console.dir(document);
    console.table(document);
    console.error("Hello");
    //console.clear();   // clears up the console without refreshing the page
    
    // will start printing from here again
    console.log("Hello");
    console.dir(document);
}
//consoles();


function variables(){
var msg;
console.log(msg);  // undefined
console.log(typeof(msg));  // undefined

var msg = undefined;
console.log(msg);  // undefined
console.log(typeof(msg));  // undefined

var msg = null;
console.log(msg);  // null
console.log(typeof(msg));  // object

var msg = true;
console.log(msg);  // true
console.log(typeof(msg));  // boolean

var msg = function add(a,b){return a+b};
console.log(msg);  // ƒ add(a,b){return a+b}
console.log(typeof(msg));  // function

var msg = 23;
console.log(msg);  // 23
console.log(typeof(msg));  // number

var msg = "23";
console.log(msg);  // 23
console.log(typeof(msg));  // string

var msg = Symbol("23");
console.log(msg);  // Symbol(23)
console.log(typeof(msg));  // symbol

}
//variables();

function prompts(){
    console.log(`Hi ${prompt("Enter your name")}`); // using template literal
}
//prompts();

function type_conversion(){
console.log(Number("10")) // 10
console.log(Number(true)) // 1
console.log(Number([1,2,3,4])) // NaN
// window.print()   // generates a pdf file of the webpage we are in (in browser, not terminal)
}
//type_conversion()

function type_coercion(){
    document.write('<pre>')

    document.writeln("Hello" - "world")
    document.writeln("Hello" - 2)
    document.writeln(5 - "2")
    document.writeln(5 + "2")
    document.writeln(5 + []) 
    document.writeln(5 - []) 
    document.writeln(5 + NaN) 
    document.writeln(5 + null) 
    document.writeln(5 + undefined) 
    document.writeln(undefined + undefined) 
    document.writeln(5 + [1,2,3]) 
    document.writeln([1,2,3] + [1,2,3]) 
    document.writeln([1,2,3]*2 + [1,2,3]) 
    document.writeln(5 + {1:1,2:2,3:3}) 
    document.writeln(5 + false) 
    document.writeln(5 + true*2) 
    document.writeln((true*2) ** (true*34)) // ** > *
    document.writeln(5 * "2")
    document.writeln(5 ** "2")
    document.write(parseInt([...("5" + 10)].reverse().join("")))  // 15
    document.write('</pre>')

    // outputs:
    /*
        NaN
        NaN
        3
        52
        5
        5
        NaN
        5
        NaN
        NaN
        51,2,3
        1,2,31,2,3
        NaN1,2,3
        5[object Object]
        5
        7
        17179869184
        10
        25
        15
    */
}
//type_coercion()


function comparison(){
    document.write('<pre>')
    document.writeln(3=="3")
    document.writeln(3==0)
    document.writeln(3==="3")
    document.writeln(null===null)
    document.writeln(null==undefined)
    document.writeln(null===undefined)
    document.writeln()
    document.writeln("2">3)
    document.writeln("">3)
    document.writeln("23">>3) // not a comparison
    //ternary
    a = document.writeln((3>2)?"true":"false")
    console.log(a)  // undefined
    document.write('</pre>')

    /*
    outputs:
        true
        false
        false
        true
        true
        false

        false
        false
        2
    */
}
comparison()



