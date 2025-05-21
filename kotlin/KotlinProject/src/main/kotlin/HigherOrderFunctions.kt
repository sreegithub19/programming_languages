package org.example

class HigherOrderFunctions_Kt{
    fun main(){
        val list = listOf("Kotlin","Python", "Java","JavaScript")
        printFilteredStrings(list as List<String>, getPrintPredicate())
        printFilteredStrings(list , predicate)
        printFilteredStrings(list , null)

        list
            .filterNotNull()
            .filter{it.startsWith("J")}
            .map{it.length}
            .forEach { println("" +
                    """$it , 
                        ${list.last()},
                        ${list.filterNotNull().last()}""".trimMargin()) }
        list
            .filterNotNull()
            .associate{it to it.length}
            .forEach { println("$it , ${it.key} , ${it.value}") }
    }
    init{
        main()
    }
}

// store functions as variables
val predicate: (String) -> Boolean = {
    it.startsWith("J")
}


fun printFilteredStrings(list: List<String>, predicate: ((String) -> Boolean)?){
    list.forEach {
        if(predicate?.invoke(it) == true)println(it)
    }
}

fun getPrintPredicate(): (String) -> Boolean{
    return {it.startsWith("J")}
}