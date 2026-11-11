import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Tabs } from "antd";
import Adminintro from "./Adminintro";
import Adminabout from "./Adminabout";
import Admincontact from "./Admincontact";
import Adminproject from "./Adminproject";
import Admincourse from "./Admincourse";
import Adminexperience from "./Adminexperience";

function Admin() {

const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let active = true;
    api.get("/api/portfolio/admin/me")
      .then(() => { if (active) setAuthorized(true); })
      .catch(() => {
        localStorage.removeItem("adminToken");
        window.location.replace("/admin-login");
      });
    return () => { active = false; };
  }, []);




  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.replace("/admin-login");
  };

  const items = [
  {
    key: '1',
    label: 'Intro',
    children: <Adminintro />,
  },
  {
    key: '2',
    label: 'About',
    children: <Adminabout />,
  },
  {
    key: '3',
    label: 'Experience',
    children: <Adminexperience />,
  },
  {
    key: '4',
    label: 'Projects',
    children: <Adminproject />,
  },
  {
    key: '5',
    label: 'Courses',
    children: <Admincourse />,
  },
  {
    key: '6',
    label: 'Contact',
    children: <Admincontact />,
  }
  
];
  if (!authorized) return <div className="min-h-screen bg-primary" />;

  return (
    <div>
      <header className="flex items-center justify-between border-b border-white/10 bg-[#070b14] px-6 py-5 text-white">
        <a href="/" className="font-mono text-xl font-bold">AS<span className="text-sky-400">.</span></a>
        <h1 className="text-xl font-bold">Portfolio Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-primary text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </header>
      <div className="min-h-screen bg-[#f8fafc] px-6 py-8 text-slate-900 sm:px-3">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow-sm sm:p-3">
       <Tabs defaultActiveKey="1" items={items} tabPosition="top"/>
      </div>
      </div>
    </div>
  );
}

export default Admin;
