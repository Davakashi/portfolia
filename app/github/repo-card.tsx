import { VscEye, VscGithubAlt, VscLinkExternal, VscRepoForked, VscStarEmpty, VscTypeHierarchy } from "react-icons/vsc";

import { Repo } from "@/types";

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-[var(--article-bg)] rounded-[8px] p-5 h-full border-[#ffffff1a] relative overflow-hidden max-[400px]:p-4">
      <div className="flex justify-between items-start mb-3 flex-wrap gap-y-3 gap-x-2">
        <h3 className="repoCardTitle">{repo.name}</h3>
        {repo.language && (
          <div className="flex items-center gap-[0.3rem] text-[0.8rem] text-[#ffffffb3] py-[0.2rem] px-2 rounded-[4px] bg-[#ffffff0d] whitespace-nowrap">
            <VscTypeHierarchy className="text-[var(--accent-color)] text-[0.9rem]" />
            <span>{repo.language}</span>
          </div>
        )}
      </div>
      <p>{repo.description || "No description provided"}</p>
      <div className="flex justify-between items-center mt-auto pt-4 border-t-[#ffffff0d] flex-wrap gap-2">
        <div className="flex items-center gap-4 flex-wrap max-[400px]:gap-3">
          <div className="flex items-center text-[0.85rem] text-[#ffffffb3] whitespace-nowrap">
            <VscStarEmpty className="text-[var(--accent-color)] mr-[0.3rem] text-base" />
            {repo.stargazers_count}
          </div>
          <div>
            <VscRepoForked className="text-[var(--accent-color)] mr-[0.3rem] text-base" />
            {repo.forks}
          </div>
          <div>
            <VscEye className="text-[var(--accent-color)] mr-[0.3rem] text-base" />
            {repo.watchers}
          </div>
        </div>
        <div className="flex items-center gap-4 max-[400px]:gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="View Repository"
            className="opacity-70 transition-opacity duration-100 ease-in-out hover:opacity-100"
          >
            <VscGithubAlt className="text-[var(--accent-color)] mr-[0.3rem] text-base" />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" title="Visit Live Site">
              <VscLinkExternal className="text-[var(--accent-color)] mr-[0.3rem] text-base" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
