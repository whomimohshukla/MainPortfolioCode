import React from "react";
import TypeWriter3 from "../compoUtls/TypeWriter3";
import image1 from "../assets/css.png";
import image2 from "../assets/html.png";

const projectsData = [
  {
    id: 1,
    name: "Real-Time Bus Tracker",
    description:
      "A system for tracking buses in real-time with booking features.",
    image: image1, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A personal portfolio to showcase skills and projects.",
    image: image2, // Replace with actual image URL
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description: "An online shopping platform with payment integration.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
];

function Projects() {
  return (
    <>
      <span className="text-blueSky block mt-2 sm:mt-16 md:mt-16 text-4xl sm:text-5xl md:text-6xl font-semibold ml-4 sm:ml-10 md:ml-16 lg:ml-20 mb-10">
        <TypeWriter3 />
      </span>

      <div className="bg-gray-900 mt-15 text-white py-12 px-4 lg:px-16">
        {/* Adjusted title section */}

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden bg-proj text-white rounded-lg shadow-lg border-2 border-transparent transition-all duration-300 hover:border-yellow-500 h-[400px]"  // Increased height (h-[400px])
            >
              {/* Image with overlay */}
              <img
                src={project.image}
                alt={`${project.name} Thumbnail`}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20"
              />
              {/* Content */}
              <div className="relative p-6 z-10">
                <h3 className="text-2xl font-semibold mb-4 text-gray-300 group-hover:text-yellow-500">
                  {project.name}
                </h3>
                <p className="text-gray-300 group-hover:text-yellow-300">
                  {project.description}
                </p>
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-richblack-900 to-skills opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
