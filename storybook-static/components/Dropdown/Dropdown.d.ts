import { default as React } from "../../../node_modules/react";
export interface DropdownProps {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
