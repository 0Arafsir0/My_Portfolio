import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import axios from "axios";
import {
  ShowLoading,
  HideLoading,
  ReloadData,
} from "../../redux/rootSlice";

function Adminproject() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData || {};
  const API = process.env.REACT_APP_BACKEND_URL;

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

  // ADD / UPDATE
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const isEdit = selectedProject !== null;

      const payload = {
        values,
        _id: selectedProject?._id,
      };

      const url = isEdit
        ? `${API}/api/portfolio/update-project`
        : `${API}/api/portfolio/add-project`;

      const response = await axios.post(url, payload);

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        setShowModal(false);
        setSelectedProject(null);
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

  // DELETE
  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());

      const response = await axios.post(`${API}/api/portfolio/delete-project`, {
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
    <div className="p-2">

      {/* HEADER */}
      <div className="flex justify-end w-full">
        <button
          className="bg-secondary text-black border border-gray-300 px-4 py-2 hover:bg-partial transition"
          onClick={() => {
            setSelectedProject(null);
            setShowModal(true);
          }}
        >
          Add Project
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-5">

        {projects.map((project) => (
          <div
            key={project._id}
            className="shadow border border-gray-300 rounded-lg p-4 flex flex-col gap-2 bg-white"
          >
            {/* TITLE */}
            <h1 className="text-lg font-bold text-primary">
              {project.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-700">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-2 mt-2">
              {(project.technologies || []).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs border border-partial text-partial rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* FEATURES */}
            <div className="text-sm text-gray-600 mt-1">
              <span className="font-semibold text-primary">
                Features:
              </span>{" "}
              {project.features}
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 mt-3">

              <button
                className="bg-primary text-white px-3 py-1 hover:bg-partial transition"
                onClick={() => {
                  setSelectedProject(project);
                  setShowModal(true);
                }}
              >
                Edit
              </button>

              <button
                className="bg-red-500 text-white px-3 py-1 hover:bg-red-700 transition"
                onClick={() => handleDelete(project._id)}
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* MODAL */}
      <Modal
        open={showModal}
        onCancel={() => {
          setShowModal(false);
          setSelectedProject(null);
          form.resetFields();
        }}
        footer={null}
        title={selectedProject ? "Edit Project" : "Add Project"}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>

          <Form.Item name="title" label="Title">
            <input className="w-full border p-2" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <textarea className="w-full border p-2" />
          </Form.Item>

          <Form.Item
            name="technologies"
            label="Technologies (comma separated)"
          >
            <input className="w-full border p-2" />
          </Form.Item>

          <Form.Item name="features" label="Features">
            <textarea className="w-full border p-2" />
          </Form.Item>

          <Form.Item name="link" label="Project Link">
            <input className="w-full border p-2" />
          </Form.Item>

          <button className="bg-primary text-white px-5 py-2 mt-3 w-full hover:bg-partial transition">
            {selectedProject ? "Update Project" : "Add Project"}
          </button>

        </Form>
      </Modal>

    </div>
  );
}

export default Adminproject;