import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OfferFiltersProvider from "./offerFiltersProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junior dev jobs",
  description: "Assorted job offers for juniors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OfferFiltersProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </OfferFiltersProvider>
  );
}
