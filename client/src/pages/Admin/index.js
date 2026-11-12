// import React, { useEffect, useState } from "react";
// import api from "../../utils/api";
// import { Tabs } from "antd";
// import Adminintro from "./Adminintro";
// import Adminabout from "./Adminabout";
// import Admincontact from "./Admincontact";
// import Adminproject from "./Adminproject";
// import Admincourse from "./Admincourse";
// import Adminexperience from "./Adminexperience";

// function Admin() {

// const [authorized, setAuthorized] = useState(false);

//   useEffect(() => {
//     let active = true;
//     api.get("/api/portfolio/admin/me")
//       .then(() => { if (active) setAuthorized(true); })
//       .catch(() => {
//         localStorage.removeItem("adminToken");
//         window.location.replace("/admin-login");
//       });
//     return () => { active = false; };
//   }, []);




//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     window.location.replace("/admin-login");
//   };

//   const items = [
//   {
//     key: '1',
//     label: 'Intro',
//     children: <Adminintro />,
//   },
//   {
//     key: '2',
//     label: 'About',
//     children: <Adminabout />,
//   },
//   {
//     key: '3',
//     label: 'Experience',
//     children: <Adminexperience />,
//   },
//   {
//     key: '4',
//     label: 'Projects',
//     children: <Adminproject />,
//   },
//   {
//     key: '5',
//     label: 'Courses',
//     children: <Admincourse />,
//   },
//   {
//     key: '6',
//     label: 'Contact',
//     children: <Admincontact />,
//   }
  
// ];
//   if (!authorized) return <div className="min-h-screen bg-primary" />;

//   return (
//     <div>
//       <header className="flex items-center justify-between border-b border-white/10 bg-[#070b14] px-6 py-5 text-white">
//         <a href="/" className="font-mono text-xl font-bold">AS<span className="text-sky-400">.</span></a>
//         <h1 className="text-xl font-bold">Portfolio Admin</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-primary text-white px-3 py-1 rounded"
//         >
//           Logout
//         </button>
//       </header>
//       <div className="min-h-screen bg-[#f8fafc] px-6 py-8 text-slate-900 sm:px-3">
//       <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow-sm sm:p-3">
//        <Tabs defaultActiveKey="1" items={items} tabPosition="top"/>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Tabs } from "antd";
import {
  LayoutDashboard,
  LogOut,
  UserRound,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Mail,
  ShieldCheck,
} from "lucide-react";

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

    api
      .get("/api/portfolio/admin/me")
      .then(() => {
        if (active) setAuthorized(true);
      })
      .catch(() => {
        localStorage.removeItem("adminToken");
        window.location.replace("/admin-login");
      });

    return () => {
      active = false;
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.replace("/admin-login");
  };

  const items = [
    {
      key: "1",
      label: (
        <span className="flex items-center gap-2">
          <UserRound size={15} />
          Intro
        </span>
      ),
      children: <Adminintro />,
    },
    {
      key: "2",
      label: (
        <span className="flex items-center gap-2">
          <LayoutDashboard size={15} />
          About
        </span>
      ),
      children: <Adminabout />,
    },
    {
      key: "3",
      label: (
        <span className="flex items-center gap-2">
          <BriefcaseBusiness size={15} />
          Experience
        </span>
      ),
      children: <Adminexperience />,
    },
    {
      key: "4",
      label: (
        <span className="flex items-center gap-2">
          <FolderKanban size={15} />
          Projects
        </span>
      ),
      children: <Adminproject />,
    },
    {
      key: "5",
      label: (
        <span className="flex items-center gap-2">
          <GraduationCap size={15} />
          Courses
        </span>
      ),
      children: <Admincourse />,
    },
    {
      key: "6",
      label: (
        <span className="flex items-center gap-2">
          <Mail size={15} />
          Contact
        </span>
      ),
      children: <Admincontact />,
    },
  ];

  if (!authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070b14]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-sky-400/20 border-t-sky-400" />
          <p className="font-mono text-xs tracking-[0.25em] text-slate-500">
            VERIFYING ACCESS
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      {/* Background effects */}
      {/* <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/[0.06] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-500/[0.06] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div> */}
      {/* Dynamic video background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/bg1.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#070b14]/85" />

        {/* Gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070b14]/60 via-transparent to-[#070b14]/80" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070b14]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 font-mono text-lg font-bold text-white transition group-hover:border-sky-400/50">
              AS<span className="text-sky-400">.</span>
            </div>

            <div>
              <p className="font-mono text-sm font-bold tracking-wide text-white">
                ARAFAT<span className="text-sky-400">.</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Portfolio Management
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-2 sm:flex">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              Authenticated
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="group flex items-center gap-2 rounded-lg border border-red-400/20 bg-red-400/[0.06] px-4 py-2.5 text-sm font-medium text-red-400 transition duration-300 hover:border-red-400/50 hover:bg-red-400/10"
          >
            <LogOut
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-[1600px] px-5 py-10 sm:px-8 lg:py-14">
        {/* Page heading */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
              Control Center
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Admin <span className="text-sky-400">Dashboard</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Manage your portfolio content, professional experience,
                projects, courses, and contact information.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                <LayoutDashboard size={17} className="text-sky-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">
                  Portfolio CMS
                </p>
                <p className="font-mono text-[10px] text-slate-500">
                  CONTENT MANAGEMENT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin tabs */}
        <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1220]/90 shadow-2xl shadow-black/20">
          <div className="border-b border-white/[0.07] px-6 py-5 sm:px-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
              <h2 className="text-sm font-semibold tracking-wide text-white">
                Manage Portfolio Sections
              </h2>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Select a section to view and update its content.
            </p>
          </div>

          <div className="admin-tabs p-5 sm:p-8">
            <Tabs
              defaultActiveKey="1"
              items={items}
              tabPosition="top"
              destroyOnHidden={false}
            />
          </div>
        </section>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] tracking-wider text-slate-600">
            © {new Date().getFullYear()} ARAFAT SIRAJ
          </p>
          <p className="font-mono text-[10px] tracking-wider text-slate-600">
            PORTFOLIO ADMINISTRATION SYSTEM
          </p>
        </div>
      </main>

      {/* Ant Design tab styling */}
      <style>{`
        .admin-tabs .ant-tabs {
          color: #e2e8f0;
        }

        .admin-tabs .ant-tabs-nav {
          margin-bottom: 28px;
        }

        .admin-tabs .ant-tabs-nav::before {
          border-bottom-color: rgba(255,255,255,0.08) !important;
        }

        .admin-tabs .ant-tabs-tab {
          margin: 0 6px 0 0 !important;
          padding: 11px 16px !important;
          border: 1px solid transparent;
          border-radius: 9px;
          color: #94a3b8;
          transition: all 0.25s ease;
        }

        .admin-tabs .ant-tabs-tab:hover {
          color: #7dd3fc !important;
          background: rgba(56,189,248,0.05);
        }

        .admin-tabs .ant-tabs-tab-active {
          border-color: rgba(56,189,248,0.2);
          background: rgba(56,189,248,0.08);
        }

        .admin-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #38bdf8 !important;
          text-shadow: none;
        }

        .admin-tabs .ant-tabs-ink-bar {
          height: 2px !important;
          border-radius: 10px;
          background: #38bdf8 !important;
        }

        .admin-tabs .ant-tabs-content-holder {
          min-height: 350px;
          color: #e2e8f0;
        }

        .admin-tabs .ant-tabs-tab-btn {
          outline: none !important;
        }

        @media (max-width: 640px) {
          .admin-tabs .ant-tabs-nav {
            margin-bottom: 20px;
          }

          .admin-tabs .ant-tabs-tab {
            padding: 9px 11px !important;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default Admin;
