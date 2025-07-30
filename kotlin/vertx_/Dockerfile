# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

COPY pom.xml ./
RUN mvn -q -e -DskipTests dependency:go-offline

COPY src ./src
RUN mvn -q -e -DskipTests package

# ---------- Run Stage ----------
FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=build /app/target/vertx-kotlin-maven-example-1.0-SNAPSHOT.jar /app/app.jar

EXPOSE 8080
ENV PORT=8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
