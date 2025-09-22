import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
});

export function TitleBar() {
  return (
    <section
      className={`w-full h-[30px] flex items-center px-2 border-b border-[#191d20] bg-[#1F2428] text-white text-[0.85rem] ${sourceSans.className}`}
    >
      {/* VSCode icon */}
      <Image src="/vscode.svg" width={15} height={15} alt="vscode-icon" />

      {/* Menu items */}
      <div className="hidden lg:flex items-center ml-4 space-x-2">
        <p className="cursor-pointer">File</p>
        <p className="cursor-pointer">Edit</p>
        <p className="cursor-pointer">View</p>
        <p className="cursor-pointer">Go</p>
        <p className="cursor-pointer">Run</p>
        <p className="cursor-pointer">Terminal</p>
        <p className="cursor-pointer">Help</p>
      </div>

      {/* Title */}
      <p className="flex-1 text-center px-2">Tumurtoo Davaajargal - Visual Studio Code</p>

      {/* Window buttons */}
      <div className="flex items-center space-x-2">
        <span className="w-3 h-3 bg-[#F1FA8C] rounded-full cursor-pointer"></span>
        <span className="w-3 h-3 bg-[#50FA7B] rounded-full cursor-pointer"></span>
        <span className="w-3 h-3 bg-[#FF5555] rounded-full cursor-pointer"></span>
      </div>
    </section>
  );
}
