FROM node:18.13.0-alpine as build
WORKDIR /app
# Install dependencies and build the project.
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

### Stage 2
FROM nginx:alpine
# Copy the Angular app's build artifacts from the specified output path
ADD  ./config/default.conf /etc/nginx/config.d/default.conf

COPY --from=build /app/dist /var/www/app/
EXPOSE 80
# Run the web service on container startup.
CMD ["nginx", "-g", "daemon off;"]
