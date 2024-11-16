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

export default function ServiceStyleOne() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">

                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Our Services" img="/images/banner/ServiceBanner.png" title="Our Services" desc="Expand your knowledge and skills in cryptocurrency trading through our educational resources." />
                    <div className="mt-[100px]">
                        <div className="container">
                            <div className="flex gap-8 max-lg:flex-col-reverse">
                                <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                                    <div className="heading3 text-3xl">Full-Range Expert Accounting Services and Tax Advisory in, INDIA</div>
                                    <div className="body2 text-secondary">Financial reporting and accounting services have changed over the years due to the transformation in processing, evolved standards, tax changes, and digital transformation so does the financial advisory. Company offers highly professional accounting services by deploying experienced accountants with high knowledge in current accounting trends and proper industry-wise training in each accounting domain, and tax advisory with compliance to accounting standards in INDIA. </div>
                                    <div className="button-block">
                                        <a className="button-main hover:bg-black text-white bg-blue text-button inline-block py-3 px-9 rounded-full" href="/contact">Contact Us</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-img w-full overflow-hidden rounded-xl">
                                        <Image width={5000} height={5000} className="w-full h-full block" src="/images/component/serviceimg.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceOne data={serviceData} />
                    <FormRequestTwo classname="style-two style-about" bgImg="/images/banner/form.png" />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}