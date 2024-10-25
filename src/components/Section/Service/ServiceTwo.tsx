import React from 'react'
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'

interface Props {
    data: Array<ServiceType>
}

const ServiceTwo: React.FC<Props> = ({ data }) => {
    return (
        <>
            <section className="service-block lg:mt-[100px] sm:mt-16 mt-10">
                <div className="container xl:flex items-center justify-center">
                    <div className="xl:w-1/3 w-full flex flex-col gap-4 flex-shrink-0">
                        <div className="text-sub-heading2 text-blue">Services</div>
                        <h3 className="heading3 text-[30px]">Your Reliable Finance and Accounting Services Partner in Indian</h3>
                        <div className="body3 text-secondary">Accounting and financial reporting are challenging tasks for any business or individual dealing high volume transactionss.</div>
                    </div>
                    <div className="w-full xl:pl-[72px] list-service grid lg:grid-cols-4 grid-flow-row grid-cols-1 gap-8 max-xl:mt-8">
                        <div className='border-[2px] flex justify-start px-5 py-5 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0]'>
                            1
                        </div>
                        <div className='border-[2px] flex justify-start px-5 py-5 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0]'>
                            2
                        </div>
                        <div className='border-[2px] flex justify-start px-5 py-5 transition-shadow duration-150 hover:shadow-md border-[#e0e0e0]'>
                            1
                        </div>
                        <div className='border-[2px] flex justify-start px-5 py-5   transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0]'>
                            2
                        </div>
                        <div className='border-[2px] flex justify-start px-5 py-5 transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0]'>
                            1
                        </div>
                        <div className='border-[2px] flex justify-start px-5 py-5   transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0]'>
                            2
                        </div>
                        <div className='border-[2px] flex justify-start px-5 py-5  transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0]'>
                            1
                        </div>
                        <div className='border-[2px] flex justify-start px-5 py-5   transition-shadow duration-150 hover:shadow-md  border-[#e0e0e0]'>
                            2
                        </div>
                        {/* <div className='flex justify-center items-center gap-10 mr-10'>
                            <div className='flex justify-center items-center gap-10 lg:flex-col'>
                                <div className='border-[2px] flex justify-center items-center w-[200px] transition-shadow duration-150 hover:shadow-md h-[150px] border-[#e0e0e0]'>
                                    1
                                </div>
                                <div className='border-[1px] w-[200px] h-[150px] border-[#b5b5b5]'>
                                    2
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-10 flex-col'>
                                <div className='border-[1px] w-[200px] h-[150px] border-[#b5b5b5]'>
                                    3
                                </div>
                                <div className='border-[1px] w-[200px] h-[150px] border-[#b5b5b5]'>
                                    4
                                </div>
                            </div>

                        </div> */}
                        {/* <div className='flex justify-center items-center gap-10'>
                            <div className='flex justify-center items-center gap-10 flex-col'>
                                <div className='border-[1px] w-[200px] h-[150px] border-[#b5b5b5]'>
                                    1
                                </div>
                                <div className='border-[1px] w-[200px] h-[150px] border-[#b5b5b5]'>
                                    2
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-10 flex-col'>
                                <div className='border-[1px] w-[200px] h-[150px] border-[#b5b5b5]'>
                                    3
                                </div>
                                <div className='border-[1px] w-[200px] h-[150px] border-[#b5b5b5]'>
                                    4
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceTwo