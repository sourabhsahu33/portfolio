// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="py-20 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* LEFT - Text */}
      <div>
        <div className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase text-[#00e5a0] border border-[rgba(0,229,160,0.2)] px-3 py-1 rounded mb-6">
          <span className="w-1.5 h-1.5 bg-[#00e5a0] rounded-full" style={{ animation: 'pulse 2s ease infinite' }}></span>
          Available for opportunities
        </div>

        <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-[#eeeef4] mb-2 font-sans">
          Hi, I&apos;m
          <span className="block text-[#00e5a0]">{personalData.name}</span>
          <span className="text-[#5b8fff]">{personalData.designation}</span>
        </h1>

        <p className="text-[0.82rem] leading-[1.8] text-[#555566] my-6 max-w-[420px]">
          Full-stack dev with a cybersecurity edge. I build things for the web — from MERN apps to .NET APIs — and sometimes break them (on purpose, mostly).
        </p>

        {/* Social icons */}
        <div className="flex gap-3 mb-8">
          {[
            { href: personalData.github, icon: <BsGithub size={16} /> },
            { href: personalData.linkedIn, icon: <BsLinkedin size={16} /> },
            { href: personalData.medium, icon: <FaMedium size={16} /> },
            { href: personalData.leetcode, icon: <SiLeetcode size={16} /> },
            { href: personalData.twitter, icon: <FaTwitterSquare size={16} /> },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target="_blank"
              className="w-9 h-9 border border-[#222228] rounded-md flex items-center justify-center text-[#555566] transition-all duration-200 hover:border-[#00e5a0] hover:text-[#00e5a0] hover:bg-[rgba(0,229,160,0.06)] hover:-translate-y-0.5"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 flex-wrap">
          <Link
            href="#contact"
            className="text-[0.72rem] tracking-[0.1em] uppercase text-[#0c0c0e] bg-[#00e5a0] px-6 py-2.5 rounded transition-all duration-200 hover:bg-[#00ffb3] hover:shadow-[0_0_20px_rgba(0,229,160,0.35)] font-mono"
          >
            get in touch
          </Link>
          <Link
            href={personalData.resume}
            target="_blank"
            className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c8cad8] bg-transparent border border-[#333340] px-6 py-2.5 rounded transition-all duration-200 hover:border-[#c8cad8] hover:text-[#eeeef4] font-mono"
          >
            resume ↗
          </Link>
        </div>
      </div>

      {/* RIGHT - Terminal */}
      <div className="bg-[#0a0a0c] border border-[#222228] rounded-lg overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
        <div className="bg-[#18181c] px-4 py-3 flex items-center gap-2 border-b border-[#222228]">
          <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-[#febc2e]"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]"></div>
          <span className="ml-auto text-[0.65rem] text-[#555566] tracking-[0.08em]">sourabh.js — node</span>
        </div>
        <div className="p-6 text-[0.78rem] leading-[2] font-mono">
          <div><span className="text-[#555566] italic">{'// who I am'}</span></div>
          <div><span className="text-[#5b8fff]">const</span> <span className="text-[#eeeef4]">dev</span> <span className="text-[#5b8fff]">=</span> <span className="text-[#666]">{'{'}</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">name:</span> <span className="text-[#f9c784]">&apos;Sourabh Sahu&apos;</span><span className="text-[#666]">,</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">role:</span> <span className="text-[#f9c784]">&apos;Enterprise Software Engineer I&apos;</span><span className="text-[#666]">,</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">company:</span> <span className="text-[#f9c784]">&apos;Medtronic [MEIC]&apos;</span><span className="text-[#666]">,</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">stack:</span> <span className="text-[#666]">[</span><span className="text-[#f9c784]">&apos;.NET Core&apos;</span>, <span className="text-[#f9c784]">&apos;Angular&apos;</span>, <span className="text-[#f9c784]">&apos;Azure&apos;</span><span className="text-[#666]">],</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">loves:</span> <span className="text-[#666]">[</span><span className="text-[#f9c784]">&apos;clean code&apos;</span>, <span className="text-[#f9c784]">&apos;security&apos;</span><span className="text-[#666]">],</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">hardWorker:</span> <span className="text-[#ff6b6b]">true</span><span className="text-[#666]">,</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">quickLearner:</span> <span className="text-[#ff6b6b]">true</span><span className="text-[#666]">,</span></div>
          <div className="pl-6"><span className="text-[#5b8fff]">hireable:</span> <span className="text-[#ff6b6b]">true</span><span className="text-[#666]">,</span></div>
          <div><span className="text-[#666]">{'};'}</span></div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[#00e5a0]">$</span>
            <span className="inline-block w-[7px] h-3.5 bg-[#00e5a0]" style={{ animation: 'blink 1.2s step-end infinite' }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
