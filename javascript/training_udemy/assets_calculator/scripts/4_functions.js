let current = 0;  //parseFloat(prompt("Enter:"))

//template_literals()
//shadowing()
//indirect_execution()
data_types()


current = current + 10;
let str = "unconventional"

function template_literals(){
    document.writeln("this is an ${str} calculator")
    // template literal
    document.writeln(`
    this is an ${str} calculator
    `)  
    outputResult(current,`
    template literals
    `);
}

function add(num1,num2){return num1 + num2;}
function subtract(num1,num2){return num1 - num2;}

function nested_operations(){
    function add_input(){
      document.getElementById("next").appendChild(document.createTextNode("Addition: " + (parseFloat(prompt("enter a value:")) + parseFloat(prompt("enter a value:"))).toString()));
      document.getElementById("next").appendChild(document.createElement("br"));
    }
    function subtract_input(){
      document.getElementById("next").appendChild(document.createTextNode("Subtraction: " + (parseFloat(prompt("enter a value:")) - parseFloat(prompt("enter a value:"))).toString()));
      document.getElementById("next").appendChild(document.createElement("br"));
    }
    function multiply_input(){
      document.getElementById("next").appendChild(document.createTextNode("Multiplication: " + (parseFloat(prompt("enter a value:")) * parseFloat(prompt("enter a value:"))).toString()));
      document.getElementById("next").appendChild(document.createElement("br"));
    }
    function divide_input(){
      var a = parseFloat(prompt("enter a value:"))
      var b = parseFloat(prompt("enter a value:"))
      if(b===0)alert("Invalid value")
      else{
        document.getElementById("next").appendChild(document.createTextNode("Division: " + (a / b).toString()));
        document.getElementById("next").appendChild(document.createElement("br"));
      }
    }
    nested_operations.add_input = add_input;
    nested_operations.subtract_input = subtract_input;
    nested_operations.multiply_input = multiply_input;
    nested_operations.divide_input = divide_input;
}


outputResult(current,"Add: "+add(2,30));
outputResult(current,"Add: "+subtract(2,20));

// inline function
outputResult(current,"Add: "+ function(){return(2+3)}());


// shadowing of variables - https://rakuten.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15854644#overview
function shadowing(){
  let userName = 'Max';
  function greetUser(name) {
    let userName = name;
    alert(userName);
  }
  userName = 'Manu';
  greetUser('Max');
  greetUser(userName);
}

 // add() vs add_input
function indirect_execution()
// https://rakuten.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15853244#overview
{
  nested_operations();
  document.getElementById('btn-add').addEventListener('click', nested_operations.add_input);
  document.getElementById('btn-subtract').addEventListener('click', nested_operations.subtract_input);
  document.getElementById('btn-multiply').addEventListener('click', nested_operations.multiply_input);
  document.getElementById('btn-divide').addEventListener('click', nested_operations.divide_input);
}

function data_types(){
  /*
  In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined
  */
  
nested_operations();
  document.getElementById('btn-add').addEventListener('click', nested_operations.add_input);
  document.getElementById('btn-subtract').addEventListener('click', nested_operations.subtract_input);
  document.getElementById('btn-multiply').addEventListener('click', nested_operations.multiply_input);
  document.getElementById('btn-divide').addEventListener('click', nested_operations.divide_input);

  // s = 23; 
  // if(typeof(s+"s")=="number"){alert("yeah")}
  // else alert("No")

  console.log(
    typeof "John"                 // Returns "string"
  ,typeof 3.14                   // Returns "number"
  ,typeof NaN                    // Returns "number"
  ,typeof false                  // Returns "boolean"
  ,typeof [1,2,3,4]              // Returns "object"
  ,typeof {name:'John', age:34}  // Returns "object"
  ,typeof new Date()             // Returns "object"
  ,typeof function () {}         // Returns "function"
  ,typeof myCar                  // Returns "undefined" *
  ,typeof null                   // Returns "object"
  )

}


