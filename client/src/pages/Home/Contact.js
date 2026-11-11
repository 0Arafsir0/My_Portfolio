import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const contact = portfolioData?.contact || {};

  return (
    <section id="contact" className="scroll-mt-28 py-16">
      <SectionTitle title="Let's Connect" eyebrow="CONTACT" />
      <div className="grid grid-cols-2 gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/[0.07] via-white/[0.02] to-indigo-400/[0.06] p-10 lg:gap-6 md:grid-cols-1 md:p-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-300">Have a project in mind?</p>
          <h3 className="mt-4 max-w-lg text-4xl font-bold leading-tight text-white md:text-3xl">Let's build something useful.</h3>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">For software development opportunities, collaboration, or technical discussions, use one of the contact channels below.</p>
          {contact.email && <a href={`mailto:${contact.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300">Send an email <ArrowUpRight size={16} /></a>}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col justify-center gap-4">
          {contact.email && <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-sky-400/40"><span className="rounded-lg bg-sky-400/10 p-3 text-sky-300"><Mail size={20} /></span><span><span className="block text-xs text-slate-500">Email</span><span className="mt-1 block text-sm text-white">{contact.email}</span></span></a>}
          {contact.phone && <a href={`tel:${contact.phone}`} className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-sky-400/40"><span className="rounded-lg bg-sky-400/10 p-3 text-sky-300"><Phone size={20} /></span><span><span className="block text-xs text-slate-500">Phone</span><span className="mt-1 block text-sm text-white">{contact.phone}</span></span></a>}
          {contact.country && <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"><span className="rounded-lg bg-sky-400/10 p-3 text-sky-300"><MapPin size={20} /></span><span><span className="block text-xs text-slate-500">Location</span><span className="mt-1 block text-sm text-white">{contact.country}</span></span></div>}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
