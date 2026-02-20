import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bookmark Vault",
  description: "A simple bookmark manager built with Next.js and Supabase Auth || Built by Virender Chauhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-3">{children}</body>
    </html>
  );
}
