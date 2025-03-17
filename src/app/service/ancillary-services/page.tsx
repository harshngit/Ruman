
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import Footer from "@/components/Footer/Footer"
import ServiceExtra from "@/components/ServiceExtra/ServiceExtra"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"
import { GoogleAnalytics } from "@next/third-parties/google"
import Head from "next/head"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Comprehensive Ancillary Services for Your Financial Needs | Ruman Accounting Services",
    description: "Streamline your business with Ruman Accounting’s ancillary services. From bookkeeping to compliance, we simplify operations for seamless growth.",
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
        title: 'Comprehensive Ancillary Services for Your Financial Needs | Ruman Accounting Services',
        description: 'Streamline your business with Ruman Accounting’s ancillary services. From bookkeeping to compliance, we simplify operations for seamless growth.',
        url: 'https://rumanaccounting.com/service/ancillary-services/',
        siteName: 'Ruman Accounting Services',
        images: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'Ruman Accounting – Your Partner in Family Accounting & Smart Financial Intelligence.',
            },
        ],
    },
    alternates: {
        canonical: 'https://rumanaccounting.com/service/ancillary-services/',
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
}


export default function ServiceStyleTwo() {
    return (
        <>
            <GoogleAnalytics gaId="G-CZ1CKKJML1" />
            <div className="overflow-x-hidden">
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