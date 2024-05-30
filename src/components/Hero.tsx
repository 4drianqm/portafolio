"use client";

import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io";
import Link from 'next/link';
import Type from "./Type";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center lg:flex-row">
      <div className="text-center sm:text-left">
        <h1 className="mb-4 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-pink-600">
            Hello! I'm {""}
          </span>
          <Type />
        </h1>
        <p className="text-[#EEEEEE] text-base sm:text-lg mb-6 lg:text-xl">
          In the digital world, software development drives innovation and
          solves challenges. Every line of code is an opportunity to turn ideas
          into reality and move forward into the future.
        </p>
        <div className="flex flex-col lg:flex-row items-center align-middle">
        <a href="https://www.linkedin.com/in/adrian-qm/">
          <button className=" flex items-center px-6 py-3 mr-3 w-full sm:w-auto text-black rounded-full mb-2 bg-gradient-to-br from-yellow-400 to-pink-500 hover:bg-slate-200">
                  Hire me
          <IoLogoLinkedin className="ml-2 text-xl"/>
          </button>
        </a>
          <a href="https://drive.google.com/file/d/1m0ka8iIai3z5e-Q9bT5ktVlpGoAKqumB/view?usp=sharing">
          <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-transparent hover:bg-slate-800 text-white border border-white" >
            Download CV
          </button>
          </a>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <div className="rounded-full bg-[#76ABAE] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/adrian.png"
            alt="profile"
            width={300}
            height={300}
            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      </div>
    </section>
  );
}
