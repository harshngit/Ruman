import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import Image from 'next/image';

const ProjectFive = () => {
    return (
        <div className="project-five lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="heading text-center">
                    <div className="text-sub-heading2 text-white py-2 px-4 bg-blue rounded-lg inline-block">About Us</div>
                    <div className="heading3 text-center mt-4">Empowering Businesses with Expert  <br className='max-md:hidden' /> Accounting Solutions</div>
                </div>
                <div className="list-project lg:mt-10 mt-7">
                    <div className="project-above">
                        <div className="flex max-lg:flex-col items-center justify-between gap-y-8">
                            <div className="w-full lg:w-1/2 sm:w-2/3 lg:pr-20">
                                <div className="bg-img w-full">
                                    <Image width={5000} height={5000} className="w-full rounded-lg shadow-md" src="/images/component/aboutHome.png" alt="" />
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <div className="text-infor">
                                    <div className="heading4">India’s Certified, Industry-Focused, Custom Accounting Consultation and Tax Services</div>
                                    <div className="body2 text-secondary mt-4">We offer a spectrum of accounting and financial services not limited to Accounts Payable (AP), Accounts Receivable (AR), and payroll processing but also tax processing and related corporate services in compliance with new regulations and standards across many industry verticals, including automotive, construction, IT, transport, pharma, logistics, commercial and supply service, eCommerce, retail to name a few</div>
                                    <div className="button-block mt-8">
                                        <Link className="button-main hover:bg-black text-white bg-blue inline-flex py-3 px-7 rounded-lg items-center gap-2" href="/about">
                                            <Icon.ArrowRight weight='bold' className="text-white text-xl" />
                                            <span>About Us</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-below lg:mt-[100px] sm:mt-16 mt-10">
                        <div className="flex max-lg:flex-col-reverse items-center justify-between gap-y-8">
                            <div className="w-full lg:w-5/12">
                                <div className="text-infor">
                                    <div className="heading4">Accounting Solutions and Services Tailor-made for Client Requirement </div>
                                    <div className="body2 text-secondary mt-4">Company has hands-on experience in offering systemized accounting & financial services, tax registration, and returns filing to Startups, SMEs, and MNCs in India. Our special services include record digitization and employee training for accounting solutions like Tally, Quickbook, Zoho, Sage, etc.,</div>
                                    <div className="button-block mt-8">
                                        <Link className="button-main hover:bg-black text-white bg-blue inline-flex py-3 px-7 rounded-lg items-center gap-2" href="/about">
                                            <Icon.ArrowRight weight='bold' className="text-white text-xl" />
                                            <span>About Us</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 sm:w-2/3 relative">
                                <div className="bg-img w-full">
                                    <Image width={5000} height={5000} className="w-full rounded-lg shadow-md" src="/images/component/aboutHome1.png" alt="" />
                                </div>
                                <div className="sub-img absolute -bottom-2 right-1 rotate-[10deg]">
                                    <Image width={5000} height={5000} className='w-[110px]' src="/images/component/sub-about5-left.png" alt="" />
                                    <Image width={5000} height={5000} className='w-[110px]' src="/images/component/sub-about5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectFive