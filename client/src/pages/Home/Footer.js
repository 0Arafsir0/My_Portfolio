import React from "react";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div>
          <p className="font-mono text-lg font-bold text-white">AS<span className="text-sky-400">.</span></p>
          <p className="mt-2 text-xs text-slate-500">Designed and developed by MD Arafat Siraj.</p>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-sky-300"><Github size={19} /></a>
          <a href="https://www.linkedin.com/in/arafsir/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-sky-300"><Linkedin size={19} /></a>
        </div>
        <p className="w-full text-center font-mono text-[10px] uppercase tracking-widest text-slate-600">© {new Date().getFullYear()} MD Arafat Siraj</p>
      </div>
    </footer>
  );
}

export default Footer;
