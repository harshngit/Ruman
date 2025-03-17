
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import Footer from "@/components/Footer/Footer"
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo"
import caseStudyData from '@/data/case-study.json'
import CaseStudyThree from "@/components/Section/CaseStudy/CaseStudyThree"
import AboutFive from "@/components/Section/About/AboutFive"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"
import Head from "next/head"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Ruman Accounting Service | Your Trusted Financial Partner",
  description: "Discover Ruman Accounting Service – your trusted partner for expert financial solutions. With a commitment to excellence, we help businesses and individuals achieve their financial goals.",
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
    title: 'About Ruman Accounting Service | Your Trusted Financial Partner',
    description: 'Discover Ruman Accounting Service – your trusted partner for expert financial solutions. With a commitment to excellence, we help businesses and individuals achieve their financial goals.',
    url: 'https://rumanaccounting.com/about',
    siteName: 'Ruman Accounting Intelligence',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        width: 1800,
        height: 1600,
        alt: 'About Ruman Accounting – Your Partner in Family Accounting & Smart Financial Intelligence.',
      },
    ],
  },
  alternates: {
    canonical: 'https://rumanaccounting.com/about',
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
};


export default function AboutStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="googlebot" content="follow, index" />
        </Head>
        <header id="header">
          <Link href="/contact">
            <div className="relative">
              <div className="w-[60px] h-[60px] rounded-full fixed bottom-5 right-5  text-center flex justify-center items-center cursor-pointer bg-blue hover:bg-black text-white z-50 ">
                <FaPhone className="text-white rotate-90 text-xl" />
              </div>
            </div>
          </Link>
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem link="About Us" img="/images/banner/about.png" title="About Us" desc="" />
          <AboutTwo />
          <AboutFive />
          <CaseStudyThree data={caseStudyData} />
          <FormRequestTwo classname="style-two style-about" bgImg="/images/banner/form.png" />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  )
}