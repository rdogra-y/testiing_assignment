import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types"; // ✅ Import from Button.types

const StyledButton = styled.button<ButtonProps>`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children || label}
    </StyledButton>
  );
};

export default Button;
export type { ButtonProps }; // ✅ Explicitly export ButtonProps
