import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders the button with the correct text", () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("button is disabled when the disabled prop is true", () => {
    render(<Button label="Disabled Button" disabled />);
    expect(screen.getByText("Disabled Button")).toBeDisabled();
  });

  test("button calls onClick when clicked", () => {
    const mockClick = jest.fn();
    render(<Button label="Clickable Button" onClick={mockClick} />);

    const button = screen.getByText("Clickable Button");
    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalled(); // ✅ Ensures click function works
  });

  test("button does not call onClick when disabled", () => {
    const mockClick = jest.fn();
    render(<Button label="Disabled Button" disabled onClick={mockClick} />);

    const button = screen.getByText("Disabled Button");
    fireEvent.click(button);

    expect(mockClick).not.toHaveBeenCalled(); // ✅ Ensures disabled button does nothing
  });

  test("button has the correct styles when disabled", () => {
    render(<Button label="Disabled Button" disabled />);

    const button = screen.getByText("Disabled Button");
    expect(button).toHaveStyle("cursor: not-allowed");
    expect(button).toHaveStyle("opacity: 0.6");
  });
});
