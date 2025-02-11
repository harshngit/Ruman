import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import ServiceAboutOne from "@/components/Section/Service/ServiceAboutOne"
import serviceData from '@/data/service.json'
import OurTeam from "@/components/Section/OurTeam/OurTeam"
import PartnerAbout from "@/components/Section/Partner/PartnerAbout"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import FormRequestFour from "@/components/Section/FormRequest/FormRequestFour"
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo"
import FaqsOne from "@/components/Section/FAQs/FaqsOne"
import ServiceTwo from "@/components/Section/Service/ServiceTwo"
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne"
import caseStudyData from '@/data/case-study.json'
import CaseStudyThree from "@/components/Section/CaseStudy/CaseStudyThree"
import AboutSix from "@/components/Section/About/AboutSix"
import AboutFive from "@/components/Section/About/AboutFive"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"

export const metadata = {
  title: "About Us | Ruman Accounting Intelligence – Expert Family Accounting & Smart Financial Solutions",
  description: "Learn more about Ruman Accounting Intelligence, our expertise in family accounting, and how we provide smart financial solutions.",
  keywords: [
    'About Ruman Accounting Intelligence', 'Accounting Intelligence', 'Family Accounting',
    'Financial Solutions', 'Expert Accountants', 'Accounting in Mumbai',
    'Accounting in Pune', 'Accounting in Thane', 'Accounting for Startups'
  ],
  verification: {
    google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
  },
  openGraph: {
    type: "website",
    title: 'About Us | Ruman Accounting Intelligence – Expert Family Accounting & Smart Financial Solutions',
    description: 'Discover the vision, mission, and expertise behind Ruman Accounting Intelligence, your trusted financial partner.',
    url: 'https://rumanaccounting.com/about',
    siteName: 'Ruman Accounting Intelligence – About Us',
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

          {/* <CaseStudyOne data={caseStudyData} /> */}
          <CaseStudyThree data={caseStudyData} />
          {/* <ServiceAboutOne data={serviceData} /> */}
          <FormRequestTwo classname="style-two style-about" bgImg="/images/banner/form.png" />
          {/* <FaqsOne /> */}
          {/* <ServiceTwo /> */}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  )
}