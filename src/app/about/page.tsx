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

export default function AboutStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem link="About Us" img="/images/banner/AboutBanner.png" title="About Us" desc="ruman Accounting Services LLP, an accounting, tax services, and advisory firm, has operated in Mumbai and across India since 1996, offering outsourced services for corporates and high-net-worth individuals." />
          <AboutTwo />
          <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" />
          <ServiceAboutOne data={serviceData} />
          <FormRequestTwo classname="style-two style-about" bgImg="/images/banner/form.png" />
          <FaqsOne />
          <ServiceTwo />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  )
}