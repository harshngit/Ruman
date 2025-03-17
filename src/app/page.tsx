import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import ServiceTwo from "@/components/Section/Service/ServiceTwo";
import Footer from "@/components/Footer/Footer";
import ProjectFive from "@/components/Section/Project/ProjectFive";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import PartnerSix from "@/components/Section/Partner/PartnerSix";
import ServiceBanner from "@/components/Section/PaymentGateway/ServiceBanner"
import HomeBanner from "@/components/Home/HomeBanner";
import { GoogleAnalytics } from "@next/third-parties/google";
import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruman Accounting Services | Expert Financial Solutions for Businesses & Individuals",
  description: "Trust Ruman Accounting for expert family accounting and financial intelligence solutions.",
  keywords: ['Ruman Accounting Services', 'Ruman Accounting Intelligence', 'Family Accounting', 'Accounting Intelligence', 'Accouting Services', 'Accounting', 'Accounting in Mumbai', ' Accounting in Pune', "Accounting in Thane", 'Accounting for startups'],
  robots: {
    index: false,
    follow: true,
  },
  verification: {
    google: 'BBRC6y8h6TTilDoQ199YKgjB9K9l9r2Mx2prPHFtwMk',
  },
  openGraph: {
    type: "website",
    title: 'Ruman Accounting Services | Expert Financial Solutions for Businesses & Individuals',
    description: 'Trust Ruman Accounting for expert family accounting and financial intelligence solutions.',
    url: 'https://rumanaccounting.com/',
    siteName: 'Ruman Accounting Services',
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

export default function Home() {
  return (
    <>

      <div className=" relative">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="googlebot" content="follow, index" />
        </Head>
        <GoogleAnalytics gaId="G-CZ1CKKJML1" />
        <Link href="/contact">
          <div className="relative">
            <div className="w-[60px] h-[60px] rounded-full fixed bottom-5 right-5 text-center flex justify-center items-center cursor-pointer bg-blue hover:bg-black text-white z-50 ">
              <FaPhone className="text-white rotate-90 text-xl" />
            </div>
          </div>
        </Link>
        <header id="header">
          <MenuOne />
        </header>
        <main className="content ">
          <SliderOne />
          <ServiceBanner />
          <HomeBanner />
          <ProjectFive />
          <PaymentGatewayOneSecond />
          <ServiceTwo />
          {/* <TestimonialTwo /> */}
          <PartnerSix classname='bg-blue sm:mt-0 mt-0' />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
