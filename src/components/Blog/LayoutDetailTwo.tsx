'use client'

import React, { useState } from 'react'
import blogData from '@/data/blog.json'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation';
import { BlogType } from '@/type/BlogType';
import Link from 'next/link';
import Image from 'next/image';



const LayoutDetailTwo = ({ data }: { data: { name: string; date: string; imageUrl?: string, details: string; } }) => {
  const router = useRouter()

  // const handleTag = (tag: string) => {
  //   router.push(`/blog/blog-list-one?tag=${tag}`)
  // }


  return (
    <div className='list-blog lg:py-[100px] sm:py-16 py-10'>
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-2/3">
            <div className="blog-paragraph">
              <div className="paragraph-heading">
                <div className="bg-img"><Image width={4000} height={4000} className="w-full rounded-2xl" src={data?.imageUrl || "/images/blog/930x593.png"} alt="img" /></div>
              </div>
              <div className="paragraph-content mt-8">
                <h1>{data?.name}</h1>
                <p>{data?.details}</p>
              </div>

            </div>
            <div className="blog-more-infor mt-8">
              <div className="infor-above flex items-center justify-between flex-wrap gap-6">

                <div className="share-block flex items-center gap-4 max-sm:flex-wrap">
                  <div className="social-media flex items-center gap-3 max-sm:flex-wrap">
                    <a href="http://facebook.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-facebook text-black"></i></a>
                    <a href="http://linkedin.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-in text-black"></i></a>
                    <a href="http://twitter.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-twitter text-black text-sm"></i></a>
                    <a href="http://instagram.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-insta text-black text-sm"></i></a>
                    <a href="http://youtube.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-youtube text-black text-xs"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDetailTwo