import React from "react";
import styled from "styled-components";

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

// Styled component for RadioButton
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
`;

const StyledInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <StyledLabel>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
