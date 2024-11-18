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
export default function AboutStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <header id="header">
          <Link href="/contact">
            <div className="relative">
              <div className="w-[60px] h-[60px] rounded-full fixed bottom-5 right-5  text-center flex justify-center items-center cursor-pointer bg-blue hover:bg-black text-white z-50 ">
                <FaPhone className="text-white text-xl" />
              </div>
            </div>
          </Link>
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem link="About Us" img="/images/banner/about.png" title="About Us" desc="Ruman Accounting Services LLP, an accounting, tax services, and advisory firm, has operated in Mumbai and across India since 1996, offering outsourced services for corporates and high-net-worth individuals." />
          <AboutTwo />
          <AboutFive />

          {/* <CaseStudyOne data={caseStudyData} /> */}
          <CaseStudyThree data={caseStudyData} />
          <ServiceAboutOne data={serviceData} />
          <FormRequestTwo classname="style-two style-about" bgImg="/images/banner/form.png" />
          {/* <FaqsOne /> */}
          <ServiceTwo />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  )
}