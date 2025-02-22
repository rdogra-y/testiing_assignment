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
        imageSrc="https://via.placeholder.com/300x180"
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByAltText("Test Title")).toBeInTheDocument();
  });

  test("calls onClick when card is clicked", () => {
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
});
