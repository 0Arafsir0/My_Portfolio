// import React from "react";
// import { motion } from "framer-motion";

// function SectionTitle({ title, eyebrow = "THE DETAILS" }) {
//   return (
//     <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.55 }}
//       className="mb-8 flex items-end gap-5 pt-12">
//       <div>
//         <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-sky-400">{eyebrow}</p>
//         <h2 className="text-3xl font-bold tracking-tight text-white md:text-2xl">{title}</h2>
//       </div>
//       <div className="mb-2 h-px flex-1 bg-gradient-to-r from-sky-400/50 to-transparent" />
//     </motion.div>
//   );
// }

// export default SectionTitle;

import React from "react";
import { motion } from "framer-motion";

function SectionTitle({ title, eyebrow = "THE DETAILS" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformPerspective: 1000 }}
      className="portfolio-section-title mb-12 flex items-end gap-6 pt-12"
    >
      <div className="relative shrink-0">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 36 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 h-[2px] rounded-full bg-gradient-to-r from-sky-400 to-violet-400"
        />

        <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-sky-400">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
          {eyebrow}
        </p>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
          <span className="text-sky-400">.</span>
        </h2>
      </div>

      <div className="mb-3 flex-1">
        <div className="relative h-px w-full overflow-hidden bg-gradient-to-r from-sky-400/40 via-violet-400/20 to-transparent">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SectionTitle;
