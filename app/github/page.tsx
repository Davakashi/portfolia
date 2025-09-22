import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { VscPerson, VscRepo } from "react-icons/vsc";

import { Repo, User } from "@/types";
import RepoCard from "./repo-card";

export default async function GithubPage() {
  const userRes = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`);
  const user: User = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
  );
  const repos: Repo[] = await repoRes.json();

  return (
    <div className="max-w-[900px] my-0 mx-auto h-full w-full">
      <div className="flex flex-col text-center items-center pt-12">
        <h1 className="text-[2rem] font-bold text-[var(--accent-color)] mb-6 tracking-[-0.03em] leading-[1.2] max-[768px]:text-[1.75rem]">
          GitHub
        </h1>
        <p className="text-[1.1rem] font-normal text-[#ffffffb3] mb-12 max-w-[600px] leading-[1.6] max-[768px]:text-base max-[768px]:mb-8">
          Browse through my GitHub repositories and see what I&apos;ve been working on. These are some of my public
          repositories showcasing various projects and skills.
        </p>
      </div>

      <div className="w-full py-4 px-0">
        <div className="bg-[var(--article-bg)] rounded-[8px] p-8 mb-8 border-[#ffffff1a] w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 py-0 px-8 max-[768px]:flex-col max:[768px]:items-center">
            <Image
              src={user.avatar_url}
              className="rounded-full border-[3px] border-[var(--accent-color)] w-[100px] h-[100px] max-[600px]:w-20 max-[600px]:h-20"
              alt={user.login}
              width={100}
              height={100}
              priority
            />
            <div className="flex flex-col items-center gap-8 max-[768px]:w-full">
              <h2 className="username">{user.login}</h2>
              <div className="flex gap-6 max-[600px]:flex-col max-[600px]:gap-3">
                <div className="flex items-center gap-2 text-[0.9rem] text-[var(--text-secondary)] ">
                  <VscRepo className="text-[var(--accent-color)]" />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className="flex items-center gap-2 text-[0.9rem] text-[var(--text-secondary)]">
                  <VscPerson className="text-[var(--accent-color)]" />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 mb-4">
          <h3 className="text-[1.2rem] font-semibold m-0 max-[600px]:text-[1.2rem]">Popular Repositories</h3>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 mb-8 max-[768px]:grid-cols-1 [@media(min-width:768px)_and_(max-width:900px)]:grid-cols-2">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
        <div className="bg-[var(--article-bg)] rounded-[8xl] p-6 border-[#ffffff1a] w-full overflow-x-auto contributions max-[1200px]:hidden">
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
            hideColorLegend
            hideMonthLabels
            colorScheme="dark"
            theme={{
              dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              light: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
