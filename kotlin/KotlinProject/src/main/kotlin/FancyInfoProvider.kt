package org.example

import io.vavr.API

class FancyInfoProvider_Kt{
    fun main(){
        // 1. Create an instance of FancyInfoProvider
        val fancyProvider = FancyInfoProvider()
        val person = Person("Inheritance", "Demo") // Create a Person object to pass

        // 2. Call printInfo on the fancyProvider instance
        fancyProvider.printInfo(person)

        // 3. Call getSessionId as well
        API.println("Session ID from FancyInfoProvider: ${fancyProvider.getSessionId()}")

        // You could also test the super method call explicitly if needed
        API.println("Calling basic provider directly for comparison:")
        val basicProvider = BasicInfoProvider()
        basicProvider.printInfo(person)
        FancyInfoProvider()
    }
    init{
        main()
    }

}

// make BasicInfoProvider() an open class to make it inheritable
class FancyInfoProvider : BasicInfoProvider(){

    override val sessionIdPrefix: String
        get() = "Fancy Session"

    override val providerInfo: String
        get() = "Fancy Info Provider"

    override fun printInfo(person: Person) {
        super.printInfo(person)
        println("Fancy Info")
    }
}
