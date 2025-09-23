import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Bottombar from "@/components/bottombar/bottom-bar";
import Explorer from "@/components/explorer/explorer";
import ScrollToTop from "@/components/scroll/scroll-to-top";
import Sidebar from "@/components/sidebar/side-bar";
import TabsBar from "@/components/tabsbar/tabs-bar";
import { TitleBar } from "@/components/titlebar/title-bar";

const jetBrainMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Davaajargal Tumurtogoo Portfolio",
  description:
    "Davaajargal Tumurotoo's portfolio website showcasing projects and skills in web development, including React, Next.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetBrainMono.className}>
      <body>
        <TitleBar />
        <div className="flex overflow-x-hidden bg-[var(--main-bg)]">
          <Sidebar />
          <Explorer />
          <div className="w-full">
            <TabsBar />
            <main className="content">{children}</main>
          </div>
        </div>
        <Bottombar />
        <ScrollToTop />
      </body>
    </html>
  );
}
