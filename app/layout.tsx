import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import ClickSpark from "../components/ClickSpark";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nipun Lakshitha | Full Stack Developer",
  description: "Portfolio of Nipun Lakshitha",
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
        {children}
      </body>
    </html>
  );
}
