"use client";

import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
});

interface TabProps {
  icon: string;
  filename: string;
  path: string;
}
const Tab = ({ icon, filename, path }: TabProps) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <div
        className={`py-2 px-5 bg-[--var(--tab-bg)] text-[#ececec] flex items-center border-[var(--tab-border)] ${sourceSans.className} text-[0.9rem] cursor-pointer ${pathname === path && "border-t border-t-[var(--accent-color)] bg-[var(--tab-active-bg)] border-b-0"}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className="mr-2">{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
