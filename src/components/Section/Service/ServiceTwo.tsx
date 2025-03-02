'use client'

import React from 'react'
import 'swiper/css/bundle';
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTrademark } from "react-icons/fa";
import { SiAccusoft } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSpeakLine } from "react-icons/ri";
import { CiShop } from 'react-icons/ci'


const ServiceTwo = () => {
  return (
    <>
      <section className="service-block lg:mt-[0px] sm:mt-16  bg-[#021a43cf] py-12 px-3 lg:py-6 lg:px-12 ">
        <div className="container grid lg:grid-cols-3 gap-2  lg:gap-12 grid-cols-1 items-center justify-center">
          <div className="col-span-1 w-full flex flex-col gap-4 flex-shrink-0">
            <div className="text-sub-heading2 lg:text-left text-center text-[#ffffff]"> Our associate Services</div>
            <h3 className="heading3 text-[1.7rem] lg:text-[2rem] lg:text-left text-center  text-white leading-8">Your Reliable Finance and Accounting Services Partner in Indian</h3>
            <div className="text-[.8rem] lg:text-left text-center  text-[#ececec]">Accounting and financial reporting are challenging tasks for any business or individual dealing high volume transactions. In addition, changes in regulations, taxation standards, and technology adaptations make it more complex, and companies struggle to get their numbers and reports done on time and accurately. </div>
            <div className='text-[.8rem] lg:text-left text-center  text-[#ccc]'>
              Company implements powerful accounting assistance and management compiling a wide range of services customized for each client and industry. We improve their accounting processes with unique financial and advisory services in INDIA and facilitate the proper financial planning, risk management and growth at scale!
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 lg:p-5 list-service grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-3 max-xl:mt-8">


            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <GiReceiveMoney className='text-6xl text-[#021a43cf]' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6'>Internal, Statutory & Income Tax Audit</h4>
              <p className='text-secondary text-[10px] mt-1'>
                Choose us for Internal, Statutory, and Income Tax Audits to ensure accuracy, compliance, and insightful financial guidance tailored to strengthen your business&apos;s financial integrity.
              </p>
            </div>


            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <MdOutlineSecurity className='text-6xl text-[#021a43cf]' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Company Secretarial Services</h4>
              <p className='text-secondary text-[10px] mt-1'>End to End Services from Company formation to filing of returns by professional & well experienced Company Secretary</p>
            </div>
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <FaTrademark className='text-6xl text-[#021a43cf]' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Trade mark & Pattern registration</h4>
              <p className='text-secondary text-[10px] mt-1'>Secure your brand with our expert trademark and patent registration services, ensuring legal protection and exclusive rights for your business innovations.</p>
            </div>

            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <CiShop className='text-6xl text-[#021a43cf]' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>PF, ESIC & Shop & Establishment </h4>
              <p className='text-secondary text-[10px] mt-1'>We offer comprehensive services for PF, ESIC, and Shop & Establishment registration, ensuring your business complies with essential labor and regulatory standards.</p>
            </div>

            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <GiTakeMyMoney className='text-6xl text-[#021a43cf]' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Investment Advisory</h4>
              <p className='text-secondary text-[10px] mt-1'>
                Get expert guidance with our investment advisory services, tailored to help you achieve your financial goals and optimize your portfolio.</p>
            </div>
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <RiSpeakLine className='text-6xl text-[#021a43cf]' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Financing – Advisory & Availment</h4>
              <p className='text-secondary text-[10px] mt-1'>Our financing services provide expert advisory and assistance in securing funding, tailored to meet your busines&apos;s unique financial needs.</p>
            </div>

          </div>

        </div>
      </section>

    </>
  )
}



export default ServiceTwo