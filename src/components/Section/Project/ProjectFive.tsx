import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import Image from 'next/image';

const ProjectFive = () => {
	return (
		<div className=" lg:mt-[100px] sm:mt-16 mt-10">
			<div className="container">
				<div className="heading text-center">
					<div className="text-sub-heading2 text-white py-2 px-4 bg-[#021a43cf] rounded-lg inline-block">About Us</div>
					<div className="heading3 text-center mt-4">Empowering Businesses with Expert  <br className='max-md:hidden' /> Accounting Solutions</div>
				</div>
				<div className="list-project lg:mt-10 mt-7">
					<div className="py-4 lg:py-8">
						<div className="grid lg:grid-cols-2 lg:gridi-cols-1 items-center my-4 mx-2 lg:my-12 lg:mx-12 justify-between gap-x-12 gap-y-12">
							<div className="col-span-1">
								<div className="bg-img w-full">
									<Image width={5000} height={5000} className="w-full rounded-lg shadow-md" src="/images/component/aboutHome.png" alt="" />
								</div>
							</div>
							<div className="col-span-1">
								<div className="text-infor">
									<div className="heading4">India’s Certified, Industry-Focused, Custom Accounting Consultation and Tax Services</div>
									<div className=" text-secondary mt-4">We provide a wide range of accounting and financial services, including Accounts Payable (AP), Accounts Receivable (AR), payroll processing, tax processing, and corporate services. Our solutions comply with the latest regulations and standards and cater to diverse industries such as automotive, construction, IT, transport, pharmaceuticals, logistics, commercial and supply services, eCommerce, and retail.</div>
									<div className="button-block mt-8">
										<Link className="button-main hover:bg-black text-white bg-[#021a43cf] inline-flex py-3 px-7 rounded-lg items-center gap-2" aria-label="Learn more about Ruman Accounting Services" href="/service">
											<Icon.ArrowRight weight='bold' className="text-white text-[1.1rem]" />
											<span>Read More</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="py-4 lg:py-8">
						<div className="grid lg:grid-cols-2 lg:gridi-cols-1 items-center my-4 mx-2 lg:mt-12 lg:mx-12 justify-between gap-x-12 gap-y-12">
							<div className="col-span-1 order-2 lg:order-1">
								<div className="text-infor">
									<h1 className='text-surface text-[5px]'>Ruman Accounting Service</h1>
									<div className="heading4">Accounting Solutions and Services Tailor-made for Client Requirement </div>
									<div className=" text-secondary mt-4">The company has hands-on experience in delivering systemized accounting and financial services, tax registration, and return filing for Startups, SMEs, and MNCs in India. Our specialized services include record digitization and employee training for accounting solutions such as Tally, QuickBooks, Zoho, Sage, and more.</div>
									<div className="button-block mt-8">
										<Link className="button-main hover:bg-black text-white bg-[#021a43cf] inline-flex py-3 px-7 rounded-lg items-center gap-2" aria-label="Learn more about Ruman Accounting Services" href="/service">
											<Icon.ArrowRight weight='bold' className="text-white text-xl" />
											<span>Read More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-span-1 order-1 lg:order-2">
								<div className="bg-img w-full">
									<Image width={5000} height={5000} className="w-full rounded-lg shadow-md" src="/images/component/aboutHome1.png" alt="" />
								</div>
								{/* <div className="sub-img absolute -bottom-2 right-1 rotate-[10deg]">
                                    <Image width={5000} height={5000} className='w-[110px]' src="/images/component/sub-about5-left.png" alt="" />
                                    <Image width={5000} height={5000} className='w-[110px]' src="/images/component/sub-about5.png" alt="" />
                                </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectFive