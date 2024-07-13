# Use official Node.js image as base
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

RUN npm run build

# Stage 2: Use a small image for production
# FROM node:18-alpine
FROM nginx

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the built Angular app from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
