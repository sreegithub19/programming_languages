FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

FROM node:18-slim
WORKDIR /app
RUN npm install -g http-server
COPY --from=build /app/dist/frontend ./dist/frontend
EXPOSE 4200
CMD ["http-server", "dist/frontend", "-p", "4200", "-a", "0.0.0.0"]
