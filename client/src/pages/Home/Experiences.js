// import React from "react";
// import { motion } from "framer-motion";
// import SectionTitle from "../../components/SectionTitle";
// import { useSelector } from "react-redux";

// function Experiences() {
//   const { portfolioData } = useSelector((state) => state.root);
//   const experiences = Array.isArray(portfolioData?.experiences) ? portfolioData.experiences : [];

//   return (
//     <section id="education" className="scroll-mt-28 py-16">
//       <SectionTitle title="Education" eyebrow="ACADEMIC BACKGROUND" />
//       <div className="relative ml-2 border-l border-sky-400/25 pl-8">
//         {experiences.length ? experiences.map((item, index) => (
//           <motion.article key={item._id || `${item.period}-${index}`}
//             initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: index * 0.08 }}
//             className="relative mb-8 rounded-2xl border border-white/10 bg-white/[0.025] p-6 last:mb-0 md:p-5">
//             <span className="absolute -left-[37px] top-7 h-4 w-4 rounded-full border-4 border-[#070b14] bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,.6)]" />
//             <p className="font-mono text-xs tracking-wide text-sky-300">{item.period}</p>
//             <h3 className="mt-3 text-lg font-semibold text-white">{item.position || "Education"}</h3>
//             <p className="mt-1 text-sm text-indigo-300">{item.company}</p>
//             <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
//           </motion.article>
//         )) : <p className="text-sm text-slate-500">Education history will appear here.</p>}
//       </div>
//     </section>
//   );
// }

// export default Experiences;

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, Building2 } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const { portfolioData } = useSelector((state) => state.root);

  const experiences = Array.isArray(portfolioData?.experiences)
    ? portfolioData.experiences
    : [];

  return (
    <section id="education" className="scroll-mt-28 py-16">
      <SectionTitle
        title="Education"
        eyebrow="ACADEMIC BACKGROUND"
      />

      {experiences.length ? (
        <div className="relative ml-3 border-l border-sky-400/20 pl-8 sm:ml-2 sm:pl-6">
          {experiences.map((item, index) => (
            <motion.article
              key={item._id || `${item.period}-${index}`}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[38px] top-7 h-4 w-4 rounded-full border-[4px] border-[#070b14] bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] transition group-hover:scale-125 sm:-left-[31px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 sm:p-5">
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-400/0 blur-[80px] transition duration-500 group-hover:bg-sky-400/10" />

                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-400/[0.06] px-3 py-1.5 font-mono text-xs text-sky-300">
                      <CalendarDays size={13} />
                      {item.period}
                    </span>

                    <GraduationCap
                      size={22}
                      className="text-slate-600 transition group-hover:text-sky-300"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white transition group-hover:text-sky-300">
                    {item.position || "Education"}
                  </h3>

                  {item.company && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-indigo-300">
                      <Building2 size={15} />
                      {item.company}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-4 whitespace-pre-line text-sm leading-8 text-slate-400">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500">
          Education history will appear here.
        </p>
      )}
    </section>
  );
}

export default Experiences;
