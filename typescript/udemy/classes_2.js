var classes_2 = /** @class */ (function () {
    function classes_2() {
    }
    classes_2.prototype.intro = function () {
        var button = document.querySelector("button");
        var input1 = document.getElementById("num1");
        var input2 = document.getElementById("num2");
        function add(num1, num2) {
            return (num1 + num2);
        }
        button.addEventListener("click", function () {
            console.log(add(+input1.value, +input2.value));
        });
    };
    classes_2.prototype.types = function () {
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
    };
    classes_2.prototype.object_types = function () {
        var person = {
            name: "test",
            age: 20
        };
        console.log(person.age); // Property 'age' does not exist on type 'object' (if we put object)
        return person;
    };
    classes_2.prototype.array_types = function () {
        // this.object_types() = this.object_types
        this.object_types().age;
    };
    return classes_2;
}());
console.log((new classes_2()).intro());
console.log((new classes_2()).types());
console.log((new classes_2()).object_types());
console.log((new classes_2()).array_types());
