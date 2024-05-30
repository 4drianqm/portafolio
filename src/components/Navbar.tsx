"use client"


import NavLink from "@/components/NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Proyectos",
    path: "#proyects",
  },
  {
    title: "Experiencia",
    path: "#experience",
  },
  {
    title: 'Blog',
    path: '/blog'
  }
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100">
      <div className="flex justify-between items-center mx-auto p-4">
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-gray-300 text-gray-300 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 sm:space-x-0 sm:space-y-2">
            {/* {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.path} />
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
