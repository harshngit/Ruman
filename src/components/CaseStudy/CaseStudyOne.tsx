'use client'

import React, { useState } from 'react'
import CaseStudyItem from './CaseStudyItem'
import { CaseStudyType } from '@/type/CaseStudyType'
import { motion } from 'framer-motion'

interface Props {
    data: Array<CaseStudyType>
}

const CaseStudyOne: React.FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<string>('Our Service')
    console.log(data)
    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    return (
        <>
            <div className="service-block lg:py-[100px] sm:py-16 py-10">
                <div className="container flex flex-col items-center">
                    <div className="menu-tab flex justify-center items-center gap-2 p-5 bg-surface rounded-2xl">
                        {['Our Services', 'Our Vision', 'Our Mission'].map((item, index) => (
                            <div
                                key={index}
                                className={`tab-item relative text-secondary text-button-sm py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === item ? 'active' : ''}`}
                                onClick={() => handleTabClick(item)}
                            >
                                {/* {activeTab === item && (
                                    <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
                                )} */}
                                <span className='relative text-button-sm white-space-nowrap capitalize z-[1] active:text-black'>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        {data.filter(item => activeTab === 'Our Services' ? true : item.category === activeTab).map((item, index) => (
                            <CaseStudyItem data={item} style='style-one' key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudyOne