# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Cache deps
COPY pom.xml ./
RUN mvn -q -e -DskipTests dependency:go-offline

# Copy source and build fat JAR
COPY src ./src
RUN mvn -q -e -DskipTests package

# ---------- Run Stage ----------
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy shaded jar built above to a fixed name
COPY --from=build /app/target/vertx-application-1.0-SNAPSHOT.jar /app/app.jar

# Informational; Render sets PORT
EXPOSE 8080
ENV PORT=8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
