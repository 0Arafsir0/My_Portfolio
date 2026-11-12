// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Modal, Form, message } from "antd";
// import api from "../../utils/api";
// import {
//   ShowLoading,
//   HideLoading,
//   ReloadData,
// } from "../../redux/rootSlice";

// function Adminproject() {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { projects } = portfolioData || {};

//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     if (selectedProject) {
//       form.setFieldsValue({
//         ...selectedProject,
//         technologies: selectedProject.technologies?.join(", "),
//       });
//     } else {
//       form.resetFields();
//     }
//   }, [selectedProject, form]);

//   // ADD / UPDATE
//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());

//       const isEdit = selectedProject !== null;

//       const payload = {
//         values,
//         _id: selectedProject?._id,
//       };

//       const url = isEdit
//         ? `/api/portfolio/update-project`
//         : `/api/portfolio/add-project`;

//       const response = await api.post(url, payload);

//       dispatch(HideLoading());

//       if (response.data.success) {
//         message.success(response.data.message);
//         setShowModal(false);
//         setSelectedProject(null);
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

//   // DELETE
//   const handleDelete = async (id) => {
//     try {
//       dispatch(ShowLoading());

//       const response = await api.post(`/api/portfolio/delete-project`, {
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

//   if (!projects) return null;

//   return (
//     <div className="p-2">

//       {/* HEADER */}
//       <div className="flex justify-end w-full">
//         <button
//           className="bg-secondary text-black border border-gray-300 px-4 py-2 hover:bg-partial transition"
//           onClick={() => {
//             setSelectedProject(null);
//             setShowModal(true);
//           }}
//         >
//           Add Project
//         </button>
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-5">

//         {projects?.map((project) => (
//           <div
//             key={project._id}
//             className="shadow border border-gray-300 rounded-lg p-4 flex flex-col gap-2 bg-white"
//           >
//             {/* TITLE */}
//             <h1 className="text-lg font-bold text-primary">
//               {project.title}
//             </h1>

//             {/* DESCRIPTION */}
//             <p className="text-sm text-gray-700">
//               {project.description}
//             </p>

//             {/* TECHNOLOGIES */}
//             <div className="flex flex-wrap gap-2 mt-2">
//               {(project.technologies || []).map((tech, i) => (
//                 <span
//                   key={i}
//                   className="px-2 py-1 text-xs border border-partial text-partial rounded"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* FEATURES */}
//             <div className="text-sm text-gray-600 mt-1">
//               <span className="font-semibold text-primary">
//                 Features:
//               </span>{" "}
//               {project.features}
//             </div>

//             {/* ACTIONS */}
//             <div className="flex justify-end gap-3 mt-3">

//               <button
//                 className="bg-primary text-white px-3 py-1 hover:bg-partial transition"
//                 onClick={() => {
//                   setSelectedProject(project);
//                   setShowModal(true);
//                 }}
//               >
//                 Edit
//               </button>

//               <button
//                 className="bg-red-500 text-white px-3 py-1 hover:bg-red-700 transition"
//                 onClick={() => handleDelete(project._id)}
//               >
//                 Delete
//               </button>

//             </div>
//           </div>
//         ))}

//       </div>

//       {/* MODAL */}
//       <Modal
//         open={showModal}
//         onCancel={() => {
//           setShowModal(false);
//           setSelectedProject(null);
//           form.resetFields();
//         }}
//         footer={null}
//         title={selectedProject ? "Edit Project" : "Add Project"}
//         destroyOnClose
//       >
//         <Form form={form} layout="vertical" onFinish={onFinish}>

//           <Form.Item name="title" label="Title">
//             <input className="w-full border p-2" />
//           </Form.Item>

//           <Form.Item name="description" label="Description">
//             <textarea className="w-full border p-2" />
//           </Form.Item>

//           <Form.Item
//             name="technologies"
//             label="Technologies (comma separated)"
//           >
//             <input className="w-full border p-2" />
//           </Form.Item>

//           <Form.Item name="features" label="Features">
//             <textarea className="w-full border p-2" />
//           </Form.Item>

//           <Form.Item name="link" label="Live Demo URL">
//             <input className="w-full border p-2" placeholder="https://..." />
//           </Form.Item>

//           <Form.Item name="githubUrl" label="GitHub Repository URL">
//             <input className="w-full border p-2" placeholder="https://github.com/..." />
//           </Form.Item>

//           <Form.Item name="imageUrl" label="Project Screenshot URL">
//             <input className="w-full border p-2" placeholder="https://..." />
//           </Form.Item>

//           <button className="bg-primary text-white px-5 py-2 mt-3 w-full hover:bg-partial transition">
//             {selectedProject ? "Update Project" : "Add Project"}
//           </button>

//         </Form>
//       </Modal>

//     </div>
//   );
// }

// export default Adminproject;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, message } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus, Pencil, Trash2, X, Github, ExternalLink, Save, FolderKanban,
} from "lucide-react";
import api from "../../utils/api";
import {
  ShowLoading,
  HideLoading,
  ReloadData,
} from "../../redux/rootSlice";

function Adminproject() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData || {};

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedProject) {
      form.setFieldsValue({
        ...selectedProject,
        technologies: selectedProject.technologies?.join(", "),
      });
    } else {
      form.resetFields();
    }
  }, [selectedProject, form]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    form.resetFields();
  };

  const openAddModal = () => {
    setSelectedProject(null);
    form.resetFields();
    setShowModal(true);
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const isEdit = selectedProject !== null;

      const payload = {
        values,
        _id: selectedProject?._id,
      };

      const url = isEdit
        ? `/api/portfolio/update-project`
        : `/api/portfolio/add-project`;

      const response = await api.post(url, payload);

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

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());

      const response = await api.post(`/api/portfolio/delete-project`, {
        _id: id,
      });

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

  if (!projects) return null;

  return (
    <div className="portfolio-admin">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400">
            Portfolio management
          </p>
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          <p className="mt-2 text-sm text-slate-500">
            Manage your featured applications and development work.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
        >
          <Plus size={17} />
          Add Project
        </button>
      </div>

      {projects.length ? (
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-2 md:grid-cols-1">
          {projects.map((project, index) => (
            <motion.article
              key={project._id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] transition hover:-translate-y-1 hover:border-sky-400/30"
            >
              {project.imageUrl ? (
                <div className="h-44 overflow-hidden border-b border-white/10 bg-[#070b14]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-32 items-center justify-center border-b border-white/10 bg-gradient-to-br from-sky-500/10 via-[#0b1220] to-indigo-500/10">
                  <FolderKanban size={34} className="text-sky-400/40" />
                </div>
              )}

              <div className="p-6 sm:p-5">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, i) => (
                    <span
                      key={`${tech}-${i}`}
                      className="rounded-lg border border-sky-400/15 bg-sky-400/[0.06] px-3 py-1.5 text-xs text-sky-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.features && (
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Key features
                    </p>
                    <p className="whitespace-pre-line text-sm leading-6 text-slate-400">
                      {Array.isArray(project.features)
                        ? project.features.join(", ")
                        : project.features}
                    </p>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 transition hover:text-sky-300"
                    >
                      <ExternalLink size={13} />
                      Live demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 transition hover:text-sky-300"
                    >
                      <Github size={13} />
                      Repository
                    </a>
                  )}
                </div>

                <div className="mt-6 flex justify-end gap-3 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(project);
                      setShowModal(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(project._id)}
                    className="inline-flex items-center gap-2 rounded-lg border border-red-400/15 px-4 py-2 text-xs font-semibold text-red-400 transition hover:border-red-400/40 hover:bg-red-400/10"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
          <FolderKanban size={32} className="mx-auto text-slate-600" />
          <p className="mt-4 text-sm text-slate-400">
            No projects have been added yet.
          </p>
        </div>
      )}

      <AnimatePresence>
        {showModal && (
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
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              className="my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1220] p-7 shadow-2xl sm:p-5"
            >
              <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400">
                    Project management
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {selectedProject ? "Edit Project" : "Add Project"}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:text-white"
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
                <Form.Item name="title" label="Title">
                  <input
                    className="admin-field"
                    placeholder="Project title"
                  />
                </Form.Item>

                <Form.Item name="description" label="Description">
                  <textarea
                    rows={4}
                    className="admin-field resize-y"
                    placeholder="Describe your project..."
                  />
                </Form.Item>

                <Form.Item
                  name="technologies"
                  label="Technologies (comma separated)"
                >
                  <input
                    className="admin-field"
                    placeholder="React, Node.js, MongoDB"
                  />
                </Form.Item>

                <Form.Item name="features" label="Features">
                  <textarea
                    rows={4}
                    className="admin-field resize-y"
                    placeholder="Describe the main features..."
                  />
                </Form.Item>

                <Form.Item name="link" label="Live Demo URL">
                  <input
                    className="admin-field"
                    placeholder="https://..."
                  />
                </Form.Item>

                <Form.Item name="githubUrl" label="GitHub Repository URL">
                  <input
                    className="admin-field"
                    placeholder="https://github.com/..."
                  />
                </Form.Item>

                <Form.Item name="imageUrl" label="Project Screenshot URL">
                  <input
                    className="admin-field"
                    placeholder="https://..."
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
                    {selectedProject ? "Update Project" : "Add Project"}
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

export default Adminproject;
