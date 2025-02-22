import React from "react";
import styled from "styled-components";
import type { LabelProps } from "./Label.types";

// StyledLabel now accepts a disabled prop to conditionally apply styling.
const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 1rem; /* 16px equivalent */
  font-weight: bold;
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
