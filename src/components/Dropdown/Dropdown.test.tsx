import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";
import "@testing-library/jest-dom";

describe("Dropdown Component", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  test("renders dropdown with options", () => {
    render(<Dropdown options={options} value="1" onChange={() => {}} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  test("calls onChange when selecting an option", () => {
    const onChangeMock = jest.fn();
    render(<Dropdown options={options} value="1" onChange={onChangeMock} />);

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "2" } });
    expect(onChangeMock).toHaveBeenCalledWith("2");
  });

  test("is disabled when disabled prop is true", () => {
    render(
      <Dropdown options={options} value="1" onChange={() => {}} disabled />,
    );
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
