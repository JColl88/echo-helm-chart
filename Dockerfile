# Use the official lightweight Node.js image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Install express (since there's no package.json)
RUN npm install express

# Copy only the necessary files
COPY src/server.js .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "server.js"]