import React from "react";
import mylogo from "../assets/myLogo-Photoroom-Photoroom.jpg";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-customDark roboto-slab-custom w-full  text-white border-none p-4 border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={mylogo} className="mr-3 h-16 rounded-full" alt="Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/" className=" hover:text-yellow-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className=" hover:text-yellow-300">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4 ">
                  <a
                    href="https://github.com/Mimohshukla00"
                    className=" hover:text-yellow-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className=" hover:text-yellow-300">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mb-0">
          <hr className="my-6 w-full border-white border-t-richblack-500 sm:mx-auto lg:my-8" />
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xl text-white sm:text-center">
            © 2024-
            <a href="https://github.com/Mimohshukla00" className=" text-pink">
              MimohShukla
            </a>
            . All Rights Reserved.
          </span>
          <ul>
            <li className="flex flex-row space-x-8 mt-4 lg:mt-0">
              <a
                href="https://github.com/Mimohshukla00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/mimohshukla00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://leetcode.com/whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <SiLeetcode size={25} />
              </a>
              <a
                href="https://twitter.com/@whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaTwitter size={25} />
              </a>
              <a
                href="https://instagram.com/whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="mailto:mimohshukla0001@gmail.com"
                className="text-white hover:text-yellow-500"
              >
                <FaEnvelope size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
