// skillsData.js

import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript-736400_1280.jpg';
import reactlogo from '../assets/images-removebg-preview.png';
import nodeJs from '../assets/nodejs3.png';
import mongodb from '../assets/mongodb-removebg-preview.png'; // Fixed typo in variable name
import expressJs from '../assets/ExpressJS-Library-removebg-preview.png';
import gitAndGithub from '../assets/git-and-github-removebg-preview.png';
import tailwind from '../assets/1715021638881-removebg-preview.png';


// skills data 

//mimohshukla
const skillsData = [
  {
    id: 1,
    name: "HTML",
    icon: html,
    description: "Skilled in creating clean, accessible, and SEO-friendly web structures with HTML5.",
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
    description: "Proficient in creating responsive, visually engaging web designs with CSS3",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: js,
    description: "Skilled in JavaScript for creating dynamic and interactive web experiences.",
  },
  {
    id: 4,
    name: "React",
    icon: reactlogo,
    description: "Proficient in building scalable user interfaces with React.js.",
  },
  {
    id: 5,
    name: "Node.js",
    icon: nodeJs,
    description: "Skilled in developing server-side applications and APIs using Node.js.",
  },
  {
    id: 6,
    name: "MongoDB",
    icon: mongodb,
    description: "Proficient in designing and managing NoSQL databases with MongoDB.",
  },
  {
    id: 7,
    name: "Express.js",
    icon: expressJs,
    description: "Skilled in building RESTful APIs and web applications using Express.js.",
  },
  {
    id: 8,
    name: "Git & Github",
    icon: gitAndGithub,
    description: "Experienced in using Git and GitHub for version control and collaborative development, ensuring streamlined workflows and enhanced productivity",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    icon: tailwind,
    description: "Proficient in Tailwind CSS for building responsive and customizable UI designs with utility-first styling",
  },
  // { id: 10, name: "TypeScript", icon: gitAndGithub, description: "Version control system" },
];

export default skillsData;
