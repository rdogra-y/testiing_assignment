// Button.types.ts
export interface ButtonProps {
  /** The text inside the button */
  label?: string;
  /** Optional content inside the button */
  children?: React.ReactNode;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Function to handle button clicks */
  onClick?: () => void;
}
