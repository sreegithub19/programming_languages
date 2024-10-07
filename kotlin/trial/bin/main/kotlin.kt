import java.util.*

fun main(args: Array<String>){

    /*   // Nested function (working)
        fun arr(){
            println("Gerrge")
        }
        arr()

     */

    /*
    basics()
    var variable = "DFrrtbtr"
    variable(variable)
    data_types()
    println(condition())
    val node = 2
    when_condition(node)
    when_advanced()
    random()

     */

//    val arrays = arrays_1();  // object declaration
//    arrays.main()

//    val loops = loops_2();
//    loops.main()

    val reverse = reverse_3()
    reverse.main()
}


fun basics() {
    println("Hello world!")
    println(2 + 5)
    println(listOf(1, 2, 3, 4))
    println(sub(5, 6))
}

fun variable(variable: String){
    // Function parameters in Kotlin are basically
    // read-only val's inside the function,
    println(variable)
    var duplicate = variable
    duplicate = "rtgergrg"
    println(duplicate)
}

fun sub(a:Int,b:Int): Int{
    return a+b
}

fun data_types(){
   // val variable: Int = 23;  // valid
    val int: Int = 23;
    println(int)
    println(int::class.java.typeName)  // int
    val d: Double = 3.4564
    val f: Float = 3.45f  // 'f' in the end
    val s: Short = 24214
    val l: Long = 2342222222222222222
    var c: Char = 'f'
    var b: Boolean = "kotlin">"Kotlin"  // true
    //var n: String = null  ->
    //      Error in Kotlin (this is called null safety)
    var n: String? = null
    // "?" indicates nullable variable. This is gonna return null if person is null and otherwise call the function on it.
    // "!!" indicates that variable will absolutely NOT be null.

    println(listOf(d,f,s,l,c,b,n))
    println(listOf(d::class.java.typeName,
        f::class.java.typeName,
        s::class.java.typeName,
        l::class.java.typeName,
        c::class.java.typeName,
        b::class.java.typeName,
        //n::class.java.typeName, // Expression in a class literal has a nullable type 'String?', use !! to make the type non-nullable
        //n!!::class.java.typeName //-> will show error (java.lang.NullPointerException)
    ))
}

fun condition(): String{
    if("kotlin">"Kotlin"){
        return "True"
    }
    return "False"
}

fun when_condition(node: Int){
    when(node){
        1 -> println("Node is 1")
        2 -> {println("Node is 2")}
        3 -> println("Node is 3")
        else -> {println("Node is > 3")}
    }
    val result = when(node){
        1 -> println("Node is 1 in result")
        2 -> {println("Node is 2 in result")}
        3 -> println("Node is 3 in result")
        else -> {println("Node is > 3 in result")}
    }
    println(result)
}

fun when_advanced(){
    val x = 1
    when(x){
    in 1..9 -> println("x in between 1 and 9 (inclusive)")
    !in 1..9 -> println("x not in between 1 and 9 (inclusive)")
    }
}

fun random(){
    val random = Random().nextInt(50) + 1
    println(random)
}