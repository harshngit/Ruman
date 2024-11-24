'use client'

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react";
import { useInView } from "framer-motion";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PaymentGatewayOneSecond = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className=" bg-surface lg:py-8 py-4 px-4 lg:px-12 style-second lg:mt-[100px]" ref={ref}>
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
                                <Image width={5000} height={5000} className="w-full rounded-[20px]" src="/images/component/pragmatic.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <h3 className="heading3 leading-[2.3rem] text-[1.8rem]">Pragmatic Accounting and Bookkeeping Services and Seamless Digital Migration</h3>
                        <div className=" text-secondary text-[.9rem] ">Our consultants are resourceful and experienced in handling both online and on-site (in-Premise) accounting & bookkeeping and other finance and accounting services in the India and our canned approach ensures cost-effective services and on-time work delivery with 100% client satisfaction. </div>
                        <div className="list-service my-6">
                            <div className="service-item flex items-center">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3 ">Offline and online accounting </div>
                            </div>
                            <div className="service-item flex items-center mt-4">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3 ">Comprehensive accounting to audit with tax compliance.</div>
                            </div>
                            {/* <div className="service-item flex items-center mt-6">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3 ">End to End solution from day-to-day accounting to audit ready finalization of accounts with all tax compliances.</div>
                            </div> */}
                            <div className="service-item flex items-center mt-4">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3 ">Family Office Accounting</div>
                            </div>
                            <div className="service-item flex items-center mt-4">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px]  py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3">Import Purchase Costing</div>
                            </div>
                            <div className="service-item flex items-center mt-4">
                                <Icon.Check weight="bold" className="bg-[#021a43cf] text-white w-[20px] h-[20px] py-1 px-1 rounded-full text-[1.5rem]" />
                                <div className="text-button ml-3">Digitalization of accounting records</div>
                            </div>
                        </div>
                        <div className="button-block">
                            <Link className="button-main inline-flex justify-center items-center hover:bg-black text-white bg-[#021a43cf] rounded-md gap-2" href="/service">
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
export default PaymentGatewayOneSecond