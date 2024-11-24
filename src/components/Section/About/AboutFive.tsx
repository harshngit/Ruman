import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const AboutFive = () => {
    return (
        <div className="about-five lg:my-[40px] px-4 lg:px-16 sm:my-16 my-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-x-12 gap-y-6">
                    <div className="lg:order-1 order-2">
                        <div className="text-about">

                            <div className="heading3 mt-6">Our Service</div>
                            <div className="body3 text-secondary mt-5">We offer end-to-end solutions from accounting and tax compliances till the finalization of accounts as audit-ready.</div>
                            <div className="body3 text-secondary mt-5">At Company, we believe a business that periodically monitors its finances and makes informed decisions would grow and sustain despite the market volatility. Our highly qualified professionals with domain cross-functional experience and up-to-date knowledge in multi-industry accounting standards and Indian tax compliance design unique methodologies, delivery framework, and report formats. Hence, our accounting solutions and tax-related services bring merits, scale growth and help the business prosper.</div>

                        </div>
                    </div>
                    <div className="lg:order-2 order-1">
                        <div className="bg-img w-full">
                            <Image width={5000} height={5000} className="w-full rounded-md shadow-lg" src="/images/component/Serviceimgabout.png" alt="" />
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive