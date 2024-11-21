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

  const handleMenuClose = () => {
    setIsMenuOpen(false); // Close menu
  };

  return (
    <header className="shadow-2xl sticky top-0 z-50 bg-gray-900">
      <nav className="border-gray-200 px-4 lg:px-8 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={mylogo}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg"
              alt="Logo"
            />
          </Link>

          {/* Contact Icons */}
          <div className="hidden sm:flex space-x-6 lg:space-x-8 items-center">
            <a
              href="https://github.com/Mimohshukla00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mimohshukla00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/whomimohshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500"
            >
              <SiLeetcode size={20} />
            </a>
            <a
              href="https://twitter.com/@whomimohshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/whomimohshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:mimohshukla0001@gmail.com"
              className="text-white hover:text-yellow-500"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Hamburger Menu Button (visible on small screens) */}
          <button
            className="text-white lg:hidden"
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

          {/* Navigation Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 text-center">
              <li>
                <NavLink
                  to="/"
                  onClick={handleMenuClose} // Close menu after clicking
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
                  onClick={handleMenuClose} // Close menu after clicking
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
                  to="/projects"
                  onClick={handleMenuClose} // Close menu after clicking
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
                  onClick={handleMenuClose} // Close menu after clicking
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
