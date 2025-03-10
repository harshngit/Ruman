'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import Marquee from 'react-fast-marquee'

interface Props {
	classname: string
}

const PartnerSix: React.FC<Props> = ({ classname }) => {
	return (
		<>
			<div className={`bg-surface py-6 ${classname}`}>
				<div className="container">
					<div className="list-brand">
						<Marquee>
							<div className="brand-item relative flex items-center justify-center md:h-[80px] h-[60px] md:mx-14 mx-10 ">
								<Image
									src={'/images/clients/1.png'}
									width={300}
									height={300}
									alt='1'
									className=' w-[150px] duration-500 relative object-cover'
								/>
							</div>
							<div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
								<Image
									src={'/images/clients/2.png'}
									width={300}
									height={300}
									alt='2'
									className=' w-[150px] duration-500 relative object-cover'
								/>
							</div>
							<div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
								<Image
									src={'/images/clients/3.png'}
									width={300}
									height={300}
									alt='3'
									className=' w-[150px] duration-500 relative object-cover'
								/>
							</div>
							<div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
								<Image
									src={'/images/clients/4.png'}
									width={300}
									height={300}
									alt='4'
									className=' w-[150px] duration-500 relative object-cover'
								/>
							</div>
							<div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
								<Image
									src={'/images/clients/5.png'}
									width={300}
									height={300}
									alt='5'
									className=' w-[150px] duration-500 relative object-cover'
								/>
							</div>
							<div className="brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10">
								<Image
									src={'/images/clients/6.png'}
									width={300}
									height={300}
									alt='6'
									className=' w-[150px] duration-500 relative object-cover'
								/>
							</div>
						</Marquee>
					</div>
				</div>
			</div>
		</>
	)
}

export default PartnerSix