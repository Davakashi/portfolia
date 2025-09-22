import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="max-w-[1200px] w-full my-0 mx-auto h-full">
      <h1 className="text-[2rem] font-bold text-[var(--accent-color)] mb-4 tracking-[-0.03em] leading-[1.2] max-[768px]:text-[1.75rem]">
        My Projects
      </h1>
      <p className="text-base font-normal text-[#ffffffb3] mb-12 max-w-[600px] leading-[1.6] max-[600px]:text-base max-[600px]:mb-8">
        Here&apos;s a collection of my recent work. These projects showcase my skills in web development, design, and
        problem-solving.
      </p>

      <div className="my-8 mx-0 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
