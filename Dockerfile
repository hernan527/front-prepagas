FROM node:18.20.1-alpine AS build
WORKDIR /app
# Install dependencies and build the project.
COPY package*.json ./
RUN npm ci --force
COPY . .
RUN npm run build

### Stage 2
FROM nginx:alpine
# Copy the Angular app's build artifacts from the specified output path
COPY  ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/angular-coamparar /usr/share/nginx/html
EXPOSE 80
# Run the web service on container startup.
CMD ["nginx", "-g", "daemon off;"]
