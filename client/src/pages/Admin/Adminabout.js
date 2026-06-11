import React from "react";
import { Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Home/Loader";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function Adminabout() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const API = process.env.REACT_APP_BACKEND_URL;

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(`${API}/api/portfolio/update-about`, {
        values,
        _id: portfolioData.about._id,
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

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.about}
      >
        <Form.Item name="description1" label="Description1:">
          <textarea placeholder="write description1 here..." />
        </Form.Item>
        <Form.Item name="description2" label="Description2:">
          <textarea placeholder="write description2 here..." />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <input placeholder="React, Node, MongoDB" />
        </Form.Item>
        <Form.Item name="imgurl" label="Image URL:">
          <input placeholder="give image URL here..." />
        </Form.Item>

        <div className="flex justify-end w-full">
          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 rounded hover:bg-partial"
          >
            Save Changes
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Adminabout;
