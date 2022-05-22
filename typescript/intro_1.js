function intro_1() {
    function intro() {
        var button = document.querySelector("button");
        var input1 = document.getElementById("num1");
        var input2 = document.getElementById("num2");
        function add(num1, num2) {
            return (num1 + num2);
        }
        button.addEventListener("click", function () {
            console.log(add(+input1.value, +input2.value));
        });
    }
    function types() {
        var number1 = 5;
        var number2 = 10;
        function add(n1, n2) {
            if (typeof n1 !== "number" || typeof n2 !== "number")
                throw new Error("Incorrect input"); // error message in console
            return n1 + n2;
        }
        console.log(add(number1, number2));
        var number3 = 34;
        var number4; // const declarations must be initialized
        var number5; // const declarations must be initialized
        console.log(number5); // undefined if uninitialized
    }
    function object_types() {
        var person = {
            name: "test",
            age: 20
        };
        console.log(person.age); // Property 'age' does not exist on type 'object' (if we put object)
        return person;
    }
    function array_types() {
        // this.object_types() = this.object_types
        this.object_types().age;
    }
}
console.log((new intro_1()).intro);
console.log((new intro_1()).types());
console.log((new intro_1()).object_types());
console.log((new intro_1()).array_types());
