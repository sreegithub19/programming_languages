# Render: https://dashboard.render.com/web/srv-d24fmqruibrs73btin9g
# App URL: https://my-spring-app-ia5y.onrender.com/hello?name=hi
# Other URL: https://programming-languages-1.onrender.com/hello?name=hi

# ------------------------------------------------------------------------------------------------------------------------

# Angular
FROM node:22-alpine AS angular-build

# Install git in the container
RUN apk add --no-cache git

WORKDIR /angular

# Copy package.json and package-lock.json
#COPY my_angular_app/package*.json ./

# Clone your Angular repo (replace URL with your repo)
RUN git clone https://github.com/sreegithub19/my_angular_app.git .

# Install dependencies
RUN npm ci

# Copy the rest of Angular source code
#COPY my_angular_app/ .

# Build Angular for production
RUN npm run build --prod

# Check the dist folder (optional for debugging)
RUN ls -R /angular/dist

# ------------------------------------------------------------------------------------------------------------------------

# Spring boot
# ---------- Step 1: Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Set working directory inside the container
WORKDIR /app

# Copy only the Maven build descriptor first (for caching dependencies)
COPY pom.xml ./
RUN mvn dependency:go-offline

# Now copy the rest of the source code
COPY . .

# Copy Angular build into Spring Boot static folder
# Adjust paths: Angular output is in /angular/dist/<app-name>
COPY --from=angular-build /angular/dist/my-app /app/src/main/resources/static/angular

# Build the Kotlin Spring Boot project, skipping tests
RUN mvn clean package

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
