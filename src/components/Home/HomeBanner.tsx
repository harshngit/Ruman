import React from 'react'
import mobile from '../../../public/images/banner/Mobile_Account.png'
import Image from 'next/image'
import pc from '../../../public/images/banner/A C C O U N T.png'
const HomeBanner = () => {
	return (
		<>
			<div className='lg:hidden block'>
				<Image className='w-full h-full' src={mobile} alt="" />
			</div>
			<div className='lg:block hidden'>
				<Image className='w-full h-full' src={pc} alt="" />
			</div>
		</>
	)
}

export default HomeBanner