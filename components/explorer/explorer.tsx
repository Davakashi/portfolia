"use client";

import { useState } from "react";
import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
});

const explorerItems = [
  {
    name: "home.tsx",
    path: "/",
    icon: "/logos/react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "/logos/html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "/logos/css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "/logos/js_icon.svg",
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: "/logos/json_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "/logos/markdown_icon.svg",
  },
];

export default function Explorer() {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  return (
    <div
      className={`bg-[var(--explorer-bg)] w-[18vw] max-[900px]:w-[20vw] min-[2000px]:w-[10vw] max-[600px]:hidden text-[#e1e4e8] ${sourceSans.className} border-r border-r-[var(--explorer-border)]`}
    >
      <p className="py-2 px-3 font-light uppercase text-[0.9rem] tracking-[1px] mb-3">Explorer</p>
      <div>
        <input
          type="checkbox"
          className="absolute opacity-0 -z-10"
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label
          htmlFor="portfolio-checkbox"
          className="uppercase font-bold text-[0.8rem] tracking-[1px] flex items-center cursor-pointer py-0 px-2"
        >
          <VscChevronRight
            className="transition-transform duration-[20ms]"
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div className="py-2 px-0 cursor-pointer">
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.path}>
              <div className="py-1 px-4 flex items-center text-[0.875rem] text-white decoration-none hover:bg-[var(--explorer-hover-bg)]">
                <Image src={item.icon} alt={item.name} height={18} width={18} /> <p className="ml-1.5">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
