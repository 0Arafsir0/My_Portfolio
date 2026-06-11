import React from "react";
import logo from "../../Resources/logo.png";
function Loader() {
  return (
    <div className=" h-screen flex flex-col  items-center justify-center fixed inset-0 bg-current z-[100]">
      <img
        src={logo}
        alt="logo"
        className="logo w-20 h-20 sm:w-10 sm:h-10 bg-[#d3d8db] rounded-full p-2"
      />

      <h2 className="text-white text-2xl mt-4 animate-pulse">Please wait...</h2>
    </div>
  );
}

export default Loader;
