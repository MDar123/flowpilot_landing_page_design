import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/ui/motion";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://flowpilot-landing-page-iota.vercel.app";
const title = "FlowPilot AI — AI Automation for Growing Businesses";
const description =
  "FlowPilot builds AI agents and automated workflows on Make, Zapier, n8n and GoHighLevel so your team can stop doing busywork.";

export const metadata: Metadata = {
  // Absolute base so the share image and links resolve on WhatsApp, LinkedIn, X, Slack…
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "FlowPilot",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${grotesk.variable} font-sans antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
