import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruman",
  description: "Accounting Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/rumanfavicon (1).png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
