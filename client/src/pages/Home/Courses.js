// import React from "react";
// import SectionTitle from "../../components/SectionTitle";
// import { useSelector } from "react-redux";
// function Courses() {
//   const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
//   const { portfolioData } = useSelector((state) => state.root);
//   const courses = portfolioData?.courses || {};
  
//   const selectedCourse = courses[selectedItemIndex];

//   return (
//     <div>
//       <SectionTitle title="Courses" />

//       <div className="flex py-10 gap-20 sm:flex-col">
//         {/* Course List */}
//         <div className="flex flex-col gap-10 max-h-96 overflow-y-auto scrollbar-custom sm:gap-0 border-l-[1px] border-white border-opacity-30 sm:flex-row sm:overflow-auto">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedItemIndex(index)}
//               className="cursor-pointer"
//             >
//               <h1
//                 className={`text-xl sm:text-sm px-5 py-2 whitespace-nowrap
//                 ${
//                   selectedItemIndex === index
//                     ? "text-partial border-l-4 border-partial -ml-[3px] bg-partial bg-opacity-20"
//                     : "text-white"
//                 }`}
//               >
//                 {course?.title}
//               </h1>
//             </div>
//           ))}
//         </div>

//         {/* Course Details */}
//         <div className="flex flex-col gap-5 flex-1">
//           <h1 className="text-secondary text-3xl font-semibold">
//             {selectedCourse?.title}
//           </h1>

//           <h2 className="text-secondary text-xl">{selectedCourse?.provider}</h2>

//           <h3 className="text-partial">{selectedCourse?.duration}</h3>

//           <p className="text-white leading-7">{selectedCourse?.description}</p>

//           <div>
//             <h2 className="text-secondary text-xl mb-3">Skills Acquired</h2>

//             <div className="flex flex-wrap gap-3">
//               {selectedCourse?.skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-1 rounded-full border border-partial text-partial"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;
import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);

  // ✅ ALWAYS ensure array
  const courses = Array.isArray(portfolioData?.courses)
    ? portfolioData.courses
    : [];

  // ✅ safe selected item
  const selectedCourse = courses[selectedItemIndex];

  return (
    <div>
      <SectionTitle title="Courses" />

      <div className="flex py-10 gap-20 sm:flex-col">
        
        {/* LEFT LIST */}
        <div className="flex flex-col gap-10 max-h-96 overflow-y-auto scrollbar-custom sm:gap-0 border-l-[1px] border-white border-opacity-30 sm:flex-row sm:overflow-auto">

          {courses.length === 0 ? (
            <p className="text-white px-5">No courses available</p>
          ) : (
            courses.map((course, index) => (
              <div
                key={index}
                onClick={() => setSelectedItemIndex(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-xl sm:text-sm px-5 py-2 whitespace-nowrap
                  ${
                    selectedItemIndex === index
                      ? "text-partial border-l-4 border-partial -ml-[3px] bg-partial bg-opacity-20"
                      : "text-white"
                  }`}
                >
                  {course?.title || "Untitled"}
                </h1>
              </div>
            ))
          )}
        </div>

        {/* RIGHT DETAILS */}
        <div className="flex flex-col gap-5 flex-1">
          
          <h1 className="text-secondary text-3xl font-semibold">
            {selectedCourse?.title || ""}
          </h1>

          <h2 className="text-secondary text-xl">
            {selectedCourse?.provider || ""}
          </h2>

          <h3 className="text-partial">
            {selectedCourse?.duration || ""}
          </h3>

          <p className="text-white leading-7">
            {selectedCourse?.description || ""}
          </p>

          {/* SKILLS */}
          <div>
            <h2 className="text-secondary text-xl mb-3">Skills Acquired</h2>

            <div className="flex flex-wrap gap-3">
              {Array.isArray(selectedCourse?.skills) ? (
                selectedCourse.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 rounded-full border border-partial text-partial"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-white">No skills listed</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Courses;