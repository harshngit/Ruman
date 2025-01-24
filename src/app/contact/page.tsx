"use client"

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

export default function ContactStyleOne() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  // const router = useRouter();

  const sendMessage = async () => {
    const doc = {
      _type: "contact",
      name: name,
      email: email,
      subject: subject,
      message: message,
      phone: phone
    };

    client.create(doc);


    // Email Js

    // const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    // const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    // const userID = process.env.NEXT_PUBLIC_USER_ID;


    const emailParams: { [key: string]: string } = {
      from_name: name,
      from_email: email,
      message: message,
      from_phn: phone,
      from_subject: subject,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )

      .then((res) => {
        toast.success("Message Sent")
        setTimeout(() => window.location.reload(), 5000); // Add a delay before reload to allow the toast to display
      })
      .catch((error) => {
        toast.error("Failed to send message");
        console.error(error);
      });

  };



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
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex items-center justify-center">
              <div className="xm:w-5/6 w-full flex max-xl:flex-col xl:items-center gap-y-8">
                <div className="w-full xl:w-2/5">
                  <div className="infor bg-blue rounded-xl p-10">
                    <div className="heading5 text-white">Get it touch</div>
                    <div className="body3 text-white mt-2">
                      We will get back to you within 24 hours
                    </div>
                    {/* <div className="list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6">
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <i className="icon-facebook text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.linkedin.com/"
                        target="_blank"
                      >
                        <i className="icon-in text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.twitter.com/"
                        target="_blank"
                      >
                        <i className="icon-twitter text-sm text-black ml-1"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <i className="icon-insta text-sm text-black"></i>
                      </a>
                      <a
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                        href="https://www.youtube.com/"
                        target="_blank"
                      >
                        <i className="icon-youtube text-xs text-black"></i>
                      </a>
                    </div> */}
                    <div className="list-more-infor md:mt-10 mt-6">
                      <div className="item flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Clock
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          9AM - 7PM, Mon - Sun
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Phone
                            weight="fill"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button normal-case text-white">
                          98216 14306
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.EnvelopeSimple
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button normal-case text-white">
                          info@rumanaccounting.com
                        </div>
                      </div>
                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.MapPin
                            weight="bold"
                            className="text-blue text-2xl"
                          />
                        </div>
                        <div className="line-y"> </div>
                        <div className="text-button capitalize  text-white">
                          301, Shantadeep CHS LTD.,Tejpal Scheme NO.2, Ville Parle (E), Mumbai-400057
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-3/5 xl:pl-20">
                  <div className="form-block flex flex-col justify-between gap-5">
                    <div className="heading">
                      <div className="heading5">Reach Out to Us</div>
                      <div className="body3 text-secondary mt-2">
                        Our Team with Get Back to You
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="w-full">
                        <input
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          name="name"
                          required
                          id="name"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          name="phone"
                          required
                          id="phone"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="w-full col-span-2">
                        <input
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Subject"
                          name="subject"
                          required
                          id="subject"
                        />
                      </div>
                      <div className="col-span-2 w-full">
                        <textarea
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          id="message"
                          placeholder="Your Message"
                          required
                        ></textarea>
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
          </div>
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
