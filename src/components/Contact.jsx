import { Link } from "react-router-dom";
import CTAbutton from "../compoUtls/Button";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageTitle: "",
    messageContent: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/message",
        formData
      );
      console.log(response);
      setResponseMessage(response.data.message);
      // Reset form if needed
      setFormData({
        name: "",
        email: "",
        messageTitle: "",
        messageContent: "",
      });
    } catch (error) {
      if (error.response) {
        // Custom messages based on status code
        if (error.response.status === 409) {
          setResponseMessage(
            "Email already exists. Please use a different email."
          );
        } else if (error.response.status === 400) {
          setResponseMessage("All fields are required.");
        } else {
          setResponseMessage("Failed to send message. Please try again.");
        }
      } else {
        console.error("Error sending message:", error);
        setResponseMessage("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="text-white mt-10 px-6 sm:px-8 lg:px-36">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center lg:text-left">
          Contact Me
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-5 h-14 sm:h-16 lg:h-20 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <input
              type="text"
              name="messageTitle"
              placeholder="Message Title"
              value={formData.messageTitle}
              onChange={handleChange}
              className="w-full h-14 sm:h-16 lg:h-20 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 sm:h-16 lg:h-20 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <textarea
              name="messageContent"
              placeholder="Your message"
              value={formData.messageContent}
              onChange={handleChange}
              className="w-full h-28 sm:h-32 lg:h-40 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>
          <button className="w-full sm:w-52 mt-8 h-14 sm:h-16 py-3 px-4 rounded-full bg-transparent border-2 border-white/50 text-white font-semibold hover:bg-yellow-100 hover:shadow-none hover:scale-95 transition-all duration-200 hover:text-black">
            SUBMIT NOW
          </button>
        </form>
        {responseMessage && <p className="mt-4">{responseMessage}</p>}
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mb-0">
        <hr className="my-6 w-full border-white border-t-richblack-500 sm:mx-auto lg:my-8" />
      </div>
    </>
  );
}
