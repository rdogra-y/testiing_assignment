# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory (matching assignment requirement)
WORKDIR /zumrut_busra_ui_garden

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build Storybook instead of the React app
RUN npm run build-storybook

# Install `http-server` globally to serve Storybook
RUN npm install -g http-server

# Expose port 8083 for the container
EXPOSE 8083

# Start the server to serve Storybook
CMD ["npx", "http-server", "storybook-static", "-p", "8083", "--cors", "--no-cache", "--log-ip"]


