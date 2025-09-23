import Image from "next/image";
import { VscBriefcase, VscCalendar, VscTools } from "react-icons/vsc";

import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col bg-[var(--article-bg)] rounded-2xl overflow-hidden text-white h-full relative border border-white/5 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group">
      {/* Logo */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={experience.logo}
          alt={experience.company}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-6 flex-1">
        <h3 className="text-[var(--accent-color)] text-lg font-bold leading-tight">{experience.role}</h3>
        <p className="text-white/85 text-sm flex-1">{experience.description}</p>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-1 text-white/75 text-sm">
            <VscCalendar className="text-[var(--accent-color)] w-4 h-4" />
            {experience.period}
          </div>
          <div className="flex items-center gap-1 text-white/75 text-sm">
            <VscBriefcase className="text-[var(--accent-color)] w-4 h-4" />
            {experience.type}
          </div>
          <div className="flex items-center gap-1 text-white/75 text-sm flex-1 flex-wrap">
            <VscTools className="text-[var(--accent-color)] w-4 h-4" />
            {experience.tech.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
