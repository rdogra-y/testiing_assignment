export interface TextProps {
    /** Text content inside the component */
    children: string;
    /** Text color (optional) */
    color?: string;
    /** When true, applies disabled styling (e.g., greyed out and non-interactive) */
    disabled?: boolean;
}
