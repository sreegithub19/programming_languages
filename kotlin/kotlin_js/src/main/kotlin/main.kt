import kotlinx.browser.document

fun main() {
    // Use document.write to add content to the webpage
    document.write("<h1>Welcome to Kotlin/JS!</h1>")
    document.write("<p>This content is written using Kotlin/JS and document.write.</p>")
    document.write("<button onclick='alert(\"Hello from Kotlin/JS!\")'>Click Me</button>")
}