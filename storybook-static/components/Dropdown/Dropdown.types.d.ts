export interface DropdownProps {
    /** List of dropdown options */
    options: {
        label: string;
        value: string;
    }[];
    /** Selected value of the dropdown */
    value: string;
    /** Function to handle value change */
    onChange: (value: string) => void;
    /** Whether the dropdown is disabled */
    disabled?: boolean;
}
