

import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";

import Footer from "@/components/Footer/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaPhone } from "react-icons/fa";
import Link from "next/link";

import CareerForm from "@/components/Section/Career/CareerForm";
import CareerTable from "@/components/Section/Career/CareerTable";
export const metadata = {
  title: "Careers | Ruman Accounting Intelligence – Join Our Team of Financial Experts",
  description: "Explore career opportunities at Ruman Accounting Intelligence. Join our team and grow your career in finance, accounting, and business solutions.",
  keywords: [
    'Careers at Ruman Accounting', 'Accounting Jobs', 'Finance Careers',
    'Job Openings', 'Work in Accounting', 'Financial Jobs',
    'Hiring Accountants', 'Accounting in Mumbai', 'Accounting in Pune', 'Accounting in Thane'
  ],
  verification: {
    google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
  },
  openGraph: {
    type: "website",
    title: 'Careers | Ruman Accounting Intelligence – Join Our Team of Financial Experts',
    description: 'Looking for a career in accounting and finance? Join Ruman Accounting Intelligence and grow with us.',
    url: 'https://rumanaccounting.com/career',
    siteName: 'Ruman Accounting Intelligence – Careers',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        width: 800,
        height: 600,
      },
    ],
  },
  alternates: {
    canonical: 'https://rumanaccounting.com/career',
  },
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
  },
};


export default function ContactStyleTwo() {

  return (
    <>
      <ToastContainer />
      <div className="overflow-x-hidden relative">
        <Link href="/contact">
          <div className="relative">
            <div className="w-[60px] h-[60px] rounded-full fixed bottom-5 right-5  text-center flex justify-center items-center cursor-pointer bg-blue hover:bg-black text-white z-50 ">
              <FaPhone className="text-white rotate-90 text-xl" />
            </div>
          </div>
        </Link>
        <header id="header">

          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Career"
            img="/images/banner/career.png"
            title="Career"
            desc="Join our team at Ruman Accounting Services LLP and be part of a dynamic, innovative environment where experienced professionals and aspiring talent come together to shape the future of accounting and financial services"
          />
          <CareerTable />
          <CareerForm />
          {/* <CtaOne /> */}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
