import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Form } from "antd";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { message } from "antd";

function Adminexperience() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const API = process.env.REACT_APP_BACKEND_URL;

  const [form] = Form.useForm();

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());

      const response = await axios.post(`${API}/api/portfolio/delete-experience`, {
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

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const isEdit = selectedItemForEdit !== null;

      const payload = {
        values,
        _id: selectedItemForEdit?._id, // only for edit
      };

      const response = await axios.post(
        `${API}${isEdit ? "/api/portfolio/update-experience" : "/api/portfolio/add-experience"}`,
        payload,
      );

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
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
    if (selectedItemForEdit) {
      form.setFieldsValue(selectedItemForEdit);
    } else {
      form.resetFields();
    }
  }, [selectedItemForEdit, form]);

  return (
    <div>
      {/* Add button */}
      <div className="flex justify-end w-full">
        <button
          className="bg-secondary text-black border border-gray-300 px-3 py-1 hover:bg-partial mt-2"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>

      {/* Experience cards */}
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-5">
        {experiences?.map((experience) => (
          <div
            key={experience._id}
            className="shadow border border-gray-300 rounded p-4 m-2 flex flex-col"
          >
            <h1 className="text-lg text-primary font-bold">
              {experience.period}
            </h1>

            <hr
              style={{
                borderColor: "black",
                backgroundColor: "black",
                borderStyle: "solid",
                height: "1px",
              }}
            />

            <h2 className="text-md text-primary font-semibold">
              Role : {experience.position}
            </h2>

            <p>Company : {experience.company}</p>

            <p>{experience.description}</p>

            <div className="flex justify-end w-full gap-5 mt-5">
              <button
                className="bg-primary text-white px-3 py-1 hover:bg-partial mt-2 mr-2"
                onClick={() => {
                  setSelectedItemForEdit(experience);
                  setShowAddEditModal(true);
                }}
              >
                Edit
              </button>

              <button
                className="bg-partial text-white px-3 py-1 hover:bg-black mt-2"
                onClick={() => handleDelete(experience._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        open={showAddEditModal}
        onCancel={() => {
          setShowAddEditModal(false);
          form.resetFields();
        }}
        footer={null}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="period" label="Period">
            <input
              className="w-full border p-2"
              placeholder="e.g., Jan 2020 - Dec 2021"
            />
          </Form.Item>

          <Form.Item name="position" label="Position">
            <input
              className="w-full border p-2"
              placeholder="e.g., Software Engineer"
            />
          </Form.Item>

          <Form.Item name="company" label="Company">
            <input className="w-full border p-2" placeholder="e.g., Google" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <textarea
              className="w-full border p-2"
              placeholder="Describe your work"
            />
          </Form.Item>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-secondary text-black px-5 py-2 rounded"
              onClick={() => {
                setShowAddEditModal(false);
                form.resetFields();
              }}
            >
              Close
            </button>

            <button
              type="submit"
              className="bg-primary text-white px-5 py-2 rounded hover:bg-partial"
            >
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Adminexperience;
