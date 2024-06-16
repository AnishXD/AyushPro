import React from 'react';

const Numbers = () => {
  return (
    <div className="min-h-[50vh] bg-sky-600 flex justify-evenly items-center relative">
      {/* First Number Block */}
      <div className="flex flex-col justify-center items-center text-white">
        <p className="text-6xl font-semibold">4000</p>
        <span className="text-base">Hospitals</span>
      </div>

      {/* Vertical Line */}
      <div className="h-48 w-0.5 bg-white mx-4"></div>

      {/* Second Number Block */}
      <div className="flex flex-col justify-center items-center text-white">
        <p className="text-6xl font-semibold">100K+</p>
        <span className="text-base">Happy Patients</span>
      </div>

      {/* Vertical Line */}
      <div className="h-48 w-0.5 bg-white mx-4"></div>

      {/* Third Number Block */}
      <div className="flex flex-col justify-center items-center text-white">
        <p className="text-6xl font-semibold">20k+</p>
        <span className="text-base">Quality Doctors</span>
      </div>
    </div>
  );
};

export default Numbers;
