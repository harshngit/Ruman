"use client"

import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { client } from "@/client";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image"
import { FaPhone } from "react-icons/fa";
import Link from "next/link";


export default function ContactStyleTwo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [resume, setResume] = useState("")
  // const router = useRouter()

  const [careerEntries, setCareerEntries] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "careerEntry"]{ position, experience, form }`)
      .then((data) => setCareerEntries(data))
      .catch(console.error);
  }, []);





  const sendMessage = async () => {
    console.log(resume)
    const doc = {
      _type: "career",
      name: name,
      email: email,
      phone: phone,
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
          {careerEntries.length !== 0 && <div className="mt-16">
            <div className="flex justify-center flex-col gap-5 items-center mb-2">
              <div className="heading3 text-3xl">Explore Career Opportunities</div>
              <div className="text-xl lg:mr-0 lg:ml-0 text-center mr-5 ml-5">We’re looking for talent that’s ready to make an impact.</div>
            </div>
            <div className="lg:grid lg:grid-cols-3 mt-5 lg:mr-[150px] mr-5 ml-5 lg:ml-[150px] flex justify-center">
              <div className="flex justify-center lg:w-[100%] w-[33.3%]  items-center bg-blue py-3 px-3">
                <p className="lg:text-xl text-md text-white font-medium ">Position</p>
              </div>
              <div className="flex justify-center  lg:w-[100%] w-[33.3%] items-center bg-blue py-3 px-3">
                <p className="lg:text-xl text-md text-white font-medium ">Experience</p>
              </div>
              <div className="flex justify-center  lg:w-[100%] w-[33.3%] items-center bg-blue py-3 px-3">
                <p className="lg:text-xl text-md text-white font-medium ">Apply Now</p>
              </div>
            </div>
            {careerEntries?.map((item, index) => (
              <div key={index} className="lg:grid lg:grid-cols-3  lg:mr-[150px] mr-5 ml-5 lg:ml-[150px] flex justify-center">
                <div className="flex justify-center lg:w-[100%] w-[33.3%] items-center border-[1px] border-[#ccc]  py-3 px-3">
                  <p className="lg:text-xl text-md text-black font-medium text-center ">{item?.position}</p>
                </div>
                <div className="flex justify-center lg:w-[100%] w-[33.3%] items-center border-[1px] border-[#ccc]  py-3 px-3">
                  <p className="lg:text-xl text-md text-black font-medium  text-center s ">{item?.experience}</p>
                </div>
                <div className="flex justify-center lg:w-[100%] w-[33.3%] items-center border-[1px] border-[#ccc]  py-3 px-3">
                  <a href={item?.form} target="_blank" className="lg:px-4 px-2 lg:py-3 py-2 text-center bg-blue text-white rounded-md hover:text-blue hover:bg-white border-[1px]  border-blue cursor-pointer"> Apply Now</a>
                </div>


              </div>
            ))}
          </div>}
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex max-xl:flex-col xl:items-center justify-between gap-y-8">
              <div className="w-full xl:w-1/2">
                <Image width={630} height={400} src="/images/component/careersec.png" alt="" />
              </div>
              <div className="w-full xl:w-5/12 bg-white sm:p-10 p-8 rounded-2xl box-shadow">
                <div className="form-block flex flex-col justify-between gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="col-span-2">
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
                        type="number"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
      </div>
    </>
  );
}
