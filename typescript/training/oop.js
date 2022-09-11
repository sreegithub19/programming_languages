"use strict";
// person class
var Person = /** @class */ (function () {
    function Person() {
        this.name = ''; // default
        this.age = 0; // default 
    }
    Person.prototype.greetings = function () {
        return this.name + ' ' + this.age;
    };
    return Person;
}());
// to create a new instance of a class
var person1 = new Person();
person1.name = 'Kevin Odongo';
person1.age = 36;
console.log(person1.greetings()); // This should render Kevin Odongo 36
