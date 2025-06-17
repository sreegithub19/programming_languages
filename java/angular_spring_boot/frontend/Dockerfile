FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install && npm install @angular/common @angular/core @angular/platform-browser @angular/compiler @angular/platform-browser-dynamic @angular/router && npm install --save-dev @angular-devkit/build-angular typescript
COPY . .
RUN npm run build -- --configuration=production

FROM node:18-slim
WORKDIR /app
RUN npm install -g http-server
COPY --from=build /app/dist/frontend ./dist/frontend
EXPOSE 4200
CMD ["http-server", "dist/frontend", "-p", "4200", "-a", "0.0.0.0"]
