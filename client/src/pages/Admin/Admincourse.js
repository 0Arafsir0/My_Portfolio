import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, message } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

function AdminCourse() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData || {};

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form] = Form.useForm();
  const API = process.env.REACT_APP_BACKEND_URL;

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const isEdit = selectedCourse !== null;

      const payload = {
        values,
        _id: selectedCourse?._id,
      };

      const response = await axios.post(
        `${API}${isEdit ? "/api/portfolio/update-course" : "/api/portfolio/add-course"}`,
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
  }, [selectedCourse]);

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());

      const res = await axios.post(`${API}/api/portfolio/delete-course`, {
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

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-end w-full">
        <button
          className="bg-secondary text-black border border-gray-300 px-3 py-1 hover:bg-partial mt-2"
          onClick={() => {
            setSelectedCourse(null);
            setShowModal(true);
          }}
        >
          Add Course
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
        {courses?.map((course) => (
          <div
            key={course._id}
            className="shadow border border-gray-300 rounded p-4 flex flex-col gap-2"
          >
            <h1 className="text-lg font-bold text-primary">
              {course.title}
            </h1>

            <p className="text-secondary">{course.provider}</p>
            <p className="text-white">{course.duration}</p>
            <p className="text-white">{course.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {(course.skills || []).map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 border border-partial text-partial text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-primary text-white px-3 py-1 hover:bg-partial"
                onClick={() => {
                  setSelectedCourse(course);
                  setShowModal(true);
                }}
              >
                Edit
              </button>

              <button
                className="bg-partial text-white px-3 py-1 hover:bg-black"
                onClick={() => handleDelete(course._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 w-[500px] rounded">

            <Form form={form} layout="vertical" onFinish={onFinish}>

              <Form.Item name="title" label="Title">
                <input className="w-full border p-2" />
              </Form.Item>

              <Form.Item name="provider" label="Provider">
                <input className="w-full border p-2" />
              </Form.Item>

              <Form.Item name="duration" label="Duration">
                <input className="w-full border p-2" />
              </Form.Item>

              <Form.Item name="description" label="Description">
                <textarea className="w-full border p-2" />
              </Form.Item>

              <Form.Item name="skills" label="Skills (comma separated)">
                <input className="w-full border p-2" />
              </Form.Item>

              <div className="flex justify-end gap-3 mt-3">
                <button
                  type="button"
                  className="px-4 py-2 border"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 hover:bg-partial"
                >
                  {selectedCourse ? "Update" : "Add"}
                </button>
              </div>

            </Form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCourse;