import React from "react";
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
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Importing additional icons

function Home() {
  return (
    <>
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 bg-gray-900">
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
                href="https://github.com/Mimohshukla00"
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

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mb-0">
        <hr className="my-6 w-full border-white border-t-richblack-500 sm:mx-auto lg:my-8" />
      </div>
    </>
  );
}

export default Home;
