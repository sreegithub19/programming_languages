#!/bin/bash

jars="lib/alpn-api-1.1.3.v20160715.jar:lib/annotations-13.0.jar:lib/config-1.4.3.jar:lib/jansi-2.4.1.jar:lib/kotlin-reflect-1.8.22.jar:lib/kotlin-stdlib-1.9.23.jar:lib/kotlin-stdlib-common-1.8.22.jar:lib/kotlin-stdlib-jdk7-1.9.23.jar:lib/kotlin-stdlib-jdk8-1.9.23.jar:lib/kotlinx-coroutines-core-jvm-1.7.1.jar:lib/kotlinx-coroutines-jdk8-1.7.1.jar:lib/ktor-events-jvm-2.3.11.jar:lib/ktor-http-cio-jvm-2.3.11.jar:lib/ktor-http-jvm-2.3.11.jar:lib/ktor-io-jvm-2.3.11.jar:lib/ktor-network-jvm-2.3.11.jar:lib/ktor-serialization-jvm-2.3.11.jar:lib/ktor-server-core-jvm-2.3.11.jar:lib/ktor-server-host-common-jvm-2.3.11.jar:lib/ktor-server-netty-jvm-2.3.11.jar:lib/ktor-utils-jvm-2.3.11.jar:lib/ktor-websockets-jvm-2.3.11.jar:lib/logback-classic-1.4.14.jar:lib/logback-core-1.4.14.jar:lib/netty-buffer-4.1.106.Final.jar:lib/netty-codec-4.1.106.Final.jar:lib/netty-codec-http-4.1.106.Final.jar:lib/netty-codec-http2-4.1.106.Final.jar:lib/netty-common-4.1.106.Final.jar:lib/netty-handler-4.1.106.Final.jar:lib/netty-resolver-4.1.106.Final.jar:lib/netty-transport-4.1.106.Final.jar:lib/netty-transport-classes-epoll-4.1.106.Final.jar:lib/netty-transport-classes-kqueue-4.1.106.Final.jar:lib/netty-transport-native-epoll-4.1.106.Final.jar:lib/netty-transport-native-kqueue-4.1.106.Final.jar:lib/netty-transport-native-unix-common-4.1.106.Final.jar:lib/slf4j-api-1.7.36.jar"

echo '
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

    // Create an instance of AppServer
    val server = AppServer(port = 8080)
    // Call the start method to run the server
    server.start()

'  | kotlinc -cp "$jars" -d target/classes &

# Run the compiled Ktor server in the background
#kotlin -cp "target/classes:$jars" com.example.AppServerKt &

KOTLIN_PID_2=$!

# Wait for 10 seconds
sleep 10

# Kill the Ktor server process
kill $KOTLIN_PID_2

# Notify the user
echo "Ran Ktor server for 10 seconds and now terminated it."