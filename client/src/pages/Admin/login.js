import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

function AdminLogin() {
    const dispatch = useDispatch();
    const API = process.env.REACT_APP_BACKEND_URL;

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      dispatch(ShowLoading());
      const res = await axios.post(`${API}/api/portfolio/admin-login`, user);
      dispatch(HideLoading());

      if (res.data.success) {
        message.success(res.data.message);
        localStorage.setItem("adminToken", JSON.stringify(res.data));
        window.location.href = "/admin";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || err.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-5 text-center">Admin Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-5"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-2 hover:bg-partial"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
