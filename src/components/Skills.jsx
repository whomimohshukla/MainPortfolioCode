import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skillsData from "../Data/Skills.js";
import Slider from "react-slick";

function Skills() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    // centerMode: true, // Ensures cards have space around them
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <div className="slick-next custom-button">Next</div>,
    prevArrow: <div className="slick-prev custom-button">Prev</div>,
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
    <div className="skills-carousel  mt-20 ml-2 ">
      <Slider {...settings}>
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="skill-card text-white p-6 gap-x-36 rounded-lg shadow-lg h-60 mx-6"
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="h-32 w-34 mb-6  mt-7"
            />
            <h3 className="mt-2 text-4xl font-bold text-richblue-5 ">
              {skill.name}
            </h3>
            <p className=" text-xl mt-6 text-gray-400">{skill.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Skills;
