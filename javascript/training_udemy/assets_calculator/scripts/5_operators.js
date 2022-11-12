// let current = 0;  //parseFloat(prompt("Enter:"))

//template_literals()
//shadowing()
//indirect_execution()
// data_types()
operators()

function nested_operations(){
    var a = parseFloat(prompt("enter a value:"));
    var b = parseFloat(prompt("enter another value:"));
    a++; ++b;
    a = (a++) + (b++) + (a++) + (a++) + (a++) + (a++) + (--b);
      document.getElementById("next").appendChild(document.createTextNode("Operations: " + 
      (a+-+-(-0)+-+-+-+-+b).toString()));
      document.getElementById("next").appendChild(document.createElement("br"));
}

function operators(){
    document.getElementById('btn-operators').addEventListener('click', nested_operations);
}


