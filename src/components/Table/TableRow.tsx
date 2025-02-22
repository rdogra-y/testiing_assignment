import React from "react";
import styled from "styled-components";

export interface TableRowProps {
  children: React.ReactNode;
}

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default TableRow;
