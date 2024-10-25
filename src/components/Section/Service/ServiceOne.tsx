'use client'

import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'

interface Props {
    data: Array<ServiceType>
}

const ServiceOne: React.FC<Props> = ({ data }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <section className="service-block lg:mt-[100px] sm:mt-16 mt-10" ref={ref}>
                <div className="container">
                    <h3 className="heading3 text-center">Accounting, Tax & Advisory Services - Financial Accounting Firm in India</h3>
                    <p className='text-center text-[#9a9999]'>Ruman Accounting Services LLP, a Mumbai-based firm, provides customized online and offline accounting solutions through a network of experienced professionals with expertise in accounting trends, tax regulations, and technology.</p>
                    <div
                        className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10"
                        style={{
                            transform: isInView ? "none" : "translateY(60px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                        }}
                    >
                        {data.slice(0, 6).map((item, index) => (
                            <ServiceItem data={item} style='style-one' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceOne