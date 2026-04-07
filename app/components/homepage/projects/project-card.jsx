// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {
  // Map project name to a fake filename
  const fileNames = {
    1: 'apna-bundelkhand/index.js',
    2: 'enigma-machine/cipher.java',
    3: 'agri-market/server.js',
    4: 'ml-prediction/app.py',
  };

  const stackLabel = project.tools.includes('React.js') || project.tools.includes('Node.js')
    ? 'MERN'
    : project.tools.includes('Java')
    ? 'Java'
    : project.tools.includes('Django')
    ? 'Python / Django'
    : 'Full Stack';

  return (
    <div className="bg-[#111114] border border-[#222228] rounded-lg overflow-hidden transition-colors duration-200 hover:border-[#333340]">
      {/* Header bar */}
      <div className="bg-[#18181c] px-5 py-2.5 flex items-center gap-2 border-b border-[#222228]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
        <span className="text-[0.72rem] text-[#555566] ml-3 tracking-[0.05em]">
          {fileNames[project.id] || `project-${project.id}/index.js`}
        </span>
        <span className="text-[0.65rem] text-[#00e5a0] ml-auto">{stackLabel}</span>
      </div>

      {/* Body */}
      <div className="p-5 text-[0.77rem] leading-[1.9] font-mono">
        <div className="flex flex-wrap gap-1 items-baseline">
          <span className="text-[#5b8fff] min-w-[90px]">project</span>
          <span className="text-[#555566] mr-2">:</span>
          <span className="text-[#f9c784]">&quot;{project.name.replace(/➡️\s*/g, '')}&quot;</span>
        </div>

        <div className="flex flex-wrap gap-1 items-baseline mt-2">
          <span className="text-[#5b8fff] min-w-[90px]">description</span>
          <span className="text-[#555566] mr-2">:</span>
          <span className="text-[#c8cad8] max-w-[620px]">{project.description}</span>
        </div>

        <div className="flex flex-wrap gap-1 items-baseline mt-1">
          <span className="text-[#5b8fff] min-w-[90px]">role</span>
          <span className="text-[#555566] mr-2">:</span>
          <span className="text-[#00e5a0]">{project.role}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tools.map((tag, i) => (
            <span
              key={i}
              className="text-[0.65rem] tracking-[0.05em] px-2.5 py-0.5 rounded bg-[rgba(91,143,255,0.08)] border border-[rgba(91,143,255,0.2)] text-[#5b8fff]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
