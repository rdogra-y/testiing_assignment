/**
 * LabelProps defines the properties for the Label component.
 */
export interface LabelProps {
  /** Text to be displayed inside the label */
  text: string;
  /** The ID of the associated input element (optional) */
  htmlFor?: string;
  /** When true, applies disabled styling (e.g., greyed out and non-interactive) */
  disabled?: boolean;
}
