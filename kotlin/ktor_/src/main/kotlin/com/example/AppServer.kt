package com.example

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.request.*
import io.ktor.server.routing.*

// Define the AppServer class
class AppServer(private val port: Int) {
    fun start() {
        embeddedServer(Netty, port = port) {
            routing {
                get("/") {
                    call.respondText("Hello from Ktor in AppServer!")
                }
                // You can add more routes here
                get("/hello") {
                    call.respondText("Hello, World, from another route!")
                }
            }
        }.start(wait = true)
    }
}

fun main() {
    // Create an instance of AppServer
    val server = AppServer(port = 8080)
    // Call the start method to run the server
    server.start()
}