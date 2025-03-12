// Text.tsx
import React from "react";
import styled from "styled-components";
import type { TextProps } from "./Text.types";

// Styled component for the text, with conditional styling for disabled state.
const StyledText = styled.p<{ $color?: string; $disabled?: boolean }>`
  font-size: 1rem; /* 14-16px equivalent */
  color: ${({ $color, $disabled }) => ($disabled ? "#999" : $color || "#333")};
  opacity: ${({ $disabled }) => ($disabled ? "0.6" : "1")};
  user-select: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  /* Responsive Text Size */
  @media (max-width: 768px) {
    font-size: 0.875rem; /* 14px */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* 12px */
`;

const Text: React.FC<TextProps> = ({ children, color, disabled }) => {
  return (
    <StyledText $color={color} $disabled={disabled}>
      {children}
    </StyledText>
  );
};

export default Text;
