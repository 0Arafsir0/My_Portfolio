import React from "react";
import me from "../../Resources/me.jpeg";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const intro = portfolioData?.intro || {};
  const {
    firstname = "",
    lastname = "",
    welcometext = "",
    caption = "",
    description = "",
    imgurl = "",
  } = intro;
  return (
    <div className="flex flex-row sm:flex-col items-center">
      <div className="h-[80vh] sm:h-auto bg-primary flex flex-col items-start justify-center gap-8 sm:gap-4 py-10 sm:py-2 sm:items-center">
        <h1 className="text-white text-xl">{welcometext}</h1>
        <h1 className="text-7xl sm:text-3xl text-tertiary">
          {firstname} {lastname}
        </h1>
        <h1 className="text-6xl sm:text-2xl text-white font-semibold">
          {caption}
        </h1>
        <p className="text-white w-2/3 sm:w-full">{description}</p>
        <a href="#about">
          <button className="border-2 border-partial text-partial px-10 py-3 rounded hover:bg-partial hover:text-primary transition sm:hidden ">
            Get Started
          </button>
        </a>
      </div>
      {/* RIGHT PROFILE IMAGE */}
      <div className="relative p-auto sm:py-10">
        <div className="w-100 h-100 sm:w-48 sm:h-48 rounded-full p-2 border-2 border-partial shadow-partial shadow-xl">
          <img
            src={imgurl || me}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* glow effect */}
        <div className="absolute inset-0 rounded-full blur-2xl bg-partial opacity-20 -z-10"></div>
      </div>
      <a href="#about">
        <button className="border-2 border-partial text-partial px-10 py-2 rounded hover:bg-partial hover:text-primary transition hidden sm:block ">
          Get Started
        </button>
      </a>
    </div>
  );
}

export default Intro;

// import React from "react";
// import me from "../../Resources/me.jpeg";
// import { useSelector } from 'react-redux';
//function intro() {
//   return (
//     <div className="h-[80vh] sm:h-auto bg-primary flex sm:flex-col items-center justify-center gap-12 sm:gap-6 py-10">
//       {/* LEFT TEXT SECTION */}
//       <div className="flex flex-col items-start sm:items-center gap-8 sm:gap-4 sm:text-center">
//         <h1 className="text-white text-xl">I am</h1>

//         <h1 className="text-7xl sm:text-3xl text-tertiary">MD ARAFAT SIRAJ</h1>

//         <h1 className="text-6xl sm:text-2xl text-white font-semibold">
//           I build things for the web.
//         </h1>

//         <p className="text-white w-2/3 sm:w-full">
//           I am a Computer Science student with hands-on experience in Java,
//           Python, and web development using the MERN stack. I have built
//           academic and personal projects involving database systems, full-stack
//           web applications, and UI development. I also have a solid
//           understanding of Data Structures, Algorithms, and Object-Oriented
//           Programming. My goal is to grow as a software engineer in a
//           professional environment where I can apply my technical knowledge and
//           continue learning new technologies.
//         </p>

//         <button className="border-2 border-partial text-partial px-10 py-3 rounded hover:bg-partial hover:text-primary transition">
//           Get Started
//         </button>
//       </div>

//       {/* RIGHT PROFILE IMAGE */}
//       <div className="relative">
//         <div className="w-72 h-72 sm:w-48 sm:h-48 rounded-full p-2 border-4 border-partial shadow-lg">
//           <img
//             src={me}
//             alt="profile"
//             className="w-full h-full object-cover rounded-full"
//           />
//         </div>

//         {/* glow effect */}
//         <div className="absolute inset-0 rounded-full blur-2xl bg-partial opacity-20 -z-10"></div>
//       </div>
//     </div>
//   );
// }

// export default intro;
