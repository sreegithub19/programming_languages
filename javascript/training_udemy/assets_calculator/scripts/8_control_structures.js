if(1<2 && 2<3){
    console.log("Yay!!")
}
else console.log("Nope!")

console.log(2=="2") // true (only "value equality")
console.log(2==="2") // false (only "value equality" and "type equality")
console.log(2!=="2")
console.log(5%4/2) // operator precendence

data_types()

function nested_operations(){
    function add_input(){
        var a = parseFloat(prompt("enter a value:"))
        var b = parseFloat(prompt("enter a value:"))
        if(isNaN(a) || isNaN(b))alert("Enter numerical values")
      else{document.getElementById("next").appendChild(document.createTextNode("Addition: " + (a+b).toString()));
      document.getElementById("next").appendChild(document.createElement("br"));}
    }
    function subtract_input(){
        var a = parseFloat(prompt("enter a value:"))
        var b = parseFloat(prompt("enter a value:"))
        if(isNaN(a) || isNaN(b))alert("Enter numerical values")
      else{document.getElementById("next").appendChild(document.createTextNode("Subtraction: " + (a-b).toString()));
      document.getElementById("next").appendChild(document.createElement("br"));}
    }
    function multiply_input(){
        var a = parseFloat(prompt("enter a value:"))
        var b = parseFloat(prompt("enter a value:"))
        if(isNaN(a) || isNaN(b))alert("Enter numerical values")
      else{document.getElementById("next").appendChild(document.createTextNode("Multiplication: " + (a*b).toString()));
      document.getElementById("next").appendChild(document.createElement("br"));}
    }
    function divide_input(){
      var a = parseFloat(prompt("enter a value:"))
      var b = parseFloat(prompt("enter a value:"))
      if(b===0)alert("Invalid value")
      else if(isNaN(a) || isNaN(b))alert("Enter numerical values")
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

}


/*
1. 
Truthy values In JavaScript, 
a truthy value is a value that is considered true when encountered in a Boolean context. 
Falsy values In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.

2. 
Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — 
type coercion is implicit whereas type conversion can be either implicit or explicit.
Implicit: Type conversion is done implicitly by JavaScript. 
Explicit: Type conversion is done explicitly in code using the inbuilt functions like Number(), String(), Boolean(), etc.
*/

