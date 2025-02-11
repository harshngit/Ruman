"use client"

import { client } from '@/client';
import React, { useEffect, useState } from 'react'

const CareerTable = () => {
	const [careerEntries, setCareerEntries] = useState([]);

	useEffect(() => {
		client
			.fetch(`*[_type == "careerEntry"]{ position, experience, form }`)
			.then((data) => setCareerEntries(data))
			.catch(console.error);
	}, []);
	console.log(careerEntries)
	return (
		<>
			{/* {careerEntries.length !== 0 && <div className="mt-16">
				<div className="flex justify-center flex-col gap-5 items-center mb-2">
					<div className="heading3 text-3xl">Explore Career Opportunities</div>
					<div className="text-xl lg:mr-0 lg:ml-0 text-center mr-5 ml-5">We’re looking for talent that’s ready to make an impact.</div>
				</div>
				<div className="lg:grid lg:grid-cols-3 mt-5 lg:mr-[150px] mr-5 ml-5 lg:ml-[150px] flex justify-center">
					<div className="flex justify-center lg:w-[100%] w-[33.3%]  items-center bg-blue py-3 px-3">
						<p className="lg:text-xl text-md text-white font-medium ">Position</p>
					</div>
					<div className="flex justify-center  lg:w-[100%] w-[33.3%] items-center bg-blue py-3 px-3">
						<p className="lg:text-xl text-md text-white font-medium ">Experience</p>
					</div>
					<div className="flex justify-center  lg:w-[100%] w-[33.3%] items-center bg-blue py-3 px-3">
						<p className="lg:text-xl text-md text-white font-medium ">Apply Now</p>
					</div>
				</div>
				{careerEntries?.map((item, index) => (
					<div key={index} className="lg:grid lg:grid-cols-3  lg:mr-[150px] mr-5 ml-5 lg:ml-[150px] flex justify-center">
						<div className="flex justify-center lg:w-[100%] w-[33.3%] items-center border-[1px] border-[#ccc]  py-3 px-3">
							<p className="lg:text-xl text-md text-black font-medium text-center ">{item?.position}</p>
						</div>
						<div className="flex justify-center lg:w-[100%] w-[33.3%] items-center border-[1px] border-[#ccc]  py-3 px-3">
							<p className="lg:text-xl text-md text-black font-medium  text-center s ">{item?.experience}</p>
						</div>
						<div className="flex justify-center lg:w-[100%] w-[33.3%] items-center border-[1px] border-[#ccc]  py-3 px-3">
							<a href={item?.form} target="_blank" className="lg:px-4 px-2 lg:py-3 py-2 text-center bg-blue text-white rounded-md hover:text-blue hover:bg-white border-[1px]  border-blue cursor-pointer"> Apply Now</a>
						</div>


					</div>
				))}
			</div>} */}
		</>
	)
}

export default CareerTable