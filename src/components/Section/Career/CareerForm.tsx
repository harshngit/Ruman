
"use client"
import React, { useState } from 'react'
import { client } from "@/client";
import { ToastContainer, toast } from 'react-toastify';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import emailjs from "emailjs-com";
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
const CareerForm = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [message, setMessage] = useState("")
	const [resume, setResume] = useState("")
	const [position, setPosition] = useState("")
	const sendMessage = async () => {
		console.log(resume)
		const doc = {
			_type: "career",
			name: name,
			email: email,
			phone: phone,
			position: position,
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
		// .then((res) => {
		//   toast.success("Message Sent");
		//   // setTimeout(() => window.location.reload(), 2000); // Add a delay before reload to allow the toast to display
		// })
		// .catch((error) => {
		//   toast.error("Failed to send message");
		//   console.error(error);
		// });


		// Email Js 

		const emailParams = {
			from_name: name,
			from_email: email,
			message: message,
			from_phn: phone,
			position: position,
		};
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_1 || "",
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
							<div className="col-span-2">
								<input
									className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
									type="text"
									placeholder="Position"
									value={position}
									onChange={(e) => setPosition(e.target.value)}
									name="position"
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
	)
}

export default CareerForm