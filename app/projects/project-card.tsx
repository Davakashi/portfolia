import Image from "next/image";

import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[var(--article-bg)] flex flex-col rounded-[12px] cursor-pointer overflow-hidden relative h-250px border-[#ffffff14] transition-all duration-250 ease-in-out decoration-none text-inherit hover:border-[var(--accent-color)] hover:opacity-20"
    >
      <div className="p-7 flex flex-col justify-between h-full">
        <div className="bg-[#ffffff0d] w-[42px] h-[42px] rounded-[8px] flex items-center justify-center mb-5 border-[#ffffff1a]">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </div>
        <h3 className="text-[1.35rem] font-semibold mb-3 text-[var(--accent-color)]">{project.title}</h3>
        <p className="text-[0.9rem] leading-[1.5] text-[#ffffffcc] mb-4">{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
