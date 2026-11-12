// import React from "react";
// import { MotionConfig } from "framer-motion";
// import Header from "../../components/Header";
// import Intro from "./Intro";
// import About from "./About";
// import Experiences from "./Experiences";
// import Projects from "./Projects";
// import Courses from "./Courses";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import { useSelector } from "react-redux";

// function Home() {
//   const { portfolioData } = useSelector((state) => state.root);
//   return (
//     <MotionConfig reducedMotion="user">
//     <div className="min-h-screen bg-[#070b14] text-slate-100">
//       <Header />
//       <main className="relative mx-auto max-w-7xl px-8 lg:px-10 md:px-6">
//         {portfolioData ? (
//           <>
//             <Intro />
//             <About />
//             <Experiences />
//             <Projects />
//             <Courses />
//             <Contact />
//           </>
//         ) : (
//           <div className="flex min-h-screen items-center justify-center font-mono text-sm text-slate-500">Loading portfolio data...</div>
//         )}
//         <Footer />
//       </main>
//     </div>
//     </MotionConfig>
//   );
// }

// export default Home;

// import React from "react";
// import { MotionConfig } from "framer-motion";
// import Header from "../../components/Header";
// import Intro from "./Intro";
// import About from "./About";
// import Experiences from "./Experiences";
// import Projects from "./Projects";
// import Courses from "./Courses";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import { useSelector } from "react-redux";

// function Home() {
//   const { portfolioData } = useSelector((state) => state.root);

//   return (
//     <MotionConfig reducedMotion="user">
//       <div className="min-h-screen overflow-hidden bg-[#070b14] text-slate-100">
//         <Header />

//         <main className="relative mx-auto max-w-7xl px-8 lg:px-10 md:px-6 sm:px-5">
//           {portfolioData ? (
//             <>
//               <Intro />
//               <About />
//               <Experiences />
//               <Projects />
//               <Courses />
//               <Contact />
//             </>
//           ) : (
//             <div className="flex min-h-screen items-center justify-center">
//               <p className="font-mono text-sm text-slate-500">
//                 Loading portfolio data...
//               </p>
//             </div>
//           )}

//           <Footer />
//         </main>
//       </div>
//     </MotionConfig>
//   );
// }

// export default Home;

import React from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  // Smooth page scroll progress
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Reusable section animation
  const sectionAnimation = {
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen overflow-x-clip bg-[#070b14] text-slate-100">

        {/* Scroll Progress */}
        <motion.div
          className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
          style={{ scaleX }}
        />

        {/* Ambient Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          {/* Background Grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
              backgroundSize: "65px 65px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />

          {/* Top Cyan Glow */}
          <motion.div
            className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.10] blur-[130px]"
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Right Violet Glow */}
          <motion.div
            className="absolute -right-40 top-[25%] h-[550px] w-[550px] rounded-full bg-violet-600/[0.10] blur-[140px]"
            animate={{
              x: [0, -70, 0],
              y: [0, 90, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Bottom Blue Glow */}
          <motion.div
            className="absolute -bottom-60 left-[25%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[140px]"
            animate={{
              x: [0, 100, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Subtle Center Light */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070b14]/10 to-[#070b14]/80" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Header />

          <main className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10">

            {portfolioData ? (
              <div className="relative">

                {/* Hero */}
                <motion.div {...sectionAnimation}>
                  <Intro />
                </motion.div>

                {/* About */}
                <motion.div {...sectionAnimation}>
                  <About />
                </motion.div>

                {/* Experience */}
                <motion.div {...sectionAnimation}>
                  <Experiences />
                </motion.div>

                {/* Projects */}
                <motion.div {...sectionAnimation}>
                  <Projects />
                </motion.div>

                {/* Certifications & Courses */}
                <motion.div {...sectionAnimation}>
                  <Courses />
                </motion.div>

                {/* Contact */}
                <motion.div {...sectionAnimation}>
                  <Contact />
                </motion.div>

              </div>
            ) : (
              <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="mx-auto mb-5 h-10 w-10 rounded-full border-2 border-cyan-400/20 border-t-cyan-400"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <p className="font-mono text-sm tracking-wider text-slate-500">
                    INITIALIZING PORTFOLIO...
                  </p>
                </div>
              </div>
            )}

            <motion.div {...sectionAnimation}>
              <Footer />
            </motion.div>

          </main>
        </div>
      </div>
    </MotionConfig>
  );
}

export default Home;
