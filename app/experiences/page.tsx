import { experiences } from "@/data/experiences";
import ExperienceCard from "./experience-card";

export default function Experiences() {
  return (
    <div className="max-w-[1200px] mx-auto h-full w-full px-4">
      <h1 className="text-2xl font-bold text-[var(--accent-color)] mb-6 tracking-[-0.03em] leading-[1.2] max-[900px]:text-xl">
        My Work Experience
      </h1>
      <p className="text-white/70 text-base mb-12 max-w-[600px] leading-6 max-[900px]:mb-8">
        Here are some of my professional experiences, internships, and projects that showcase my skills and
        contributions in software engineering.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-[900px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
}
