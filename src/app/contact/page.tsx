


import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import Footer from "@/components/Footer/Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from "@/components/Section/Contact/ContactForm";
import { GoogleAnalytics } from "@next/third-parties/google"
export const metadata = {
  title: "Contact Ruman Accounting Service | Your Partner in Financial Excellence",
  description: "Connect with Ruman Accounting for expert financial guidance and tailored solutions. Let’s work together to achieve your business goals. Reach out today!",
  keywords: ['Ruman Accounting Services', 'Ruman Accounting Intelligence', 'Family Accounting', 'Accounting Intelligence', 'Accouting Services', 'Accounting', 'Accounting in Mumbai', ' Accounting in Pune', "Accounting in Thane", 'Accounting for startups'],
  verification: {
    google: 'GgyyKHIryfr_5yxyEl0so5VwdH3xU0rPUZwKv310XNQ',
  },
  openGraph: {
    type: "website",
    title: 'Contact Ruman Accounting Service | Your Partner in Financial Excellence',
    description: 'Connect with Ruman Accounting for expert financial guidance and tailored solutions. Let’s work together to achieve your business goals. Reach out today!',
    url: 'https://rumanaccounting.com/contact',
    siteName: 'Ruman Accounting Intelligence',
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
      <GoogleAnalytics gaId="G-CZ1CKKJML1" />
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
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
