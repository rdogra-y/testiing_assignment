import React from "react";
import styled from "styled-components";
import type { HeroImageProps } from "./HeroImage.types";

// Styled component for the hero image container.
// It uses the 'background' prop for the image and accepts an optional 'disabled' prop.
const StyledHeroImage = styled.div<{
  background: string;
  height?: string;
  disabled?: boolean;
  backgroundColor?: string;
}>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || "300px"};
  background: url(${({ background }) => background}) center/cover no-repeat;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      filter: grayscale(100%);
      cursor: not-allowed;
    `}
`;

// The HeroImage component renders the styled container and an optional overlay text.
const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height,
  overlayText,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledHeroImage
      background={src}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      role="img"
      aria-label={alt}
    >
      {overlayText && <p>{overlayText}</p>}
    </StyledHeroImage>
  );
};

export default HeroImage;
