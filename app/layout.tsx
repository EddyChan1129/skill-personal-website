import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eddy Chan | Full-Stack Software Developer",
  description:
    "Full-stack developer in Hong Kong with enterprise HR system experience across React, Next.js, TypeScript, Express, BullMQ, Docker and SAP workflows.",
  authors: [{ name: "Eddy Chan" }],
  keywords: [
    "Eddy Chan",
    "full-stack developer",
    "software developer Hong Kong",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
