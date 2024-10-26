'use client'

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react";
import { useInView } from "framer-motion";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PaymentGatewayOneFirst = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-[#d6e5ff] relative">
            <div className="bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0">
                <Image className="mt-12 w-full object-cover" width={5000} height={5000} src="/images/component/about.png" alt="" />
            </div>
            <div className="container w-full lg:py-[50px] pt-10 py-16">
                <div className="w-full flex items-center lg:justify-end" ref={ref}>
                    <div className="payment-infor lg:w-1/2 xl:pl-20 lg:pl-10"
                        style={{
                            transform: isInView ? "none" : "translateX(60px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                        }}
                    >
                        <div className="heading flex items-center gap-4 max-lg:flex-wrap">

                            <div className="text-button text-secondary text-2xl">About Us
                            </div>
                        </div>
                        <div className="text lg:mt-5 mt-5">
                            <h3 className="heading3 text-[20px] leading-6">India’s Certified, Industry-Focused, Custom Accounting Consultation and Tax Services </h3>
                            <div className="body3 text-secondary lg:mt-6 mt-4">We offer a spectrum of accounting and financial services not limited to Accounts Payable (AP), Accounts Receivable (AR), and payroll processing but also tax processing and related corporate services in compliance with new regulations and standards across many industry verticals, including automotive, construction, IT, transport, pharma, logistics, commercial and supply service, eCommerce, retail to name a few</div>
                        </div>
                        <div className="text lg:mt-5 mt-5">
                            <h3 className="heading3 text-[20px] leading-6">Accounting Solutions and Services Tailor-made for Client Requirement </h3>
                            <div className="body3 text-secondary lg:mt-6 mt-4">Company has hands-on experience in offering systemized accounting & financial services, tax registration, and returns filing to Startups, SMEs, and MNCs in India. Our special services include record digitization and employee training for accounting solutions like Tally, Quickbook, Zoho, Sage, etc.,</div>
                        </div>
                        <div className="button-block flex items-center max-sm:flex-wrap sm:gap-6 gap-3 lg:mt-12 mt-8 w-fit">
                            <Link className="button-main box-shadow hover:bg-black text-white bg-blue whitespace-nowrap rounded-full" href="/about">Get started</Link>
                            <div className="relative right-12 top-10">

                                <Image src="/images/component/gateway1-dot.png" className=" w-[100px] h-auto top-1/2 -translate-y-1/2" width={4000} height={4000} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PaymentGatewayOneFirst