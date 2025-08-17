# Stage 1: Build
FROM gradle:8.5-jdk17 AS builder
WORKDIR /app

# Copy source code
COPY . .

# Generate Gradle wrapper (if not already in repo)
RUN gradle wrapper --gradle-version 8.5

# Build fat JAR using wrapper
RUN ./gradlew clean shadowJar --no-daemon

# Stage 2: Runtime
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy built JAR
COPY --from=builder /app/build/libs/app.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
