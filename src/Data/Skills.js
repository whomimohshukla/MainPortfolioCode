// skillsData.js

import html from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/html.png";
import css from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/css.png";
import js from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/javascript-736400_1280.jpg";
import reactlogo from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/images-removebg-preview.png";
import nodeJs from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/nodejs3.png";
import mogngodb from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/mongodb-removebg-preview.png";
import expressJs from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/ExpressJS-Library-removebg-preview.png";
import gitAndGithub from "/home/whomimohshukla/Desktop/portfolio-2/src/assets/git-and-github-removebg-preview.png";
const skillsData = [
  {
    id: 1,
    name: "HTML",
    icon: html,
    description:
      "Skilled in creating clean, accessible, and SEO-friendly web structures with HTML5.",
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
    description: "Styling language for web pages",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: js,
    description: "Programming language for web",
  },
  {
    id: 4,
    name: "React",
    icon: reactlogo,
    description: "Library for building UIs",
  },
  {
    id: 5,
    name: "Node.js",
    icon: nodeJs,
    description: "JavaScript runtime for server",
  },
  { id: 6, name: "MongoDB", icon: mogngodb, description: "NoSQL database" },
  {
    id: 7,
    name: "Express.js",
    icon: expressJs,
    description: "Backend framework for Node.js",
  },
  { id: 8, name: "Git & Github", icon: gitAndGithub, description: "Version control system" },
  { id: 9, name: "Tailwind CSS", icon: gitAndGithub, description: "Version control system" },
  { id: 10, name: "TypeScript", icon: gitAndGithub, description: "Version control system" },
];

export default skillsData;
