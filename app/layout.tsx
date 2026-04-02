import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurinath Subash | CS @ NC State",
  description:
    "Personal portfolio of Gaurinath Subash — CS student at NC State University passionate about software engineering and data science.",
  keywords: ["portfolio", "software engineer", "data science", "NC State", "computer science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
