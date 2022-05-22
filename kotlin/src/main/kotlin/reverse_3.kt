class reverse_3 {
    fun main(){
        val numbers = listOf(1,2,3,4,5,6,10)
        println(reverse(numbers))
    }

    fun reverse(numbers: List<Int>): ArrayList<Int>{
        var arrlist = arrayListOf<Int>()
        for(i in 0..numbers.size-1){
            arrlist.add(numbers[numbers.size-1 - i])
        }
        return arrlist
    }


}

