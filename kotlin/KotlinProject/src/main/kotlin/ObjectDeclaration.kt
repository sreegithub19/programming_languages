package org.example

import java.util.UUID

enum class EntityType{
    EASY , MEDIUM , HARD;

    fun getFormattedName() = name.lowercase().capitalize()
}

object EntityFactory{

    // object declaration
    fun create() = Entity1("id","name")

    // enum
    fun create1(type: EntityType): Entity1{
        val id = UUID.randomUUID().toString()
        val name = when(type){
            EntityType.EASY -> type.name
            EntityType.MEDIUM -> type.getFormattedName()
            EntityType.HARD -> type.getFormattedName()
        }
        return Entity1(id, name)
    }
}

class Entity1 constructor(val id: String , val name: String) {
    override fun toString(): String {
        return "id:$id name:$name"
    }
}

class ObjectDeclaration_Kt{
    fun main(){
        val entity = EntityFactory.create()
        println(entity)

        val entity1 = EntityFactory.create1(EntityType.EASY)
        println(entity1)

        val mediumEntity1 = EntityFactory.create1(EntityType.MEDIUM)
        println(mediumEntity1)

        val hardEntity1 = EntityFactory.create1(EntityType.HARD)
        println(hardEntity1)
    }
    init{ main() }
}