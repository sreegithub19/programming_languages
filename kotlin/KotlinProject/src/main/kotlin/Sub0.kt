package org.example

// getters and setters

// Kotlin style
class Sub0 constructor(){
    fun doSomething() {
        println("Doing something from MyClass")
    }

    var nickName: String? = null
        set(value){
            field = value
            println("the new nickname is $value")
        }
        get() {
            println("the returned field is $field")
            return field
        }
}

// Java style
class Sub0_1 {
    // 1. Private backing field, just like in Java
    private var actualNickName: String? = null

    fun doSomething() {
        println("Doing something from Sub0_1")
    }

    // 2. Explicit public setter method
    fun setNickName(value: String?) {
        this.actualNickName = value
        println("the new nickname in Sub0_1 is $value")
    }

    // 3. Explicit public getter method
    fun getNickName(): String? {
        println("the returned field in Sub0_1 is ${this.actualNickName}")
        return this.actualNickName
    }
}