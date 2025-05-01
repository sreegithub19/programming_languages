import kotlinx.browser.document

fun main() {
    // Use document.write to add content to the webpage
    document.write("""
    <h1>Welcome to Kotlin/JS!</h1>
    <p>This content is written using Kotlin/JS and document.write.</p>
    <button onclick='alert("Hello from Kotlin/JS!")'>Click Me</button>
""")
}