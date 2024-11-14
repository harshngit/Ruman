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
import styled from 'styled-components'


const ServiceTwo = () => {
  return (
    <>
      <section className="service-block lg:mt-[100px] sm:mt-16 mt-10 bg-[#2a77ffcf] p-5">
        <div className="container xl:flex items-center justify-center">
          <div className="xl:w-1/3 w-full flex flex-col gap-4 flex-shrink-0">
            <div className="text-sub-heading2 lg:text-left text-center text-[#0f1748]"> Our associate Services</div>
            <h3 className="heading3 text-[30px] lg:text-left text-center  text-white leading-8">Your Reliable Finance and Accounting Services Partner in Indian</h3>
            <div className="body3 lg:text-left text-center  text-[#ccc]">Accounting and financial reporting are challenging tasks for any business or individual dealing high volume transactionss.</div>
          </div>
          <div className="w-full lg:p-5 list-service grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-3 max-xl:mt-8">
            {/* <div className='border-[2px]  rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
              <FaShoppingCart className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>E-commerce accounting</h4>
              <p className='text-secondary text-[10px] mt-1'>E-commerce accounting manages financial transactions, taxes, and inventory for online businesses, ensuring accurate reporting and compliance across digital sales channels.</p>
            </div> */}
            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <FaShoppingCart className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>E-commerce accounting</h4>
                    </p>
                    <div className="title py-5 px-5"><p className='text-secondary text-[13px] mt-1'>E-commerce accounting manages financial transactions, taxes, and inventory for online businesses, ensuring accurate reporting and compliance across digital sales channels.</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <GiReceiveMoney className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6'>Internal, Statutory & Income Tax Audit</h4>
              <p className='text-secondary text-[10px] mt-1'>
                Choose us for Internal, Statutory, and Income Tax Audits to ensure accuracy, compliance, and insightful financial guidance tailored to strengthen your business&apos;s financial integrity.
              </p>
            </div>

            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <GiReceiveMoney className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>Internal, Statutory & Income Tax Audit </h4>
                    </p>
                    <div className="title py-5 px-5"><p className='text-secondary text-[13px] mt-1'>Choose us for Internal, Statutory, and Income Tax Audits to ensure accuracy, compliance, and insightful financial guidance tailored to strengthen your busines&apos;s financial integrity.</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <MdOutlineSecurity className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Company Secretarial Services</h4>
              <p className='text-secondary text-[10px] mt-1'>End to End Services from Company formation to filing of returns by professional & well experienced Company Secretary</p>
            </div>
            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <MdOutlineSecurity className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>Company Secretarial Services</h4>
                    </p>
                    <div className="title py-5 px-5">  <p className='text-secondary text-[13px] mt-1'>End to End Services from Company formation to filing of returns by professional & well experienced Company Secretary</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <FaTrademark className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Trade mark & Pattern registration</h4>
              <p className='text-secondary text-[10px] mt-1'>Secure your brand with our expert trademark and patent registration services, ensuring legal protection and exclusive rights for your business innovations.</p>
            </div>
            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <FaTrademark className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>Trade mark & Pattern registration</h4>
                    </p>
                    <div className="title py-5 px-5">  <p className='text-secondary text-[13px] mt-1'>Secure your brand with our expert trademark and patent registration services, ensuring legal protection and exclusive rights for your business innovations.</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <CiShop className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>PF, ESIC & Shop & Establishment </h4>
              <p className='text-secondary text-[10px] mt-1'>We offer comprehensive services for PF, ESIC, and Shop & Establishment registration, ensuring your business complies with essential labor and regulatory standards.</p>
            </div>
            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <CiShop className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>PF, ESIC & Shop & Establishment </h4>
                    </p>
                    <div className="title py-5 px-5"> <p className='text-secondary text-[13px] mt-1'>We offer comprehensive services for PF, ESIC, and Shop & Establishment registration, ensuring your business complies with essential labor and regulatory standards.</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
            {/* <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0] bg-[#fff]'>
              <SiAccusoft className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>HR Management Software </h4>
              <p className='text-secondary text-[10px] mt-1'>Streamline your operations with our HR management software, designed to simplify payroll, attendance, compliance, and employee management.</p>
            </div> */}
            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <SiAccusoft className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>HR Management Software </h4>
                    </p>
                    <div className="title py-5 px-5">  <p className='text-secondary text-[13px] mt-1'>Streamline your operations with our HR management software, designed to simplify payroll, attendance, compliance, and employee management.</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <GiTakeMyMoney className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Investment Advisory</h4>
              <p className='text-secondary text-[10px] mt-1'>
                Get expert guidance with our investment advisory services, tailored to help you achieve your financial goals and optimize your portfolio.</p>
            </div>
            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <GiTakeMyMoney className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>Investment Advisory</h4>
                    </p>
                    <div className="title py-5 px-5">  <p className='text-secondary text-[13px] mt-1'>
                      Get expert guidance with our investment advisory services, tailored to help you achieve your financial goals and optimize your portfolio.</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
            <div className='border-[2px] rounded-md cursor-pointer flex justify-start flex-col px-6 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border-[#e0e0e0] bg-[#fff] hover:bg-[#f9f9f9]'>
              <RiSpeakLine className='text-6xl text-blue' />
              <h4 className='text-[15px] font-semibold mt-2 leading-6 '>Financing – Advisory & Availment</h4>
              <p className='text-secondary text-[10px] mt-1'>Our financing services provide expert advisory and assistance in securing funding, tailored to meet your busines&apos;s unique financial needs.</p>
            </div>
            {/* <StyledWrapper>
              <div className="container noselect ">
                <div className="canvas ">
                  <div className="tracker tr-1" />
                  <div className="tracker tr-2" />
                  <div className="tracker tr-3" />
                  <div className="tracker tr-4" />
                  <div className="tracker tr-5" />
                  <div className="tracker tr-6" />
                  <div className="tracker tr-7" />
                  <div className="tracker tr-8" />
                  <div className="tracker tr-9" />
                  <div className="tracker tr-10" />
                  <div className="tracker tr-11" />
                  <div className="tracker tr-12" />
                  <div className="tracker tr-13" />
                  <div className="tracker tr-14" />
                  <div className="tracker tr-15" />
                  <div className="tracker tr-16" />
                  <div className="tracker tr-17" />
                  <div className="tracker tr-18" />
                  <div className="tracker tr-19" />
                  <div className="tracker tr-20" />
                  <div className="tracker tr-21" />
                  <div className="tracker tr-22" />
                  <div className="tracker tr-23" />
                  <div className="tracker tr-24" />
                  <div className="tracker tr-25" />
                  <div id="card">
                    <p id="prompt">
                      <RiSpeakLine className='text-6xl text-blue' />
                      <h4 className='text-[15px] text-black font-semibold mt-2 leading-6 '>Financing – Advisory & Availment</h4>
                    </p>
                    <div className="title py-5 px-5"> <p className='text-secondary text-[13px] mt-1'>Our financing services provide expert advisory and assistance in securing funding, tailored to meet your busines&apos;s unique financial needs.</p></div>

                  </div>
                </div>
              </div>
            </StyledWrapper > */}
          </div>

        </div>
      </section>

    </>
  )
}

const StyledWrapper = styled.div`
  /*works janky on mobile :<*/
  .container {
    position: relative;
    width: 190px;
    height: 254px;
    transition: 200ms;
  }

  .container:active {
    width: 180px;
    height: 245px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: #fff;
  }

  .subtitle {
    transform: translateY(160px);
    color: rgb(134, 110, 221);
    text-align: center;
    width: 100%;
  }

  .title {
    opacity: 0;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out-out;
    transition-delay: 100ms;
    position: absolute;
    font-size: x-large;
    font-weight: bold;
    color: white;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
  }

  #prompt {
    bottom: 8px;
    left: 12px;
    z-index: 20;
    font-size: 20px;
    font-weight: bold;
    transition: 300ms ease-in-out-out;
    position: absolute;
    max-width: 150px;
    color: rgb(255, 255, 255);
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: '';
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  #card::before {
    content: '';
    background: #fff;
    filter: blur(2rem);
    opacity: 30%;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    transition: 200ms;
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
     /* iOS Safari */
    -webkit-user-select: none;
     /* Safari */
     /* Konqueror HTML */
    -moz-user-select: none;
     /* Old versions of Firefox */
    -ms-user-select: none;
     /* Internet Explorer/Edge */
    user-select: none;
     /* Non-prefixed version, currently
  									supported by Chrome, Edge, Opera and Firefox */
  }`;

export default ServiceTwo