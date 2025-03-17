
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import Footer from "@/components/Footer/Footer"
import ServiceTwo from "@/components/Section/Service/ServiceTwo"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata = {
	title: "Expert Associate Services for Smarter Business Solutions - Ruman Accounting Service",
	description: "Unlock your business potential with Ruman Accounting’s associate services. From financial consulting to compliance support, we provide tailored solutions to drive efficiency and growth..",
	keywords: ['Ruman Accounting Services', 'Ruman Accounting Intelligence', 'Family Accounting', 'Accounting Intelligence', 'Accouting Services', 'Accounting', 'Accounting in Mumbai', ' Accounting in Pune', "Accounting in Thane", 'Accounting for startups'],
	// verification: {
	// 	google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
	// },
	openGraph: {
		type: "website",
		title: 'Expert Associate Services for Smarter Business Solutions - Ruman Accounting Service',
		description: 'Unlock your business potential with Ruman Accounting’s associate services. From financial consulting to compliance support, we provide tailored solutions to drive efficiency and growth.',
		url: 'https://rumanaccounting.com/service/service-asscoiate',
		siteName: 'Ruman Accounting Service ',
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