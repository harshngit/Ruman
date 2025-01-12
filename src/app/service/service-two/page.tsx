import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFilter from "@/components/Section/Service/ServiceFilter"
import serviceData from '@/data/service.json'
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import ServiceExtra from "@/components/ServiceExtra/ServiceExtra"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"

export default function ServiceStyleTwo() {
    return (
        <>
            <div className="overflow-x-hidden">
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
                    <BreadcrumbItem link="Ancillary Services" img="/images/banner/extraService.png" title="Ancillary Services" desc="We offer payroll management, tax filing, compliance, financial advisory, audit support, secretarial services, and data management to enhance core accounting functions.." />

                    <ServiceExtra />

                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    )
}