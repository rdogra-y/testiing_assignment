import React from "react";
import styled from "styled-components";

export interface TableCellProps {
  children: React.ReactNode;
  header?: boolean;
  colSpan?: number; // Add this line
}

const StyledCell = styled.td<TableCellProps>`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-weight: ${({ header }) => (header ? "bold" : "normal")};
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  header = false,
  colSpan,
}) => {
  return (
    <StyledCell as={header ? "th" : "td"} colSpan={colSpan}>
      {children}
    </StyledCell>
  );
};

export default TableCell;
