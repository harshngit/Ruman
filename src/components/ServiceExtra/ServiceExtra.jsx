import React from 'react'
import reason from "@/data/serviceExtra"
const ServiceExtra = () => {
	return (
		<>
			<div className="bg-surface py-16 px-6">
				<div className="text-center mb-12">
					<h4 className="text-blue-600 font-medium uppercase tracking-wide">Serivces</h4>
					<h2 className="text-4xl font-bold text-gray-800 text-[#021a43cf]">Ancillary Service</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
					{reason.map((reason) => (
						<div key={reason.id} className="text-left">
							<div className='flex justify-start items-center'>
								<h3 className="text-[#021a43cf] text-4xl font-bold mb-4">{reason.id}</h3>
								<hr className='w-full border-t-[3px]  text-[#021a43cf]' />
							</div>
							<h4 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h4>
							<p className="text-gray-600">{reason.description}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
export default ServiceExtra