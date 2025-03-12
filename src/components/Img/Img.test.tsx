import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";
import "@testing-library/jest-dom";

describe("Img Component", () => {
  test("renders the image with correct src and alt attributes", () => {
    render(
      <Img
        src="https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt="Placeholder"
      />,
    );
    const imgElement = screen.getByAltText("Placeholder");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    );
  });

  test("applies custom width, height, and border radius", () => {
    render(
      <Img
        src="https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt="Placeholder"
        width="200px"
        height="100px"
        borderRadius="15px"
      />,
    );
    const imgElement = screen.getByAltText("Placeholder");
    expect(imgElement).toHaveStyle("width: 200px");
    expect(imgElement).toHaveStyle("height: 100px");
    expect(imgElement).toHaveStyle("border-radius: 15px");
  });

  test("applies disabled styles when disabled is true", () => {
    render(
      <Img
        src="https://images.unsplash.com/photo-1739826009158-edbd53ec9979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt="Placeholder"
        disabled={true}
      />,
    );
    const imgElement = screen.getByAltText("Placeholder");
    expect(imgElement).toHaveStyle("opacity: 0.5");
    expect(imgElement).toHaveStyle("cursor: not-allowed");
  });
});
