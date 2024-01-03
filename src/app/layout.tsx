import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruitment Portal",
  description: "Ultimate Recruitment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
