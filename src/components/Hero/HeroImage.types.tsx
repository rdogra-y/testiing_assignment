export interface HeroImageProps {
  /** Source URL for the hero image */
  src: string;
  /** Alternative text for the image (for accessibility) */
  alt: string;
  /** Optional height of the hero image (e.g., "400px") */
  height?: string;
  /** Optional text to display as an overlay on the image */
  overlayText?: string;
  /** When true, applies disabled styling (e.g. greyscale and lower opacity) */
  disabled?: boolean;
  /** Optional background color overlay (if needed) */
  backgroundColor?: string;
}
