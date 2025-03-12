// RadioButton.tsx
import React from "react";
import styled from "styled-components";
import type { RadioButtonProps } from "./RadioButton.types";

// StyledLabel accepts a disabled prop to conditionally style the label.
const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  user-select: none;
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

// StyledInput for the radio button itself.
const StyledInput = styled.input`
  margin-right: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
}) => {
  // Only trigger onChange if the radio button is not disabled.
  const handleChange = () => {
    if (!disabled) {
      onChange(value);
    }
  };

  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
