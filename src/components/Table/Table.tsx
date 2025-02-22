import React from "react";
import styled from "styled-components";

interface TableProps {
  children: React.ReactNode;
  border?: boolean;
}

const StyledTable = styled.table<{ $border: boolean }>`
  width: 100%;
  border-collapse: collapse;
  border: ${({ $border }) => ($border ? "1px solid #ddd" : "none")};
`;

const Table: React.FC<TableProps> = ({ children, border = true }) => {
  return <StyledTable $border={border}>{children}</StyledTable>;
};

export default Table;
