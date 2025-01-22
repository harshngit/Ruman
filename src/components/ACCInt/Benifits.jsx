'use client'

import { useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { useRef } from 'react';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Benifits = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section className="  lg:py-8 py-4 px-4 lg:px-12 style-second lg:mt-28" ref={ref}>
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
								<Image width={5000} height={5000} className="w-full rounded-[20px]" src="/images/keymetrics/acc_.png" alt="" />
							</div>

						</div>
					</div>
					<div className="">
						<h3 className="heading3 leading-[2.3rem] text-[1.8rem]">Benefits of accounting intelligence </h3>
						<div className=" text-secondary text-[.9rem] ">By integrating these technologies, Accounting Intelligence enhances the efficiency, accuracy, and strategic value of accounting functions </div>
						<div className="list-service my-6">
							<div className="service-item flex items-start">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white lg:w-[20px] lg:h-[20px] w-[40px] h-[30px] lg:py-1 py-1 lg:px-1 px-1 rounded-full lg:text-[2rem] text-[2rem]" />
								<div className="text-button ml-3 ">Improved accuracy and efficiency: <span className='text-[15px] font-medium'>
									AI can help accountants complete tasks more quickly and accurately.
								</span> </div>
							</div>
							<div className="service-item flex items-start mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white lg:w-[20px] lg:h-[20px] w-[40px] h-[30px] lg:py-1 py-1 lg:px-1 px-1 rounded-full lg:text-[2rem] text-[2rem]" />
								<div className="text-button ml-3 ">Reduced costs: <span className='text-[15px] font-medium'>
									AI can help accounting firms reduce costs by automating tasks and identifying areas for improvement.
								</span> </div>
							</div>
							{/* <div className="service-item flex items-center mt-6">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3 ">End to End solution from day-to-day accounting to audit ready finalization of accounts with all tax compliances.</div>
                            </div> */}
							<div className="service-item flex items-start mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white lg:w-[20px] lg:h-[20px] w-[40px] h-[30px] lg:py-1 py-1 lg:px-1 px-1 rounded-full lg:text-[2rem] text-[2rem]" />
								<div className="text-button ml-3 ">Increased productivity: <span className='text-[15px] font-medium'>
									AI can free up accountant's time so they can focus on more strategic work.
								</span> </div>
							</div>
							<div className="service-item flex items-start mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white lg:w-[20px] lg:h-[20px] w-[40px] h-[30px] lg:py-1 py-1 lg:px-1 px-1 rounded-full lg:text-[2rem] text-[2rem]" />
								<div className="text-button ml-3 ">Better decision-making: <span className='text-[15px] font-medium'>
									AI can help accountants make better decisions about investments, cost-cutting measures, and other financial strategies.
								</span> </div>
							</div>
							<div className="service-item flex items-start mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white lg:w-[20px] lg:h-[20px] w-[40px] h-[30px] lg:py-1 py-1 lg:px-1 px-1 rounded-full lg:text-[2rem] text-[2rem]" />
								<div className="text-button ml-3 ">Account-based intelligence : <span className='text-[15px] font-medium'>
									Uses AI to analyze first and third-party data to help sales and marketing teams understand accounts and leads.
								</span> </div>
							</div>
							<div className="service-item flex items-start mt-4">
								<Icon.Check weight="bold" className="bg-[#021a43cf] text-white lg:w-[20px] lg:h-[20px] w-[40px] h-[30px] lg:py-1 py-1 lg:px-1 px-1 rounded-full lg:text-[2rem] text-[2rem]" />
								<div className="text-button ml-3 ">Information management : <span className='text-[15px] font-medium'>
									AI-powered software can automate data entry tasks and extract information from documents.
								</span> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Benifits