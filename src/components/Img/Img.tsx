import React from "react";
import styled from "styled-components";

export interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

// Use Pick<> to exclude 'borderRadius' from being passed to the DOM element
const StyledImg = styled.img<Omit<ImgProps, "borderRadius">>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) =>
    props.theme?.borderRadius || "0"}; /* Use Theme or Default */
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, borderRadius }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ borderRadius }} // Pass as style instead of a prop
    />
  );
};

export default Img;
