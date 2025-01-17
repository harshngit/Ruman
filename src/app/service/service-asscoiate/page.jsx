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

export default function ServiceStyleThree() {
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
					<BreadcrumbItem link="Our Services" img="/images/banner/associateService.png" title="Our Services" desc="Expand your knowledge and skills in cryptocurrency trading through our educational resources." />
					<ServiceTwo />
				</main>
				<footer id="footer">
					<Footer />
				</footer>
			</div>
		</>
	)
}