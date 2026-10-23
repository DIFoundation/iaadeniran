import type { Metadata, Viewport } from "next";
import "./globals.css";
import PortfolioAnalytics from "@/components/portfolio-analytics";

const siteUrl = "https://iaadeniran.vercel.app";
const siteTitle = "Ibrahim Adeniran | Frontend & Web3 Engineer";
const siteDescription =
  "Ibrahim Adeniran builds thoughtful web interfaces, wallet-connected applications, and on-chain products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Ibrahim Adeniran",
  },
  description: siteDescription,
  applicationName: "Ibrahim Adeniran Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Ibrahim Adeniran",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ibrahim Adeniran | Frontend and Web3 Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      <body className="min-h-full flex flex-col">
        {children}
        <PortfolioAnalytics />
      </body>
    </html>
  );
}
