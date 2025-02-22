export interface ButtonProps {
  /** The text inside the button */
  label?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Function to handle button clicks */
  onClick?: () => void;
}
