// import React from "react";

// function Loader() {
//   return (
//     <div className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center bg-[#070b14]">
//       <div className="relative flex h-16 w-16 items-center justify-center">
//         <span className="absolute inset-0 animate-spin rounded-full border-2 border-sky-400/15 border-t-sky-400" />
//         <span className="font-mono text-lg font-bold text-white">AS</span>
//       </div>
//       <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Loading portfolio</p>
//     </div>
//   );
// }

// export default Loader;

// import React from "react";
// import { motion } from "framer-motion";

// function Loader() {
//   return (
//     <div className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070b14]">

//       {/* Background lighting */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.08] blur-[100px]" />

//       <div
//         className="relative flex h-24 w-24 items-center justify-center"
//         style={{ perspective: 500 }}
//       >
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute inset-0 rounded-[28px] border-2 border-transparent border-t-sky-400 border-r-violet-400 shadow-[0_0_25px_rgba(56,189,248,0.15)]"
//         />

//         <motion.div
//           animate={{
//             rotate: -360,
//             scale: [0.9, 1.05, 0.9],
//           }}
//           transition={{
//             rotate: {
//               duration: 5,
//               repeat: Infinity,
//               ease: "linear",
//             },
//             scale: {
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             },
//           }}
//           className="absolute inset-2 rounded-[22px] border border-sky-400/20"
//         />

//         <motion.span
//           animate={{
//             rotateY: [0, 180, 360],
//             scale: [1, 1.12, 1],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="font-mono text-2xl font-extrabold text-white"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           AS<span className="text-sky-400">.</span>
//         </motion.span>
//       </div>

//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400"
//       >
//         Initializing Portfolio
//       </motion.p>

//       <div className="mt-5 h-[2px] w-36 overflow-hidden rounded-full bg-white/10">
//         <motion.div
//           animate={{ x: ["-100%", "200%"] }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400"
//         />
//       </div>
//     </div>
//   );
// }

// export default Loader;

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function Loader() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070b14]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.08] blur-[100px]" />

      <div className="relative flex h-24 w-24 items-center justify-center">
        {!reduceMotion && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-[28px] border-2 border-transparent border-r-violet-400 border-t-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.15)]"
            />

            <motion.div
              animate={{ rotate: -360, scale: [0.9, 1.05, 0.9] }}
              transition={{
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-2 rounded-[22px] border border-sky-400/20"
            />
          </>
        )}

        <motion.span
          animate={reduceMotion ? {} : { scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="font-mono text-2xl font-extrabold text-white"
        >
          AS<span className="text-sky-400">.</span>
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400"
      >
        Initializing Portfolio
      </motion.p>

      {!reduceMotion && (
        <div className="mt-5 h-[2px] w-36 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400"
          />
        </div>
      )}
    </div>
  );
}

export default Loader;
