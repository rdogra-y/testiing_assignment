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
      </>
    );
    expect(screen.getByText("Username")).toHaveAttribute(
      "for",
      "username-input"
    );
  });
});
