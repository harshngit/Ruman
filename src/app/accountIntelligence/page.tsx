import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem'
import Footer from '@/components/Footer/Footer'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import KeyMetrics from '@/components/ACCInt/KeyMetrics'
import Benifits from '@/components/ACCInt/Benifits'
export default function AccountInt() {
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
					<BreadcrumbItem
						link="Account Intelligence"
						img="/images/banner/accc_banner.png"
						title="Account Intelligence"
						desc=""
					/>
					<KeyMetrics />
					<Benifits />
				</main>
				<footer id="footer">
					<Footer />
				</footer>
			</div>
		</>
	)
}

