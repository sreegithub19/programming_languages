# ---------- Step 1: Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Set working directory inside the container
WORKDIR /app

# Copy only the Maven build descriptor first (for caching dependencies)
COPY pom.xml ./
RUN mvn dependency:go-offline

# Now copy the rest of the source code
COPY . .

# Build the Kotlin Spring Boot project, skipping tests
RUN mvn clean package -DskipTests

# ---------- Step 2: Runtime Stage ----------
FROM eclipse-temurin:21-jre

# Set working directory inside the runtime container
WORKDIR /app

# Copy the jar file built in the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose Spring Boot port (customize if different)
EXPOSE 8080

# Start the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
