// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Form, message } from "antd";
// import api from "../../utils/api";
// import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

// function AdminCourse() {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { courses } = portfolioData || {};

//   const [showModal, setShowModal] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());

//       const isEdit = selectedCourse !== null;

//       const payload = {
//         values,
//         _id: selectedCourse?._id,
//       };

//       const response = await api.post(
//         `${isEdit ? "/api/portfolio/update-course" : "/api/portfolio/add-course"}`,
//         payload
//       );

//       dispatch(HideLoading());

//       if (response.data.success) {
//         message.success(response.data.message);
//         setShowModal(false);
//         setSelectedCourse(null);
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
//     if (selectedCourse) {
//       form.setFieldsValue({
//         ...selectedCourse,
//         skills: selectedCourse.skills?.join(", "),
//       });
//     } else {
//       form.resetFields();
//     }
//   }, [form, selectedCourse]);

//   const handleDelete = async (id) => {
//     try {
//       dispatch(ShowLoading());

//       const res = await api.post(`/api/portfolio/delete-course`, {
//         _id: id,
//       });

//       dispatch(HideLoading());

//       if (res.data.success) {
//         message.success(res.data.message);
//         dispatch(ReloadData(true));
//       }
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   return (
//     <div>
//       {/* HEADER */}
//       <div className="flex justify-end w-full">
//         <button
//           className="bg-secondary text-black border border-gray-300 px-3 py-1 hover:bg-partial mt-2"
//           onClick={() => {
//             setSelectedCourse(null);
//             setShowModal(true);
//           }}
//         >
//           Add Course
//         </button>
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
//         {courses?.map((course) => (
//           <div
//             key={course._id}
//             className="shadow border border-gray-300 rounded p-4 flex flex-col gap-2"
//           >
//             <h1 className="text-lg font-bold text-primary">
//               {course.title}
//             </h1>

//             <p className="text-primary">{course.provider}</p>
//             <p className="text-black">{course.duration}</p>
//             <p className="text-black">{course.description}</p>

//             {/* Skills */}
//             <div className="flex flex-wrap gap-2 mt-2">
//               {(course.skills || []).map((skill, i) => (
//                 <span
//                   key={i}
//                   className="px-2 py-1 border border-partial text-partial text-sm"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>

//             {/* ACTIONS */}
//             <div className="flex justify-end gap-3 mt-4">
//               <button
//                 className="bg-primary text-white px-3 py-1 hover:bg-partial"
//                 onClick={() => {
//                   setSelectedCourse(course);
//                   setShowModal(true);
//                 }}
//               >
//                 Edit
//               </button>

//               <button
//                 className="bg-partial text-white px-3 py-1 hover:bg-black"
//                 onClick={() => handleDelete(course._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-5 w-[500px] rounded">

//             <Form form={form} layout="vertical" onFinish={onFinish}>

//               <Form.Item name="title" label="Title">
//                 <input className="w-full border p-2" />
//               </Form.Item>

//               <Form.Item name="provider" label="Provider">
//                 <input className="w-full border p-2" />
//               </Form.Item>

//               <Form.Item name="duration" label="Duration">
//                 <input className="w-full border p-2" />
//               </Form.Item>

//               <Form.Item name="description" label="Description">
//                 <textarea className="w-full border p-2" />
//               </Form.Item>

//               <Form.Item name="skills" label="Skills (comma separated)">
//                 <input className="w-full border p-2" />
//               </Form.Item>

//               <div className="flex justify-end gap-3 mt-3">
//                 <button
//                   type="button"
//                   className="px-4 py-2 border"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Close
//                 </button>

//                 <button
//                   type="submit"
//                   className="bg-primary text-white px-4 py-2 hover:bg-partial"
//                 >
//                   {selectedCourse ? "Update" : "Add"}
//                 </button>
//               </div>

//             </Form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminCourse;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Form, message } from "antd";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Award,
  GraduationCap,
  Layers3,
  Save,
} from "lucide-react";
import api from "../../utils/api";
import {
  ShowLoading,
  HideLoading,
  ReloadData,
} from "../../redux/rootSlice";

function AdminCourse() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData || {};

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const isEdit = selectedCourse !== null;

      const payload = {
        values,
        _id: selectedCourse?._id,
      };

      const response = await api.post(
        `${
          isEdit
            ? "/api/portfolio/update-course"
            : "/api/portfolio/add-course"
        }`,
        payload
      );

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        setShowModal(false);
        setSelectedCourse(null);
        form.resetFields();
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
    if (selectedCourse) {
      form.setFieldsValue({
        ...selectedCourse,
        skills: selectedCourse.skills?.join(", "),
      });
    } else {
      form.resetFields();
    }
  }, [form, selectedCourse]);

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());

      const res = await api.post(`/api/portfolio/delete-course`, {
        _id: id,
      });

      dispatch(HideLoading());

      if (res.data.success) {
        message.success(res.data.message);
        dispatch(ReloadData(true));
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const openAddModal = () => {
    setSelectedCourse(null);
    form.resetFields();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
    form.resetFields();
  };

  return (
    <div className="portfolio-admin">
      {/* Page heading */}
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <GraduationCap size={17} className="text-sky-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-400">
              Portfolio management
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white">
            Courses & Certifications
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Manage your professional learning and certifications.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
        >
          <Plus size={17} />
          Add Course
        </button>
      </div>

      {/* Course cards */}
      {courses?.length ? (
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-2 md:grid-cols-1">
          {courses.map((course, index) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 sm:p-5"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/0 blur-[70px] transition duration-500 group-hover:bg-sky-400/10" />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/10 text-sky-300">
                      <Award size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">
                        {course.provider}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Certification
                      </p>
                    </div>
                  </div>

                  {course.duration && (
                    <span className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 font-mono text-[10px] text-slate-400">
                      {course.duration}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {course.description}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Layers3 size={14} className="text-indigo-300" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(course.skills || []).map((skill, i) => (
                      <span
                        key={`${skill}-${i}`}
                        className="rounded-lg border border-indigo-400/15 bg-indigo-400/[0.07] px-3 py-1.5 text-xs text-indigo-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex justify-end gap-3 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCourse(course);
                      setShowModal(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(course._id)}
                    className="inline-flex items-center gap-2 rounded-lg border border-red-400/15 px-4 py-2 text-xs font-semibold text-red-400 transition hover:border-red-400/40 hover:bg-red-400/10"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.015] px-6 py-14 text-center">
          <GraduationCap
            size={34}
            className="mx-auto text-slate-600"
          />
          <p className="mt-4 text-sm font-medium text-slate-400">
            No courses or certifications added yet.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Use the Add Course button to create your first entry.
          </p>
        </div>
      )}

      {/* Add/Edit modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative my-auto max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1220] p-7 shadow-2xl shadow-black/50 sm:p-5"
            >
              <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                    {selectedCourse ? (
                      <Pencil size={19} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {selectedCourse ? "Edit Course" : "Add New Course"}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Enter your course information.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-red-400/30 hover:text-red-400"
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
                    placeholder="Course or certification title"
                    className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </Form.Item>

                <Form.Item name="provider" label="Provider">
                  <input
                    placeholder="e.g. Coursera, Udemy, TheTori IT"
                    className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </Form.Item>

                <Form.Item name="duration" label="Duration">
                  <input
                    placeholder="e.g. 3 months"
                    className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </Form.Item>

                <Form.Item name="description" label="Description">
                  <textarea
                    rows={4}
                    placeholder="Describe what you learned..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </Form.Item>

                <Form.Item
                  name="skills"
                  label="Skills (comma separated)"
                >
                  <input
                    placeholder="React, JavaScript, Node.js"
                    className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
                  />
                </Form.Item>

                <div className="mt-6 flex justify-end gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
                  >
                    <Save size={16} />
                    {selectedCourse ? "Update Course" : "Add Course"}
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

export default AdminCourse;
