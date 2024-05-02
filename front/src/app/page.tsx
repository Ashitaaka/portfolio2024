"use client";
import HomeHeader from "@/app/components/HomeHeader";
import HomeAbout from "./components/HomeAbout";
import HomeEmailBanner from "./components/HomeEmailBanner";
import ProjectsList from "@/app/components/ProjectsList";

export default function Home() {
  return (
    <main className="main bg-white text-black overflow-x-hidden flex flex-col gap-2 items-center w-full">
      <HomeHeader />
      <ProjectsList />
      <HomeEmailBanner />
      <HomeAbout />
    </main>
  );
}
