// RadioButton.types.tsx
/**
 * RadioButtonProps defines the properties for the RadioButton component.
 */
export interface RadioButtonProps {
  /** Label text associated with the radio button */
  label: string;
  /** Name attribute to group related radio buttons */
  name: string;
  /** Value assigned to the radio button */
  value: string;
  /** Whether the radio button is checked */
  checked: boolean;
  /** Function to handle selection change */
  onChange: (value: string) => void;
  /** Whether the radio button is disabled */
  disabled?: boolean;
}
