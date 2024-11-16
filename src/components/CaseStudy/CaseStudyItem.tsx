import React from "react"
import Link from "next/link"
import { CaseStudyType } from "@/type/CaseStudyType"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface Props {
    data: CaseStudyType
    style: string
}

const CaseStudyItem: React.FC<Props> = ({ data, style }) => {
    return (
        <>
            {style === 'style-one' &&
                <div className="">
                    <div className="flex justify-center items-start w-full gap-5 mt-10 ">
                        <div className="w-full lg:w-1/2">
                            <Image width={5000} height={5000} className="w-full h-full rounded-xl display-block" src={data.img} alt="" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="title text-secondary mt-4">
                                {data.shortDesc}
                            </div>
                            <div className="title text-secondary mt-4">
                                {data.desc}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* {style === 'style-two' &&
                <div className="case-study-item style-two item-filter">
                    <div className="item-main">
                        <div className="bg-img rounded-xl overflow-hidden">
                            <Image width={5000} height={5000} className="w-full h-full rounded-xl display-block" src={data.img} alt="" />
                            <Link
                                className="flex flex-col items-center justify-center py-8 px-5 bg-white rounded-full text-center"
                                href={"/case-studies/detail/[slug]"}
                                as={"/case-studies/detail/" + data.title.toLowerCase().replace(/ /g, '-')}
                            >
                                <div className="text-button-sm text-blue">Discovery</div>
                                <Icon.ArrowRight className="text-blue" />
                            </Link>
                        </div>
                        <div className="infor bg-white rounded-lg pt-6">
                            <div className="heading6">{data.subTitle}</div>
                            <div className="body2 text-secondary mt-2">{data.title}</div>
                        </div>
                    </div>
                </div>
            } */}
            {style === 'style-three' &&
                <div className="">
                    <div className="flex justify-center items-center w-full gap-5 mt-10 ">
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <Image width={5000} height={5000} className="w-[400px] h-[220px] rounded-xl display-block" src={data.img} alt="" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="title text-secondary mt-4">
                                {data.shortDesc}
                            </div>
                            <div className="title text-secondary mt-4">
                                {data.desc}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CaseStudyItem