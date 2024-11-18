import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import ServiceOne from "@/components/Section/Service/ServiceOne";
import serviceData from '@/data/service.json'
import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst";
import CaseStudyOne from "@/components/Section/CaseStudy/CaseStudyOne";
import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
import FaqsOne from "@/components/Section/FAQs/FaqsOne";
import FormRequestOne from "@/components/Section/FormRequest/FormRequestOne";
import blogData from '@/data/blog.json'
import BlogOne from "@/components/Section/Blog/BlogOne";
import ServiceTwo from "@/components/Section/Service/ServiceTwo";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import Footer from "@/components/Footer/Footer";
import ProjectFive from "@/components/Section/Project/ProjectFive";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="overflow-x-hidden relative">
        <Link href="/contact">
          <div className="relative">
            <div className="w-[60px] h-[60px] rounded-full fixed bottom-5 right-5  text-center flex justify-center items-center cursor-pointer bg-blue hover:bg-black text-white z-50 ">
              <FaPhone className="text-white text-xl" />
            </div>
          </div>
        </Link>
        <header id="header">
          {/* <TopNavOne /> */}
          <MenuOne />
        </header>
        <main className="content ">

          <SliderOne />
          <ServiceOne data={serviceData} />
          {/* <PaymentGatewayOneFirst /> */}
          <ProjectFive />
          {/* <CaseStudyOne /> */}
          <PaymentGatewayOneSecond />
          <ServiceTwo />
          {/* <FaqsOne /> */}
          {/* <FormRequestOne /> */}
          {/* <BlogOne data={blogData} /> */}
          <PartnerOne classname='bg-blue sm:mt-0 mt-0' />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
