import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";
import "@testing-library/jest-dom";

describe("Img Component", () => {
  test("renders the image with correct src and alt attributes", () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
    const imgElement = screen.getByAltText("Placeholder");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150"
    );
  });

  test("applies custom width, height, and border radius", () => {
    render(
      <Img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        width="200px"
        height="100px"
        borderRadius="15px"
      />
    );
    const imgElement = screen.getByAltText("Placeholder");
    expect(imgElement).toHaveStyle("width: 200px");
    expect(imgElement).toHaveStyle("height: 100px");
    expect(imgElement).toHaveStyle("border-radius: 15px");
  });
});
