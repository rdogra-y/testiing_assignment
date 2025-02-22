import React from "react";
import styled from "styled-components";

export interface LabelProps {
  text: string;
  htmlFor?: string;
}

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default Label;
