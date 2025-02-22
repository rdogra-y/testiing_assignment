import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
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

const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label || "Button"}
    </StyledButton>
  );
};

export default Button;
