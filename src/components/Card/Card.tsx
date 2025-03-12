import React from "react";
import styled from "styled-components";
import type { CardProps } from "./Card.types";

// Responsive styling: using max-width and percentages for responsiveness.
const CardContainer = styled.div<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  max-width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    transform: scale(1.05);
  }

  /* Responsive Card */
  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }

  /* Disable hover scaling on mobile */
  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: cover;

  @media (max-width: 480px) {
    max-height: 140px;
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem; /* 18px */
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.875rem; /* 14px */
  color: #666;

   @media (max-width: 480px) {
    font-size: 0.75rem;
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  onClick,
  disabled,
  backgroundColor,
}) => {
  // Click handler that prevents onClick execution when disabled.
  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
  };

  return (
    <CardContainer
      onClick={handleClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
