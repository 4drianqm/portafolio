import React from "react";
import {
  FaLaravel,
  FaDatabase,
  FaReact,
  FaCss3,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import Image from "next/image"; // Importa Image de Next.js

export default function AboutMe() {
  return (
    <section className="h-screen flex items-center bg-gray-900 shadow-lg shadow-blue-500/50 py-12 mt-10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-yellow-500 to-pink-600 text-5xl">
            About me
          </span>
        </div>
        <div className="flex flex-col items-center mt-8">
          <p className="text-xl font-medium text-gray-300 text-center max-w-xl">
            Driven by my passion for innovation and fueled by the thrill of
            problem-solving, I thrive as a full-stack developer. Constantly
            seeking to expand my horizons and embrace new challenges, I immerse
            myself in the ever evolving world of technology. With an insatiable
            curiosity and a knack for finding ingenious solutions, Im dedicated
            to turning ideas into impactful realities.
          </p>
          <div className="flex flex-wrap justify-center mt-8">
            <FaLaravel className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <FaDatabase className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <FaReact className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <FaCss3 className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <SiMysql className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <FaDocker className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <FaJava className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <RiNextjsFill className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
            <IoLogoJavascript className="text-white text-4xl sm:text-5xl lg:text-6xl mx-4 my-2" />
          </div>
          <div className="flex justify-center mt-8">
            <Image
              src="/aboutme.jpeg"
              width={200}
              height={200}
              alt="Descripción de la imagen"
              className="rounded-full sm:h-200 sm:w-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
