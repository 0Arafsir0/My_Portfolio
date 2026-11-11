// import React, { useState } from "react";
// import { message } from "antd";
// import api from "../../utils/api";
// import { useDispatch } from "react-redux";
// import { HideLoading, ShowLoading } from "../../redux/rootSlice";

// function AdminLogin() {
//   const dispatch = useDispatch();
//   const [user, setUser] = useState({ username: "", password: "" });
//   const [submitting, setSubmitting] = useState(false);

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     if (submitting) return;
//     try {
//       setSubmitting(true);
//       dispatch(ShowLoading());
//       const res = await api.post("/api/portfolio/admin-login", user);
//       if (res.data.success && res.data.token) {
//         localStorage.setItem("adminToken", res.data.token);
//         message.success(res.data.message);
//         window.location.assign("/admin");
//       } else {
//         message.error(res.data.message || "Login failed.");
//       }
//     } catch (error) {
//       message.error(error.response?.data?.message || "Unable to sign in.");
//     } finally {
//       setSubmitting(false);
//       dispatch(HideLoading());
//     }
//   };

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-primary px-4">
//       <form onSubmit={handleLogin} className="w-full max-w-sm rounded-xl border border-white/10 bg-white p-8 shadow-2xl">
//         <h1 className="mb-2 text-center text-2xl font-bold">Admin Login</h1>
//         <p className="mb-6 text-center text-sm text-gray-500">Sign in to manage portfolio content.</p>
//         <label className="mb-2 block text-sm font-medium" htmlFor="username">Username</label>
//         <input id="username" type="text" autoComplete="username" required value={user.username}
//           onChange={(event) => setUser({ ...user, username: event.target.value })} className="mb-4 w-full rounded border p-3" />
//         <label className="mb-2 block text-sm font-medium" htmlFor="password">Password</label>
//         <input id="password" type="password" autoComplete="current-password" required value={user.password}
//           onChange={(event) => setUser({ ...user, password: event.target.value })} className="mb-6 w-full rounded border p-3" />
//         <button disabled={submitting} type="submit" className="w-full rounded bg-primary py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60">
//           {submitting ? "Signing in..." : "Sign in"}
//         </button>
//       </form>
//     </main>
//   );
// }

// export default AdminLogin;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LockKeyhole, UserRound, ShieldCheck, ArrowRight } from "lucide-react";
import { message } from "antd";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

function AdminLogin() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (submitting) return;

    try {
      setSubmitting(true);
      dispatch(ShowLoading());

      const res = await api.post("/api/portfolio/admin-login", user);

      if (res.data.success && res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
        message.success(res.data.message);
        window.location.assign("/admin");
      } else {
        message.error(res.data.message || "Login failed.");
      }
    } catch (error) {
      message.error(
        error.response?.data?.message || "Unable to sign in."
      );
    } finally {
      setSubmitting(false);
      dispatch(HideLoading());
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070b14] px-4 py-10">
      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:56px_56px]" />

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/95 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6"
      >
        <div className="mb-8 text-center">
          <a
            href="/"
            className="font-mono text-3xl font-extrabold tracking-tight text-white"
          >
            AS<span className="text-sky-400">.</span>
          </a>

          <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
            <ShieldCheck size={26} />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-white">
            Admin Access
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage your portfolio.
          </p>
        </div>

        <div className="mb-5">
          <label
            className="mb-2 block text-xs font-semibold text-slate-300"
            htmlFor="username"
          >
            Username
          </label>

          <div className="relative">
            <UserRound
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={user.username}
              onChange={(event) =>
                setUser({ ...user, username: event.target.value })
              }
              placeholder="Enter your username"
              className="w-full rounded-xl border border-white/10 bg-[#070b14] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
            />
          </div>
        </div>

        <div className="mb-7">
          <label
            className="mb-2 block text-xs font-semibold text-slate-300"
            htmlFor="password"
          >
            Password
          </label>

          <div className="relative">
            <LockKeyhole
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/10 bg-[#070b14] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
            />
          </div>
        </div>

        <button
          disabled={submitting}
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Signing in..." : "Sign in"}
          {!submitting && (
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          )}
        </button>

        <div className="mt-7 border-t border-white/10 pt-5 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Authorized access only
          </p>
        </div>
      </motion.form>
    </main>
  );
}

export default AdminLogin;
