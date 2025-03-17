import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem'
import Footer from '@/components/Footer/Footer'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import KeyMetrics from '@/components/ACCInt/KeyMetrics'
import Benifits from '@/components/ACCInt/Benifits'

export const metadata = {
	title: "Account Intelligence | Ruman Accounting Service – Smart Financial & Business Insights",
	description: "Explore Ruman Accounting Intelligence's smart financial solutions, offering expert insights into financial planning and business accounting.",
	keywords: ['Ruman Accounting Services', 'Ruman Accounting Intelligence', 'Family Accounting', 'Accounting Intelligence', 'Accouting Services', 'Accounting', 'Accounting in Mumbai', ' Accounting in Pune', "Accounting in Thane", 'Accounting for startups'],
	openGraph: {
		type: "website",
		title: 'Account Intelligence | Ruman Accounting – Smart Financial & Business Insights',
		description: 'Discover the power of data-driven accounting with Ruman Accounting Intelligence. Transform financial management with smart insights.',
		url: 'https://rumanaccounting.com/account-intelligence',
		siteName: 'Ruman Accounting Intelligence – Account Intelligence',
		images: [
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
				width: 800,
				height: 600,
			},
		],
	},
	alternates: {
		canonical: 'https://rumanaccounting.com/account-intelligence',
	},
	icons: {
		icon: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
	},
};


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

