import React from 'react';
import WBbg from "../assets/wb.jpg";
import Verified from '../assets/verified.jpg';

const aim = () => {
    const containerStyle = {
        backgroundImage: `url(${WBbg})`,
      };
  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="container rounded-xl my-4 px-8 py-6 bg-white bg-cover bg-center shadow-lg h-screen" style={containerStyle}>
        <div className='flex'>
        <h1 className="text-6xl w-1/2 font-bold mb-2 text-white">Our Aim </h1>
        <h1 className="text-6xl w-1/2 font-bold mb-2 text-sky-400">Our Reviews </h1>
        </div>
      <div className='flex items-center'>
      <div className='w-1/2 h-full text-white font-semibold'>
        <p className='py-4 text-xl font-sans'>Centralized Information Hub: We aim to centralize hospital data, providing easy access to comprehensive information about healthcare facilities.
        </p>
        
        <p className='py-4 text-xl font-sans'>Timely Health Updates: We keep users updated with the latest health news, covering breakthrough treatments, public health advisories, and wellness trends.
        </p>
        <p className='py-4 text-xl font-sans'>Enhancing Accessibility: With a user-friendly interface and robust search tools, we ensure effortless access to healthcare information tailored to user needs.
        </p>
        <p className='py-4 text-xl font-sans'>Promoting Transparency and Trust: We promote transparency in healthcare by highlighting reliable information and fostering honest patient reviews, building trust between providers and consumers.
        </p>
        </div>
        <div className='w-1/2 h-fit'>
            <div className="flex flex-col mt-2 ">
            {/* First Square */}
            <div className="bg-blue-100 p-4 rounded-lg flex flex-col mb-4">
              <div className="flex items-center">
                <img
                  src={Verified}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                aliquid dis?
              </p>
            </div>
            {/* Second Square */}
            <div className="bg-blue-100 p-4 rounded-lg flex flex-col mb-4">
              <div className="flex items-center">
                <img
                  src={Verified}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                aliquid esse saepe repellat ani
              </p>
            </div>
            {/* Third Square */}
            <div className="bg-blue-100 p-4 rounded-lg flex flex-col mb-4">
              <div className="flex items-center ">
                <img
                  src={Verified}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                aliquid esse saepe repellat animi odio exercitationem. 
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default aim