"use client"

import Image from "next/image";
import Type from "./Type";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-pink-600">
              Hello! I'm {""}
            </span>
            <Type/>
          </h1>
          <p className="text-gray-400  text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur hic autem voluptatbusdam
            molestiae suscipit.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit text-black rounded-full mr-4 mb-2 bg-gradient-to-br from-yellow-400 to-pink-500 hover:bg-slate-200">
              Hire me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/profile.png"
              alt="profile"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
