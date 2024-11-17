'use client'

import { useState } from "react"
import Link from 'next/link'
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFilter from "@/components/Section/Service/ServiceFilter"
import serviceData from '@/data/service.json'
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import faqData from '@/data/faqs.json'
import Image from "next/image"

export default function ServiceStyleOne({ params: { slug } }: { params: { slug: string } }) {


    // const foundPost = serviceData.find(item => {
    //     return item.title.toLowerCase().replace(/ /g, '-') === slug
    // })

    const foundPost = serviceData.find(item => item.title.toLowerCase().replace(/ /g, '-') === slug);

    const [faq, setFaq] = useState<number | null>(1)

    const handleFaq = (id: number) => {
        setFaq(prevId => prevId === id ? null : id)
    }
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">

                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Our Services" title={foundPost?.title || 'Our Services'} desc={foundPost?.shortDesc || "Expand your knowledge and skills in cryptocurrency trading through our educational resources."} img={`/images/component/${foundPost?.banner}`} />
                    <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
                        <div className="container">
                            <div className="flex max-xl:flex-col gap-y-8">
                                <div className="w-full">
                                    <div className="content-para flex lg:flex-row flex-col justify-center items-center xl:pr-[80px]">
                                        <div className="w-full lg:w-1/2">
                                            <div className="heading3">{foundPost?.title}</div>
                                            {/* <div className="body2 text-secondary mt-4">{foundPost?.Description}</div> */}
                                            <div className="body2 text-secondary mt-4">{foundPost?.desc}</div>
                                        </div>
                                        <div className="w-full lg:w-1/2 bg-img mt-8 mb-8 flex justify-center items-center">
                                            <Image width={5000} height={5000} className="w-full h-full rounded-xl" src={`/images/component/${foundPost?.serviceimg}`} alt="" />
                                        </div>



                                        {/* <div className="list-question lg:mt-[60px] mt-8">
                                            <div className="heading6">Questions about service</div>
                                            {faqData.slice(0, 4).map(item => (
                                                <div
                                                    key={item.id}
                                                    className={`question-item hover-box-shadow pointer mt-5 px-7 rounded-lg border border-line cursor-pointer ${faq === item.id ? 'open' : ''}`}
                                                    onClick={() => handleFaq(item.id)}
                                                >
                                                    <div className="question-item-main flex items-center justify-between py-4 heading7">{item.title}
                                                        {faq === item.id ? (
                                                            <Icon.Minus weight="bold" className="text-xl" />
                                                        ) : (
                                                            <Icon.Plus weight="bold" className="text-xl" />
                                                        )}
                                                    </div>
                                                    <div className="content-question">
                                                        <div className="border-line w-full"></div>
                                                        <div className="body3 text-secondary pb-4">{item.desc}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div> */}
                                    </div>

                                    {foundPost?.Description && <div className="lg:mt-10 mt-5 flex justify-center lg:flex-row flex-col-reverse">
                                        <div className="w-full lg:w-1/2 bg-img mt-8 mb-8 flex justify-center items-center">
                                            <Image width={5000} height={5000} className="w-full h-full rounded-xl" src={`/images/component/${foundPost?.serviceimg}`} alt="" />
                                        </div>
                                        <div className="w-full lg:w-1/2 pl-5 pt-5 ">
                                            {/* <div className="heading3"> Some Key Points</div> */}
                                            <div className="list-feature mt-2">
                                                <div className="body2 text-secondary mb-2">{foundPost?.Description}</div>
                                                <div className="flex flex-col gap-y-3">
                                                    {foundPost?.points?.map((item, index) => (
                                                        <div key={index} className="w-full flex flex-col ">
                                                            <div key={index} className="item flex items-center gap-4">
                                                                <Icon.CheckCircle weight="fill" className="text-xl text-blue flex-shrink-0" />
                                                                <div className="text-button">{item}</div>
                                                            </div>

                                                        </div>
                                                    ))
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                {/* <div className="w-full xl:w-1/4">
                                    <div className="more-infor border border-line rounded-xl py-8 px-6">
                                        <div className="heading6">The best our Services</div>
                                        <div className="body3 text-secondary mt-2">Whether you have a team of 2 or 200, our shared team inboxes </div>
                                        {
                                            serviceData?.map((item, index) => (
                                                <div key={index} className="list-nav mt-1">
                                                    <Link className="nav-item rounded-lg "
                                                        href={"/service/service-detail/[slug]"}
                                                        as={`/service/service-detail/${item.title.toLowerCase().replace(/ /g, '-')}`}
                                                    >
                                                        <div className="text-button text-secondary">
                                                            {item?.title}
                                                        </div>
                                                        <i className="ph-bold ph-caret-right hidden"></i>
                                                    </Link>

                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                                        <div className="bg-img"> <Image width={5000} height={5000} src="/images/component/ads.png" alt="" /></div>
                                        <div className="text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8">
                                            <div className="title">
                                                <div className="heading5 text-white">Let’s talk</div>
                                                <div className="body3 text-white mt-4">If you have project,<br />contact us!</div>
                                            </div>
                                            <div className="button-block md:mt-10 mt-6"> <a className="button-main hover:bg-black hover:text-white inline-block bg-white text-button" href="contact-style-one.html">Learn now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <CtaOne /> */}
                </main >
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}