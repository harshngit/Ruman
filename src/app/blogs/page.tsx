
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import LayoutGrid from "@/components/Blog/LayoutGrid"
import Footer from "@/components/Footer/Footer"
import { Suspense } from "react"
import Head from "next/head"

export const metadata = {
    title: "Expert Insights: Accounting Tips, Trends & Solutions - Ruman Accounting Blog",
    description: "Discover expert accounting tips, financial trends, and solutions on the Ruman Accounting Blog. Simplify your finances and grow smarter today!",
    keywords: ['Ruman Accounting Services', 'Ruman Accounting Intelligence', 'Family Accounting', 'Accounting Intelligence', 'Accouting Services', 'Accounting', 'Accounting in Mumbai', ' Accounting in Pune', "Accounting in Thane", 'Accounting for startups'],
    verification: {
        google: 'BBRC6y8h6TTilDoQ199YKgjB9K9l9r2Mx2prPHFtwMk',
    },
    openGraph: {
        type: "website",
        title: 'Expert Insights: Accounting Tips, Trends & Solutions | Ruman Accounting Blog',
        description: 'Discover expert accounting tips, financial trends, and solutions on the Ruman Accounting Blog. Simplify your finances and grow smarter today!',
        url: 'https://rumanaccounting.com/blogs/',
        siteName: 'Ruman Accounting Services',
        images: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'Ruman Accounting – Your Partner in Family Accounting & Smart Financial Intelligence.',
            },
        ],
    },
    alternates: {
        canonical: 'https://rumanaccounting.com/blogs/',
    },

    icons: {
        icon: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        shortcut: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        apple: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        },
    },
}

export default function BlogListStyleTwo() {
    return (
        <>
            <div className="overflow-x-hidden">
                <Head>
                    <meta name="robots" content="follow, index" />
                    <meta name="googlebot" content="follow, index" />
                </Head>
                <header id="header">

                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Blog" img="/images/banner/blog Banner.png" title="Blog Page" desc="" />
                    <Suspense>
                        <LayoutGrid />
                    </Suspense>
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}
