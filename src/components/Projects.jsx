import React, { useState } from "react";
import TypeWriter3 from "../compoUtls/TypeWriter3";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTags } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all images
const projectImages = {
  BookMybus1: new URL("../assets/book1.png", import.meta.url).href,
  BookMybus2: new URL("../assets/book2.png", import.meta.url).href,
  BookMybus3: new URL("../assets/book3.png", import.meta.url).href,
  BookMybus4: new URL("../assets/book4.png", import.meta.url).href,
  BookMybus5: new URL("../assets/book5.png", import.meta.url).href,
  image2: new URL("../assets/portfolioImage.png", import.meta.url).href,
  skillbridge1: new URL("../assets/skillBridege1.png", import.meta.url).href,
  skillbridge2: new URL("../assets/skillBridege2.png", import.meta.url).href,
  skillbridge3: new URL("../assets/skillBridege3.png", import.meta.url).href,
  skillbridge4: new URL("../assets/skillBridege4.png", import.meta.url).href,
  skillbridge5: new URL("../assets/skillBridege5.png", import.meta.url).href,
  skillbridge6: new URL("../assets/skillBridege6.png", import.meta.url).href,
  skillbridge7: new URL("../assets/skillBridege7.png", import.meta.url).href,
  skillbridge8: new URL("../assets/skillBridege8.png", import.meta.url).href,
  skillbridge9: new URL("../assets/skillBridege9.png", import.meta.url).href,
  skillbridge10: new URL("../assets/skillBridege10.png", import.meta.url).href,
  // skillbridge11: new URL('../assets/skillBridege11.png', import.meta.url).href,
  skillbridge12: new URL("../assets/skillBridege12.png", import.meta.url).href,
};

const projectsData = [
  {
    id: 1,
    name: "BookMyBus",
    description:
      "A comprehensive bus ticket booking platform with real-time seat selection, secure payment integration, and instant ticket generation. Features include route search, seat availability, and booking management.",
    images: [
      projectImages.BookMybus1,
      projectImages.BookMybus2,
      projectImages.BookMybus3,
      projectImages.BookMybus4,
      projectImages.BookMybus5,
    ],
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/whomimohshukla/Book-My-Bus",
    demo: "https://book-my-bus-nine.vercel.app/",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A personal portfolio to showcase skills and projects.",
    images: [
      projectImages.image2,
      // "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Portfolio+1",
      // "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Portfolio+2",
    ],
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com",
  },
  {
    id: 3,
    name: "SkillBridge",
    description:
      "A modern freelance marketplace connecting skilled professionals with quality projects. Features include user authentication, project management, real-time messaging, proposal system, and secure payment processing.",
    images: [
      projectImages.skillbridge1,
      projectImages.skillbridge2,
      projectImages.skillbridge3,
      projectImages.skillbridge4,
      projectImages.skillbridge5,
      projectImages.skillbridge6,
      projectImages.skillbridge7,
      projectImages.skillbridge8,
      projectImages.skillbridge9,
      projectImages.skillbridge10,
      projectImages.skillbridge12,
    ],
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "Express.js"],
    github: "https://github.com/whomimohshukla/-Freelance-Marketplace--Project",
    demo: "https://skillbridge-demo.vercel.app",
  },
];

const ProjectImageSlider = ({ images, isHovered }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    customPaging: (i) => (
      <div className="w-2 h-2 mx-1 rounded-full bg-gray-500 hover:bg-yellow-500 transition-colors duration-300" />
    ),
  };

  return (
    <div className="relative h-48 overflow-hidden group">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: isHovered ? 0.8 : 0.6 }}
        transition={{ duration: 0.3 }}
      />
      <Slider {...settings} className="project-slider">
        {images.map((image, index) => (
          <div key={index} className="relative h-48">
            <motion.img
              src={image}
              alt={`Project screenshot ${index + 1}`}
              className="w-full h-full object-contain p-4 bg-gray-900/40"
              initial={{ scale: 1, y: 0 }}
              animate={{
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </Slider>

      {/* Custom Dots Styling */}
      <style jsx global>{`
        .project-slider .slick-dots {
          bottom: 10px;
          z-index: 20;
        }
        .project-slider .slick-dots li {
          margin: 0 2px;
        }
        .project-slider .slick-dots li button:before {
          display: none;
        }
        .project-slider .slick-slide {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-blueSky text-5xl md:text-6xl font-semibold block mb-6">
          <TypeWriter3 />
        </span>
        <p className="text-white text-lg max-w-2xl mx-auto px-4">
          Here are some of my recent works that showcase my skills and
          experience
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={projectVariants}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
            className="relative group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
          >
            {/* Project Image Slider */}
            <ProjectImageSlider
              images={project.images}
              isHovered={hoveredId === project.id}
            />

            {/* Project Content */}
            <div className="p-6 relative z-10 bg-gradient-to-t from-gray-900 to-gray-800/90">
              <motion.h3
                className="text-2xl font-bold text-white mb-3"
                animate={{
                  color: hoveredId === project.id ? "#EAB308" : "#FFFFFF",
                }}
                transition={{ duration: 0.3 }}
              >
                {project.name}
              </motion.h3>
              <p className="text-white mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-900/80 text-yellow-500 text-xs rounded-full flex items-center gap-1 border border-yellow-500/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTags className="text-xs" />
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-500 transition-all duration-300 bg-gray-900/50 px-4 py-2 rounded-full text-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(234, 179, 8, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-lg" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-500 transition-all duration-300 bg-gray-900/50 px-4 py-2 rounded-full text-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(234, 179, 8, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span>Demo</span>
                </motion.a>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
