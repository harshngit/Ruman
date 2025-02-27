import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ruman Accounting Services | Expert Family Accounting & Smart Financial Solutions",
  description: "Trust Ruman Accounting for expert family accounting and financial intelligence solutions.",
  keywords: ['Ruman Accounting Services', 'Accounting Intelligence', 'Family Accounting', 'Accouting Services', 'Accounting', 'Accounting in Mumbai', ' Accounting in Pune', "Accounting in Thane", 'Accounting for startups'],
  verification: {
    google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
  },
  openGraph: {
    type: "website",
    title: 'Ruman Accounting Services | Expert Family Accounting & Smart Financial Solutions',
    description: 'Trust Ruman Accounting for expert family accounting and financial intelligence solutions.',
    url: 'https://rumanaccounting.com/',
    siteName: 'Ruman Accounting Services | Expert Family Accounting & Smart Financial Solutions',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Ruman Accounting – Your Partner in Family Accounting & Smart Financial Intelligence.',
      },
    ],

  },
  alternates: {
    canonical: 'https://rumanaccounting.com/',
  },

  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
    apple: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
    },
  },
}

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
