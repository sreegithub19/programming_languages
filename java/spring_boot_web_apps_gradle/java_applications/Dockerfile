# Render: https://dashboard.render.com/web/srv-d1r7i8ripnbc73f57ag0

# Step 1: Build stage
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy pom.xml and download dependencies first (better caching)
COPY pom.xml ./
RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY . .

# Build the application (skip tests for faster build)
RUN mvn clean package -DskipTests

# Step 2: Run stage
FROM eclipse-temurin:21-jre

# Install MySQL client
# RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy built jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (default Spring Boot port; change if yours differs)
EXPOSE 8090

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]
