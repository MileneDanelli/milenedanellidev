import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milene Danelli | Desenvolvedora Full Stack",
  description:
    "Portfólio de Milene Danelli, desenvolvedora full stack com experiência em Laravel, React, APIs e soluções web escaláveis.",
  keywords: [
    "Milene Danelli",
    "Desenvolvedora Full Stack",
    "Laravel",
    "React",
    "PHP",
    "Portfólio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
