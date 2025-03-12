/**
 * ImgProps defines the properties for the Img component.
 */
export interface ImgProps {
    /** Image source URL */
    src: string;
    /** Alternative text for the image */
    alt: string;
    /** Width of the image (optional) */
    width?: string;
    /** Height of the image (optional) */
    height?: string;
    /** Border radius for rounded corners (optional) */
    borderRadius?: string;
    /** When true, applies disabled styling (e.g., greyed out and non-clickable) */
    disabled?: boolean;
}
