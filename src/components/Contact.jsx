import { Link } from "react-router-dom";
import CTAbutton from "../compoUtls/Button";

export default function Contact() {
  return (
    <>
      <div className="text-white mt-10 px-6 sm:px-8 lg:px-36">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center lg:text-left">
          Contact Me
        </div>

        <form className="mt-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="w-full mt-5 h-14 sm:h-16 lg:h-20 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="title" className="hidden">
              Message Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Message Title"
              className="w-full h-14 sm:h-16 lg:h-20 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full h-14 sm:h-16 lg:h-20 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="message" className="hidden">
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              className="w-full h-28 sm:h-32 lg:h-40 py-3 px-3 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold focus:border-yellow-200 focus:outline-none"
              required
            />
          </div>

          <button className="w-full sm:w-52 mt-8 h-14 sm:h-16 py-3 px-4 rounded-full bg-transparent border-2 border-white/50 text-white font-semibold hover:bg-yellow-100 hover:shadow-none hover:scale-95 transition-all duration-200 hover:text-black">
            SUBMIT NOW
          </button>
        </form>
      </div>

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mb-0">
        <hr className="my-6 w-full border-white border-t-richblack-500 sm:mx-auto lg:my-8" />
      </div>
    </>
  );
}
