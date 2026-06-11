import React from "react";

function Footer() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-gray-600"></div>

      <div className="flex items-center justify-center flex-col mt-10 sm: mb-10 opacity-40">
        <h1 className="text-white">Designed and Developed By</h1>
        <h1 className="text-white">
          <span>Md Arafat Siraj</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
