// import React from "react";
// import SectionTitle from "../../components/SectionTitle";
// // import { experiences } from "../../Resources/experience";
// import { useSelector } from "react-redux";

// function Experiences() {
//   const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
//   const { portfolioData } = useSelector((state) => state.root);

//   const experiences = portfolioData?.experiences || {};

//   return (
//     <div>
//       <SectionTitle title="Experiences" />
//       <div className=" flex py-10 gap-20 sm:flex-col">
//         <div className="flex flex-col gap-10 sm:gap-0 border-l-[1px]  border-white border-opacity-30 max-h-96 overflow-y-auto scrollbar-custom sm:flex-row sm:overflow-auto">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedItemIndex(index)}
//               className="cursor-pointer"
//             >
//               <h1
//                 className={`text-xl sm:text-sm px-5 
//                 ${
//                   selectedItemIndex === index
//                     ? "text-partial border-l-4 border-partial -ml-[3px] bg-partial bg-opacity-35"
//                     : "text-white"
//                 }`}
//               >
//                 {exp?.period}
//               </h1>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col gap-5">
//           <h1 className="text-white text-2xl">
//             {experiences[selectedItemIndex]?.position}
//           </h1>
//           <h1 className="text-secondary text-xl">
//             {experiences[selectedItemIndex]?.company}
//           </h1>
//           <p className="text-white">
//             {experiences[selectedItemIndex]?.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experiences;
import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);

  // ✅ FIX: must be array, not object
  const experiences = Array.isArray(portfolioData?.experiences)
    ? portfolioData.experiences
    : [];

  return (
    <div>
      <SectionTitle title="Experiences" />

      <div className="flex py-10 gap-20 sm:flex-col">
        
        {/* LEFT SIDE LIST */}
        <div className="flex flex-col gap-10 sm:gap-0 border-l-[1px] border-white border-opacity-30 max-h-96 overflow-y-auto scrollbar-custom sm:flex-row sm:overflow-auto">

          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl sm:text-sm px-5 ${
                  selectedItemIndex === index
                    ? "text-partial border-l-4 border-partial -ml-[3px] bg-partial bg-opacity-35"
                    : "text-white"
                }`}
              >
                {exp?.period}
              </h1>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-2xl">
            {experiences[selectedItemIndex]?.position || ""}
          </h1>

          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex]?.company || ""}
          </h1>

          <p className="text-white">
            {experiences[selectedItemIndex]?.description || ""}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Experiences;