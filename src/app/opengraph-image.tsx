import { ImageResponse } from "next/og";

export const alt = "FlowPilot — AI automation for growing businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the site link is shared (WhatsApp, LinkedIn, X, Slack…).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "radial-gradient(ellipse at 75% 20%, #2e1065 0%, #050507 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 30,
              display: "flex",
              background: "linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)",
            }}
          >
            <svg width="120" height="120" viewBox="0 0 64 64">
              <path d="M10 22 H19 L29 32 L19 42 H10 L20 32 Z" fill="#fff" fillOpacity="0.45" />
              <path d="M24 16 H36 L52 32 L36 48 H24 L40 32 Z" fill="#fff" />
            </svg>
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: 6 }}>FLOWPILOT</div>
        </div>
        <div style={{ marginTop: 56, fontSize: 64, fontWeight: 700, lineHeight: 1.1, display: "flex", flexDirection: "column" }}>
          <span>Automate the busywork.</span>
          <span style={{ color: "#A78BFA" }}>Scale with AI.</span>
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#A9A9BC" }}>
          AI agents &amp; workflows on Make · Zapier · n8n · GoHighLevel
        </div>
      </div>
    ),
    size,
  );
}
