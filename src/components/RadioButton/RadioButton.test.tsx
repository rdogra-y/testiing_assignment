import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";
import "@testing-library/jest-dom";

describe("RadioButton Component", () => {
  test("renders the radio button with the correct label", () => {
    render(
      <RadioButton
        label="Option 1"
        name="test"
        value="option1"
        checked={false}
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
  });

  test("triggers onChange when clicked", () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        label="Option 1"
        name="test"
        value="option1"
        checked={false}
        onChange={handleChange}
      />
    );
    const radio = screen.getByLabelText("Option 1");
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledWith("option1");
  });

  test("is disabled when the disabled prop is true", () => {
    render(
      <RadioButton
        label="Option 1"
        name="test"
        value="option1"
        checked={false}
        onChange={() => {}}
        disabled
      />
    );
    const radio = screen.getByLabelText("Option 1");
    expect(radio).toBeDisabled();
  });
});
