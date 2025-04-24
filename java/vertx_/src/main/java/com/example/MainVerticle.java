package com.example;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.Promise;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;

public class MainVerticle extends AbstractVerticle {

    public static void main(String[] args) {
        Vertx vertx = Vertx.vertx();
        vertx.deployVerticle(new MainVerticle(), res -> {
            if (res.succeeded()) {
                System.out.println("MainVerticle deployed successfully");
            } else {
                System.err.println("Error deploying MainVerticle: " + res.cause().getMessage());
            }
        });
    }

    @Override
    public void start(Promise<Void> startPromise) {
        // Create a router object.
        Router router = Router.router(vertx);

        // Define routes
        router.get("/").handler(this::handleRoot);
        router.get("/hello/:name").handler(this::handleHello);

        // Create the HTTP server and use the router to handle requests.
        vertx.createHttpServer()
            .requestHandler(router)
            .listen(8080, http -> {
                if (http.succeeded()) {
                    startPromise.complete();
                    System.out.println("HTTP server started on port 8080");
                } else {
                    startPromise.fail(http.cause());
                }
            });
    }

    private void handleRoot(RoutingContext routingContext) {
        routingContext.response()
            .putHeader("content-type", "text/plain")
            .end("Welcome to the application!");
    }

    private void handleHello(RoutingContext routingContext) {
        String name = routingContext.pathParam("name");
        routingContext.response()
            .putHeader("content-type", "text/plain")
            .end("Hello, " + name + "!");
    }

}