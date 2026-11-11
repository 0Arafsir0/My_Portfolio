// import React from "react";
// import {
//   FaGithub,
//   FaFacebook,
//   FaLinkedin,
//   FaEnvelope,
//   FaPhone,
// } from "react-icons/fa";

// function Sider() {
//   return (
//     <div className="fixed right-0 bottom-0 px-10 sm:py-5 sm:w-full sm:bg-inherit">
//       <div className="flex flex-col items-center">
//         <div className="  flex flex-col sm:flex-row gap-10 text-white text-xl">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebook className="hover:text-blue-400 cursor-pointer" />
//           </a>

//           <a href="https://linkedin.com/in/arafsir" target="_blank" rel="noreferrer">
//             <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
//           </a>

//           <a href="mailto:arafsirarafat@gmail.com">
//             <FaEnvelope className="hover:text-red-400 cursor-pointer" />
//           </a>

//           <a href="tel:+8801305972262">
//             <FaPhone className="hover:text-green-400 cursor-pointer" />
//           </a>
//           <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer">
//             <FaGithub className="hover:text-gray-400 cursor-pointer" />
//           </a>
//         </div>
//         <div className="w-[1px] h-52 bg-[#ffffff] sm:hidden"></div>
//       </div>
//     </div>
//   );
// }

// export default Sider;

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
    color: "hover:text-blue-400",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arafsir",
    icon: FaLinkedin,
    color: "hover:text-sky-300",
  },
  {
    label: "Email",
    href: "mailto:arafsirarafat@gmail.com",
    icon: FaEnvelope,
    color: "hover:text-red-400",
  },
  {
    label: "Phone",
    href: "tel:+8801305972262",
    icon: FaPhone,
    color: "hover:text-green-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/0Arafsir0",
    icon: FaGithub,
    color: "hover:text-white",
  },
];

function Sider() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="portfolio-social-dock fixed bottom-0 right-5 z-40 flex flex-col items-center sm:bottom-5 sm:right-1/2 sm:-translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.09] bg-[#0a1220]/75 px-3 py-5 shadow-[0_15px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:flex-row sm:gap-5 sm:px-5 sm:py-3">
        {socialLinks.map(({ label, href, icon: Icon, color }, index) => (
          <motion.a
            key={label}
            href={href}
            target={
              label === "Facebook" ||
              label === "LinkedIn" ||
              label === "GitHub"
                ? "_blank"
                : undefined
            }
            rel="noreferrer"
            aria-label={label}
            title={label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{
              scale: 1.25,
              y: -5,
              rotateY: 15,
            }}
            whileTap={{ scale: 0.9 }}
            className={`text-lg text-slate-400 transition-colors duration-300 ${color}`}
            style={{ transformPerspective: 500 }}
          >
            <Icon />
          </motion.a>
        ))}
      </div>

      <div className="h-28 w-px bg-gradient-to-b from-sky-400/60 to-transparent sm:hidden" />
    </motion.aside>
  );
}

export default Sider;
