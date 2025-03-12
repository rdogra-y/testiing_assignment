import { default as React } from "../../../node_modules/react";
export interface TableCellProps {
  children: React.ReactNode;
  header?: boolean;
  colSpan?: number;
}
declare const TableCell: React.FC<TableCellProps>;
export default TableCell;
