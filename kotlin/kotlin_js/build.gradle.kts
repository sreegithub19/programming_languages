plugins {
    kotlin("js") version "1.8.22" // Use the Kotlin/JS plugin
}

repositories {
    mavenCentral() // Add Maven Central repository
}

kotlin {
    js(IR) {
        browser {
            // Configuration for browser-specific projects
        }
        binaries.executable() // Mark the project as an executable
    }
}