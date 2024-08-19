# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "start"]
