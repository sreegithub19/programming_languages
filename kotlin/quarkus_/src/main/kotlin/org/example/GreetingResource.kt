package org.example

import jakarta.ws.rs.GET
import jakarta.ws.rs.Path
import jakarta.ws.rs.PathParam
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.MediaType

@Path("/hello")
class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    fun hello() = "Hello from Quarkus Kotlin!"

    @GET
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    fun greeting(@PathParam("name") name: String) = "Hello $name from Quarkus Kotlin!"
}