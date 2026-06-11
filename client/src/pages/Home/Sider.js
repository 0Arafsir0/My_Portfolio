import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Sider() {
  return (
    <div className="fixed right-0 bottom-0 px-10 sm:py-5 sm:w-full sm:bg-inherit">
      <div className="flex flex-col items-center">
        <div className="  flex flex-col sm:flex-row gap-10 text-white text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-400 cursor-pointer" />
          </a>

          <a href="https://linkedin.com/in/arafsir" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
          </a>

          <a href="mailto:arafsirarafat@gmail.com">
            <FaEnvelope className="hover:text-red-400 cursor-pointer" />
          </a>

          <a href="tel:+8801305972262">
            <FaPhone className="hover:text-green-400 cursor-pointer" />
          </a>
          <a href="https://github.com/0Arafsir0" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </a>
        </div>
        <div className="w-[1px] h-52 bg-[#ffffff] sm:hidden"></div>
      </div>
    </div>
  );
}

export default Sider;
