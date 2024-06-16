import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import li from "../assets/li.png";
import x from "../assets/x.png";

const ContactComp = () => {
  return (
    <div className="my-11 mx-11">
      <div>
        <h2 className="text-4xl font-semibold my-2">
          Tell us more and we'll find the best solution for you
        </h2>
        <hr />
        <div className="w-4/6 flex items-center bg-white focus:outline-none  rounded py-2 ">
          <input
            type="text"
            placeholder="Describe your issue"
            className="w-full text-lg leading-normal focus:outline-none bg-white border border-gray-300 rounded py-2 px-4 my-2"
          />
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-4xl font-semibold my-2">Quick Links</h2>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-col my-4">
          <Link to="/" className="flex items-center my-2 hover:text-blue-600">
            <img src={insta} alt="insta" width={20} height={20} className="mr-2" />
            <span className="text-lg font-semibold">@Cura</span>
          </Link>
          <Link to="/" className="flex items-center my-2 hover:text-blue-600">
            <img src={fb} alt="fb" width={20} height={20} className="mr-2" />
            <span className="text-lg font-semibold">Cura Ltd</span>
          </Link>
          <Link to="/" className="flex items-center my-2 hover:text-blue-600">
            <img src={li} alt="li" width={20} height={20} className="mr-2" />
            <span className="text-lg font-semibold">Cura</span>
          </Link>
          <Link to="/" className="flex items-center my-2 hover:text-blue-600">
            <img src={x} alt="x" width={20} height={20} className="mr-2" />
            <span className="text-lg font-semibold">Cura</span>
          </Link>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-4xl font-semibold my-2">Leave Us a Message</h2>
        <hr className="my-2 border-gray-300" />
        <div className="w-4/6 flex flex-col">
          <div className="flex">
            <div className="w-1/2 flex  bg-white focus:outline-none border border-gray-300 rounded py-2 px-4 my-2 mr-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full text-lg leading-normal focus:outline-none"
              />
            </div>
            <div className="w-1/2 flex  bg-white focus:outline-none border border-gray-300 rounded py-2 px-4 my-2">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full text-lg leading-normal focus:outline-none"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 flex  bg-white focus:outline-none border border-gray-300 rounded py-2 px-4 my-2 mr-4">
              <input
                type="text"
                placeholder="E-mail"
                className="w-full text-lg leading-normal focus:outline-none"
              />
            </div>
            <div className="w-1/2 flex bg-white focus:outline-none border border-gray-300 rounded py-2 px-4 my-2 ">
              <input
                type="text"
                placeholder="Phone"
                className="w-full text-lg leading-normal focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full bg-white focus:outline-none border border-gray-300 rounded py-2 px-4 my-2">
            <textarea
              placeholder="Your message..."
              className="w-full text-lg leading-normal focus:outline-none"
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="my-11">
      <Link to="/searchpage" className="bg-blue-500  px-8 py-4 hover:bg-blue-700 transition duration-300 ease-in-out text-white text-xl rounded font-semibold">Submit</Link>
      </div>
    </div>
  );
};

export default ContactComp;
