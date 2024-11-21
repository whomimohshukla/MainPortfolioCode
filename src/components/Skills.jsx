import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skillsData from "../Data/Skills.js";
import Slider from "react-slick";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

function Skills() {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 1500, // Slide every 3 seconds
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="skills-carousel mt-12 mb-28 ml-0 relative">
      {/* Custom Buttons */}
      <div className=" ml-auto flex justify-center flex-row-reverse gap-3 mb-8">
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="  text-white px-5 py-5  border-transparent hover:border-yellow-500 border-2  transform transition-transform duration-200 cursor-pointer bg-skills hover:bg-opacity-45 rounded-full "
        >
          <IoChevronForwardSharp size={20}></IoChevronForwardSharp>
        </button>
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="  text-white px-5 py-5 bg-skills rounded-full hover:bg-opacity-60 border-transparent hover:border-yellow-500 border-2  transform transition-transform duration-200 cursor-pointer "
        >
          <IoChevronBack size={20}></IoChevronBack>
        </button>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="skill-card bg-skills hover:bg-richblack-800 text-white p-6 gap-x-36 rounded-lg shadow-lg h-60 mx-6"
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="h-32 w-34 mb-6 mt-7"
            />
            <h3 className="mt-2 text-4xl font-bold text-richblue-5 ">
              {skill.name}
            </h3>
            <p className="text-xl mt-6 text-gray-400">{skill.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Skills;
