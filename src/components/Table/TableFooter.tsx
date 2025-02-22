import React from "react";
import styled from "styled-components";

export interface TableFooterProps {
  children: React.ReactNode;
}

const StyledFooter = styled.tfoot`
  background-color: #007bff;
  color: white;
  font-weight: bold;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default TableFooter;
