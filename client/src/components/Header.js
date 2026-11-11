// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";

// const links = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Education", href: "#education" },
//   { label: "Certifications", href: "#certifications" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b14]/85 backdrop-blur-xl">
//       <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Main navigation">
//         <a href="#home" className="font-mono text-2xl font-bold tracking-tight text-white" aria-label="Arafat Siraj home">
//           AS<span className="text-sky-400">.</span>
//         </a>

//         <div className="hidden items-center gap-8 md:flex">
//           {links.map((link) => (
//             <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-sky-300">
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <div className="hidden items-center gap-3 md:flex">
//           <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" aria-label="GitHub"
//             className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-sky-400/50 hover:text-sky-300">
//             <Github size={17} />
//           </a>
//           <a href="https://www.linkedin.com/in/arafsir/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
//             className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-sky-400/50 hover:text-sky-300">
//             <Linkedin size={17} />
//           </a>
//           <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
//             Let's talk <ArrowUpRight size={16} />
//           </a>
//         </div>

//         <button type="button" className="rounded-lg border border-white/10 p-2 text-white md:hidden"
//           onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
//           {menuOpen ? <X size={21} /> : <Menu size={21} />}
//         </button>
//       </nav>

//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/5 bg-[#0b1220] md:hidden">
//             <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
//               {links.map((link) => (
//                 <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
//                   className="border-b border-white/5 py-3 text-sm text-slate-300 transition hover:text-sky-300">
//                   {link.label}
//                 </a>
//               ))}
//               <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" className="py-3 text-sm text-sky-300">GitHub profile</a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Github,
//   Linkedin,
//   Menu,
//   X,
//   Sparkles,
// } from "lucide-react";

// const links = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Education", href: "#education" },
//   { label: "Certifications", href: "#certifications" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// const socialLinks = [
//   {
//     href: "https://github.com/0Arafsir0",
//     label: "GitHub",
//     icon: Github,
//   },
//   {
//     href: "https://www.linkedin.com/in/arafsir/",
//     label: "LinkedIn",
//     icon: Linkedin,
//   },
// ];

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navVariants = {
//     hidden: { opacity: 0, y: -25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const linkVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-5">
//       <motion.nav
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//         className="portfolio-nav relative mx-auto flex h-[76px] max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#080d1a]/75 px-5 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-8"
//         aria-label="Main navigation"
//       >
//         {/* Ambient lighting */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
//           <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-sky-500/[0.07] blur-[70px]" />
//           <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-[70px]" />
//         </div>

//         {/* Logo */}
//         <motion.a
//           href="#home"
//           aria-label="Arafat Siraj home"
//           whileHover={{
//             scale: 1.08,
//             rotateY: 12,
//             rotateX: -8,
//           }}
//           whileTap={{ scale: 0.94 }}
//           className="group relative z-10 flex items-center gap-3"
//           style={{ perspective: 600 }}
//         >
//           <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 via-[#101b30] to-violet-500/20 shadow-[0_0_25px_rgba(56,189,248,0.12)]">
//             <span className="font-mono text-lg font-bold text-white">
//               AS<span className="text-sky-400">.</span>
//             </span>
//             <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#080d1a] bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
//           </div>

//           <div className="hidden sm:block">
//             <p className="text-sm font-bold tracking-wide text-white">
//               Arafat Siraj
//             </p>
//             <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
//               Software Engineer
//             </p>
//           </div>
//         </motion.a>

//         {/* Desktop navigation */}
//         <div className="relative z-10 hidden items-center gap-7 lg:flex">
//           {links.map((link) => (
//             <motion.a
//               key={link.href}
//               variants={linkVariants}
//               href={link.href}
//               whileHover={{ y: -3 }}
//               className="group relative py-2 text-[12px] font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-white"
//             >
//               {link.label}
//               <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
//             </motion.a>
//           ))}
//         </div>

//         {/* Desktop actions */}
//         <div className="relative z-10 hidden items-center gap-3 md:flex">
//           {socialLinks.map(({ href, label, icon: Icon }) => (
//             <motion.a
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noreferrer"
//               aria-label={label}
//               whileHover={{
//                 y: -4,
//                 rotateY: 12,
//                 scale: 1.08,
//               }}
//               whileTap={{ scale: 0.92 }}
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 shadow-lg transition-colors duration-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               <Icon size={17} />
//             </motion.a>
//           ))}

//           <motion.a
//             href="#contact"
//             whileHover={{
//               y: -3,
//               scale: 1.04,
//               boxShadow: "0 10px 30px rgba(56,189,248,0.2)",
//             }}
//             whileTap={{ scale: 0.96 }}
//             className="group ml-2 inline-flex items-center gap-2 rounded-xl border border-sky-300/30 bg-gradient-to-r from-sky-400 to-cyan-300 px-5 py-3 text-xs font-bold text-[#06111e] shadow-[0_5px_20px_rgba(56,189,248,0.15)] transition-all"
//           >
//             Let's talk
//             <ArrowUpRight
//               size={16}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </motion.a>
//         </div>

//         {/* Mobile menu button */}
//         <motion.button
//           type="button"
//           whileTap={{ scale: 0.9 }}
//           className="relative z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-sky-400/40 hover:text-sky-300 md:hidden"
//           onClick={() => setMenuOpen((open) => !open)}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.span
//               key={menuOpen ? "close" : "open"}
//               initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
//               animate={{ opacity: 1, rotate: 0, scale: 1 }}
//               exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
//               transition={{ duration: 0.2 }}
//             >
//               {menuOpen ? <X size={21} /> : <Menu size={21} />}
//             </motion.span>
//           </AnimatePresence>
//         </motion.button>
//       </motion.nav>

//       {/* Mobile navigation */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -15, scale: 0.97 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -15, scale: 0.97 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#080d1a]/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden"
//           >
//             <div className="border-b border-white/[0.07] px-6 py-4">
//               <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400">
//                 <Sparkles size={13} />
//                 Navigation
//               </div>
//             </div>

//             <div className="flex flex-col p-3">
//               {links.map((link, index) => (
//                 <motion.a
//                   key={link.href}
//                   href={link.href}
//                   initial={{ opacity: 0, x: -12 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.045 }}
//                   onClick={() => setMenuOpen(false)}
//                   className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.06] hover:text-sky-300"
//                 >
//                   {link.label}
//                   <ArrowUpRight
//                     size={15}
//                     className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
//                   />
//                 </motion.a>
//               ))}
//             </div>

//             <div className="flex items-center justify-between border-t border-white/[0.07] px-6 py-4">
//               <div className="flex gap-4">
//                 {socialLinks.map(({ href, label, icon: Icon }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label={label}
//                     className="text-slate-400 transition hover:text-sky-300"
//                   >
//                     <Icon size={19} />
//                   </a>
//                 ))}
//               </div>

//               <a
//                 href="#contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300"
//               >
//                 Let's talk <ArrowUpRight size={15} />
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://github.com/0Arafsir0",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/arafsir/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.08,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="portfolio-nav relative mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#080d1a]/85 px-4 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:h-[76px] sm:px-8"
        aria-label="Main navigation"
      >
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-sky-500/[0.07] blur-[70px]" />
          <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-[70px]" />
        </div>

        {/* Logo */}
        <motion.a
          href="#home"
          aria-label="Arafat Siraj home"
          whileHover={{
            scale: 1.08,
            rotateY: 12,
            rotateX: -8,
          }}
          whileTap={{ scale: 0.94 }}
          className="group relative z-10 flex shrink-0 items-center gap-3"
          style={{ perspective: 600 }}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 via-[#101b30] to-violet-500/20 shadow-[0_0_25px_rgba(56,189,248,0.12)] sm:h-11 sm:w-11">
            <span className="font-mono text-lg font-bold text-white">
              AS<span className="text-sky-400">.</span>
            </span>
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#080d1a] bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-white">
              Arafat Siraj
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Software Engineer
            </p>
          </div>
        </motion.a>

        {/* Expanded desktop navigation: 1024px and above */}
        <div className="relative z-10 hidden items-center gap-5 xl:gap-7 lg:flex">
          {links.map((link) => (
            <motion.a
              key={link.href}
              variants={linkVariants}
              href={link.href}
              whileHover={{ y: -3 }}
              className="group relative whitespace-nowrap py-2 text-[11px] font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-white xl:text-xs"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="relative z-10 hidden shrink-0 items-center gap-2 xl:gap-3 lg:flex">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{
                y: -4,
                rotateY: 12,
                scale: 1.08,
              }}
              whileTap={{ scale: 0.92 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 shadow-lg transition-colors duration-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300 xl:h-10 xl:w-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Icon size={17} />
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
              scale: 1.04,
              boxShadow: "0 10px 30px rgba(56,189,248,0.2)",
            }}
            whileTap={{ scale: 0.96 }}
            className="group ml-1 inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-sky-300/30 bg-gradient-to-r from-sky-400 to-cyan-300 px-3 py-3 text-xs font-bold text-[#06111e] shadow-[0_5px_20px_rgba(56,189,248,0.15)] transition-all xl:ml-2 xl:px-5"
          >
            Let's talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>

        {/* Collapsed mobile/tablet menu button: below 1024px */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          className="relative z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-sky-400/40 hover:text-sky-300 lg:flex"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Dropdown navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#080d1a]/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:flex"
          >
            <div className="border-b border-white/[0.07] px-6 py-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400">
                <Sparkles size={13} />
                Navigation
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.06] hover:text-sky-300"
                >
                  {link.label}
                  <ArrowUpRight
                    size={15}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.07] px-6 py-4">
              <div className="flex gap-5">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-slate-400 transition hover:text-sky-300"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300"
              >
                Let's talk <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
