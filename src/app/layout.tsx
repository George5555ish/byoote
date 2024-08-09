import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Header'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BYOOTE WORLDWIDE",
  description: "Changing the world, one woman at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
