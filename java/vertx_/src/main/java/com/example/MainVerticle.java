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
        // Use Render's PORT if present; default to 8080
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "8080"));

        // Create a router and routes
        Router router = Router.router(vertx);
        router.get("/").handler(this::handleRoot);
        router.get("/hello/:name").handler(this::handleHello);

        // Start HTTP server
        vertx.createHttpServer()
            .requestHandler(router)
            .listen(port, http -> {
                if (http.succeeded()) {
                    startPromise.complete();
                    System.out.println("HTTP server started on port " + port);
                } else {
                    startPromise.fail(http.cause());
                }
            });
    }

    private void handleRoot(RoutingContext ctx) {
        ctx.response()
            .putHeader("content-type", "text/plain")
            .end("Welcome to the application!");
    }

    private void handleHello(RoutingContext ctx) {
        String name = ctx.pathParam("name");
        ctx.response()
            .putHeader("content-type", "text/plain")
            .end("Hello, " + name + "!");
    }
}
