// 
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const contact = portfolioData?.contact || {};

  const contactItems = [
    {
      label: "Email",
      value: contact.email,
      href: contact.email ? `mailto:${contact.email}` : null,
      icon: Mail,
      description: "Send me an email",
    },
    {
      label: "Phone",
      value: contact.phone,
      href: contact.phone ? `tel:${contact.phone}` : null,
      icon: Phone,
      description: "Call or message me",
    },
    {
      label: "Location",
      value: contact.country,
      href: null,
      icon: MapPin,
      description: "Current location",
    },
  ].filter((item) => item.value);

  return (
    <section id="contact" className="scroll-mt-28 py-16">
      <SectionTitle title="Let's Connect" eyebrow="CONTACT" />

      <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]">
        {/* Background effects */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />

        <div className="relative grid grid-cols-2 gap-12 p-10 lg:gap-8 md:grid-cols-1 md:p-7 sm:p-5">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2">
              <Sparkles size={14} className="text-sky-300" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">
                Open to opportunities
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">
              Have a project in mind?
            </p>

            <h3 className="mt-5 max-w-lg text-5xl font-bold leading-[1.15] tracking-tight text-white lg:text-4xl md:text-4xl sm:text-3xl">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-sky-300 to-indigo-400 bg-clip-text text-transparent">
                meaningful.
              </span>
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400">
              For software development opportunities, collaboration, or
              technical discussions, feel free to reach out through any of
              the contact channels.
            </p>

            {contact.email && (
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-sky-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/10 transition hover:bg-sky-300"
              >
                Send an email
                <ArrowUpRight size={17} />
              </motion.a>
            )}

            <div className="mt-12 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400/50" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Let's create something useful
              </span>
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center gap-4"
          >
            {contactItems.length > 0 ? (
              contactItems.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    whileHover={{ y: -5, x: 3 }}
                    transition={{ duration: 0.25 }}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-sky-400/30 hover:bg-sky-400/[0.04] sm:p-4"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-gradient-to-b from-sky-400 to-indigo-400 transition-transform duration-300 group-hover:scale-y-100" />

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/10 text-sky-300 transition duration-300 group-hover:scale-110 group-hover:bg-sky-400/15">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 break-words text-sm font-semibold text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300"
                      />
                    )}
                  </motion.div>
                );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <a href={item.href}>{content}</a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-sm text-slate-500">
                Contact information will appear here.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
