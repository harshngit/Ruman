import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
import ServiceTwo from "@/components/Section/Service/ServiceTwo";
import Footer from "@/components/Footer/Footer";
import ProjectFive from "@/components/Section/Project/ProjectFive";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import TestimonialTwo from "@/components/Section/Testimonial/TestimonialTwo";
import PartnerSix from "@/components/Section/Partner/PartnerSix";
import ServiceBanner from "@/components/Section/PaymentGateway/ServiceBanner"
import HomeBanner from "@/components/Home/HomeBanner";


export default function Home() {
  return (
    <>

      <div className=" relative">
        <Link href="/contact">
          <div className="relative">
            <div className="w-[60px] h-[60px] rounded-full fixed bottom-5 right-5  text-center flex justify-center items-center cursor-pointer bg-blue hover:bg-black text-white z-50 ">
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
