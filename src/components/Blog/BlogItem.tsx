import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BlogItem = ({ data }: { data: { name: string; slug?: { current: string }; date: string; imageUrl?: string } }) => {
    const slug = data.slug?.current || "no-slug"; // Fallback to prevent errors
    const imageSrc = data.imageUrl || "/placeholder.jpg"; // Default image if missing

    return (
        <div className="blog-item">
            <Link
                className="blog-item-main h-full block bg-white border border-line overflow-hidden rounded-2xl hover-box-shadow duration-500"
                href={`/blog/blog-detail-one/${slug}`}
            >
                <div className="bg-img w-full overflow-hidden">
                    <img
                        width={500}
                        height={300}
                        className="w-full h-full block object-cover"
                        src={imageSrc}
                        alt={data.name}
                    />
                </div>
                <div className="info sm:p-6 p-4">
                    <div className=" heading7 mt-2 hover:text-blue">{data.name}</div>
                    <div className="date flex items-center gap-4 mt-2">
                        <div className="item-date flex items-center">
                            <Icon.CalendarBlank weight="bold" />
                            <span className="ml-1 caption2">{data.date || "N/A"}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogItem;
