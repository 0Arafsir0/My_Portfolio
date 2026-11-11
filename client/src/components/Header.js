import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b14]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Main navigation">
        <a href="#home" className="font-mono text-2xl font-bold tracking-tight text-white" aria-label="Arafat Siraj home">
          AS<span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-sky-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-sky-400/50 hover:text-sky-300">
            <Github size={17} />
          </a>
          <a href="https://www.linkedin.com/in/arafsir/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-sky-400/50 hover:text-sky-300">
            <Linkedin size={17} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>

        <button type="button" className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/5 bg-[#0b1220] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-3 text-sm text-slate-300 transition hover:text-sky-300">
                  {link.label}
                </a>
              ))}
              <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" className="py-3 text-sm text-sky-300">GitHub profile</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
