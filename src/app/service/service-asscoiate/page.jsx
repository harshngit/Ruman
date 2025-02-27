import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFilter from "@/components/Section/Service/ServiceFilter"
import serviceData from '@/data/service.json'
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import ServiceTwo from "@/components/Section/Service/ServiceTwo"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata = {
	title: "Our Associates |Ruman Accounting – Family Experts & Smart Financial Solutions",
	description: "Meet our trusted associates and partners who contribute to Ruman Accounting Intelligence’s excellence in financial and business solutions.",
	keywords: [
		'Accounting Associates', 'Financial Partners', 'Business Collaborations',
		'Ruman Accounting Partners', 'Corporate Partnerships', 'Accounting Networks'
	],
	verification: {
		google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
	},
	openGraph: {
		type: "website",
		title: 'Our Associates | Ruman Accounting Intelligence – Trusted Partnerships & Collaborations',
		description: 'Explore the network of trusted partners and associates working with Ruman Accounting Intelligence.',
		url: 'https://rumanaccounting.com/service/service-asscoiate',
		siteName: 'Ruman Accounting Intelligence – Our Associates',
		images: [
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
				width: 800,
				height: 600,
			},
		],
	},
	alternates: {
		canonical: 'https://rumanaccounting.com/service/service-asscoiate',
	},
	icons: {
		icon: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
	},
};


export default function ServiceStyleThree() {
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
					<BreadcrumbItem link="Associate Services" img="/images/banner/associateService.png" title="Associate Services" desc="Managing accounting and financial reporting can be daunting, especially for businesses or individuals handling a high volume of transactions. Frequent changes in regulations, tax standards, and technological advancements add to the complexity" />
					<ServiceTwo />
				</main>
				<footer id="footer">
					<Footer />
				</footer>
			</div>
		</>
	)
}