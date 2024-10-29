"use client"

import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { client } from "@/client";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactStyleTwo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [resume, setResume] = useState("")
  // const router = useRouter()

  const sendMessage = async () => {
    console.log(resume)
    const doc = {
      _type: "career",
      name: name,
      email: email,
      company: company,
      message: message,
      resume: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: resume?._id,
        },
      }
    }
    client.create(doc)
      .then((res) => {
        toast.success("Message Sent");
        // setTimeout(() => window.location.reload(), 2000); // Add a delay before reload to allow the toast to display
      })
      .catch((error) => {
        toast.error("Failed to send message");
        console.error(error);
      });
  };
  const handleupload = (e) => {
    const { type, name } = e.target.files[0];
    client.assets
      .upload("file", e.target.files[0], {
        contentType: type,
        filename: name,
      })
      .then((document) => {
        setResume(document);

      })
      .catch((error) => {
        console.log("Image upload error", error);
      });
  }

  return (
    <>
      <ToastContainer />
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Career"
            img="/images/banner/CareerBanner.png"
            title="Career"
            desc="Join our team at Ruman Accounting Services LLP and be part of a dynamic, innovative environment where experienced professionals and aspiring talent come together to shape the future of accounting and financial services"
          />
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex max-xl:flex-col xl:items-center justify-between gap-y-8">
              <div className="w-full xl:w-1/2">
                <img className="w-[600px]" src="images/component/careerInfo (1).png" alt="" />
              </div>
              <div className="w-full xl:w-5/12 bg-white sm:p-10 p-8 rounded-2xl box-shadow">
                <div className="form-block flex flex-col justify-between gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="w-full max-sm:col-span-2">
                      <input
                        className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        required
                      />
                    </div>
                    <div className="w-full max-sm:col-span-2">
                      <input
                        className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Current Company"
                        name="company"
                        required
                      />
                    </div>
                    <div className="col-span-2 w-full">
                      <textarea
                        className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-span-2 w-full">
                      <input type="file"
                        // value={resume}
                        accept=".pdf"
                        onChange={handleupload}
                        name="resume"
                        className="bg-surface w-full text-secondary caption1 px-4 py-3 rounded-lg"
                        placeholder="Upload Resume"
                      />
                    </div>
                  </div>
                  <div className="button-block">
                    <button onClick={sendMessage} className="button-main hover:border-blue bg-blue text-white text-button rounded-full">
                      Submit request
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* <CtaOne /> */}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div >
    </>
  );
}
