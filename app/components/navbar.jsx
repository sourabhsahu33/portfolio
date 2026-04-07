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

  const navItems = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];

  return (
    <nav className="sticky top-0 z-[100] border-b border-[#222228]" style={{ background: 'rgba(12,12,14,0.85)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 text-[0.8rem] font-medium text-[#00e5a0] tracking-[0.05em] font-mono">
            <span className="text-[#555566]" style={{ animation: 'blink 1.2s step-end infinite' }}>&gt;</span>
            sourabhsahu
            <span className="inline-block w-2 h-3.5 bg-[#00e5a0]" style={{ animation: 'blink 1.2s step-end infinite' }}></span>
          </Link>

          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-[#c8cad8] border border-[#222228] rounded px-2 py-1 text-sm">
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

          <ul className="hidden md:flex items-center gap-1 list-none">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  className="text-[0.7rem] tracking-[0.12em] uppercase text-[#555566] px-3 py-1.5 rounded transition-all duration-200 hover:text-[#00e5a0] hover:bg-[rgba(0,229,160,0.06)]"
                  href={`/#${item}`}
                >
                  <span className="text-[#333340]">./</span>{item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 z-[200] w-full h-screen transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden flex flex-col items-center justify-center gap-4`}
        style={{ background: 'rgba(12,12,14,0.97)' }}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-6 right-6 text-[#c8cad8] border border-[#222228] rounded-md w-9 h-9 flex items-center justify-center"
        >
          <FaTimes size={18} />
        </button>
        {navItems.map((item) => (
          <Link
            key={item}
            onClick={toggleSidebar}
            className="text-base tracking-[0.12em] uppercase text-[#555566] px-3 py-2 rounded transition-all duration-200 hover:text-[#00e5a0]"
            href={`/#${item}`}
          >
            <span className="text-[#333340]">./</span>{item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
