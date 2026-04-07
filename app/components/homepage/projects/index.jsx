import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <section id="projects" className="my-16">
      <div className="sec-divider"></div>

      <div className="section-title">
        <span className="num">04.</span>
        <h2>Projects</h2>
      </div>

      <div className="flex flex-col gap-4">
        {projectsData.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
