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
    // Replace with your actual fully-qualified main class name
    mainClass.set("org.example.MainKt")
}

tasks.register("copyDependencies") {
    dependsOn("build")

    val outputDir = file("lib")

    outputs.dir(outputDir)

    doLast {
        outputDir.mkdirs()

        configurations.runtimeClasspath.get().resolvedConfiguration.lenientConfiguration.allModuleDependencies.forEach { dependency ->
            dependency.moduleArtifacts.forEach { artifact ->
                if (artifact.type == "jar") {
                    val from = artifact.file
                    val to = file("$outputDir/${from.name}")
                    copy {
                        from(from)
                        into(to.parentFile)
                    }
                    println("Copied ${from.name} to ${to.path}")
                }
            }
        }
    }
}