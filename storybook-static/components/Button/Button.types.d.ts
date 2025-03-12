export interface ButtonProps {
  /** The text inside the button */
  label?: string;
  /** Button can accept text, HTML, or even other React components inside it. */
  children?: React.ReactNode;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Function to handle button clicks */
  onClick?: () => void;
}
