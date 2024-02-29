# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /server/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

RUN npm run build
RUN ls dist

# Expose the port your app runs on
EXPOSE 5000

# Define the command to run your app
CMD ["node", "dist/server.js"]
