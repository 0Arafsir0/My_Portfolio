import React from "react";
import { Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Home/Loader";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";


function Adminintro() {
  const API = process.env.REACT_APP_BACKEND_URL;
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(`${API}/api/portfolio/update-intro`, {
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

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcometext" label="Welcome Text:">
          <input placeholder="write welcome text here..." />
        </Form.Item>
        <Form.Item name="firstname" label="First Name:">
          <input placeholder="write first name here..." />
        </Form.Item>
        <Form.Item name="lastname" label="Last Name:">
          <input placeholder="write last name here..." />
        </Form.Item>
        <Form.Item name="caption" label="Caption:">
          <textarea placeholder="write a caption here..." />
        </Form.Item>
        <Form.Item name="description" label="Description:">
          <textarea placeholder="write some description here..." />
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

export default Adminintro;
