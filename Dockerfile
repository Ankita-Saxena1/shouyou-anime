# Stage 1: Build the Angular app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -l /app/dist/shouyou-anime

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/shouyou-anime/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN ls -l /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]