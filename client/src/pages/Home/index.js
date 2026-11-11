import React from "react";
import { MotionConfig } from "framer-motion";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#070b14] text-slate-100">
      <Header />
      <main className="relative mx-auto max-w-7xl px-8 lg:px-10 md:px-6">
        {portfolioData ? (
          <>
            <Intro />
            <About />
            <Experiences />
            <Projects />
            <Courses />
            <Contact />
          </>
        ) : (
          <div className="flex min-h-screen items-center justify-center font-mono text-sm text-slate-500">Loading portfolio data...</div>
        )}
        <Footer />
      </main>
    </div>
    </MotionConfig>
  );
}

export default Home;
