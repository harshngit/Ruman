'use client'

import React, { useEffect, useState, Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation';
import blogData from '@/data/blog.json'
import BlogItem from '@/components/Blog/BlogItem';
import HandlePagination from '@/components/Other/HandlePagination'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';
import { client } from '@/client';


const LayoutGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [blogData, setBlogData] = useState([]);

  // Fetch Data from Sanity
  const fetchData = async () => {
    const query = `*[_type == "blog"]{
        _id,
        name,
        details,
        date,
        "imageUrl": image.asset->url,
        "bannerUrl": bannerimg.asset->url,
        slug,
      }`;

    try {
      const data = await client.fetch(query);
      setBlogData(data.length > 0 ? data : getNoDataPlaceholder());
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // setBlogData(getNoDataPlaceholder());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fallback when no data is found
  const getNoDataPlaceholder = () => [
    {
      _id: "no-data",
      name: "No Blogs Found",
      details: [{ children: [{ text: "No blogs available with this filter." }] }],
      date: "N/A",
      imageUrl: "",
      bannerUrl: "",
      slug: "",
    },
  ];

  // 🔹 Pagination Setup
  const productsPerPage = 9;
  const pageCount = Math.ceil(blogData.length / productsPerPage);
  const offset = currentPage * productsPerPage;
  const currentBlogs = blogData.slice(offset, offset + productsPerPage);

  const handlePageChange = (selected: number) => setCurrentPage(selected);

  return (
    <div className='list-blog lg:py-[100px] sm:py-16 py-10'>
      <div className="container">
        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {currentBlogs.map((item, index) => (
            <BlogItem key={index} data={item} />
          ))}
        </div>
        {pageCount > 1 && (
          <div className="list-pagination w-full flex items-center justify-center md:mt-10 mt-6">
            <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>

  )
}

export default LayoutGrid