// import React from "react";
// import { Form, message } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../Home/Loader";
// import { ShowLoading, HideLoading } from "../../redux/rootSlice";
// import api from "../../utils/api";

// function Adminabout() {
//   const { portfolioData } = useSelector((state) => state.root);
//   const dispatch = useDispatch();

//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());
//       const response = await api.post(`/api/portfolio/update-about`, {
//         values,
//         _id: portfolioData.about._id,
//       });
//       dispatch(HideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   if (!portfolioData) {
//     return <Loader />;
//   }

//   return (
//     <div>
//       <Form
//         onFinish={onFinish}
//         layout="vertical"
//         initialValues={portfolioData?.about}
//       >
//         <Form.Item name="description1" label="Description1:">
//           <textarea placeholder="write description1 here..." />
//         </Form.Item>
//         <Form.Item name="description2" label="Description2:">
//           <textarea placeholder="write description2 here..." />
//         </Form.Item>
//         <Form.Item name="skills" label="Skills">
//           <input placeholder="React, Node, MongoDB" />
//         </Form.Item>
//         <Form.Item name="imgurl" label="Image URL:">
//           <input placeholder="give image URL here..." />
//         </Form.Item>

//         <div className="flex justify-end w-full">
//           <button
//             type="submit"
//             className="bg-primary text-white px-5 py-2 rounded hover:bg-partial"
//           >
//             Save Changes
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default Adminabout;

import React from "react";
import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Save, FileText, Code2, Image, Sparkles } from "lucide-react";
import Loader from "../Home/Loader";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import api from "../../utils/api";

function Adminabout() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const response = await api.post(`/api/portfolio/update-about`, {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="admin-about-wrapper"
    >
      <div className="admin-about-card">
        {/* Header */}
        <div className="admin-about-header">
          <div className="admin-about-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <p className="admin-about-eyebrow">PORTFOLIO MANAGEMENT</p>
            <h2 className="admin-about-heading">About Information</h2>
            <p className="admin-about-subtitle">
              Manage your introduction, technical skills and profile image.
            </p>
          </div>
        </div>

        <div className="admin-about-divider" />

        <Form
          onFinish={onFinish}
          layout="vertical"
          initialValues={portfolioData?.about}
          className="portfolio-admin-form"
        >
          <div className="admin-about-field-heading">
            <FileText size={17} />
            <span>Personal Introduction</span>
          </div>

          <Form.Item
            name="description1"
            label="First Description"
            rules={[
              {
                required: true,
                message: "Please enter your first description.",
              },
            ]}
          >
            <textarea
              placeholder="Introduce yourself and your background..."
              rows={5}
            />
          </Form.Item>

          <Form.Item
            name="description2"
            label="Second Description"
            rules={[
              {
                required: true,
                message: "Please enter your second description.",
              },
            ]}
          >
            <textarea
              placeholder="Describe your interests, experience and career focus..."
              rows={5}
            />
          </Form.Item>

          <div className="admin-about-divider" />

          <div className="admin-about-field-heading">
            <Code2 size={17} />
            <span>Technical Skills</span>
          </div>

          <Form.Item
            name="skills"
            label="Skills"
            rules={[
              {
                required: true,
                message: "Please enter your skills.",
              },
            ]}
          >
            <input
              placeholder="React, Node, MongoDB, JavaScript..."
            />
          </Form.Item>

          <div className="admin-about-divider" />

          <div className="admin-about-field-heading">
            <Image size={17} />
            <span>Profile Image</span>
          </div>

          <Form.Item
            name="imgurl"
            label="Image URL"
          >
            <input
              placeholder="Enter your profile image URL..."
            />
          </Form.Item>

          <div className="admin-about-footer">
            <p>
              <span className="admin-about-status-dot" />
              Changes will be saved to your portfolio database.
            </p>

            <motion.button
              type="submit"
              whileHover={{
                y: -3,
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(56,189,248,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
              className="admin-about-save"
            >
              <Save size={17} />
              Save Changes
            </motion.button>
          </div>
        </Form>
      </div>
    </motion.div>
  );
}

export default Adminabout;
