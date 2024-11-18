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
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-white">
      <div className="container">
        <div className="row flex max-lg:flex-col lg:items-center gap-y-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl lg:mb-10">
              <Image
                src="/images/component/aboutsec.png"
                width={4000}
                height={4000}
                alt=""
                className="w-full h-full block"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-col lg:pl-20">
            <div className="heading3">India&apos;s Fast and Credible Accounting Solutions </div>
            <p className="text-secondary mt-5">
              Ruman Accounting Services LLP is an Accounting, Tax services & Advisory firm operating in Mumbai & many parts of India and offering outsourced accounting services. Started as a small consultancy by passionate and talented accountants in 1996, the company has a vastly growing network of experienced accountants offering solutions in various regular and unusual domains in accounting and tax for corporates and high-net-worth individuals in Mumbai & many parts of India
            </p>
            <p className="text-secondary mt-5">
              Having 25+ years of cumulative experience working on many assignments and delivering methodical services, our nurtured skills, expertise, and local market knowledge reflects every project outcome. Today, Company is the immediate choice for opting for accounting and financial services in Mumbai for SMEs, Startups, and large enterprises & Small Scale MNCs
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
