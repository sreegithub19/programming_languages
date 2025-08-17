import io.javalin.Javalin

fun main() {
    val app = Javalin.create().start(8080)

    app.get("/") { ctx ->
        ctx.contentType("application/json")
        ctx.result("""{"message":"Hello from Javalin + Kotlin + Docker!"}""")
    }
}
