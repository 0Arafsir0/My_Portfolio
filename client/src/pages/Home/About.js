// import React from "react";
// import { motion } from "framer-motion";
// import SectionTitle from "../../components/SectionTitle";
// import { useSelector } from "react-redux";

// function About() {
//   const { portfolioData } = useSelector((state) => state.root);
//   const about = portfolioData?.about || {};
//   const skills = Array.isArray(about.skills) ? about.skills : [];

//   return (
//     <section id="about" className="scroll-mt-28 py-16">
//       <SectionTitle title="About Me" eyebrow="A LITTLE CONTEXT" />
//       <div className="grid grid-cols-5 gap-12 lg:gap-8 md:grid-cols-1">
//         <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }} transition={{ duration: 0.65 }} className="col-span-3 space-y-5 text-base leading-8 text-slate-400 md:col-span-1 md:text-sm md:leading-7">
//           <p>{about.description1 || "I am a Computer Science and Engineering student interested in software engineering and building practical digital products."}</p>
//           <p>{about.description2 || "My current focus is full-stack web development, software architecture, and application security. I enjoy learning by designing, building, testing, and improving real applications."}</p>
//           <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-1">
//             <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
//               <span className="font-mono text-xs text-sky-300">01 / ENGINEERING</span>
//               <p className="mt-2 text-sm font-semibold text-white">Full-stack development</p>
//               <p className="mt-1 text-xs leading-6 text-slate-500">Building responsive applications and reliable APIs.</p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
//               <span className="font-mono text-xs text-indigo-300">02 / SECURITY</span>
//               <p className="mt-2 text-sm font-semibold text-white">Application security</p>
//               <p className="mt-1 text-xs leading-6 text-slate-500">Exploring secure design and privacy-aware systems.</p>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }} id="skills" className="col-span-2 flex items-center md:col-span-1">
//           <div className="relative w-full overflow-hidden rounded-2xl border border-sky-400/15 bg-gradient-to-br from-sky-400/10 via-slate-900 to-indigo-500/10 p-8">
//             <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
//             <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-sky-300">Current toolkit</p>
//             <div className="relative mt-6 flex flex-wrap gap-2">
//               {skills.length ? skills.map((skill) => (
//                 <span key={skill} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-200">{skill}</span>
//               )) : <span className="text-sm text-slate-500">Skills can be managed from the admin dashboard.</span>}
//             </div>
//             <div className="relative mt-8 border-t border-white/10 pt-5">
//               <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Approach</p>
//               <p className="mt-2 text-sm leading-7 text-slate-300">Understand the problem. Design the system. Build, test, and iterate.</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default About;

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  Layers3,
  Sparkles,
} from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const about = portfolioData?.about || {};
  const skills = Array.isArray(about.skills) ? about.skills : [];

  const focusAreas = [
    {
      number: "01",
      category: "ENGINEERING",
      title: "Full-stack development",
      description:
        "Building responsive applications and reliable APIs.",
      icon: Code2,
      color: "sky",
    },
    {
      number: "02",
      category: "SECURITY",
      title: "Application security",
      description:
        "Exploring secure design and privacy-aware systems.",
      icon: ShieldCheck,
      color: "violet",
    },
  ];

  return (
    <section
      id="about"
      className="portfolio-section relative scroll-mt-28 py-20"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-sky-500/[0.05] blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-violet-500/[0.05] blur-[110px]" />

      <SectionTitle title="About Me" eyebrow="A LITTLE CONTEXT" />

      <div className="relative grid grid-cols-5 gap-12 lg:gap-8 md:grid-cols-1">
        {/* About description */}
        <motion.div
          initial={{ opacity: 0, x: -35, rotateY: 5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformPerspective: 1200 }}
          className="col-span-3 space-y-6 text-base leading-8 text-slate-400 md:col-span-1 md:text-sm md:leading-8"
        >
          <div className="relative">
            <div className="absolute -left-4 top-2 h-10 w-[2px] rounded-full bg-gradient-to-b from-sky-400 to-transparent" />

            <p className="text-[15px] leading-8 text-slate-300">
              {about.description1 ||
                "I am a Computer Science and Engineering student interested in software engineering and building practical digital products."}
            </p>
          </div>

          <p className="text-[15px] leading-8 text-slate-400">
            {about.description2 ||
              "My current focus is full-stack web development, software architecture, and application security. I enjoy learning by designing, building, testing, and improving real applications."}
          </p>

          {/* Focus cards */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-1">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.number}
                  initial={{ opacity: 0, y: 25, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -9,
                    rotateX: 4,
                    rotateY: -4,
                    scale: 1.02,
                  }}
                  style={{
                    transformPerspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-sky-400/30"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-sky-400/[0.15]" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.08] text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.08)]">
                      <Icon size={19} />
                    </div>

                    <span className="font-mono text-[10px] text-slate-600">
                      {area.number}
                    </span>
                  </div>

                  <p className="relative mt-5 font-mono text-[9px] tracking-[0.2em] text-sky-400">
                    {area.category}
                  </p>

                  <h3 className="relative mt-2 text-sm font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="relative mt-2 text-xs leading-6 text-slate-500">
                    {area.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Toolkit card */}
        <motion.div
          initial={{ opacity: 0, x: 35, rotateY: -8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            transformPerspective: 1200,
            transformStyle: "preserve-3d",
          }}
          id="skills"
          className="col-span-2 flex items-center md:col-span-1"
        >
          <motion.div
            whileHover={{
              y: -8,
              rotateX: 3,
              rotateY: -3,
            }}
            transition={{ duration: 0.35 }}
            style={{
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
            }}
            className="group relative w-full overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-[#101d32] via-[#0b1220] to-[#15102c] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.35),0_0_40px_rgba(56,189,248,0.04)] sm:p-8"
          >
            {/* Ambient 3D lighting */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-400/[0.12] blur-[80px] transition-all duration-700 group-hover:bg-sky-400/[0.2]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-violet-500/[0.10] blur-[80px]" />

            {/* Card header */}
            <div
              className="relative flex items-center justify-between"
              style={{ transform: "translateZ(25px)" }}
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky-300">
                  Current toolkit
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Technologies
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300 shadow-[0_0_25px_rgba(56,189,248,0.1)]">
                <Layers3 size={21} />
              </div>
            </div>

            {/* Animated decorative line */}
            <div className="relative mt-6 h-px overflow-hidden bg-white/10">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              />
            </div>

            {/* Skills */}
            <div
              className="relative mt-7"
              style={{ transform: "translateZ(18px)" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Technical skills
                </p>

                <Sparkles size={14} className="text-sky-400" />
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.length ? (
                  skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                        rotateX: 8,
                      }}
                      className="cursor-default rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-medium text-slate-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-colors duration-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-200"
                    >
                      {skill}
                    </motion.span>
                  ))
                ) : (
                  <span className="text-xs leading-6 text-slate-500">
                    Skills can be managed from the admin dashboard.
                  </span>
                )}
              </div>
            </div>

            {/* Approach */}
            <div
              className="relative mt-9 border-t border-white/10 pt-6"
              style={{ transform: "translateZ(15px)" }}
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                My approach
              </p>

              <p className="mt-3 text-sm font-medium leading-7 text-slate-300">
                Understand the problem.
                <span className="text-sky-400"> Design </span>
                the system.
                <span className="text-violet-400"> Build, </span>
                test, and iterate.
              </p>
            </div>

            {/* Decorative corner */}
            <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 overflow-hidden">
              <div className="absolute -bottom-10 -right-10 h-20 w-20 rotate-45 border border-sky-400/20" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
