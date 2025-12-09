import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import ClickSpark from "../components/ClickSpark";
import JsonLd from "./json-ld";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://nipunlakshitha.com"
  ),
  title: {
    default: "Nipun Lakshitha | Full Stack Developer",
    template: "%s | Nipun Lakshitha",
  },
  description:
    "Portfolio of Nipun Lakshitha, a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Web Developer",
    "Nipun Lakshitha",
    "Portfolio",
  ],
  authors: [{ name: "Nipun Lakshitha", url: "https://nipunlakshitha.com" }],
  creator: "Nipun Lakshitha",
  publisher: "Nipun Lakshitha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nipunlakshitha.com",
    title: "Nipun Lakshitha | Full Stack Developer",
    description:
      "Portfolio of Nipun Lakshitha, a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Nipun Lakshitha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nipun Lakshitha | Full Stack Developer",
    description:
      "Portfolio of Nipun Lakshitha, a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    creator: "@nipunlnick",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-neutral-200 bg-neutral-950`}
      >
        <ClickSpark />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
