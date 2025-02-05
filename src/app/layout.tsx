import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";

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
        <GoogleTagManager gtmId="G-CZ1CKKJML1" />
        <link rel="icon" href="images/rumanfavicon (1).png" type="image/png" />
        <Script id="HotJarAnalytics" >
          {
            `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5292471,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}

        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
