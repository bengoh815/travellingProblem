# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Build the app
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Expose the port serve runs on
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "build", "-l", "3000"]