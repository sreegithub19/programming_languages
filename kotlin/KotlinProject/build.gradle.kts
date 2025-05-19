plugins {
    kotlin("jvm") version "2.1.20"
    java
    application
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(23))
    }
}

application {
    // Replace with your actual fully-qualified main class name
    mainClass.set("org.example.MainKt")
}
