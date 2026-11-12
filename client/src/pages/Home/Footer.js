// import React from "react";
// import { Github, Linkedin } from "lucide-react";

// function Footer() {
//   return (
//     <footer className="mt-16 border-t border-white/10 py-10">
//       <div className="flex flex-wrap items-center justify-between gap-5">
//         <div>
//           <p className="font-mono text-lg font-bold text-white">AS<span className="text-sky-400">.</span></p>
//           <p className="mt-2 text-xs text-slate-500">Designed and developed by MD Arafat Siraj.</p>
//         </div>
//         <div className="flex items-center gap-4 text-slate-500">
//           <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-sky-300"><Github size={19} /></a>
//           <a href="https://www.linkedin.com/in/arafsir/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-sky-300"><Linkedin size={19} /></a>
//         </div>
//         <p className="w-full text-center font-mono text-[10px] uppercase tracking-widest text-slate-600">© {new Date().getFullYear()} MD Arafat Siraj</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 py-10">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-sky-500/[0.04] blur-[90px]" />

      <div className="relative flex flex-wrap items-center justify-between gap-6">
        <div>
          <a
            href="#home"
            className="font-mono text-2xl font-bold tracking-tight text-white"
          >
            AS<span className="text-sky-400">.</span>
          </a>

          <p className="mt-2 text-xs text-slate-500">
            Designed and developed by MD Arafat Siraj.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com/0Arafsir0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
          >
            <Github size={18} />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="https://www.linkedin.com/in/arafsir/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-300"
          >
            <Linkedin size={18} />
          </motion.a>

          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-sky-300"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="w-full border-t border-white/5 pt-6 text-center font-mono text-[10px] uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} MD Arafat Siraj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
