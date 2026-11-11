import React, { useState } from "react";
import { message } from "antd";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

function AdminLogin() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
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
      message.error(error.response?.data?.message || "Unable to sign in.");
    } finally {
      setSubmitting(false);
      dispatch(HideLoading());
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-primary px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm rounded-xl border border-white/10 bg-white p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-2xl font-bold">Admin Login</h1>
        <p className="mb-6 text-center text-sm text-gray-500">Sign in to manage portfolio content.</p>
        <label className="mb-2 block text-sm font-medium" htmlFor="username">Username</label>
        <input id="username" type="text" autoComplete="username" required value={user.username}
          onChange={(event) => setUser({ ...user, username: event.target.value })} className="mb-4 w-full rounded border p-3" />
        <label className="mb-2 block text-sm font-medium" htmlFor="password">Password</label>
        <input id="password" type="password" autoComplete="current-password" required value={user.password}
          onChange={(event) => setUser({ ...user, password: event.target.value })} className="mb-6 w-full rounded border p-3" />
        <button disabled={submitting} type="submit" className="w-full rounded bg-primary py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60">
          {submitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}

export default AdminLogin;
