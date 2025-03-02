"use client"
import { useInView } from 'framer-motion';
import React from 'react'
import { useRef } from 'react';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import Image from 'next/image';

const ServiceBanner = () => {


	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className=" bg-surface lg:py-12 py-4 px-4 lg:px-12 style-second" ref={ref}>
			<div className=" bg-gray-200">
				<div className="content  grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-2">

					<div className="">
						<div
							className="right "
							style={{
								transform: isInView ? "none" : "translateX(60px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
							}}
						>
							<div className="bg-img">
								<Image width={5000} height={5000} className="w-full rounded-[20px]" src="/images/component/serviceHome.png" alt="aboutHome" />
							</div>

						</div>
					</div>
					<div className="">
						<h3 className="heading3 leading-[2.3rem] text-[1.8rem]">Accounting, Tax & Advisory Services - Financial Accounting Firm in India</h3>
						<div className=" text-secondary text-[.9rem] ">Ruman Accounting Services LLP is a Mumbai-based accounting firm and has a network of well-qualified and experienced accounting professionals with strong domain expertise and up-to-date knowledge in the current and regional accounting trends, tax regulations, and technology solutions to provide both offline and online accounting solutions in a custom manner.  </div>
						<div className='text-[#021a43cf] mt-2 text-[1.2rem] font-semibold'>Our Core Service</div>
						<div className="list-service my-2">
							<div className="service-item flex items-center">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
								<div className="text-button ml-3 ">At site & Online accounting & Book Keeping</div>
							</div>
							<div className="service-item flex items-center mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
								<div className="text-button ml-3 ">Accounting for Start-ups</div>
							</div>
							{/* <div className="service-item flex items-center mt-6">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3 ">End to End solution from day-to-day accounting to audit ready finalization of accounts with all tax compliances.</div>
                            </div> */}
							<div className="service-item flex items-center mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
								<div className="text-button ml-3 ">Implementation of Accounting System </div>
							</div>
							<div className="service-item flex items-center mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px]  py-1 px-1 rounded-full text-[1.5rem]" />
								<div className="text-button ml-3">Tax services</div>
							</div>
							<div className="service-item flex items-center mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
								<div className="text-button ml-3">MIS</div>
							</div>
						</div>
						<div className="button-block mt-5">
							<Link className="button-main inline-flex justify-center items-center hover:bg-black text-white bg-[#021a43cf] rounded-md gap-2" aria-label="Learn more about Ruman Accounting Services" href="/service">
								<Icon.ArrowRight weight='bold' className="text-white text-xl" />
								Read More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceBanner