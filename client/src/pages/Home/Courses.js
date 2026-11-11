// import React from "react";
// import { motion } from "framer-motion";
// import SectionTitle from "../../components/SectionTitle";
// import { useSelector } from "react-redux";

// function Courses() {
//   const { portfolioData } = useSelector((state) => state.root);
//   const courses = Array.isArray(portfolioData?.courses) ? portfolioData.courses : [];

//   return (
//     <section id="certifications" className="scroll-mt-28 py-16">
//       <SectionTitle title="Certifications & Courses" eyebrow="CONTINUOUS LEARNING" />
//       {courses.length ? (
//         <div className="grid grid-cols-2 gap-5 lg:grid-cols-2 md:grid-cols-1">
//           {courses.map((course, index) => (
//             <motion.article key={course._id || `${course.title}-${index}`}
//               initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.06 }}
//               whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-sky-400/30">
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">{course.provider}</p>
//                   <h3 className="mt-3 text-lg font-semibold text-white">{course.title}</h3>
//                 </div>
//                 <span className="rounded-lg border border-white/10 px-3 py-1 font-mono text-xs text-slate-400">{course.duration}</span>
//               </div>
//               <p className="mt-4 text-sm leading-7 text-slate-400">{course.description}</p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {(Array.isArray(course.skills) ? course.skills : []).map((skill) => <span key={skill} className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-200">{skill}</span>)}
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       ) : <p className="text-sm text-slate-500">Courses and certifications will appear here.</p>}
//     </section>
//   );
// }

// export default Courses;

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  GraduationCap,
  Layers3,
} from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses() {
  const { portfolioData } = useSelector((state) => state.root);
  const courses = Array.isArray(portfolioData?.courses)
    ? portfolioData.courses
    : [];

  return (
    <section id="certifications" className="scroll-mt-28 py-16">
      <SectionTitle
        title="Certifications & Courses"
        eyebrow="CONTINUOUS LEARNING"
      />

      {courses.length ? (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
          {courses.map((course, index) => (
            <motion.article
              key={course._id || `${course.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.08,
              }}
              whileHover={{
                y: -7,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-6 transition-colors duration-300 hover:border-sky-400/30 sm:p-5"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-400/0 blur-[80px] transition duration-500 group-hover:bg-sky-400/10" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/10 text-sky-300 transition duration-300 group-hover:scale-110 group-hover:border-sky-400/30">
                      <Award size={23} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">
                        {course.provider || "Certification"}
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <GraduationCap
                          size={14}
                          className="shrink-0 text-slate-500"
                        />
                        <span className="text-xs text-slate-500">
                          Professional learning
                        </span>
                      </div>
                    </div>
                  </div>

                  {course.duration && (
                    <span className="shrink-0 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-slate-400">
                      {course.duration}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-white transition-colors group-hover:text-sky-300">
                  {course.title}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-7 text-slate-400">
                  {course.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Layers3 size={14} className="text-indigo-300" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Skills covered
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(course.skills) ? course.skills : []).map(
                      (skill, skillIndex) => (
                        <span
                          key={`${skill}-${skillIndex}`}
                          className="rounded-lg border border-indigo-400/15 bg-indigo-400/[0.07] px-3 py-1.5 text-xs text-indigo-200 transition hover:border-indigo-400/30 hover:bg-indigo-400/10"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.015] px-6 py-12 text-center">
          <GraduationCap
            size={32}
            className="mx-auto text-slate-600"
          />
          <p className="mt-4 text-sm font-medium text-slate-400">
            Courses and certifications will appear here.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Learning achievements will be displayed once added.
          </p>
        </div>
      )}
    </section>
  );
}

export default Courses;
