# Stage 1: Build the Angular application
FROM node:20.9.0-alpine AS node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install project dependencies
RUN pnpm ci --force

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN pnpm run build

### Stage 2: Serve the application with Nginx
FROM nginx:1.25.3-alpine-slim

# Set the working directory for Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

COPY config/default.conf /etc/nginx/conf.d/default.conf

# Copy the Angular app's build artifacts from the first stage
COPY --from=node /app/dist/angular-coamparar /usr/share/nginx/html

# Change ownership of the files
RUN chown -R nginx:nginx /usr/share/nginx/html
# Start Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
