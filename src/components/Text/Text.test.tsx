import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";
import "@testing-library/jest-dom";

describe("Text Component", () => {
  test("renders text correctly", () => {
    render(<Text>Hello, World!</Text>); // Pass text as children
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  test("applies custom text color", () => {
    render(<Text color="red">Colored Text</Text>);
    const textElement = screen.getByText("Colored Text");
    expect(textElement).toHaveStyle("color: red");
  });
});
