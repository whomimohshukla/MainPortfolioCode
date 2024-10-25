// Typewriter.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeWrite2 = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "--Skills"
      ],
      loop: true,
      typeSpeed: 120,
      backSpeed: 130,
      backDelay: 1000,
    };

    const typed = new Typed(elementRef.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return <span className="role" ref={elementRef}></span>;
};

export default TypeWrite2;
