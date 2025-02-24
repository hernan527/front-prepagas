# Stage 1: Build the Angular application
FROM node:20.9.0-alpine AS node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the latest npm globally
RUN npm install npm@latest -g

# Install project dependencies
RUN npm ci --force

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

### Stage 2: Serve the application with Nginx
FROM nginx:1.25.3-alpine-slim

# Set the working directory for Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the Angular app's build artifacts from the first stage
COPY --from=node /app/dist/angular-coamparar /usr/share/nginx/html

# Change ownership of the files
RUN chown nginx:nginx /usr/share/nginx/html/*

# Start Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
