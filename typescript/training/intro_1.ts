function intro_1(){

  function intro(){
    const button = document.querySelector("button");
    const input1 = document.getElementById("num1")! as HTMLInputElement;
    const input2 = document.getElementById("num2")! as HTMLInputElement;

    function add(num1: number, num2: number) {
      return(num1 + num2);
    }

    button.addEventListener("click", function() {
      console.log(add(+input1.value, +input2.value));
    });
  }

  function types(){
  const number1 = 5
  const number2 = 10

  function add(n1,n2){
    if(typeof n1 !== "number" || typeof n2 !== "number")
    throw new Error("Incorrect input") // error message in console
    return n1+n2
  }
  console.log(add(number1,number2))

  const number3:number = 34;
  let number4; // const declarations must be initialized
  var number5; // const declarations must be initialized
  console.log(number5) // undefined if uninitialized
  }

  function object_types(){
  const person: {  // typescript's representation of the type of the object
    name: string,
    age:number,
  } = {
    name: "test",
    age: 20
  }
  console.log(person.age)// Property 'age' does not exist on type 'object' (if we put object)
  return person;  
  }

  function array_types(){
    // this.object_types() = this.object_types
    this.object_types().age;
  }

}

console.log((new intro_1()).intro); 
console.log((new intro_1()).types()); 
console.log((new intro_1()).object_types()); 
console.log((new intro_1()).array_types()); 