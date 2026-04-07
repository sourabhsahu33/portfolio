// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about" className="my-16">
      <div className="sec-divider"></div>

      <div className="section-title">
        <span className="num">01.</span>
        <h2>About</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative group">
          <Image
            src={personalData.profile}
            width={400}
            height={400}
            alt="Sourabh Sahu"
            className="w-full rounded-md border border-[#222228] transition-all duration-[600ms] grayscale-[80%] contrast-[1.1] group-hover:grayscale-0 group-hover:border-[#00e5a0]"
          />
          <div className="absolute inset-0 border border-[#00e5a0] rounded-md opacity-20 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" style={{ top: '8px', right: '-8px', bottom: '-8px', left: '8px' }}></div>
        </div>

        <div className="text-[0.83rem] leading-[1.9] text-[#c8cad8]">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#00e5a0] mb-5">{'// who am i'}</p>
          <p className="mb-5">
            I&apos;m <strong className="text-[#00e5a0] font-medium">Sourabh Sahu</strong>, a software engineer currently working at <strong className="text-[#00e5a0] font-medium">Medtronic</strong> building enterprise-grade healthcare applications. My day-to-day is .NET Core backends, Angular frontends, and Azure DevOps pipelines — but I got here through a 5-year journey in Computer Science with a deep dive into Cybersecurity.
          </p>
          <p className="mb-5">
            I&apos;m the kind of dev who writes the feature, then tries to break it. I&apos;ve done ethical hacking coursework, written technical content for <strong className="text-[#00e5a0] font-medium">GeeksforGeeks</strong>, and worked on security at the Virtually Testing Foundation.
          </p>
          <p>
            Outside of work: building side projects (usually MERN stack), grinding DSA on LeetCode, writing on Medium, and occasionally being humbled by cryptography puzzles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
