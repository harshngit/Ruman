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
                            <div className="body3 text-secondary mt-5">We provide end-to-end solutions, from accounting and tax compliance to the finalization of audit-ready accounts.</div>
                            <div className="body3 text-secondary mt-5">At Company, we believe that businesses that regularly monitor their finances and make informed decisions can thrive despite market volatility. Our highly qualified professionals bring cross-functional expertise and up-to-date knowledge of multi-industry accounting standards and Indian tax compliance. We design tailored methodologies, delivery frameworks, and report formats, ensuring our accounting solutions and tax services drive growth, efficiency, and long-term success</div>

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