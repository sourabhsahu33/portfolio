// @flow strict

import { experiences } from "@/utils/data/experience";
import { educations } from "@/utils/data/educations";

function Experience() {
  return (
    <section id="experience" className="my-16">
      <div className="sec-divider"></div>

      <div className="section-title">
        <span className="num">02.</span>
        <h2>Experience & Education</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Work History */}
        <div>
          <h3 className="text-[0.7rem] tracking-[0.15em] uppercase text-[#555566] mb-4 font-sans">{'// work history'}</h3>
          <div className="flex flex-col gap-[1px]">
            {experiences.map((exp) => (
              <div key={exp.id} className="tl-item">
                <p className="text-[0.65rem] tracking-[0.1em] text-[#00e5a0] mb-2">{exp.duration}</p>
                <p className="text-base font-semibold text-[#eeeef4] mb-1 font-sans">{exp.title}</p>
                <p className="text-[0.75rem] text-[#555566]">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div id="education">
          <h3 className="text-[0.7rem] tracking-[0.15em] uppercase text-[#555566] mb-4 font-sans">{'// education'}</h3>
          <div className="flex flex-col gap-[1px]">
            {educations.map((edu) => (
              <div key={edu.id} className="tl-item">
                <p className="text-[0.65rem] tracking-[0.1em] text-[#00e5a0] mb-2">{edu.duration}</p>
                <p className="text-base font-semibold text-[#eeeef4] mb-1 font-sans">{edu.title}</p>
                <p className="text-[0.75rem] text-[#555566]">{edu.institution}</p>
                <p className="text-[0.72rem] text-[#5b8fff] mt-1">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
