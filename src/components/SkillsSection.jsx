import React from "react";
import TypeWrite2 from "../compoUtls/TypeWrite2";

function SkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "next UI",
    "JavaScript",
    "React",
    "Node.js",
    "vite",
    "MongoDB",
    "Express.js",
    "MongoDB",
    "Redux",
    "VS Code",
    "Git",
    "GitHub",
    "Operating system",
    "Vercel",
    "Netlify",
    "c++",
    "Ubantu",
    "Postman",

    "Tailwind CSS",

    "Material UI",
    "REST API",

    "Socket.io",
  ];
  return (
    <>
      <span className=" text-blueSky ml-20  mt-32 text-6xl font-semibold block">
        <TypeWrite2></TypeWrite2>
      </span>

      <div className="grid  mt-16 ml-20 mb-48 mr-20  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center font-extralight h-20 items-center p-3 bg-skills text-mimoh rounded-lg text-2xl hover:bg-opacity-60 border-transparent hover:border-yellow-500 border-2  transform transition-transform duration-200 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
      {/* <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mb-0">
        <hr className="my-6 w-full border-white border-t-richblack-500 sm:mx-auto lg:my-8" />
      </div> */}
    </>
  );
}

export default SkillsSection;
