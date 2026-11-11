import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import me from "../../Resources/me.jpeg";
import { useSelector } from "react-redux";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const intro = portfolioData?.intro || {};
  const name = [intro.firstname, intro.lastname].filter(Boolean).join(" ") || "MD Arafat Siraj";

  return (
    <section id="home" className="relative isolate flex min-h-[760px] items-center overflow-hidden pt-28 md:min-h-0 md:pb-20 md:pt-36">
      <div className="pointer-events-none absolute -left-48 top-24 -z-10 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.14)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="grid w-full grid-cols-12 items-center gap-12 lg:gap-8 md:grid-cols-1">
        <motion.div initial="hidden" animate="visible" variants={reveal} className="col-span-7 flex flex-col items-start md:items-center md:text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 font-mono text-xs tracking-wide text-sky-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            {intro.welcometext || "COMPUTER SCIENCE & ENGINEERING"}
          </div>
          <p className="mb-3 font-mono text-sm text-slate-400">Hello, I'm</p>
          <h1 className="max-w-4xl text-6xl font-bold leading-[1.08] tracking-tight text-white xl:text-5xl lg:text-4xl md:text-4xl">
            {name}
            <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text pb-2 text-transparent">
              {intro.caption || "I build things for the web."}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-sm md:leading-7">
            {intro.description || "Full-stack developer focused on building reliable, useful web applications and exploring application security."}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 md:justify-center">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300">
              Explore my work <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/60 hover:text-sky-300">
              Contact me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-slate-500">
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Find me on</span>
            <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-sky-300"><Github size={19} /></a>
            <a href="https://www.linkedin.com/in/arafsir/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-sky-300"><Linkedin size={19} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.88, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="col-span-5 flex justify-center md:row-start-1">
          <div className="relative flex h-[390px] w-[390px] items-center justify-center sm:h-[270px] sm:w-[270px]">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-dashed border-sky-400/25" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-9 rounded-full border border-indigo-400/20" />
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-500/10 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-sky-300/40 bg-slate-900 p-2 shadow-[0_0_80px_rgba(56,189,248,0.16)] sm:h-48 sm:w-48">
              <img src={intro.imgurl || me} alt={name} className="h-full w-full rounded-full object-cover" />
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-16 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Focus</span>
              <span className="text-sm font-semibold text-sky-300">Full-stack development</span>
            </motion.div>
            <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-1 -left-5 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500">Exploring</span>
              <span className="text-sm font-semibold text-indigo-300">Application security</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-sky-300 md:hidden">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

export default Intro;
