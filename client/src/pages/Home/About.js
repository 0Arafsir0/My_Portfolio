import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const about = portfolioData?.about || {};
  const skills = Array.isArray(about.skills) ? about.skills : [];

  return (
    <section id="about" className="scroll-mt-28 py-16">
      <SectionTitle title="About Me" eyebrow="A LITTLE CONTEXT" />
      <div className="grid grid-cols-5 gap-12 lg:gap-8 md:grid-cols-1">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }} className="col-span-3 space-y-5 text-base leading-8 text-slate-400 md:col-span-1 md:text-sm md:leading-7">
          <p>{about.description1 || "I am a Computer Science and Engineering student interested in software engineering and building practical digital products."}</p>
          <p>{about.description2 || "My current focus is full-stack web development, software architecture, and application security. I enjoy learning by designing, building, testing, and improving real applications."}</p>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-1">
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <span className="font-mono text-xs text-sky-300">01 / ENGINEERING</span>
              <p className="mt-2 text-sm font-semibold text-white">Full-stack development</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">Building responsive applications and reliable APIs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <span className="font-mono text-xs text-indigo-300">02 / SECURITY</span>
              <p className="mt-2 text-sm font-semibold text-white">Application security</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">Exploring secure design and privacy-aware systems.</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }} className="col-span-2 flex items-center md:col-span-1">
          <div className="relative w-full overflow-hidden rounded-2xl border border-sky-400/15 bg-gradient-to-br from-sky-400/10 via-slate-900 to-indigo-500/10 p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-sky-300">Current toolkit</p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {skills.length ? skills.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-200">{skill}</span>
              )) : <span className="text-sm text-slate-500">Skills can be managed from the admin dashboard.</span>}
            </div>
            <div className="relative mt-8 border-t border-white/10 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Approach</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Understand the problem. Design the system. Build, test, and iterate.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
