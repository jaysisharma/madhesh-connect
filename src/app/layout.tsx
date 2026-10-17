import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madhesh Connect — People, Community, Opportunities & Technology",
  description:
    "A civic and community digital platform connecting people, communities, information, opportunities, and useful technology across Madhesh, Nepal.",
  keywords: [
    "Madhesh Connect",
    "Madhesh Nepal",
    "Civic Engagement",
    "Community",
    "Terai",
    "Digital Innovation",
    "Public Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8F6F0] text-[#1B211E] antialiased">
        {children}
      </body>
    </html>
  );
}
