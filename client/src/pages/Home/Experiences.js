import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const experiences = Array.isArray(portfolioData?.experiences) ? portfolioData.experiences : [];

  return (
    <section id="education" className="scroll-mt-28 py-16">
      <SectionTitle title="Education" eyebrow="ACADEMIC BACKGROUND" />
      <div className="relative ml-2 border-l border-sky-400/25 pl-8">
        {experiences.length ? experiences.map((item, index) => (
          <motion.article key={item._id || `${item.period}-${index}`}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative mb-8 rounded-2xl border border-white/10 bg-white/[0.025] p-6 last:mb-0 md:p-5">
            <span className="absolute -left-[37px] top-7 h-4 w-4 rounded-full border-4 border-[#070b14] bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,.6)]" />
            <p className="font-mono text-xs tracking-wide text-sky-300">{item.period}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.position || "Education"}</h3>
            <p className="mt-1 text-sm text-indigo-300">{item.company}</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
          </motion.article>
        )) : <p className="text-sm text-slate-500">Education history will appear here.</p>}
      </div>
    </section>
  );
}

export default Experiences;
