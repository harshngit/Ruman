import React from 'react'
import TextHeadingItem from '../TextHeading/TextHeadingItem'
import ServiceItem from '../Service/ServiceItem'
import KeyMetricsdata from '@/data/KeyMetrics'


const KeyMetrics = () => {
	return (
		<>
			<div className="service-block bg-surface lg:py-[100px] sm:py-16 py-10">
				<div className="container">
					<TextHeadingItem style='md:w-full w-full' title='' desc='Accounting Intelligence leverages advanced technologies like AI and data analytics to enhance decision-making, automate processes, and improve accuracy in financial management. It streamlines bookkeeping, dynamic financial reporting, auditing, and budgeting, resulting in greater efficiency, reduced human error, and deeper financial data insights.' />
					<div className="list-service grid xl:grid-cols-5 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10 p-8 bg-white rounded-[40px] overflow-hidden">
						{KeyMetricsdata.map((item, index) => (
							<ServiceItem data={item} style='style-about-two' number={index} key={index} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default KeyMetrics