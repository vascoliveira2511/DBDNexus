import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DBD Nexus - Dead by Daylight Companion",
  description: "The ultimate companion app for Dead by Daylight players. Build generators, match tracking, guides, and community features.",
  keywords: ["Dead by Daylight", "DBD", "builds", "perks", "tracker", "guide"],
  authors: [{ name: "DBD Nexus Team" }],
  creator: "DBD Nexus",
  publisher: "DBD Nexus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
