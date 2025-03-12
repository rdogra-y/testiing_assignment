import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";
import "@testing-library/jest-dom";

describe("HeroImage Component", () => {
  test("renders hero image with correct accessibility attributes", () => {
    render(
      <HeroImage
        src="https://images.unsplash.com/photo-1542866263-77e2cdc46889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWV8ZW58MHx8MHx8fDA%3D"
        alt="Hero Image"
      />,
    );
    const heroElement = screen.getByRole("img", { name: "Hero Image" });
    expect(heroElement).toBeInTheDocument();
  });

  test("renders overlay text when provided", () => {
    render(
      <HeroImage
        src="https://images.unsplash.com/photo-1542866263-77e2cdc46889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWV8ZW58MHx8MHx8fDA%3D"
        alt="Hero Image"
        overlayText="Welcome!"
      />,
    );
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
  });

  test("applies correct height", () => {
    render(
      <HeroImage
        src="https://images.unsplash.com/photo-1542866263-77e2cdc46889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWV8ZW58MHx8MHx8fDA%3D"
        alt="Hero Image"
        height="400px"
      />,
    );
    const heroElement = screen.getByRole("img", { name: "Hero Image" });
    expect(heroElement).toHaveStyle("height: 400px");
  });

  test("applies disabled styles when disabled", () => {
    render(
      <HeroImage
        src="https://images.unsplash.com/photo-1542866263-77e2cdc46889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdWV8ZW58MHx8MHx8fDA%3D"
        alt="Hero Image"
        disabled
      />,
    );
    const heroElement = screen.getByRole("img", { name: "Hero Image" });
    expect(heroElement).toHaveStyle("opacity: 0.5");
    // Optionally, you can also check for other disabled styles like grayscale or cursor.
  });
});
