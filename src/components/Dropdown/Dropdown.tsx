import React from "react";
import styled from "styled-components";

export interface DropdownProps {
  options: { label: string; value: string }[]; // List of dropdown options
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

// Styled component for the select dropdown
const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#e0e0e0" : "white")};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  disabled,
}) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
