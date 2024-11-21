import React from "react";
import TypeWrite2 from "../compoUtls/TypeWrite2";

function SkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "Next UI",
    "JavaScript",
    "React",
    "Node.js",
    "Vite",
    "MongoDB",
    "Express.js",
    "Redux",
    "VS Code",
    "Git",
    "GitHub",
    "Operating System",
    "Vercel",
    "Netlify",
    "C++",
    "Ubuntu",
    "Postman",
    "Tailwind CSS",
    "Material UI",
    "REST API",
    "Socket.io",
    "windows",
    "next-js",
    "shad-cn",
    "material-ui",
    "framer-motion",
  ];

  return (
    <>
      <span className="text-blueSky ml-6 sm:ml-10 md:ml-16 lg:ml-20 mt-8 sm:mt-16 text-4xl sm:text-5xl md:text-6xl font-semibold block">
        <TypeWrite2 />
      </span>

      <div className="grid mt-8 sm:mt-12 md:mt-16 mx-6 sm:mx-10 md:mx-16 lg:mx-20 mb-20 sm:mb-32 md:mb-48 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center font-extralight h-16 sm:h-20 items-center p-3 bg-skills text-mimoh rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-opacity-60 border-transparent hover:border-yellow-500 border-2 transform transition-transform duration-200 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillsSection;
