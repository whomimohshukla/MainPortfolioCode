import React, { useState } from "react";
import CodeBlocks from "../compoUtls/CardBlocks";
import Highlight from "../compoUtls/Highlight";
import Typewriter from "../compoUtls/Typewriter";
import Skills from "./Skills";
import TypeWrite2 from "../compoUtls/TypeWrite2";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaTags,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; 
import Projects from "./Projects";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all images
const projectImages = {
  BookMybus1: new URL('../assets/book1.png', import.meta.url).href,
  BookMybus2: new URL('../assets/book2.png', import.meta.url).href,
  BookMybus3: new URL('../assets/book3.png', import.meta.url).href,
  image2: new URL('../assets/portfolioImage.png', import.meta.url).href,
  skillbridge1: new URL('../assets/skillBridege1.png', import.meta.url).href,
  skillbridge2: new URL('../assets/skillBridege2.png', import.meta.url).href,
  skillbridge3: new URL('../assets/skillBridege3.png', import.meta.url).href,
  skillbridge4: new URL('../assets/skillBridege4.png', import.meta.url).href,
  skillbridge5: new URL('../assets/skillBridege5.png', import.meta.url).href,
  skillbridge6: new URL('../assets/skillBridege6.png', import.meta.url).href,
  skillbridge7: new URL('../assets/skillBridege7.png', import.meta.url).href,
  skillbridge8: new URL('../assets/skillBridege8.png', import.meta.url).href,
  skillbridge9: new URL('../assets/skillBridege9.png', import.meta.url).href,
  skillbridge10: new URL('../assets/skillBridege10.png', import.meta.url).href,
  // skillbridge11: new URL('../assets/skillBridege11.png', import.meta.url).href,
  skillbridge12: new URL('../assets/skillBridege12.png', import.meta.url).href,
};

const featuredProjects = [
  {
    id: 1,
    name: "Book My Ticket",
    description:
      "A comprehensive bus ticket booking platform with real-time seat selection, secure payment integration, and instant ticket generation. Features include route search, seat availability, and booking management.",
    images: [projectImages.BookMybus1, projectImages.BookMybus2, projectImages.BookMybus3],
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/book-my-ticket",
    demo: "https://book-my-ticket-demo.com",
  },
  {
    id: 3,
    name: "SkillBridge",
    description: "A modern freelance marketplace connecting skilled professionals with quality projects. Features include user authentication, project management, real-time messaging, proposal system, and secure payment processing.",
    images: [
      projectImages.skillbridge1, projectImages.skillbridge2, projectImages.skillbridge3, projectImages.skillbridge4, projectImages.skillbridge5, projectImages.skillbridge6, projectImages.skillbridge7, projectImages.skillbridge8, projectImages.skillbridge9, projectImages.skillbridge10, projectImages.skillbridge12
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

function Home() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen">
      <section className="px-4  sm:px-8 md:px-16 lg:px-32 py-8 bg-gray-900">
        {/* Code Section 1 */}
        <div className="relative flex flex-col md:flex-row justify-stretch gap-8 text-white">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <header className="text-xl sm:text-2xl md:text-3xl font-semibold">
                <div className="flex flex-row gap-5 items-center">
                  <h1>Hi</h1>
                  <img
                    className="-mt-1"
                    src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                    width="40px"
                    alt="Waving Hand"
                  />
                </div>
                <Highlight text={"I'm Mimoh Shukla"} />
                <span className="font-thin text-blueSky mt-5 block">
                  <Typewriter
                    options={{
                      strings: [
                        "Computer Science Undergraduate",
                        "Learning Full Stack Software Development",
                        "Aspiring Learner",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </header>
            }
            subheading={
              <article className="text-sm sm:text-base md:text-lg">
                <p>
                  I'm a web developer with a passion for creating sleek, modern,
                  and responsive web applications. Currently pursuing a B.Tech
                  in Computer Science, I thrive on turning ideas into
                  functional, impactful digital solutions.
                </p>
              </article>
            }
            ctabtn1={{
              btnText: "Contact Me",
              link: "/Contact",
              active: true,
            }}
            ctabtn2={{
              btnText: "See Resume",
              link: "/resume",
              active: false,
            }}
            codeColor={"text-pink"}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>whomimohshukla</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a></nav>\n</body>`}
            backgroundGradient={<div className="codeblock2 absolute "></div>}
          />
        </div>

        {/* Contact Icons */}
        <div className="mt-0">
          <ul>
            <li className="flex flex-row space-x-8 mt-4 lg:mt-0">
              <a
                href="https://github.com/whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/mimohshukla00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://leetcode.com/whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <SiLeetcode size={30} />
              </a>
              <a
                href="https://twitter.com/@whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com/whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="mailto:mimohshukla0001@gmail.com"
                className="text-white hover:text-yellow-500"
              >
                <FaEnvelope size={30} />
              </a>
            </li>
          </ul>
        </div>

        <span className="text-blueSky mt-24 text-5xl font-semibold block">
          <TypeWrite2></TypeWrite2>
        </span>
        <Skills></Skills>
      </section>

      {/* Featured Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
            Featured Projects
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                onHoverStart={() => setHoveredProjectId(project.id)}
                onHoverEnd={() => setHoveredProjectId(null)}
                className="relative group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
              >
                {/* Project Image Slider */}
                <ProjectImageSlider
                  images={project.images}
                  isHovered={hoveredProjectId === project.id}
                />

                {/* Project Content */}
                <div className="p-6 relative z-10 bg-gradient-to-t from-gray-900 to-gray-800/90">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3"
                    animate={{
                      color: hoveredProjectId === project.id ? "#EAB308" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.name}
                  </motion.h3>
                  <p className="text-yellow-500 mb-4 text-sm leading-relaxed">
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
                  animate={{ opacity: hoveredProjectId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <motion.a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mb-0">
        <hr className="my-6 w-full border-white border-t-richblack-500 sm:mx-auto lg:my-8" />
      </div>
    </div>
  );
}

export default Home;
