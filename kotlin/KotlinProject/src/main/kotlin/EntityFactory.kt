package org.example

class EntityFactory_Kt{
    fun main(){
        Entity.Factory.create()
        println(Entity.id)
    }
    init{ main() }
}

// companion objects
//-------------------------------------------------------------//
class Entity private constructor(val id: String) {

    // companion objects have access to private properties of the enclosing class
    companion object Factory : IdProvider {
        override fun getId(): String {
            return "123"
        }

        const val id = "id"
        fun create() = Entity(getId())
    }
}

interface IdProvider{
    fun getId() : String
}
