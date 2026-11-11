import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center bg-[#070b14]">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-sky-400/15 border-t-sky-400" />
        <span className="font-mono text-lg font-bold text-white">AS</span>
      </div>
      <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Loading portfolio</p>
    </div>
  );
}

export default Loader;
