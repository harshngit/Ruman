import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFive from "@/components/Section/Service/ServiceFive"
import serviceData from '@/data/service.json'
import Partner from "@/components/Section/Partner/PartnerAbout"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import Image from "next/image"
import ServiceOne from "@/components/Section/Service/ServiceOne"
import ServiceTwo from "@/components/Section/Service/ServiceTwo"
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"

export default function ServiceStyleOne() {
    return (
        <>
            <div className="overflow-x-hidden relative">
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
                <main className="content">
                    <BreadcrumbItem link="Our Services" img="/images/banner/service.png" title="Our Services" desc="" />
                    <div className="lg:mt-[100px] my-16 mx-4 lg:mx-16">
                        <div className="container">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ">
                                <div className="">
                                    <div className="heading3 text-[1.8rem] lg:text-[2.2rem]">Full-Range Expert Accounting Services and Tax Advisory in, INDIA</div>
                                    <div className="lg:text-[.9rem] text-[.8rem] my-3 text-secondary">Financial reporting and accounting services have changed over the years due to the transformation in processing, evolved standards, tax changes, and digital transformation so does the financial advisory. Company offers highly professional accounting services by deploying experienced accountants with high knowledge in current accounting trends and proper industry-wise training in each accounting domain, and tax advisory with compliance to accounting standards in INDIA. </div>
                                    <div className="button-block">
                                        <a className="button-main hover:bg-black text-white bg-blue text-button inline-block py-3 px-9 rounded-full" href="/contact">Contact Us</a>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-img w-full overflow-hidden rounded-xl">
                                        <Image width={5000} height={5000} className="w-full h-full block" src="/images/component/servicecontent.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceOne data={serviceData} />
                    {/* <FormRequestTwo classname="style-two style-about" bgImg="/images/banner/form.png" /> */}
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}