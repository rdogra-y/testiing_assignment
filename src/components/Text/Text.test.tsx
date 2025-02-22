// Text.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";
import "@testing-library/jest-dom";

describe("Text Component", () => {
  test("renders text correctly", () => {
    render(<Text>Hello, World!</Text>);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  test("applies custom text color", () => {
    render(<Text color="red">Colored Text</Text>);
    const textElement = screen.getByText("Colored Text");
    expect(textElement).toHaveStyle("color: red");
  });

  test("applies disabled styles when disabled", () => {
    render(<Text disabled>This text is disabled.</Text>);
    const textElement = screen.getByText("This text is disabled.");
    expect(textElement).toHaveStyle("color: #999");
    expect(textElement).toHaveStyle("opacity: 0.6");
    expect(textElement).toHaveStyle("user-select: none");
  });
});
