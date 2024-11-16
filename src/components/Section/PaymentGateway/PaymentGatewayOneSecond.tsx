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
        <section className="payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10" ref={ref}>
            <div className="container">
                <div className="content flex items-center gap-8 mb-2">

                    <div className="w-11/12 xl:w-7/12">
                        <div
                            className="right pl-10"
                            style={{
                                transform: isInView ? "none" : "translateX(60px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                            }}
                        >
                            <div className="bg-img">
                                <Image width={5000} height={5000} className="w-full" src="/images/component/6.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-5/12 flex flex-col gap-y-6">
                        <h3 className="heading3 text-[30px]">Pragmatic Accounting and Bookkeeping Services and Seamless Digital Migration</h3>
                        <div className="body2 text-secondary">Our consultants are resourceful and experienced in handling both online and on-site (in-Premise) accounting & bookkeeping and other finance and accounting services in the India and our canned approach ensures cost-effective services and on-time work delivery with 100% client satisfaction. </div>
                        <div className="list-service">
                            <div className="service-item flex items-center">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Offline and online accounting </div>
                            </div>
                            <div className="service-item flex items-center ">
                                <Icon.Check weight="bold" className="text-blue text-4xl" />
                                <div className="text-button ml-3 mt-5">End to End solution from day-to-day accounting to audit ready finalization of accounts with all tax compliances.</div>
                            </div>
                            <div className="service-item flex items-center mt-3">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Family Office Accounting</div>
                            </div>
                            <div className="service-item flex items-center mt-3">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Import Purchase Costing</div>
                            </div>
                            <div className="service-item flex items-center mt-3">
                                <Icon.Check weight="bold" className="text-blue text-2xl" />
                                <div className="text-button ml-3">Digitalization of accounting records</div>
                            </div>
                        </div>
                        <div className="button-block">
                            <Link className="button-main inline-flex justify-center items-center hover:bg-black text-white bg-blue rounded-md gap-2" href="/service">
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