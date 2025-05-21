package org.example

import java.util.UUID

enum class EntityType1{
    HELP, EASY , MEDIUM , HARD;

    fun getFormattedName() = name.lowercase().capitalize()
}

object EntityFactory1{

    // enum
    fun create1(type: EntityType1): Entity2{
        val id = UUID.randomUUID().toString()
        val name = when(type){
            EntityType1.EASY -> type.name
            EntityType1.MEDIUM -> type.getFormattedName()
            EntityType1.HARD -> type.getFormattedName()
            EntityType1.HELP -> type.getFormattedName()
        }
        return when (type){
            EntityType1.EASY -> Entity2.Easy(id,name)
            EntityType1.MEDIUM -> Entity2.Medium(id,name)
            EntityType1.HARD -> Entity2.Hard(id,name,2f)
            EntityType1.HELP -> Entity2.Help
        }
    }
}

sealed class Entity2(){
    object Help: Entity2() {
        val name = "Help"
    }
    data class Easy(val id: String , val name: String) : Entity2(){
        override fun equals(other: Any?): Boolean {
            return super.equals(other)
        }

        override fun hashCode(): Int {
            return super.hashCode()
        }
    }
    data class Medium(val id: String , val name: String) : Entity2()
    data class Hard(val id: String , val name: String, val multiplier: Float) : Entity2()

}

// Extension Functions
fun Entity2.Medium.printInfo(){
    println("Medium class: $id")
}

// Extension Properties
val Entity2.Medium.info: String
    get() = "some info"


class SealedClassesDataClasses_Kt{
    fun main(){

        var easyEntity: Entity2 = EntityFactory1.create1(EntityType1.EASY).also { println("easyEntity:" + it) }
        var mediumEntity = EntityFactory1.create1(EntityType1.MEDIUM).also{println("mediumEntity:" + it)}
        val hardEntity = EntityFactory1.create1(EntityType1.HARD).also{println("hardEntity:" + it)}

        var entity = EntityFactory1.create1(EntityType1.EASY)
        var msg = when (entity){
            is Entity2.Help -> "help class"
            is Entity2.Easy -> "easy class"
            is Entity2.Medium -> "medium class"
            is Entity2.Hard -> "hard class"
        }
        println(msg)

        entity = EntityFactory1.create1(EntityType1.HARD)

        msg = when (entity){
            is Entity2.Help -> "help class"
            is Entity2.Easy -> "easy class"
            is Entity2.Medium -> "medium class"
            is Entity2.Hard -> "hard class"
        }
        println(msg)

        var entity1 = Entity2.Easy("id","name")
        var entity2 = EntityFactory1.create1(EntityType1.EASY)
        var entity3 = entity1.copy(name = "new name")
        var entity4 = Entity2.Easy("id","name")

        Entity2.Medium("id","name").printInfo()

        println(entity1 == entity2).also{println(entity1 === entity2)}.also{println(entity1 == entity3)}
        println(entity1 === entity3)
        println(entity2 == entity3)
        println(entity2 === entity3)
        println(entity1 == entity4)
        println(entity1 === entity4)

        entity2 = EntityFactory1.create1(EntityType1.MEDIUM)
        if(entity2 is Entity2.Medium){
            entity2.printInfo()
            entity2.info
        }
    }
    init{ main() }
}