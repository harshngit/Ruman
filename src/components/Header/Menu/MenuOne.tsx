'use client'

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuOne = () => {
    const pathname = usePathname()
    const [fixedHeader, setFixedHeader] = useState(false)
    // const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 400);
            // setLastScrollPosition(scrollPosition);
        };

        // Gắn sự kiện cuộn khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Hủy sự kiện khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header-menu style-one bg-white ${fixedHeader ? 'fixed' : ''}`}>
                <div className="container flex items-center justify-between h-24">
                    <Link className="menu-left-block" href="/">
                        <Image
                            src={'/images/rumanLogochangebg.png'}
                            width={2000}
                            height={1000}
                            alt="logo"
                            priority={true}
                            className="w-[210px] max-sm:w-[160px]"
                        />
                    </Link>
                    <div className="menu-center-block h-full">
                        <ul className="menu-nav flex items-center xl:gap-2 h-full">
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/' || pathname.includes('/homepages/') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="/">
                                <span>Home</span>
                            </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/about/') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="/about">
                                <span>About</span>
                            </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('#') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="#">
                                <span>Services</span>
                                <span><Icon.CaretDown className="text-sm" /></span>
                            </Link>
                                <ul className="sub-nav">
                                    <li className={`sub-nav-item ${pathname === '/service' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/service">Our Services</Link></li>
                                    <li className={`sub-nav-item ${pathname === '/service/ancillary-service' ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/service/ancillary-services">Ancillary Services.</Link></li>
                                    <li className={`sub-nav-item ${pathname.includes('/service/asscoiate-service') ? 'active' : ''}`}> <Link className="sub-nav-link font-medium" href="/service/asscoiate-services">Associate Services</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/contact/') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="/contact">
                                <span>Contact</span>

                            </Link>

                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/case-studies/') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="/career">
                                <span>Career</span>
                            </Link>

                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/accountIntelligence') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="/accountIntelligence">
                                <span>Accounting Intelligence</span>
                            </Link>

                            </li>
                            <li className={`nav-item h-full flex items-center justify-center ${pathname.includes('/blogs') ? 'active' : ''}`}><Link className="nav-link text-title flex items-center gap-1" href="/blogs">
                                <span>Blogs</span>
                            </Link>
                            </li>



                        </ul>
                    </div>
                    <div className="menu-right-block flex items-center">

                        <div className="menu-humburger hidden pointer" onClick={() => setOpenMenuMobile(!openMenuMobile)}>
                            <Icon.List className="text-2xl" weight="bold" />
                        </div>
                    </div>
                </div>
                <div id="menu-mobile-block" className={`${openMenuMobile && 'open'}`}>
                    <div className="menu-mobile-main">
                        <div className="container">
                            <ul className="menu-nav-mobile h-full pt-1 pb-1">
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${openSubNavMobile === 1 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(1)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="/">
                                        <span className="body2 font-semibold">Home </span>

                                    </a>

                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about ${openSubNavMobile === 2 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(2)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="/about">
                                        <span className="body2 font-semibold">About</span>

                                    </a>

                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer services ${openSubNavMobile === 3 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(3)}
                                ><a className="nav-link-mobile flex items-center justify-between">
                                        <span className="body2 font-semibold">Services </span>

                                    </a>
                                    <ul className={`sub-nav-mobile ${openSubNavMobile === 3 ? 'open' : ''}`}>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"><Link className="sub-nav-link text-base" href="/service">Our Services</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/service/ancillary-services">Ancillary Services</Link></li>
                                        <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2"> <Link className="sub-nav-link text-base" href="/service/asscoiate-services">Asscoiate Services</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer case ${openSubNavMobile === 4 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(4)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="/contact">
                                        <span className="body2 font-semibold">Contact </span>
                                    </a>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer pages ${openSubNavMobile === 5 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(5)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="/career">
                                        <span className="body2 font-semibold">Career </span>

                                    </a>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer pages ${openSubNavMobile === 5 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(6)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="/accountIntelligence">
                                        <span className="body2 font-semibold">Accounting Intelligence </span>

                                    </a>
                                </li>
                                <li className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer pages ${openSubNavMobile === 5 ? 'active' : ''}`}
                                    onClick={() => handleOpenSubNavMobile(7)}
                                ><a className="nav-link-mobile flex items-center justify-between" href="/blogs">
                                        <span className="body2 font-semibold">Blogs</span>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default MenuOne