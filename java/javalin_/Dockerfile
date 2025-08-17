# Stage 1: Build
FROM gradle:8.5-jdk17 AS builder
WORKDIR /app

# Copy source
COPY . .

# Generate wrapper (if missing)
RUN gradle wrapper --gradle-version 8.5

# Build fat jar
RUN ./gradlew clean shadowJar --no-daemon

# Stage 2: Runtime
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/build/libs/app.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
