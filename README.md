# React Component Library

## Assignment 12 - Web Component Library

This project is a **React Component Library** built using:

- **React & TypeScript** for reusable UI components
- **Storybook** for visual testing
- **Jest & React Testing Library** for unit tests
- **Styled Components** for styling
- **Docker** for deployment

This document explains how to **set up, build, test, and deploy** the project.

---

## Installation & Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js (18.x or later)**
- **npm (or yarn)**
- **Docker Desktop**
- **Git**

### Initialize Your Project

```sh

mkdir react-component-library
cd react-component-library

```

### Initialize npm

```sh
npm init -y

```

### Install React and TypeScript

```sh
npm install react react-dom typescript @types/react @types/react-dom --save-dev

```

```sh
Install Storybook

```

### Set Up Project Structure

```bash
react-component-library/
│── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.types.tsx
│   │   │   ├── index.ts
│   │   ├── Img/
│   │   │   ├── Img.tsx
│   │   │   ├── Img.stories.tsx
│   │   │   ├── Img.test.tsx
│   │   │   ├── Img.types.tsx
│   │   │   ├── index.ts
│   ├── index.ts
│
│── public/
│   ├── index.html
│
│── dist/
│   ├── (Built files)
│
│── Dockerfile
│── package.json
│── tsconfig.json
│── vite.config.ts
│── README.md
```

---

## Component Development

Each component consists of:

- `Component.tsx`: The **React component**.
- `Component.stories.tsx`: **Storybook file** for UI testing.
- `Component.test.tsx`: **Jest test file** for unit testing.
- `Component.types.tsx`: **TypeScript types** for prop validation.
- `index.ts`: **Exports** for easy imports.

---

### Run Storybook

```sh
npm run storybook

```

### Add a Simple Test

```sh
npm install --save-dev @testing-library/react jest @types/jest

```

### Run the test

```sh
npm test

```

### Add TypeScript Configuration

```sh
npx tsc --init

```

### Modify tsconfig.json to support React:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "baseUrl": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

### Create Dockerfile

```dockerfile
# Use official Node.js image
FROM node:16

# Set working directory
WORKDIR /lastName_firstName_ui_garden

# Copy package.json and install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 8083

# Start the application
CMD ["npx", "serve", "-s", "build", "-l", "8083"]
```

### Install dependencies:

```sh
npm install

```

### Build the Project

```sh
npm run build
```

> **Purpose:** Generates production-ready **dist/** files.

## Docker Setup & Deployment

### Build the Docker Image

```sh
docker build -t zumrut_busra_coding_assignment12 .
```

### Run the Docker Container

```sh
docker run -p 8083:8083 --name zumrut_busra_coding_assignment12 zumrut_busra_coding_assignment12
```

> **Purpose:** Serves the **component library** inside a **Docker container**.

---

## Example Components

### 1️⃣ Button Component

#### Files Created

- **Button.tsx** - The button component.
- **Button.stories.tsx** - Storybook setup.
- **Button.test.tsx** - Jest tests.
- **Button.types.tsx** - TypeScript types.

#### Button.tsx

```tsx
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ disabled, children }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
```

#### Button.test.tsx

```tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("button is disabled when the disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText("Disabled Button")).toBeDisabled();
  });

  test("button has the correct styles when disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText("Disabled Button");
    expect(button).toHaveStyle("cursor: not-allowed");
    expect(button).toHaveStyle("opacity: 0.6");
  });
});
```

---

## GitHub Deployment

### Steps

1. **Create a new GitHub repository**.
2. **Push your code**:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/react-component-library.git
   git push -u origin main
   ```

---
