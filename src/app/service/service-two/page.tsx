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
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata = {
    title: "Ancillary Services | Ruman Accounting Intelligence – Comprehensive Financial Solutions",
    description: "Get additional financial and business support services from Ruman Accounting Intelligence. We provide holistic solutions beyond accounting.",
    keywords: [
        'Ancillary Services Ruman', , 'Financial Planning',
        'Corporate Solutions', 'Legal Compliance', 'Ruman Accounting Intelligence',
        'Business Growth Solutions', 'Accounting Intelligence'
    ],
    verification: {
        google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
    },
    openGraph: {
        type: "website",
        title: 'Ancillary Services | Ruman Accounting Intelligence – Comprehensive Financial Solutions',
        description: 'Discover our ancillary financial services that go beyond accounting to help businesses and individuals grow.',
        url: 'https://rumanaccounting.com/service/service-two',
        siteName: 'Ruman Accounting Intelligence – Ancillary Services',
        images: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
                width: 800,
                height: 600,
            },
        ],
    },
    alternates: {
        canonical: 'https://rumanaccounting.com/ancillary',
    },
    icons: {
        icon: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
    },
};


export default function ServiceStyleTwo() {
    return (
        <>
            <GoogleAnalytics gaId="G-CZ1CKKJML1" />
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