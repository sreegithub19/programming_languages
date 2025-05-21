package org.example

interface PersonInfoProvider{

    val providerInfo: String;
    fun printInfo(person: Person){
        println(providerInfo)
        person.printInfo()
    }
}

interface SessionInfoProvider{
    fun getSessionId() : String
}

open class BasicInfoProvider : PersonInfoProvider , SessionInfoProvider{
    override val providerInfo: String
        get() = "BasicInfoProvider"

    //protected open val sessionIdPrefix = "Session" (available only to child classes)
    open val sessionIdPrefix: String = "Session"

    override fun printInfo(person: Person) {
        super.printInfo(person)
        println("additional print statement")
    }

    override fun getSessionId(): String {
        return sessionIdPrefix
    }
}

class BasicInfoProvider_Kt{
    fun main(){

        //val provider = FancyInfoProvider()

        // Object Expressions
        val provider = object : PersonInfoProvider{
            override val providerInfo : String
                get() = "New Info Provider"

            fun getSessionId() = "id"
        }
        //provider.sessionIdPrefix

        provider.printInfo(Person())
        provider.getSessionId()

        checkTypes(provider)
    }
    init{
        main()
    }

}

fun checkTypes(infoProvider: PersonInfoProvider){
    if(infoProvider !is SessionInfoProvider){
        println("not a session info provider")
    }
    else {
        println("is session info provider")
        (infoProvider as SessionInfoProvider).getSessionId()
    }
}

