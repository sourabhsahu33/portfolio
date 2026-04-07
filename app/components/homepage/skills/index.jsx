"use client";

import { skillsData } from "@/utils/data/skills";

const skillIcons = {
  'HTML': 'fab fa-html5',
  'CSS': 'fab fa-css3-alt',
  'Javascript': 'fab fa-js-square',
  'Java': 'fab fa-java',
  'C++': 'fas fa-code',
  'React': 'fab fa-react',
  'Next JS': 'fab fa-react',
  'Tailwind': 'fab fa-css3',
  'MongoDB': 'fas fa-database',
  'MySQL': 'fas fa-database',
  'Git': 'fab fa-git-alt',
  'Bootstrap': 'fab fa-bootstrap',
  'Docker': 'fab fa-docker',
  'GCP': 'fab fa-google',
  'Canva': 'fas fa-paint-brush',
  'Ubuntu': 'fab fa-ubuntu',
  'MaterialUI': 'fas fa-palette',
  'Azure': 'fab fa-microsoft',
  'kali': 'fab fa-linux',
};

function Skills() {
  const doubled = [...skillsData, ...skillsData];

  return (
    <section id="skills" className="my-16">
      <div className="sec-divider"></div>

      <div className="section-title">
        <span className="num">03.</span>
        <h2>Tech Stack</h2>
      </div>

      <div className="skills-marquee">
        <div
          className="flex gap-3"
          style={{
            animation: 'scroll-marquee 35s linear infinite',
            width: 'max-content',
          }}
        >
          {doubled.map((skill, i) => (
            <div
              key={i}
              className="bg-[#111114] border border-[#222228] rounded px-4 py-2 flex items-center gap-2 text-[0.72rem] text-[#c8cad8] whitespace-nowrap transition-all duration-200 cursor-default hover:border-[#00e5a0] hover:text-[#00e5a0] hover:bg-[rgba(0,229,160,0.05)]"
            >
              <i className={`${skillIcons[skill] || 'fas fa-code'} text-base`}></i>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
