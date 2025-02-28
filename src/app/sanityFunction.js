"use client"

import { useEffect } from "react";
import { useState } from "react";

export default async function getpostBlogs() {
	const [blog, setBlogs] = useState([])
	const fetchBlogs = async () => {
		try {
			const query = `*[_type == "blog"]{
          name,
          slug,
          details, 
          date,
          "imageUrl": image.asset->url,
          "bannerImageUrl": bannerimg.asset->url
        }`;
			const data = await cl.fetch(query);
			setBlogs(data);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchBlogs()
	}, [])
	console.log(blog)
}