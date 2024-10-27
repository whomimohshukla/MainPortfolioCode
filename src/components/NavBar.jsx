import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";


import mylogo from "../assets/myLogo-Photoroom-Photoroom.jpg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="shadow-2xl sticky  z-50 top-0 bg-gray-900">
      <nav className="border-gray-200  sticky  z-50 px-4 lg:px-8 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={mylogo}
              className="h-12 w-12 rounded-full shadow-lg"
              alt="Logo"
            />
          </Link>
          {/* Contact Icons */}
        <div className="ml-28">
          <ul>
            <li className="flex flex-row space-x-11 mt-4 lg:mt-0">
              <a
                href="https://github.com/Mimohshukla00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaGithub size={23} />
              </a>
              <a
                href="https://www.linkedin.com/in/mimohshukla00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaLinkedin size={23} />
              </a>
              <a
                href="https://leetcode.com/whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <SiLeetcode size={23} />
              </a>
              <a
                href="https://twitter.com/@whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaTwitter size={23} />
              </a>
              <a
                href="https://instagram.com/whomimohshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaInstagram size={23} />
              </a>
              <a
                href="mailto:mimohshukla0001@gmail.com"
                className="text-white hover:text-yellow-500"
              >
                <FaEnvelope size={23} />
              </a>
            </li>
          </ul>
        </div>

          {/* Hamburger Menu Button (visible on small screens) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 transition duration-200 rounded ${
                      isActive ? "text-yellow-300" : "text-white"
                    } hover:text-customBlue`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `block py-2 px-4 transition duration-200 rounded ${
                      isActive ? "text-yellow-300" : "text-white"
                    } hover:text-customBlue`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-4 transition duration-200 rounded ${
                      isActive ? "text-yellow-300" : "text-white"
                    } hover:text-customBlue`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 transition duration-200 rounded ${
                      isActive ? "text-yellow-300" : "text-white"
                    } hover:text-customBlue`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
