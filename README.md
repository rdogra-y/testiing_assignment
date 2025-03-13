# UI Component Library - Assignment 13

This project is part of **Assignment 13** for the **UI Component Library** course. The goal of this assignment is to enhance an existing **React Component Library** by integrating **Husky pre-commit hooks**, **ESLint**, **Prettier**, **Jest tests**, **Docker**, and **GitHub Actions** for a **CI/CD pipeline**.

## Tools & Technologies Used

- **React** - JavaScript library for UI development.
- **Storybook** - A tool for developing and testing UI components in isolation.
- **TypeScript** - A statically typed JavaScript superset.
- **ESLint** - Linting tool to maintain code quality.
- **Prettier** - Code formatter for consistent styling.
- **Jest & Testing Library** - Testing framework for unit testing React components.
- **Husky** - Git hooks manager to enforce pre-commit rules.
- **Docker** - Used to containerize the project.
- **GitHub Actions** - Automated CI/CD pipeline to ensure code quality in every commit.

---

## Steps to Set Up the Project

### Clone the Repository & Install Dependencies

```sh
git clone https://github.com/bgiranzumrut/UI-Component-Library_Assignment-13.git
cd UI-Component-Library_Assignment-13
npm install
```

### Add Husky for Pre-commit Hooks

```sh
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "prettier --write . && eslint . --fix && npm test"
```

### Configure ESLint & Prettier

```sh
npx eslint --init

```

### Edit package.json to include:

```json
"scripts": {
  "lint": "eslint src/",
  "format:check": "prettier --check ."
},
"husky": {
  "hooks": {
    "pre-commit": "prettier --write . && eslint . --fix && npm test"
  }
}

```

### Run ESLint & Fix Issues

```sh
npx eslint src/ --fix

```

### To test the component library:

```sh
npm test

```

### Edit the Dockerfile

```dockerfile
# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /zumrut_busra_ui_garden_build_checks

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build Storybook instead of the React app
RUN npm run build-storybook

# Install `http-server` to serve Storybook
RUN npm install -g http-server

# Expose port 8018
EXPOSE 8018

# Start Storybook server
CMD ["npx", "http-server", "storybook-static", "-p", "8018", "--cors", "--no-cache", "--log-ip"]
```

### Build & Run the Docker Container - Storybook loads at http://localhost:8018

```sh
docker build -t zumrut_busra_coding_assignment13 .
docker run -d -p 8018:8018 --name zumrut_busra_coding_assignment13 zumrut_busra_coding_assignment13

```

## Setting Up GitHub Actions for CI/CD

### Create .github/workflows/ci.yml

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run ESLint
        run: npm run lint

      - name: Run Tests
        run: npm test
```

### Commit & Push to Trigger CI/CD

```sh
git add .
git commit -m "Add GitHub Actions workflow"
git push origin main

```
