// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Modal, Form } from "antd";
// import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
// import { useDispatch } from "react-redux";
// import api from "../../utils/api";
// import { message } from "antd";

// function Adminexperience() {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { experiences } = portfolioData || {};

//   const [showAddEditModal, setShowAddEditModal] = useState(false);
//   const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

//   const [form] = Form.useForm();

//   const handleDelete = async (id) => {
//     try {
//       dispatch(ShowLoading());

//       const response = await api.post(`/api/portfolio/delete-experience`, {
//         _id: id,
//       });

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

//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());

//       const isEdit = selectedItemForEdit !== null;

//       const payload = {
//         values,
//         _id: selectedItemForEdit?._id, // only for edit
//       };

//       const response = await api.post(
//         `${isEdit ? "/api/portfolio/update-experience" : "/api/portfolio/add-experience"}`,
//         payload,
//       );

//       dispatch(HideLoading());

//       if (response.data.success) {
//         message.success(response.data.message);
//         setShowAddEditModal(false);
//         setSelectedItemForEdit(null);
//         form.resetFields();
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (selectedItemForEdit) {
//       form.setFieldsValue(selectedItemForEdit);
//     } else {
//       form.resetFields();
//     }
//   }, [selectedItemForEdit, form]);

//   return (
//     <div>
//       {/* Add button */}
//       <div className="flex justify-end w-full">
//         <button
//           className="bg-secondary text-black border border-gray-300 px-3 py-1 hover:bg-partial mt-2"
//           onClick={() => {
//             setSelectedItemForEdit(null);
//             setShowAddEditModal(true);
//           }}
//         >
//           Add Experience
//         </button>
//       </div>

//       {/* Experience cards */}
//       <div className="grid grid-cols-3 sm:grid-cols-1 gap-5">
//         {experiences?.map((experience) => (
//           <div
//             key={experience._id}
//             className="shadow border border-gray-300 rounded p-4 m-2 flex flex-col"
//           >
//             <h1 className="text-lg text-primary font-bold">
//               {experience.period}
//             </h1>

//             <hr
//               style={{
//                 borderColor: "black",
//                 backgroundColor: "black",
//                 borderStyle: "solid",
//                 height: "1px",
//               }}
//             />

//             <h2 className="text-md text-primary font-semibold">
//               Role : {experience.position}
//             </h2>

//             <p>Company : {experience.company}</p>

//             <p>{experience.description}</p>

//             <div className="flex justify-end w-full gap-5 mt-5">
//               <button
//                 className="bg-primary text-white px-3 py-1 hover:bg-partial mt-2 mr-2"
//                 onClick={() => {
//                   setSelectedItemForEdit(experience);
//                   setShowAddEditModal(true);
//                 }}
//               >
//                 Edit
//               </button>

//               <button
//                 className="bg-partial text-white px-3 py-1 hover:bg-black mt-2"
//                 onClick={() => handleDelete(experience._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       <Modal
//         open={showAddEditModal}
//         onCancel={() => {
//           setShowAddEditModal(false);
//           form.resetFields();
//         }}
//         footer={null}
//         title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
//         destroyOnClose
//       >
//         <Form form={form} layout="vertical" onFinish={onFinish}>
//           <Form.Item name="period" label="Period">
//             <input
//               className="w-full border p-2"
//               placeholder="e.g., Jan 2020 - Dec 2021"
//             />
//           </Form.Item>

//           <Form.Item name="position" label="Position">
//             <input
//               className="w-full border p-2"
//               placeholder="e.g., Software Engineer"
//             />
//           </Form.Item>

//           <Form.Item name="company" label="Company">
//             <input className="w-full border p-2" placeholder="e.g., Google" />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <textarea
//               className="w-full border p-2"
//               placeholder="Describe your work"
//             />
//           </Form.Item>

//           <div className="flex justify-end gap-3">
//             <button
//               type="button"
//               className="bg-secondary text-black px-5 py-2 rounded"
//               onClick={() => {
//                 setShowAddEditModal(false);
//                 form.resetFields();
//               }}
//             >
//               Close
//             </button>

//             <button
//               type="submit"
//               className="bg-primary text-white px-5 py-2 rounded hover:bg-partial"
//             >
//               {selectedItemForEdit ? "Update" : "Add"}
//             </button>
//           </div>
//         </Form>
//       </Modal>
//     </div>
//   );
// }

// export default Adminexperience;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, message } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus, Pencil, Trash2, X, Briefcase, CalendarDays, Save,
} from "lucide-react";
import {
  ShowLoading, HideLoading, ReloadData,
} from "../../redux/rootSlice";
import api from "../../utils/api";

function Adminexperience() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData || {};

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [form] = Form.useForm();

  const closeModal = () => {
    setShowAddEditModal(false);
    setSelectedItemForEdit(null);
    form.resetFields();
  };

  const openAddModal = () => {
    setSelectedItemForEdit(null);
    form.resetFields();
    setShowAddEditModal(true);
  };

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());

      const response = await api.post(
        `/api/portfolio/delete-experience`,
        { _id: id }
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

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const isEdit = selectedItemForEdit !== null;

      const payload = {
        values,
        _id: selectedItemForEdit?._id,
      };

      const response = await api.post(
        isEdit
          ? "/api/portfolio/update-experience"
          : "/api/portfolio/add-experience",
        payload
      );

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        closeModal();
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (selectedItemForEdit) {
      form.setFieldsValue(selectedItemForEdit);
    } else {
      form.resetFields();
    }
  }, [selectedItemForEdit, form]);

  return (
    <div className="portfolio-admin">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400">
            Portfolio management
          </p>
          <h2 className="text-2xl font-bold text-white">
            Experience & Education
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Manage the timeline entries displayed on your portfolio.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
        >
          <Plus size={17} />
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
        {experiences?.length ? experiences.map((experience, index) => (
          <motion.article
            key={experience._id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-6 transition hover:-translate-y-1 hover:border-sky-400/30"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/0 blur-[70px] transition group-hover:bg-sky-400/10" />

            <div className="relative">
              <div className="flex items-center gap-2 text-sky-300">
                <CalendarDays size={15} />
                <span className="font-mono text-xs">{experience.period}</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                {experience.position}
              </h3>

              <p className="mt-2 flex items-center gap-2 text-sm text-indigo-300">
                <Briefcase size={15} />
                {experience.company}
              </p>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-400">
                {experience.description}
              </p>

              <div className="mt-6 flex justify-end gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItemForEdit(experience);
                    setShowAddEditModal(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
                >
                  <Pencil size={14} />
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(experience._id)}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-400/15 px-4 py-2 text-xs font-semibold text-red-400 transition hover:border-red-400/40 hover:bg-red-400/10"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          </motion.article>
        )) : (
          <div className="col-span-2 rounded-2xl border border-dashed border-white/10 p-10 text-center md:col-span-1">
            <Briefcase size={30} className="mx-auto text-slate-600" />
            <p className="mt-4 text-sm text-slate-400">
              No experience or education entries added yet.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showAddEditModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              className="my-auto max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1220] p-7 shadow-2xl sm:p-5"
            >
              <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400">
                    Timeline entry
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:text-white"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="portfolio-admin-form"
              >
                <Form.Item name="period" label="Period">
                  <input
                    className="admin-field"
                    placeholder="e.g., Jan 2020 - Dec 2021"
                  />
                </Form.Item>

                <Form.Item name="position" label="Position">
                  <input
                    className="admin-field"
                    placeholder="e.g., Software Engineer"
                  />
                </Form.Item>

                <Form.Item name="company" label="Company">
                  <input
                    className="admin-field"
                    placeholder="e.g., Google"
                  />
                </Form.Item>

                <Form.Item name="description" label="Description">
                  <textarea
                    rows={4}
                    className="admin-field resize-y"
                    placeholder="Describe your work or education..."
                  />
                </Form.Item>

                <div className="flex justify-end gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:bg-white/5"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
                  >
                    <Save size={16} />
                    {selectedItemForEdit ? "Update" : "Add"}
                  </button>
                </div>
              </Form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Adminexperience;
