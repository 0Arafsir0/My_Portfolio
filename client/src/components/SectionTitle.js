import React from "react";
import { motion } from "framer-motion";

function SectionTitle({ title, eyebrow = "THE DETAILS" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.55 }}
      className="mb-8 flex items-end gap-5 pt-12">
      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-sky-400">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-2xl">{title}</h2>
      </div>
      <div className="mb-2 h-px flex-1 bg-gradient-to-r from-sky-400/50 to-transparent" />
    </motion.div>
  );
}

export default SectionTitle;
