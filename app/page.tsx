import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhatIDo from "@/components/WhatIDo";
import Process from "@/components/Process";
import Creators from "@/components/Creators";
import EditingStudio from "@/components/EditingStudio";
import Campaigns from "@/components/Campaigns";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <WhatIDo />
        <Process />
        <Creators />
        <EditingStudio />
        <Campaigns />
        <About />
        <WorkWithMe />
      </main>
      <Contact />
    </>
  );
}
