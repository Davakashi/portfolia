"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

const typeClasses: Record<string, string> = {
  function: "text-[#c586c0]",
  variable: "text-[#9cdcfe]",
  "array-start": "text-[#dcdcaa]",
  "array-end": "text-[#dcdcaa]",
  "array-item": "text-[#ce9178]",
  "nested-function": "text-[#c586c0]",
  return: "text-[#dcdcaa]",
  "function-call": "text-[#4ec9b0]",
  close: "text-[#808080]",
  "close-function": "text-[#808080]",
  "return-object": "text-[#9cdcfe]",
  "object-method": "text-[#dcdcaa]",
  comment: "text-[#6a9955]",
  blank: "h-5",
};

export default function Home() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: "const HomePage = () => {", type: "function" },
    {
      code: "  const [isLoaded, setIsLoaded] = useState(true);",
      type: "variable",
    },
    { code: "  const developerInfo = {", type: "variable" },
    { code: "    name: 'Davaajargal Tumurtogoo',", type: "array-item" },
    { code: "    role: 'Full Stack Developer',", type: "array-item" },
    { code: "    bio: 'Creating beautiful, functional web apps'", type: "array-item" },
    { code: "  };", type: "array-end" },
    { code: "", type: "blank" },
    { code: "  useEffect(() => {", type: "nested-function" },
    {
      code: "    document.title = `${developerInfo.name} | Portfolio`;",
      type: "return",
    },
    { code: "    setIsLoaded(true);", type: "function-call" },
    { code: "  }, []);", type: "close" },
    { code: "", type: "blank" },
    { code: "  return (", type: "return-object" },
    { code: '    <main className="hero-container">', type: "object-method" },
    { code: "      <h1>{developerInfo.name}</h1>", type: "object-method" },
    { code: "      <p>{developerInfo.role}</p>", type: "object-method" },
    { code: '      <div className="cta">', type: "object-method" },
    {
      code: '        <Link href="/projects">View Projects</Link>',
      type: "object-method",
    },
    { code: "      </div>", type: "object-method" },
    { code: "    </main>", type: "object-method" },
    { code: "  );", type: "close" },
    { code: "};", type: "close-function" },
    { code: "", type: "blank" },
    { code: "export default HomePage;", type: "function-call" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className="relative font-inter-sans flex justify-center items-center  h-full w-full heroLayout">
      <div className="max-w-[1200px] my-0 mx-auto grid grid-cols-[1.2fr_1fr] items-center gap-16 py-8 px-16 h-full max-[1200px]:grid-cols-[1fr] max-[1200px]:gap-12 max-[1200px]:p-8 max-[768px]:p-6 max-[768px]:gap-8 max-[768px]:min-h--auto max-[768px]:grid-cols-[1fr] max-[480px]:py-8 max-[480px]:px-0 max-[480px]:gap-6 max-[480px]:grid-cols-[1fr] max-[480px]:justify-center max-[480px]:flex max-[480px]:flex-col max-[480px]:items-center">
        <div className="relative z-20 w-full max-w-full max-[1200px]:justify-self-center max-[1200px]:w-full max-[480px]:hidden">
          <div className="w-full max-w-[600px] h-[550px] bg-[var(--main-bg)] rounded-[8px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.25) relative  border border-[var(--explorer-border)] max-[1200px]:h-[450px] max-[1200px]:max-w-full max-[1200px]:my-0 max-[1200px]:mx-auto max-[768px]:h-[380px] max-[768px]:max-w-full">
            <div className="flex h-full relative overflow-hidden max-[768px]:text-[11px]">
              <div className="lineNumbers z-20">
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`lineNumber ${index === activeLineIndex ? "text-[var(--text-color)]" : ""}`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className="codeEditor z-20">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`py-0.5 px-0 transition-all duration-300 ease-in-out relative whitespace-pre max-[768px]:text-[11px] ${typeClasses[line.type]} ${index === activeLineIndex ? "highlightedLine" : ""}`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div
                className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none z-10"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(var(--accent-color-rgb), 0.03) 0%, rgba(0,0,0,0) 70%)`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 relative z-20 py-12 px-0 max-[1200px]:items-center max-[1200px]:text-center max-[768px]:text-center max-[768px]:items-center max-[768px]:mt-6 max-[480px]:items-center max-[480px]:text-center max-[480px]:relative max-[480px]:max-w-[90%] max-[480px]:my-0 max-[480px]:mx-auto max-[480px]:before:hidden">
          <h1 className="text-6xl leading-[1.1] font-extrabold m-0 text-[var(--text-color)] tracking-[-0.02em] max-[768px]:text-5xl max-[480px]:text-[2.8rem] max-[480px]:leading-[1.1] max-[480px]:shadow-[0_2px_10px_rgba(0,0,0,0.4)">
            DAVAAJARGAL{" "}
            <span className="text-[var(--accent-color)] max-[480px]:shadow-[0_2px_10px_rgba(var(--accent-color-rgb),0.4)">
              Tumurtogoo
            </span>
          </h1>

          <div className="text-xl text-[#ffffffcc] -mt-2 max-[786px]:text-[1.1rem] max-[480px]:text-base max-[480px]:font-medium max-[480px]:relative max-[480px]:pb-[1.2rem] max-[480px]:mt-0">
            Full Stack Web Developer
          </div>

          <p className="text-[1.1rem] leading-[1.6] text-[#ffffffb3] max-w-xl m-0 max-[1200px]:max-w-full max-[768px]:text-base max-[480px]:text-[0.9rem] max-[480px]:leading-[1.6] max-[480px]:text-[#ffffffe6] max-[480px]:shadow-[0_1px_3px_rgba(0,0,0,0.2) max-[480px]:max-w-[320px] max-[480px]:mx-auto">
            Always eager to learn and take on new challenges, I enjoy transforming ideas into scalable, user-friendly
            digital solutions.
          </p>

          <div className="flex flex-wrap gap-5 mt-4 items-center max-[1200px]:justify-center ">
            <Link href="/projects" className="primaryLink">
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className={"decorElements"}>
        <div className={"codeFlare"}></div>
        <div className={"gridLines"}></div>
        <div className={"codeBlock1"}>{"{"}</div>
        <div className={"codeBlock2"}>{"}"}</div>
        <div className={"codeBlock3"}>{"<>"}</div>
        <div className={"codeBlock4"}>{"/>"}</div>
        <div className={"orb1"}></div>
        <div className={"orb2"}></div>
        <div className={"orb3"}></div>
        <div className={"codeSymbol1"}>{"()"}</div>
        <div className={"codeSymbol2"}>{"[]"}</div>
        <div className={"codeSymbol3"}>{"=>"}</div>
        <div className={"dotPattern"}></div>
        <div className={"mobileAccent"}></div>
      </div>
    </div>
  );
}
