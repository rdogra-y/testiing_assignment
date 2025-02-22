import React from "react";
import styled from "styled-components";

export interface HeroImageProps {
  src: string;
  alt: string;
  height?: string;
  overlayText?: string;
}

const StyledHeroImage = styled.div<{ background: string; height?: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || "300px"};
  background: url(${({ background }) => background}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height,
  overlayText,
}) => {
  return (
    <StyledHeroImage
      background={src}
      height={height}
      role="img"
      aria-label={alt}
    >
      {overlayText && <p>{overlayText}</p>}
    </StyledHeroImage>
  );
};

export default HeroImage;
