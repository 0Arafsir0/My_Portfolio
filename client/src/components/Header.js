import React from "react";
import logo from "../Resources/logo.png";
function Header() {
  return (
    <div className="p-5 bg-primary  flex justify-between">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-[50px] h-[50px] sm:w-10 sm:h-10 rounded-full border-white bg-white border-2 p-1 shadow-white shadow-lg"
        />
      </div>
      <h1 className="text-partial text-4xl font-extrabold">Hello</h1>
      <div className="flex">
        
      </div>
    </div>
  );
}

export default Header;
// import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

// function Header() {
//   return (
//     <div className="p-5 bg-primary flex items-center justify-between">

//       {/* LEFT - LOGO */}
//       <div className="text-tertiary text-3xl sm:text-2xl font-bold tracking-widest">
//         A
//       </div>

//       {/* CENTER - GREETING */}
//       <div className="text-white text-3xl sm:hidden font-semibold font-serif tracking-wide">
//         Hello👋
//       </div>

//       {/* RIGHT - SOCIAL ICONS */}
// <div className="flex items-center sm:flex-shrink gap-5 text-white text-xl">

//   <a href="https://github.com" target="_blank" rel="noreferrer">
//     <FaGithub className="hover:text-gray-400 cursor-pointer" />
//   </a>

//   <a href="https://facebook.com" target="_blank" rel="noreferrer">
//     <FaFacebook className="hover:text-blue-400 cursor-pointer" />
//   </a>

//   <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//     <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
//   </a>

//   <a href="mailto:yourmail@gmail.com">
//     <FaEnvelope className="hover:text-red-400 cursor-pointer" />
//   </a>

//   <a href="tel:+8801XXXXXXXXX">
//     <FaPhone className="hover:text-green-400 cursor-pointer" />
//   </a>

// </div>
//     </div>
//   );
// }

// export default Header;
