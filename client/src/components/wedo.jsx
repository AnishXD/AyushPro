import React from "react";
import wedo_bg from "../assets/wedo_bg.jpg";
import hospital from "../assets/hospital.png";

const Wedo = () => {
  const containerStyle = {
    backgroundImage: `url(${wedo_bg})`,
  };

  return (
    <div className="flex items-center justify-center ">
      <div
        className="container rounded-xl my-4 px-8 py-6 bg-cover bg-center min-h-screen"
        style={containerStyle}
      >
        <h1 className="text-6xl font-bold">Services that we provide</h1>

        <div className="my-10 py-10">
        <div className="flex items-center py-4">
          <img src={hospital} alt="hospital" height={50} width={50} />
          <p className="text-4xl px-4">
            Hospital Aggreated Data on your Fingertips
          </p>
        </div>
        <div className="flex items-center py-4">
          <img src={hospital} alt="hospital" height={50} width={50} />
          <p className="text-4xl px-4">
            Health related news and top headline 
          </p>
        </div>
        <div className="flex items-center py-4">
          <img src={hospital} alt="hospital" height={50} width={50} />
          <p className="text-4xl px-4">
            Lorem ipsum dolor sit, Atque quibusdam non in
          </p>
        </div>
        <div className="flex items-center py-4">
          <img src={hospital} alt="hospital" height={50} width={50} />
          <p className="text-4xl px-4">
            Lorem ipsum dolor sit, Atque quibusdam non in
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
