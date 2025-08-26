// @flow strict
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent font-custom">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            |₷ő𝓊𝓻ā𝔟𝒽𒆜
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className="hidden md:flex mt-4 h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ARTICLES</div>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`fixed top-0 left-0 z-50 bg-black bg-opacity-75 w-full max-w-[420px] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center space-y-4">
          <li>
            <Link onClick={toggleSidebar} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-lg text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-lg text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-lg text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-lg text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">
              <div className="text-lg text-white transition-colors duration-300 hover:text-pink-600">ARTICLES</div>
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-lg text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        @media (max-width: 420px) {
          .text-lg {
            font-size: .8rem;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
