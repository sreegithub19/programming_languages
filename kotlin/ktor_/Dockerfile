# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy pom.xml and download dependencies (better cache)
COPY pom.xml ./
RUN mvn dependency:go-offline

# Copy all source
COPY . .

# Build a self-contained fat JAR
RUN mvn clean package -DskipTests

# ---------- Run Stage ----------
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Render (and Docker) will set PORT, default 8080 locally
ENV PORT=8080
EXPOSE 8080

# Start the Ktor app
ENTRYPOINT ["java", "-jar", "app.jar"]
