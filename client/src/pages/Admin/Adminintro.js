// import React from "react";
// import { Form, message } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../Home/Loader";
// import { ShowLoading, HideLoading } from "../../redux/rootSlice";
// import api from "../../utils/api";

// function Adminintro() {
//   const { portfolioData } = useSelector((state) => state.root);
//   const dispatch = useDispatch();

//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());
//       const response = await api.post(`/api/portfolio/update-intro`, {
//         values,
//         _id: portfolioData.intro._id,
//       });
//       dispatch(HideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   if (!portfolioData) {
//     return <Loader />;
//   }

//   return (
//     <div>
//       <Form
//         onFinish={onFinish}
//         layout="vertical"
//         initialValues={portfolioData?.intro}
//       >
//         <Form.Item name="welcometext" label="Welcome Text:">
//           <input placeholder="write welcome text here..." />
//         </Form.Item>
//         <Form.Item name="firstname" label="First Name:">
//           <input placeholder="write first name here..." />
//         </Form.Item>
//         <Form.Item name="lastname" label="Last Name:">
//           <input placeholder="write last name here..." />
//         </Form.Item>
//         <Form.Item name="caption" label="Caption:">
//           <textarea placeholder="write a caption here..." />
//         </Form.Item>
//         <Form.Item name="description" label="Description:">
//           <textarea placeholder="write some description here..." />
//         </Form.Item>
//         <Form.Item name="imgurl" label="Image URL:">
//           <input placeholder="give image URL here..." />
//         </Form.Item>
//         <div className="flex justify-end w-full">
//           <button
//             type="submit"
//             className="bg-primary text-white px-5 py-2 rounded hover:bg-partial"
//           >
//             Save Changes
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default Adminintro;


import React from "react";
import { motion } from "framer-motion";
import { Form, message } from "antd";
import {
  UserRound, Image, Type, FileText, Save,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Home/Loader";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import api from "../../utils/api";

function Adminintro() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const response = await api.post(`/api/portfolio/update-intro`, {
        values,
        _id: portfolioData.intro._id,
      });

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  if (!portfolioData) {
    return <Loader />;
  }

  const fields = [
    {
      name: "welcometext",
      label: "Welcome Text",
      placeholder: "e.g. COMPUTER SCIENCE & ENGINEERING",
      icon: Type,
    },
    {
      name: "firstname",
      label: "First Name",
      placeholder: "Enter your first name",
      icon: UserRound,
    },
    {
      name: "lastname",
      label: "Last Name",
      placeholder: "Enter your last name",
      icon: UserRound,
    },
    {
      name: "imgurl",
      label: "Profile Image URL",
      placeholder: "https://example.com/image.jpg",
      icon: Image,
    },
  ];

  return (
    <div className="portfolio-admin">
      <div className="mb-7">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400">
          Portfolio management
        </p>
        <h2 className="text-2xl font-bold text-white">Introduction</h2>
        <p className="mt-2 text-sm text-slate-500">
          Update the introductory content displayed on your homepage.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-7 sm:p-5"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-500/10 blur-[90px]" />

        <div className="relative mb-7 flex items-center gap-3 border-b border-white/10 pb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
            <UserRound size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-white">Hero Section Details</h3>
            <p className="mt-1 text-xs text-slate-500">
              Manage your name, introduction and profile image.
            </p>
          </div>
        </div>

        <Form
          layout="vertical"
          initialValues={portfolioData?.intro}
          onFinish={onFinish}
          className="relative portfolio-admin-form"
        >
          <div className="grid grid-cols-2 gap-x-6 md:grid-cols-1">
            {fields.map((field) => {
              const Icon = field.icon;

              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                >
                  <div className="relative">
                    <Icon
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      placeholder={field.placeholder}
                      className="admin-field pl-11"
                    />
                  </div>
                </Form.Item>
              );
            })}
          </div>

          <Form.Item name="caption" label="Caption">
            <textarea
              rows={2}
              placeholder="e.g. I build things for the web."
              className="admin-field resize-y"
            />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <textarea
              rows={5}
              placeholder="Write your introduction..."
              className="admin-field resize-y"
            />
          </Form.Item>

          <div className="mt-5 flex justify-end border-t border-white/10 pt-6">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        </Form>
      </motion.div>
    </div>
  );
}

export default Adminintro;
