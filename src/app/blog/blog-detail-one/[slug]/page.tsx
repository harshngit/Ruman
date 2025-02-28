'use client'

import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"

import blogData from '@/data/blog.json'
import { BlogType } from '@/type/BlogType';
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import { useParams, useRouter } from "next/navigation"

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { client } from "@/client"
import { useEffect, useState } from "react"
import { PortableText } from '@portabletext/react';
export default function CaseStudyDetail() {
    const { slug } = useParams(); // ✅ Getting slug from URL
    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const query = `*[_type == "blog" && slug.current == $slug][0] {
               _id,
               name,
               details,
               date,
               "imageUrl": image.asset->url,
               "bannerUrl": bannerimg.asset->url,
               slug,
            }`;

            try {
                const result = await client.fetch(query, { slug });

                if (!result) {
                    console.error("Blog not found for slug:", slug);
                }

                setBlog(result);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        if (slug) fetchBlog();
    }, [slug]);

    console.log(blog)

    // if (!blog) return <div className="text-center mt-10">Loading...</div>;


    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <MenuOne />
                </header>
                <main className="content">

                    <div className='list-blog lg:py-[100px] sm:py-16 py-10'>
                        <div className="container">
                            <div className="flex items-center justify-center">
                                <div className="w-full lg:w-2/3">
                                    <div className="blog-paragraph">
                                        <div className="paragraph-heading">
                                            <div className="bg-img"><img width={4000} height={4000} className="w-full rounded-2xl" src={blog?.imageUrl || "/images/blog/930x593.png"} alt="img" /></div>
                                        </div>
                                        <div className="paragraph-content mt-8">
                                            <h1 className="heading7 mt-2">{blog?.name}</h1>
                                            {/* <p>{blog?.details}</p> */}
                                            <PortableText value={blog?.details} />
                                        </div>

                                    </div>
                                    <div className="blog-more-infor mt-8">
                                        <div className="infor-above flex items-center justify-between flex-wrap gap-6">

                                            <div className="share-block flex items-center gap-4 max-sm:flex-wrap">
                                                <div className="social-media flex items-center gap-3 max-sm:flex-wrap">
                                                    <a href="https://www.facebook.com/share/18HrDpYS4E/" aria-label="Share on Facebook"
                                                        title="Share on Facebook" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-facebook text-black"></i></a>
                                                    <a href="https://www.linkedin.com/company/ruman-accounting-intelligence/" rel="noopener noreferrer"
                                                        aria-label="Visit our LinkedIn"
                                                        title="Visit our LinkedIn" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-in text-black"></i></a>
                                                    <a href="https://www.instagram.com/ruman.accounting?igsh=OHYwZXVlbmdidG90" rel="noopener noreferrer"
                                                        aria-label="Follow us on Instagram"
                                                        title="Follow us on Instagram" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-insta text-black text-sm"></i></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}