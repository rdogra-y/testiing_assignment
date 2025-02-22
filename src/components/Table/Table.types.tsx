export interface TableProps {
  /** Child elements inside the table */
  children: React.ReactNode;
  /** Whether to show table border */
  border?: boolean;
}

export interface TableHeaderProps {
  /** Child elements inside the table header */
  children: React.ReactNode;
}

export interface TableRowProps {
  /** Child elements inside the table row */
  children: React.ReactNode;
}

export interface TableCellProps {
  /** Child elements inside the table cell */
  children: React.ReactNode;
  /** Whether the cell is a header */
  header?: boolean;
  /** Number of columns the cell should span */
  colSpan?: number;
}

export interface TableFooterProps {
  /** Child elements inside the table footer */
  children: React.ReactNode;
}
