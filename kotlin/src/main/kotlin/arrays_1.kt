class arrays_1 {
    fun main(){
        array()
        arrayList()
    }

    fun array() {
        var array = arrayOf("Texas","Iowa","Maryland")
        var array1 = intArrayOf(2,3,4) // array of only integers
        // arrays have fixed length
        val list = listOf("Texas","Iowa","Maryland","2")
        val arrayList = arrayListOf("Texas","Iowa","Maryland")
        println(listOf(array,list,arrayList))
        println(listOf(array)[0][2]) // Maryland

        // indexing shows error if the array/list/arraylist is heterogeneous
        //  all these 3 data structures can be heterogeneous
        println(array[2][2])
        println(list[2][2])
        println(arrayList[2][2])

        println((array+list+arrayList).size)
    }

    fun arrayList(){
        val arrayList = arrayListOf("Texas","Iowa","Maryland")
        // these methods show error for list and array, but not for arrayList
        arrayList.add("2")
        arrayList.remove("2")
        arrayList.removeAt(2)
        println(arrayList)
    }
}
