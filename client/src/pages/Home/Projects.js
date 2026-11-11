import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function ProjectCard({ project, index, onSelect }) {
  const tech = Array.isArray(project.technologies) ? project.technologies : [];
  const palettes = [
    "from-cyan-500/20 via-slate-900 to-blue-950",
    "from-indigo-500/20 via-slate-900 to-violet-950",
    "from-emerald-500/15 via-slate-900 to-teal-950",
  ];

  return (
    <motion.article layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -7 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors hover:border-sky-400/40">
      <button type="button" onClick={() => onSelect(project)} className="block w-full text-left">
        <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${palettes[index % palettes.length]}`}>
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          ) : (
            <div className="text-center">
              <span className="font-mono text-5xl font-bold tracking-tighter text-white/15">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-sky-200/60">Selected work</p>
            </div>
          )}
          <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 p-2 text-white/70 transition group-hover:border-sky-300/40 group-hover:text-sky-300">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white transition group-hover:text-sky-300">{project.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.slice(0, 4).map((item) => <span key={item} className="rounded-full border border-sky-400/15 bg-sky-400/5 px-3 py-1 font-mono text-[10px] text-sky-200">{item}</span>)}
          </div>
        </div>
      </button>
    </motion.article>
  );
}

function Projects() {
  const { portfolioData } = useSelector((state) => state.root);
  const projects = Array.isArray(portfolioData?.projects) ? portfolioData.projects : [];
  const [selected, setSelected] = useState(null);
  const featured = useMemo(() => projects, [projects]);

  return (
    <section id="projects" className="scroll-mt-28 py-24">
      <SectionTitle title="Selected Projects" />
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <p className="max-w-xl text-sm leading-7 text-slate-400">A selection of applications and experiments built around practical engineering problems.</p>
        <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-sky-300 transition hover:text-white">More on GitHub <ArrowUpRight size={16} /></a>
      </div>

      {featured.length ? (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-2 md:grid-cols-1">
          {featured.map((project, index) => <ProjectCard key={project._id || project.title} project={project} index={index} onSelect={setSelected} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center text-slate-500">Projects will appear here soon.</div>
      )}

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={selected.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()} className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1524] p-8 shadow-2xl sm:p-5">
              <button type="button" onClick={() => setSelected(null)} aria-label="Close project details" className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-slate-400 hover:text-white"><X size={18} /></button>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-300">Project overview</p>
              <h3 className="mt-3 pr-10 text-3xl font-bold text-white">{selected.title}</h3>
              <p className="mt-5 leading-8 text-slate-400">{selected.description}</p>
              <div className="mt-7">
                <h4 className="mb-3 text-sm font-semibold text-white">Technologies</h4>
                <div className="flex flex-wrap gap-2">{(selected.technologies || []).map((tech) => <span key={tech} className="rounded-full border border-sky-400/20 px-3 py-1.5 text-xs text-sky-200">{tech}</span>)}</div>
              </div>
              {selected.features && <div className="mt-7"><h4 className="mb-3 text-sm font-semibold text-white">Key features</h4><p className="whitespace-pre-line text-sm leading-7 text-slate-400">{Array.isArray(selected.features) ? selected.features.join(" • ") : selected.features}</p></div>}
              <div className="mt-8 flex flex-wrap gap-3">
                {selected.link && <a href={selected.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950">Live project <ArrowUpRight size={16} /></a>}
                {selected.githubUrl && <a href={selected.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white"><Github size={16} /> Source code</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
