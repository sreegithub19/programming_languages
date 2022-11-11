let current = 0;  //parseInt(prompt("Enter:"))

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
//template_literals()

function add(num1,num2){return num1 + num2;}
function subtract(num1,num2){return num1 - num2;}

outputResult(current,"Add: "+add(2,30));
outputResult(current,"Add: "+subtract(2,20));

// inline functions
outputResult(current,"Add: "+ function(){return(2-3)}());


// shadowing of variables - https://rakuten.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15854644#overview
let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');
greetUser(userName);
