package com.example

import io.vertx.core.AbstractVerticle
import io.vertx.core.Vertx
import io.vertx.core.Promise
import io.vertx.ext.web.Router

class MainVerticle : AbstractVerticle() {
    override fun start(startPromise: Promise<Void>) {
        val router = Router.router(vertx)

        router.get("/").handler { ctx ->
            ctx.response().end("Hello from Vert.x + Kotlin + Maven!")
        }

        router.get("/again").handler { ctx ->
            ctx.response().end("Hey there again!")
        }

        vertx.createHttpServer()
            .requestHandler(router)
            .listen(8080) { res ->
                if (res.succeeded()) {
                    println("Server running at http://localhost:8080/")
                    startPromise.complete()
                } else {
                    startPromise.fail(res.cause())
                }
            }
    }
}

fun main() {
    val vertx = Vertx.vertx()
    vertx.deployVerticle(MainVerticle())
}
