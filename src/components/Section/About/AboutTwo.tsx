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
                src="/images/component/aboutimg (2).png"
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
              Having 25+ years of cumulative experience working on many assignments and delivering methodical services, our nurtured skills, expertise, and local market knowledge reflects every project outcome.
            </p>
            <div className="nav-infor mt-8">
              <div className="list-nav flex items-center gap-10 border-b border-line w-fit">
                {
                  ['Our Service', 'Our Mission', 'Our Vision'].map((item, index) => (
                    <div className={`text-button-sm has-line-before line-2px line-blue cursor-pointer capitalize  ${tabActive === item ? 'active' : ''}`}
                      key={index}
                      onClick={() => handleTabActive(item)}
                    >
                      {item}
                    </div>
                  ))
                }
              </div>
              <div className={`description item-filter ${tabActive === 'Our Service' ? 'show' : 'hide'}`}>
                <div className="title text-secondary mt-4">
                  We offer end-to-end solutions, from accounting and tax compliance to audit-ready account finalization. At Ruman Accounting Services LLP, we believe that businesses monitoring their finances and making informed decisions are more resilient to market volatility.
                </div>

              </div>
              <div className={`description item-filter ${tabActive === 'Our Mission' ? 'show' : 'hide'}`}>
                <div className="title body3 text-secondary mt-4">
                  Quality-commitment-client satisfaction is our driving force. We understand the nuances of each client business and create value, loyalty, and long-term partnership with a result-driven approach. We are committed to following high ethical standards in all our services & innovative solutions and helping our clients achieve their business goals.
                </div>
              </div>
              <div className={`description item-filter ${tabActive === 'Our Vision' ? 'show' : 'hide'}`}>
                <div className="title body3 text-secondary mt-4">
                  Our aim is to consistently reinvent our professional abilities, set new goals for competencies to be market-ready, and harmonize our employee skills and hard work to exceed customer expectations. We work towards becoming the leader in offering dynamic solutions in international standards across the borders as a most trusted destination to avail exceptional services.
                </div>
              </div>
            </div>
            <div className="button-block flex items-center gap-5 md:mt-10 mt-6 pb-2">
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
