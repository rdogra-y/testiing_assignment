import React from "react";
import styled from "styled-components";

export interface TextProps {
  children: string; // Change 'content' to 'children'
  color?: string;
}

const StyledText = styled.p<TextProps>`
  font-size: 14px;
  color: ${({ color }) => color || "#333"}; // Default color
`;

const Text: React.FC<TextProps> = ({ children, color }) => {
  return <StyledText color={color}>{children}</StyledText>; // Pass text as children
};

export default Text;
