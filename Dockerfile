# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory to match assignment requirements
WORKDIR /zumrut_busra_ui_garden

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Build the project
RUN npm run build

# Install `serve` globally to serve the production build
RUN npm install -g serve

# Expose port 8083 for the container
EXPOSE 8083

# Copy the index.html file to the dist folder
COPY public/index.html dist/index.html

# Start the server using `serve`
CMD ["serve", "-s", "dist", "-l", "8083"]
