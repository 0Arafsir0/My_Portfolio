import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import Adminintro from "./Adminintro";
import Adminabout from "./Adminabout";
import Admincontact from "./Admincontact";
import Adminproject from "./Adminproject";
import Admincourse from "./Admincourse";
import Adminexperience from "./Adminexperience";

function Admin() {

useEffect(() => {
  const adminToken = localStorage.getItem("adminToken");
  if (!adminToken) {
    window.location.href = "/admin-login";
  }
}, []);




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
  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center justify-between px-5 py-2">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin-login";
          }}
          className="bg-primary text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
      <hr />
      <div className="mt-5 p-10 sm:overflow-x-auto sm:custom-scrollbar">
       <Tabs defaultActiveKey="1" items={items} tabPosition="top"/>
      </div>
    </div>
  );
}

export default Admin;
