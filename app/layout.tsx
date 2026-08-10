import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eddy Chan | Full-Stack Software Developer",
  description:
    "Hong Kong full-stack developer with enterprise HR system experience. 香港全端開發員，具備企業人力資源系統及 SAP 流程整合經驗。",
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
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
