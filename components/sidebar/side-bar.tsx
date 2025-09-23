"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscAccount, VscCode, VscEdit, VscFiles, VscGithubAlt, VscMail, VscSettings } from "react-icons/vsc";

const sidebarTopItems = [
  { Icon: VscFiles, path: "/" },
  { Icon: VscGithubAlt, path: "/github" },
  { Icon: VscCode, path: "/projects" },
  { Icon: VscEdit, path: "/experiences" },
  { Icon: VscMail, path: "/contact" },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: "/about" },
  { Icon: VscSettings, path: "/settings" },
];

export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside className="bg-[var(--sidebar-bg)] flex flex-col justify-between w-[4.5vw] min-[2000px]:w-[2.5vw] max-[1100px]:w-[6vw] max-[900px]:w-[8vw] max-[600px]:w-[10vw] h-calc(100vh - 55px)">
      <div>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)] ${pathname === path ? "border-l-2 border-l-[var(--accent-color)] " : ""}`}
            >
              <Icon
                size={16}
                fill={pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"}
                className="block mx-auto h-10 w-10 md:h-12 md:w-12 py-[0.6rem] md:py-[0.65rem]"
              />
            </div>
          </Link>
        ))}
      </div>
      <div>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div key={path} className="cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)]">
            <Link href={path}>
              <Icon
                fill={pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"}
                className="block mx-auto h-10 w-10 md:h-12 md:w-12 py-[0.6rem] md:py-[0.65rem]"
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
