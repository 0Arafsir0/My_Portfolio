import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses() {
  const { portfolioData } = useSelector((state) => state.root);
  const courses = Array.isArray(portfolioData?.courses) ? portfolioData.courses : [];

  return (
    <section id="certifications" className="scroll-mt-28 py-16">
      <SectionTitle title="Certifications & Courses" eyebrow="CONTINUOUS LEARNING" />
      {courses.length ? (
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-2 md:grid-cols-1">
          {courses.map((course, index) => (
            <motion.article key={course._id || `${course.title}-${index}`}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-sky-400/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">{course.provider}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{course.title}</h3>
                </div>
                <span className="rounded-lg border border-white/10 px-3 py-1 font-mono text-xs text-slate-400">{course.duration}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{course.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {(Array.isArray(course.skills) ? course.skills : []).map((skill) => <span key={skill} className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-200">{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      ) : <p className="text-sm text-slate-500">Courses and certifications will appear here.</p>}
    </section>
  );
}

export default Courses;
