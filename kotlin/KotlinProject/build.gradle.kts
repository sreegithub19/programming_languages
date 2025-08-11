plugins {
    kotlin("jvm") version "2.2.0"
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
    implementation("io.vavr:vavr:0.10.4")
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
    mainClass.set("org.example.MainKt")
}

// ✅ Fixed copyDependencies task: copy all runtime jars to build/lib
tasks.register<Copy>("copyDependencies") {
    from(configurations.runtimeClasspath)
    into("build/lib")
}
