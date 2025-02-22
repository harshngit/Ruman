

import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { client } from "@/client";
import { useRouter } from "next/router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import ContactForm from "@/components/Section/Contact/ContactForm";

export const metadata = {
  title: "Contact Us | Ruman Accounting Intelligence – Get in Touch for Expert Accounting Solutions",
  description: "Reach out to Ruman Accounting Intelligence for expert financial and accounting solutions. We are here to assist you with all your financial needs.",
  keywords: [
    'Contact Ruman Accounting', 'Accounting Support', 'Financial Consultation',
    'Customer Service', 'Accounting Help', 'Ruman Accounting Contact',
    'Accounting in Mumbai', 'Accounting in Pune', 'Accounting in Thane'
  ],
  verification: {
    google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
  },
  openGraph: {
    type: "website",
    title: 'Contact Us | Ruman Accounting Intelligence – Get in Touch for Expert Accounting Solutions',
    description: 'Need accounting help? Contact Ruman Accounting Intelligence for expert guidance and financial solutions.',
    url: 'https://rumanaccounting.com/contact',
    siteName: 'Ruman Accounting Intelligence – Contact Us',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
        width: 800,
        height: 600,
      },
    ],
  },
  alternates: {
    canonical: 'https://rumanaccounting.com/contact',
  },
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/log%2Frumanfavicon%20(1).png?alt=media&token=92f2b9d7-e9c1-4d25-ba9b-9d8e88f64742',
  },
};


export default function ContactStyleOne() {



  return (
    <>

      <ToastContainer />
      <div className="overflow-x-hidden">
        <header id="header">

          <MenuOne />
        </header>
        <main className="content">

          <BreadcrumbItem
            link="Contact us"
            img="/images/banner/contact.png"
            title="Contact us"
            desc="Explore our Contact Us page for prompt assistance from our dedicated team."
          />
          <ContactForm />
          <iframe
            className="h-[500px] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9891324769487!2d72.84667267520616!3d19.10813268210299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d55cac7bd%3A0x80eef891a93aad2d!2sShantadeep%20CHS!5e0!3m2!1sen!2sin!4v1730189283635!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
          {/* <CtaOne /> */}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
