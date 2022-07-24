function contents(){
    // consoles();
    // variables();
    // prompts();
    // type_conversion()
    // type_coercion()
    // comparison()
    // switching()
    // nested(2,3) // these values take priority
    // buttons()
    // scopes()
    // iife(); //->  IIFE - Immediately Invoked Function Expression
    // arrow_functions();
    // objects();
    arrays();
}
contents();


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


function prompts(){
    console.log(`Hi ${prompt("Enter your name")}`); // using template literal
}


function type_conversion(){
console.log(Number("10")) // 10
console.log(Number(true)) // 1
console.log(Number([1,2,3,4])) // NaN
// window.print()   // generates a pdf file of the webpage we are in (in browser, not terminal)
}


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


function switching(){
    switch('papaya'){
        case 'orange':
            console.log('wrong')
        case 'mango':
            console.log('wrong')
        case 'papaya':
            console.log('right')
    }
}


function nested(a=4,b=5){
    function add(a,b){return a*b}
    function add(a,b){return a-b}
    function add(a,b){return a+b}
    console.log(add(a,b)) // calls the latest declaration of the function
    
    let multiply = function(a,b){
       return (a*b)
    }
    console.log(multiply(a,b))
}

function buttons(){
    const btns = document.querySelectorAll('button');
    console.log(btns);
    let var1, var2, var3;
    var1 = var2 = var3 = 0;
    btns[0].onclick = message1;
    btns[1].onclick = message2;
    btns[2].onclick = message3;

    function message1(){
        var1++;
        message();
    }
    function message2(){
        var2++;
        message();
    }
    function message3(){
        var3++;
        message();
    }
    function message(){
       console.log(var1 + ' ' + var2 + ' ' + var3);
    }
}


function scopes(){
    let a = 5;
    function test(){
        console.log(a);  // 5
        a = 10;  // == (let a = 10;) here 
        console.log(a);
        a = 20;
    }
    test(); 
}

function iife(){
    (function(name){
        console.log(`Your name is:${name}`)
    })(prompt("Enter your name:"))
}

function arrow_functions(){
    const test = (x=5) => x*20;
    console.log(test(4)); // this value takes priority
}


function objects(){
    const person = {
        name: ['Bob', 'Smith'],
        age: 32,
        bio: function () {
            console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
        },
        introduceSelf: function () {
            console.log(`Hi! I'm ${this.name[0]}.`);
        }
    };
    console.log(person.name[0]);
    console.log(person.bio());
    console.log(person.introduceSelf());

    var variable = function(){
        console.log("Hello objects");
        document.write("<br>Hello objects");
    }();  // Hello objects

    // using functions to create objects
    function Book(type, author) {
        this.type = type;
        this.author = author;
        this.getDetails = function () {
            return this.type + " written by " + this.author;
        }
    }

    var book = new Book("Fiction", "Peter King");
    console.log(book.getDetails());        // => Fiction written by Peter King


}

function arrays(){
    const shopping = [1,2,3,4,4, function(){console.log(2+33)}] // type is object
    console.log((shopping[5]())); // 35
    // indexOf, slice,splice,length, push, pop, shift, unshift
}




