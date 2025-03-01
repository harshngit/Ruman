'use client'

import { useState } from "react";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";
import { CaseStudyType } from '@/type/CaseStudyType'
import { motion } from 'framer-motion'

import 'swiper/css/bundle';

interface Props {
    data: Array<CaseStudyType>
}

const CaseStudyThree: React.FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<string>('Our Mission')

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    return (
        <>
            <div className="case-study-block px-4 lg:px-16 style-three lg:py-[100px] sm:py-16 py-10">
                <div className="container">
                    <div className="heading flex items-center justify-center flex-wrap gap-8 gap-y-5">

                        <div className="menu-tab flex items-center gap-2 bg-[#f5f5f5f1] rounded-full">
                            {['Our Mission', 'Our Vision'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`tab-item relative text-secondary  py-3 px-5 cursor-pointer duration-500  rounded-full ${activeTab === item ? 'active text-white' : ''}`}
                                    onClick={() => handleTabClick(item)}
                                >
                                    {activeTab === item && (
                                        <motion.div layoutId='active-pill' className='absolute inset-0 rounded-full bg-blue'></motion.div>
                                    )}
                                    <span className='relative text-[1.2rem] white-space-nowrap capitalize z-[1]'>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="list md:mt-10 mt-6">
                        {data.filter(item => item.category === activeTab).slice(0, 4).map((item, index) => (

                            <CaseStudyItem data={item} key={index} style='style-three' />

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CaseStudyThree