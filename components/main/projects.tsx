import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10" // ↓ reduced from py-20 → py-10
    >
      {/* Title */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 mb-10"> 
        {/* ↓ replaced py-20 with mb-10 for tighter spacing */}
        My Projects
      </h1>

      {/* Cards */}
      <div className="h-full w-full flex flex-col md:flex-row gap-8 px-8 md:px-10 justify-center items-center">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
