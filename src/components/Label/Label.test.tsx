// Label.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";
import "@testing-library/jest-dom";

describe("Label Component", () => {
  test("renders label with correct text", () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  test("label is associated with an input when `htmlFor` is provided", () => {
    render(
      <>
        <Label text="Username" htmlFor="username-input" />
        <input id="username-input" />
      </>,
    );
    // Note: In HTML, the attribute is "for" even though in React it's "htmlFor"
    expect(screen.getByText("Username")).toHaveAttribute(
      "for",
      "username-input",
    );
  });

  test("applies disabled styles when disabled", () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText("Disabled Label");
    expect(labelElement).toHaveStyle("color: #999");
    expect(labelElement).toHaveStyle("cursor: not-allowed");
  });
});
