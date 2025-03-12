# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /zumrut_busra_ui_garden_build_checks

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build Storybook
RUN npm run build-storybook

# Install `http-server` globally
RUN npm install -g http-server

# Expose port 8018 for the container
EXPOSE 8018

# Serve Storybook from `storybook-static/`
CMD ["npx", "http-server", "storybook-static", "-p", "8018", "--cors", "--no-cache", "--log-ip"]
