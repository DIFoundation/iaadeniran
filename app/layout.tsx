import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Adeniran — Frontend & Web3 Engineer",
  description:
    "Ibrahim Adeniran builds expressive digital products, modern web experiences, and on-chain systems.",
  metadataBase: new URL("https://iaadeniran.vercel.app"),
  openGraph: {
    title: "Ibrahim Adeniran — Frontend & Web3 Engineer",
    description: "Interfaces with intent. On-chain systems with purpose.",
    url: "https://iaadeniran.vercel.app",
    siteName: "Ibrahim Adeniran",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Adeniran — Frontend & Web3 Engineer",
    description: "Interfaces with intent. On-chain systems with purpose.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090a08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
