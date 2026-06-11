import React from "react";
import { Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Loader from "../Home/Loader";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData || {};
  const API = process.env.REACT_APP_BACKEND_URL;

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const response = await axios.post(
        `${API}/api/portfolio/update-contact`,
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

  return (
    <div className="p-5">

      <Form
        form={form}
        layout="vertical"
        initialValues={contact}
        onFinish={onFinish}
      >

        <Form.Item name="name" label="Name">
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item name="age" label="Age">
          <input type="number" className="w-full border p-2" />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item name="phone" label="Phone">
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item name="country" label="Country">
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item name="imgurl" label="Image URL">
          <input className="w-full border p-2" />
        </Form.Item>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 hover:bg-partial"
          >
            Update Contact
          </button>
        </div>

      </Form>

    </div>
  );
}

export default AdminContact;