package org.example

import io.vavr.API.*
import java.util.Optional
import Collections_.List_.AbstractList_.*

var name : kotlin.String = "Kotlin"
val name1 : kotlin.String = "Kotlin"
var nums  : kotlin.Int = 2
var greeting : kotlin.String? = null

fun main() {
    // File 1
    Main()

    // File 2
    getters_setters()

    // File 3
    interfaces()

    // File 4
    inheritance()

    // File 5
    companion_objects()

    // File 6
    object_declaration()

    // File 7
    sealed_classes_and_data_classes_and_extension_functions_and_extension_properties()

    // File 8
    higher_order_functions()

    // Java
    ArrayList_.methods()

}

class higher_order_functions(){
    init{
        HigherOrderFunctions_Kt()
    }
}

class sealed_classes_and_data_classes_and_extension_functions_and_extension_properties(){
    init{
        SealedClassesDataClasses_Kt()
    }
}

class interfaces(){
    init{
        BasicInfoProvider_Kt()
    }
}

class inheritance(){
    init{
        FancyInfoProvider_Kt()

        BasicInfoProvider_Kt()
    }
}

class companion_objects(){
    init{
        EntityFactory_Kt()
    }
}

class object_declaration(){
    init{
        ObjectDeclaration_Kt()
    }
}


class getters_setters(){
    init{
        val object_ = Sub0();
        object_.doSomething()
        object_.nickName = "Peters"
        object_.nickName = "Pesters"

        object_.nickName
        println(object_.nickName)

        val object1 = Sub0_1();
        object1.doSomething()
        object1.setNickName("Peters")
        object1.setNickName("Pesters")

        object1.getNickName()
        print(object1.getNickName())
    }
}


class Main() {
    init{
        println("Hello main, " + name + "!")
        for(i in 1..5) println("i = $i")
        println("--------------------------")
        topics()
        classes()
        nested()
    }

    fun nested(){
        println("Nested function in class")
    }
}


fun classes() {
    // Primary constructor

    // Creating Person using primary constructor
    Person("test", "user")
    // Creating Person using named arguments
    Person(_firstName = "user", _lastName = "test")
    // Creating Person using the secondary constructor
    Person()
    Person("Alice", "Smith", true)
}

class Person(_firstName: String, _lastName: String) {
    val firstName: String = _firstName
    val lastName: String = _lastName

    init {
        println("init 1 $firstName $lastName")
        println("init 1 $_firstName $_lastName")
    }

    init {
        println("init 2")
    }

    // Secondary constructor with default values
    constructor() : this("Peter", "Parker") {
        println("secondary constructor")
    }

    // Secondary constructor with named arguments (no longer conflicting)
    constructor(_firstName: String, _lastName: String, swapNames: Boolean) : this(if (swapNames) _lastName else _firstName, if (swapNames) _firstName else _lastName) {
        println("secondary constructor with swapNames = $swapNames")
    }

    init {
        println("--------------------------")
    }

    // New function to print first name and last name
    fun printInfo() {
        println("Name: $firstName $lastName")
    }
}




fun topics(){
    string_concatenation()
    controls()
    collections()
    functions_()
}

fun functions_(){
    functions("1","2","3","4","5")
    functions("1",*arrayOf("2","3","4","5"))
    functions(items = *arrayOf("2","3","4","5") , first = "0")
}

fun functions(first:String , vararg items:String){
    // vararg
    items.forEach { item -> print("$first , $item ;") }

}

fun collections(){

    arrayOf_()
    mapOf_()
    listOf_()
}

fun listOf_(){
    val list_ = listOf("A", "B", "C").toMutableList()
    val list1 = mutableListOf("A", "B", "C")
    val list2 = arrayOf("A", "B", "C").toList()
    val list3 = listOf(*arrayOf("A", "B", "C"))
    println("$list_ \n $list1 \n $list2 \n $list3")
}


fun mapOf_(){
    val map: MutableMap<Int, String> = mutableMapOf(1 to "A",2 to "B",3 to "C")
    val map1 = HashMap<Int, String>().apply { put(1, "A"); put(2, "B"); put(3, "C") }
    val map2= mapOf(1 to "A",2 to "B",3 to "C").toMutableMap()
    val map3= buildMap{ put(1, "A") ; put(2, "B") ; put(3, "C") }.toMutableMap()
    val map4 = LinkedHashMap<Int, String>().apply { this[1] = "A"; this[2] = "B"; this[3] = "C" }
    val map5 = linkedMapOf(1 to "A", 2 to "B", 3 to "C")

    maps_(map)
    maps_(map1)
    maps_(map2)
    maps_(map3)
    maps_(map4)
    maps_(map5)
}

fun maps_(map: MutableMap<Int, String>){
    map.put(4 ,"D")
    map[5] = "E"
    println(map)
    map.forEach { (key, value) -> println("$key -> $value") }
}

fun arrayOf_(){
    val things: Array<String?> = arrayOf("A","B","C")
    val things1: Array<String?> = Array(3) { i -> when(i) {0 -> "A";1 -> "B";2 -> "C";else -> null } }
    val things2: Array<String?> = Array(3) { i -> arrayOf("A", "B", "C")[i] }
    val things3: Array<String?> = Array(3) { i -> listOf("A", "B", "C")[i] }
    val things4: Array<String?> = Array(3) { null as String? }.apply { this[0] = "A";this[1] = "B";this[2] = "C" }
    val things5: Array<java.lang.String> = listOf("A", "B", "C").map { it as java.lang.String }.toTypedArray()
    val things6: Array<String?> = listOf("A", "B", "C").toTypedArray()

    arrays_(things)
    arrays_(things1)
    arrays_(things2)
    arrays_(things3)
    arrays_(things4)
    arrays_(things5 as Array<String?>)
    arrays_(things6)
}

fun arrays_(things: Array<String?>){
    // arrayOf
    println("""
        ${things::class} ,
        ${things.contentToString()} , 
        ${things.joinToString()} , 
        ${things.joinToString(prefix = "[", postfix = "]", separator = "; ")},
        ${things.size} , ${things[0]} , ${things.get(0)}""".trimIndent())
    // lambda syntax
    things.forEach { thing -> println(thing) }
    things.forEachIndexed { index,thing -> println("${index},${thing}") }
    things.forEachIndexed { thing, index -> println("${index},${thing}") }
}

fun controls(){

    // if else
    if (greeting == null) { println("Hi null") } else { println("Hi else") }

    // when
    when(greeting){null -> {println("Hi null")}else -> {println("Hi else")} }

    // Elvis operator
    greeting?.let { println("Hi else") } ?: println("Hi null")

    // takeIf , also
    (greeting?.takeIf { it == "hello" } ?: "null").also { println(if (it == "null") "Hi null takeIf" else "Hi else takeIf") }


    // Static Java utility method
    println(java.util.Objects.requireNonNullElse(greeting, "Hi null"))

    //  Immediately Invoked Lambda Expression
    ({ nullableString: kotlin.String? ->
        if (nullableString == null) {
            println("Hi null")
        } else {
            println("Hi else")
        }
    })(greeting)

    // vavr from Java
    println(Match(greeting).of(
        Case(`$`(null as kotlin.String?), "Hi null"),
        Case(`$`(), "Hi else")
    ))

    // if expression in print statement
    System.out.println(if (greeting == null) "Hi null" else "Hi else")

    // free function / top level function
    top_level_function("extra")

    // optional
    println(Optional.ofNullable(greeting).map { "Hi else" }.orElse("Hi null optional"))

}

fun top_level_function(extra:String) = System.out.println(if (greeting == null) "Hi null ${extra}" else "Hi else")

fun string_concatenation(): Unit{
    // String Concatenation
    println(name1 + nums.toString())
    println(name1 + "${nums}")
    // from Java
    println(name1 + java.lang.String.valueOf(nums))
    println(name1 + Integer.toString(nums))
    println(name1 + java.lang.String(nums.toString()))
    println(name1 + java.lang.String(nums.toString().toCharArray()))
    println(StringBuilder().append(name1).append(nums).append(nums).toString())
}