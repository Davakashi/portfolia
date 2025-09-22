import { Source_Sans_3 } from "next/font/google";
import { SiNextdotjs } from "react-icons/si";
import { VscBell, VscCheck, VscError, VscSourceControl, VscWarning } from "react-icons/vsc";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
});

export default function BottomBar() {
  return (
    <footer className="bg-[#191a21] h-[25px] border-t border-t-[#191a21] text-[#e1e4e8] py-0 px-2 flex justify-between items-center text-[0.8rem] max-[600px]:text-[0.6rem]">
      <div className="flex items-center">
        <a
          href="https://github.com/Davakashi/portfolia"
          target="_blank"
          rel="noreferrer noopener"
          className={`flex mr-2 h-6 items-center py-0 px-[0.2rem] cursor-pointer ${sourceSans.className} hover:bg-[#4f4f52] text-white decoration-none max-[600px]:mr-2`}
        >
          <VscSourceControl className="mr-1" />
          <p>main</p>
        </a>
        <div
          className={`flex mr-2 h-6 items-center py-0 px-[0.2rem] cursor-pointer ${sourceSans.className} hover:bg-[#4f4f52] max-[600px]:mr-2`}
        >
          <VscError className="mr-1" />
          <p>0</p>&nbsp;&nbsp;
          <VscWarning className="mr-1" />
          <p>0</p>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`flex mr-2 h-6 items-center py-0 px-[0.2rem] cursor-pointer ${sourceSans.className} hover:bg-[#4f4f52] max-[600px]:mr-2`}
        >
          <SiNextdotjs className="mr-1" />
          <p>Powered by Next.js</p>
        </div>
        <div
          className={`flex mr-2 h-6 items-center py-0 px-[0.2rem] cursor-pointer ${sourceSans.className} hover:bg-[#4f4f52] max-[600px]:mr-2`}
        >
          <VscCheck className="mr-1" />
          <p>Prettier</p>
        </div>
        <div
          className={`flex mr-2 h-6 items-center py-0 px-[0.2rem] cursor-pointer ${sourceSans.className} hover:bg-[#4f4f52] max-[600px]:mr-2`}
        >
          <VscBell className="mr-1" />
        </div>
      </div>
    </footer>
  );
}
