export interface CardProps {
    /** Title of the card */
    title: string;
    /** Description text for the card */
    description: string;
    /** Image source URL for the card */
    imageSrc: string;
    /** Optional click event handler for the card */
    onClick?: () => void;
    /** Whether the card is disabled */
    disabled?: boolean;
    /** Optional background color for the card */
    backgroundColor?: string;
}
