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

                get("/html_string") {
                    val htmlContent = """
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>My HTML Page</title>
                        </head>
                        <body>
                            <script>
                                alert(2)
                            </script>
                            <div>
                                <h1>Hello from embedded HTML string!</h1>
                                <p>This HTML is directly included in the Kotlin code.</p>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </div>
                        </body>
                        </html>
                    """.trimIndent()
                    call.respondText(htmlContent, io.ktor.http.ContentType.Text.Html)
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