import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  background-color: blue;
  color: white;
  padding: 12px 24px;
  font-size: 16px;

  border: none;
  cursor: pointer;
  border-radius: 5px;
  min-width: 120px;
  max-width: 100%;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.1s ease-in-out;

  &:hover {
    background-color: darkblue;
  }

  &:active {
    background-color: navy;
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 18px;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 16px;
    min-width: 80px;
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
export type { ButtonProps };
