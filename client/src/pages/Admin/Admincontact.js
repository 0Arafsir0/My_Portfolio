// import React from "react";
// import { Form, message } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import api from "../../utils/api";
// import Loader from "../Home/Loader";
// import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

// function AdminContact() {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { contact } = portfolioData || {};

//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());

//       const response = await api.post(
//         `/api/portfolio/update-contact`,
//         {
//           values,
//           _id: contact?._id,
//         }
//       );

//       dispatch(HideLoading());

//       if (response.data.success) {
//         message.success(response.data.message);
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   if (!contact) {
//     return <Loader />;
//   }

//   return (
//     <div className="p-5">

//       <Form
//         form={form}
//         layout="vertical"
//         initialValues={contact}
//         onFinish={onFinish}
//       >

//         <Form.Item name="name" label="Name">
//           <input className="w-full border p-2" />
//         </Form.Item>

//         <Form.Item name="email" label="Email">
//           <input className="w-full border p-2" />
//         </Form.Item>

//         <Form.Item name="phone" label="Phone">
//           <input className="w-full border p-2" />
//         </Form.Item>

//         <Form.Item name="country" label="Country">
//           <input className="w-full border p-2" />
//         </Form.Item>

//         <div className="flex justify-end mt-4">
//           <button
//             type="submit"
//             className="bg-primary text-white px-5 py-2 hover:bg-partial"
//           >
//             Update Contact
//           </button>
//         </div>

//       </Form>

//     </div>
//   );
// }

// export default AdminContact;

import React from "react";
import { motion } from "framer-motion";
import { Form, message } from "antd";
import {
  Mail,
  MapPin,
  Phone,
  User,
  Save,
  Contact as ContactIcon,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../utils/api";
import Loader from "../Home/Loader";
import {
  ShowLoading,
  HideLoading,
  ReloadData,
} from "../../redux/rootSlice";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData || {};

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const response = await api.post(
        `/api/portfolio/update-contact`,
        {
          values,
          _id: contact?._id,
        }
      );

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  if (!contact) {
    return <Loader />;
  }

  const fields = [
    {
      name: "name",
      label: "Full Name",
      placeholder: "Enter your name",
      icon: User,
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
      icon: Mail,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      icon: Phone,
    },
    {
      name: "country",
      label: "Location",
      placeholder: "Enter your country or location",
      icon: MapPin,
    },
  ];

  return (
    <div className="portfolio-admin">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-7 flex flex-wrap items-center justify-between gap-4"
      >
        <div>
          <div className="mb-2 flex items-center gap-2">
            <ContactIcon size={17} className="text-sky-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400">
              Portfolio management
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white">
            Contact Information
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Manage the contact details displayed on your public portfolio.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-7 shadow-2xl shadow-black/20 sm:p-5"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-500/10 blur-[90px]" />

        <div className="relative mb-7 flex items-center gap-3 border-b border-white/10 pb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
            <ContactIcon size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Personal Details
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Update your contact information below.
            </p>
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          initialValues={contact}
          onFinish={onFinish}
          className="relative portfolio-admin-form"
        >
          <div className="grid grid-cols-2 gap-x-6 md:grid-cols-1">
            {fields.map((field, index) => {
              const Icon = field.icon;

              return (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Form.Item
                    name={field.name}
                    label={field.label}
                  >
                    <div className="relative">
                      <Icon
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        className="w-full rounded-xl border border-white/10 bg-[#070b14] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </Form.Item>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 flex justify-end border-t border-white/10 pt-6">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              <Save size={17} />
              Update Contact
            </button>
          </div>
        </Form>
      </motion.div>
    </div>
  );
}

export default AdminContact;
