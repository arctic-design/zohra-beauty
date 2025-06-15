import type React from "react";
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Zohra Beauty Family Salon - Premium Hair & Skin Care",
  description:
    "Experience premium beauty services at Zohra Beauty Family Salon. Professional hair cutting, styling, facials, spa treatments, manicure, pedicure and more in Kolkata.",
  keywords:
    "beauty salon, hair salon, spa, facial, manicure, pedicure, hair cutting, Kolkata, Zohra Beauty",
  openGraph: {
    title: "Zohra Beauty Family Salon - Premium Hair & Skin Care",
    description:
      "Experience premium beauty services at Zohra Beauty Family Salon.",
    type: "website",
    locale: "en_US",
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
        className={`${inter.variable} ${lora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
