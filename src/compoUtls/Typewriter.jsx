// Typewriter.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        // "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    const typed = new Typed(elementRef.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return <span className="role" ref={elementRef}></span>;
};

export default Typewriter;

// <div className="mx-36 pt-0.5">
// {/* Replace the image with the Typewriter component */}
// <div className="text-white">
//   I am a <span></span>
// </div>
//
// {/* </div> */}

{
  /* <p className="text-lg text-gray-300 max-w-lg">
            I’m a software developer specializing in building (and occasionally
            designing) exceptional digital experiences. Here’s my portfolio
            website where you’ll learn more about my journey.
          </p> */
}
