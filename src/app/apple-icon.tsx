import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon: the Autopilot mark, full-bleed (iOS rounds the corners itself).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 64 64">
          <path d="M10 22 H19 L29 32 L19 42 H10 L20 32 Z" fill="#fff" fillOpacity="0.45" />
          <path d="M24 16 H36 L52 32 L36 48 H24 L40 32 Z" fill="#fff" />
        </svg>
      </div>
    ),
    size,
  );
}
