"use client";

import Image from "next/image";

interface ThemeInfoProps {
  icon: string;
  name: string;
  publisher: string;
  theme: string;
}

const ThemeInfo = ({ icon, name, publisher, theme }: ThemeInfoProps) => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex flex-col items-center my-2 text-center p-8 bg-[var(--explorer-bg)] rounded-[4px] border-transparent relative max-[768px]:p-3">
      <div className="w-20 h-20 flex items-center justify-center p-1 mb-2 ">
        <Image src={icon} alt={name} height={80} width={80} className="object-contain" />
      </div>
      <div className="mt-3 flex flex-col justify-between w-full">
        <div>
          <h3 className="text-[0.95rem] mb-[0.15rem] text-[var(--text-color)] max-[768px]:text-[0.9rem]">{name}</h3>
          <h5 className="text-[0.75rem] text-[#ffffff99] mb-3 font-normal">{publisher}</h5>
        </div>
        <button
          onClick={() => setTheme(theme)}
          className="mt-2 border-none bg-[var(--button-bg)] text-[var(--button-text)] py-[0.35rem] px-2 font-semibold cursor-pointer rounded-xs w-full text-[0.8rem] focus:outline-1 focus:outline-[var(--accent-color)]"
        >
          Set Color Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
