import io.javalin.Javalin;

public class Main {
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.http.defaultContentType = "application/json";
        }).start(8080);

        app.get("/", ctx -> ctx.result("Hello from Javalin + Java + Docker!"));
    }
}
