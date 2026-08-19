import React from "react";
import HeroSection from "../components/HeroSection";
import IntroBox from "../components/introbox/IntroBox";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";

function Home() {
  return (
    <>
      <HeroSection />
      <IntroBox />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}

export default Home;
