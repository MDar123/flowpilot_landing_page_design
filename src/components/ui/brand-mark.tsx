import { useId } from "react";

/**
 * FlowPilot "Autopilot" mark: a fast-forward chevron with a motion trail
 * on a violet → indigo app tile.
 */
export function BrandMark({
  size = 32,
  className,
  title,
}: {
  size?: number;
  className?: string;
  /** set when the mark stands alone and needs an accessible name */
  title?: string;
}) {
  const id = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id})`} />
      <path d="M10 22 H19 L29 32 L19 42 H10 L20 32 Z" fill="#fff" fillOpacity="0.45" />
      <path d="M24 16 H36 L52 32 L36 48 H24 L40 32 Z" fill="#fff" />
    </svg>
  );
}
