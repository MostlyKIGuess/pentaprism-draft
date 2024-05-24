import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pentasite",
  description: "A site for representing pentaprism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any"/>

      <body className={inter.className}>
        {/* <NavbarDemo /> */}
        {children}</body>
    </html>
  );
}
