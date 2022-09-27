"use strict"
// person class
class Person {
   name: string = '' // default
   age: number = 0 // default 

   greetings(){
     return this.name + ' ' + this.age
   }
}

// to create a new instance of a class
const person1: any = new Person()
person1.name = 'Kevin Odongo'
person1.age = 36 
console.log(person1.greetings()) // This should render Kevin Odongo 36