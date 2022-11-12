// let current = 0;  //parseFloat(prompt("Enter:"))

//template_literals()
//shadowing()
//indirect_execution()

var array_operations = 0;
function arrays(){
        var size = parseInt(prompt("Enter size of input array:"));
        arr = Array.apply(null, Array(size)); 
        array_operations = (
            () => {
                let sum = 0, diff = 0, product = 1, div = 1;
                for (let i = 0; i < size; i++) {
                    var element = parseInt(prompt(`Enter the ${i}th element:`));
                    arr[i] = element;
                    sum+= element;
                    diff -= element;
                    product *= element;
                    div /= element;
                } 
                return {
                    "Sum":sum,
                    "Diff" : diff,
                    "Product" : product,
                    "Div" : div
                };
            }
        )();  
        console.log(
            array_operations[Object.keys(array_operations)[0]], 
            array_operations[Object.keys(array_operations)[1]], 
            array_operations[Object.keys(array_operations)[2]],
            array_operations[Object.keys(array_operations)[3]],
        )
        console.log(
            array_operations.Sum,
            array_operations.Diff, 
            array_operations.Product,
            array_operations.Div,
        )
        for(var i=0; i<Object.keys(array_operations).length;i++)console.log(array_operations[Object.keys(array_operations)[i]] + ",")

       document.getElementById("next").appendChild(document.createTextNode("Array: " + JSON.stringify(array_operations)));
       document.getElementById("next").appendChild(document.createElement("br"));
}

document.getElementById('btn-arrays').addEventListener('click', arrays);




