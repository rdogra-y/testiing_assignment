import React from "react";
import styled from "styled-components";
import type { ImgProps } from "./Img.types";

// We use a transient prop "$disabled" so that it is not forwarded to the DOM.
const StyledImg = styled.img<{
  width?: string;
  height?: string;
  $disabled?: boolean;
}>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.theme?.borderRadius || "0"};

  /* If disabled, apply greyed-out styles */
  ${(props) =>
    props.$disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}

  /* Responsive Scaling */
  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 60%;
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  disabled,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ borderRadius }} // Pass borderRadius as inline style
      $disabled={disabled} // Pass our transient disabled prop
    />
  );
};

export default Img;
