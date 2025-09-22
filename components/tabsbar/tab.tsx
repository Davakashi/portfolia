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
        className={`py-2 px-5 bg-[#21222c] text-[#ececec] flex items-center border border-[#191a21] ${sourceSans.className} text-[0.9rem] cursor-pointer ${pathname === path && "border-t border-t-[#f9826c] bg-[#282a36] border-b-0"}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className="ml-1.5">{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
