import React from "react";
import styled from "styled-components";

export interface TableHeaderProps {
  children: React.ReactNode;
}

const StyledHeader = styled.thead`
  background-color: #007bff;
  color: white;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default TableHeader;
