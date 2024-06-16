import React from "react";
import News from "../assets/news.png";
import other from "../assets/other.png";

const Functions = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-4 mx-8 py-6 min-h-screen">
        <h1 className="text-center text-6xl font-bold mb-4">Functions</h1>
        <div className="flex items-center justify-center lg:justify-between ">
          <div className="w-full lg:w-1/2 px-4 lg:text-left mb-8 lg:mb-0 flex flex-col items-center">
            <img src={News} alt="location" className="mb-4 inline-block" width={300} height={300} />
            <h2 className="text-4xl font-bold mb-6">Health News</h2>
            <p className="text-gray-700 font-sans text-xl">
            Stay informed with our app's comprehensive coverage of the latest health news, curated from trusted sources worldwide. Whether it's breakthrough treatments, public health updates, or wellness tips, we deliver timely information that empowers you to make informed decisions about your health.
            </p>
          </div>
          <div className="lg:block border-l border-dotted border-orange-800 mx-8 h-screen border-4"></div>
          <div className="w-full lg:w-1/2 px-4 lg:text-left mb-8 lg:mb-0 flex flex-col items-center">
            <img src={other} alt="other" className="mb-4 inline-block" width={300} height={300} />
            <h2 className="text-4xl font-bold mb-6">Hospital Data</h2>
            <p className="text-gray-700 font-sans text-xl">
            Access up-to-date hospital data effortlessly through our platform, providing detailed insights into facilities, specialties,and ratings. Whether you're seeking the best care option or comparing services, our comprehensive database ensures you find the right healthcare provider for your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
