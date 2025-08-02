import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDF Generator App",
  description: "PDF Collector & Maker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}