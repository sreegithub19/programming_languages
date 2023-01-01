import java.util.*
import kotlin.math.max
import kotlin.math.min

class loops_2 {
    fun main(){
//        for_loop()
//        while_loop()
//        nested_loop()
        println(sum_loop())
        print(Date())
    }
    fun for_loop(){
        val list = listOf("123","234")
        for(i:String in list){
            println(i)
            if(i.equals("123"))break
            else continue
        }
    }

    fun while_loop(){
        val list = listOf("123","234")
        var i:Int =0
        while(i<list.size){
            println(list[i])
            i++
        }
    }

    fun nested_loop(){
        outer@ for(i in 1..10){
            for(j in 1..10){
                if(i-j == 5)break@outer
                println("$i - $j")
            }
        }
    }

    fun sum_loop(): String{
        var sum: Int = 0
        for(i:Int in 100..100000)sum += i
        print(max(2, min(3,4)))
        return ("Sum is:"+ sum)
    }
}