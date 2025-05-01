plugins {
    kotlin("js") version "1.9.0" // Use the Kotlin version you need
}

group = "com.example" // Replace with your group ID
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib-js"))
    testImplementation(kotlin("test-js"))
}

kotlin {
    js(IR) { // Use IR backend for Kotlin/JS
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true // Enable CSS support
            }
        }
        binaries.executable()
    }
}

// Optional: Task to clean the build directory
tasks.register<Delete>("clean") {
    delete(rootProject.buildDir)
}