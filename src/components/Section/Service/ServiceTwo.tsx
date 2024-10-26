'use client'

import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTrademark } from "react-icons/fa";
import { SiAccusoft } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSpeakLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { CiShop } from 'react-icons/ci'
interface Props {
    data: Array<ServiceType>
}

const ServiceTwo: React.FC<Props> = ({ data }) => {
    return (
        <>
            <section className="service-block lg:mt-[100px] sm:mt-16 mt-10 bg-[#9ac6ff] p-5">
                <div className=" xl:flex flex-col items-center justify-center">
                    <div className="w-full flex justify-center items-center mb-5 flex-col gap-4 flex-shrink-0">
                        <div className="text-sub-heading2 text-blue">Why to Chose Us </div>
                        <h3 className="heading3 text-[30px] text-center text-white">Your Reliable Finance and Accounting Services Partner in Indian</h3>
                        <div className="body3 text-center text-black">Accounting and financial reporting are challenging tasks for any business or individual dealing high volume transactionss.</div>
                    </div>
                    <div className="w-full lg:p-5 list-service flex justify-center items-center gap-8 max-xl:mt-8">
                        <div className="prev-arrow flex items-center  justify-center cursor-pointer">
                            <Icon.CaretLeft className="text-white heading6 transition-bg duration-300  hover:bg-blue text-4xl rounded-xl" weight="bold" />
                        </div>
                        <Swiper
                            spaceBetween={32}
                            slidesPerView={1}
                            loop={true}
                            modules={[Autoplay, Navigation]}
                            pagination={{ clickable: true }}
                            navigation={{
                                prevEl: '.prev-arrow',
                                nextEl: '.next-arrow',
                            }}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                680: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                            }}

                        >
                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <FaShoppingCart className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>E-commerce accounting</h4>
                                    <p className='text-secondary text-[10px] mt-1'>E-commerce accounting manages financial transactions, taxes, and inventory for online businesses, ensuring accurate reporting and compliance across digital sales channels.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <GiReceiveMoney className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>Internal, Statutory & Income Tax Audit </h4>
                                    <p className='text-secondary text-[10px] mt-1'>Choose us for Internal, Statutory, and Income Tax Audits to ensure accuracy, compliance, and insightful financial guidance tailored to strengthen your business's financial integrity.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <MdOutlineSecurity className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>Company Secretarial Services</h4>
                                    <p className='text-secondary text-[10px] mt-1'>End to End Services from Company formation to filing of returns by professional & well experienced Company Secretary</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <FaTrademark className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>Trade mark & Pattern registration</h4>
                                    <p className='text-secondary text-[10px] mt-1'>Secure your brand with our expert trademark and patent registration services, ensuring legal protection and exclusive rights for your business innovations.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <CiShop className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>PF, ESIC & Shop & Establishment </h4>
                                    <p className='text-secondary text-[10px] mt-1'>We offer comprehensive services for PF, ESIC, and Shop & Establishment registration, ensuring your business complies with essential labor and regulatory standards.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <SiAccusoft className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>HR Management Software </h4>
                                    <p className='text-secondary text-[10px] mt-1'>Streamline your operations with our HR management software, designed to simplify payroll, attendance, compliance, and employee management.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <GiTakeMyMoney className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>Investment Advisory</h4>
                                    <p className='text-secondary text-[10px] mt-1'>
                                        Get expert guidance with our investment advisory services, tailored to help you achieve your financial goals and optimize your portfolio.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='border-[2px] lg:w-[330px] w-[280px] lg:h-[240px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
                                    <RiSpeakLine className='text-6xl text-blue' />
                                    <h4 className='text-[20px] font-semibold mt-2 '>Financing – Advisory & Availment</h4>
                                    <p className='text-secondary text-[10px] mt-1'>Our financing services provide expert advisory and assistance in securing funding, tailored to meet your business's unique financial needs.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>


                        <div className="next-arrow flex items-center cursor-pointer justify-center">
                            <Icon.CaretRight className="text-white transition-bg duration-300 hover:bg-blue text-4xl rounded-xl  heading6" weight="bold" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServiceTwo