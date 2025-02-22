import React from "react";
import styled from "styled-components";

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
