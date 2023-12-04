import React, { useState } from "react";
import contactimgg from "../public/assets/contactimg.png";
import Image from "next/image";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from "next/link";

const Contact = () => {

const [name, setName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');

const onSubmit = (e) => {
  e.preventDefault()
  console.log('Data', name, phoneNumber, email, subject, message)
  
}

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactimgg}
                  width={485}
                  alt="contact photo"
                />
              </div>
              <div>
                <h2 className="py-2">Elmer Reyes</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am availible for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                <a href='https://www.linkedin.com/in/elmer-reyes-56091221b/'>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  </a>
                  <a href='https://github.com/Erey2790'>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  </a>
                  <a href='mailto:erey2790@gmail.com'>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  </a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                <div className="p-4">
                    <form onSubmit={onSubmit}>
                        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                            <div className="flex flex-col">
                                <label className="uppercase text-sm py-2">Name</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" onChange={(e) => setName(e.target.value)} value={name} type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="uppercase text-sm py-2">Phone Number</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" />
                            </div>
                        </div>

                        <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300"onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
                        </div>

                        <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" onChange={(e) => setSubject(e.target.value)} value={subject} type="text" />
                        </div>

                        <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg p-3  border-gray-300"  onChange={(e) => setMessage(e.target.value)} type ='text' value={message} rows='10'></textarea>
                        </div>

                        <button type="submit" className="w-full p-4 text-gray-700 mt-4">Send Message</button>
                    </form>
                </div>
            </div>


        </div>

          {/* scroll button */}
          <div className="flex justify-center py-12">
            <Link href='/'>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
              </div>
            </Link>
          </div>

      </div>
    </div>
  );
};

export default Contact;
