// import React from "react";
// import SectionTitle from "../../components/SectionTitle";
// import { projects } from './../../Resources/projects';

// function Projects() {
//   const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

//   return (
//     <div>
//       <SectionTitle title="Projects" />
//       <div className=" flex py-10 gap-20 sm:flex-col">
//         <div className="flex flex-col gap-10 sm:gap-0 border-l-[1px] w-auto  border-white border-opacity-30 sm:flex-row sm:overflow-auto">
//           {projects.map((proj, index) => (
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
//                 {proj.title}
//               </h1>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col gap-5">
//             <h1 className="text-[#5be2eb] text-2xl">{projects[selectedItemIndex].}</h1>
//             <h1 className="text-secondary text-xl">{projects[selectedItemIndex].institution}</h1>
//             <p className="text-white">{projects[selectedItemIndex].description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Projects;
import React from "react";
import SectionTitle from "../../components/SectionTitle";

import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);

  const projects = portfolioData?.projects || [];

  projects.map((project) => {
    const {
      description = "",
      githubLink = "",
      liveLink = "",
      features = "",
      image = "",
      technologies = [],
      title = "",
    } = project;

    return null;
  });

  const selectedProject = projects[selectedItemIndex];

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className=" gap-10 sm:gap-0 border-r-[1px] border-white border-opacity-30 sm:flex-row sm:overflow-auto max-h-96 overflow-y-auto scrollbar-custom hidden sm:flex ">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl sm:text-sm px-5 py-2 whitespace-nowrap
                ${
                  selectedItemIndex === index
                    ? "text-partial border-r-2 border-partial -ml-[3px] bg-partial bg-opacity-20"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        {/* Selected Project Details */}
        <div className="flex flex-col gap-5 flex-1">
          <h1 className="text-secondary text-3xl font-semibold">
            {selectedProject.title}
          </h1>

          <p className="text-white leading-7">{selectedProject.description}</p>

          {/* Technologies */}
          <div>
            <h2 className="text-secondary text-xl mb-3">Technologies Used</h2>

            <div className="flex flex-wrap gap-3">
              {selectedProject.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-full border border-partial text-partial"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-secondary text-xl mb-3">Key Features</h2>

            <ul className="list-disc ml-5 text-white flex flex-col gap-2">
              {(selectedProject.features || [])
                .toString()
                .split(",")
                .map((feature, index) => (
                  <li key={index}>{feature.trim()}</li>
                ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-5 mt-3">
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 border border-partial text-partial rounded hover:bg-partial hover:text-primary transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
        {/* Project Titles */}
        <div className="flex flex-col gap-10 sm:gap-0 border-r-[1px] border-white border-opacity-30 sm:flex-row sm:overflow-auto max-h-96 overflow-y-auto scrollbar-custom sm:hidden ">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl sm:text-sm px-5 py-2 whitespace-nowrap
                ${
                  selectedItemIndex === index
                    ? "text-partial border-r-2 border-partial -ml-[3px] bg-partial bg-opacity-20"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
