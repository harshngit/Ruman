'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const AboutTwo = () => {
  const [tabActive, setTabActive] = useState<string>('Our Service')

  const handleTabActive = (item: string) => {
    setTabActive(item)
  }

  return (
    <div className="about-block lg:py-[100px] px-4 lg:px-16 sm:py-16 py-10 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-x-12 gap-y-6">
          <div className="">
            <div className="bg-img w-full overflow-hidden rounded-3xl lg:mb-10">
              <Image
                src="/images/component/aboutsec.png"
                width={4000}
                height={4000}
                alt="About1"
                className="w-full h-full block"
              />
            </div>
          </div>
          <div className=" ">
            <div className="heading3 text-[2.2rem]">India&apos;s Fast and Credible Accounting Solutions </div>
            <p className="text-[.8rem] mt-3">
              Ruman Accounting Services LLP is a leading Accounting, Tax Services, and Advisory firm based in Mumbai, with operations extending across India. Established in 1996 as a small consultancy by passionate and talented accountants, the company has grown into a vast network of experienced professionals. We specialize in providing outsourced accounting solutions for corporates and high-net-worth individuals, catering to both common and complex accounting and tax needs.
            </p>
            <p className="text-[.8rem] mt-5">
              With over 25 years of cumulative experience, we have honed our skills, expertise, and local market knowledge to deliver methodical and impactful services. Today, the company is the preferred choice for accounting and financial services in Mumbai, serving SMEs, startups, large enterprises, and small-scale MNCs.
            </p>

            <div className="button-block flex items-center gap-5 md:mt-5 mt-2 pb-2">
              <a
                className="button-main text-white bg-blue hover-button-black text-button rounded-full"
                href="/service"
              >
                Explore Serivces
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTwo;
