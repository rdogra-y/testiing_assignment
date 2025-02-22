// Table.tsx
import React from "react";
import styled from "styled-components";
import type { TableProps } from "./Table.types";

// Styled component for the table, including optional border and disabled styles.
const StyledTable = styled.table<{ $border: boolean; $disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  border: ${({ $border }) => ($border ? "1px solid #ddd" : "none")};

  ${({ $disabled }) =>
    $disabled &&
    `
      opacity: 0.6;
      pointer-events: none;
      user-select: none;
    `}
`;

const Table: React.FC<TableProps> = ({ children, border = true, disabled }) => {
  return (
    <StyledTable $border={border} $disabled={disabled}>
      {children}
    </StyledTable>
  );
};

export default Table;
