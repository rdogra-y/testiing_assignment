import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

describe("Card Component", () => {
  test("renders the Card component with correct content", () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        imageSrc="https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByAltText("Test Title")).toBeInTheDocument();
  });

  test("calls onClick when card is clicked (enabled state)", () => {
    const mockClick = jest.fn();
    render(
      <Card
        title="Clickable Card"
        description="Click me"
        imageSrc="https://via.placeholder.com/300x180"
        onClick={mockClick}
      />
    );

    fireEvent.click(screen.getByText("Clickable Card"));
    expect(mockClick).toHaveBeenCalled();
  });

  test("does not trigger onClick when card is disabled", () => {
    const mockClick = jest.fn();
    render(
      <Card
        title="Disabled Card"
        description="Can't click me"
        imageSrc="https://via.placeholder.com/300x180"
        onClick={mockClick}
        disabled
      />
    );

    fireEvent.click(screen.getByText("Disabled Card"));
    expect(mockClick).not.toHaveBeenCalled();
  });
});
