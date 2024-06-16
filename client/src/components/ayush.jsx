import React from "react";
import Ayush from "../assets/ayush_bg.jpg";

const ayush = () => {
  return (
    <div>
      <h1 className="text-6xl font-semibold text-center my-4 ">
        Ministry of Ayush
      </h1>
      <div className="flex justify-center  min-h-[70vh] mx-4">
        <div className="w-1/2 flex items-center justify-center">
          <img src={Ayush} alt="ayush" width={600} />
        </div>

        <div className="w-1/2  text-lg flex flex-col justify-evenly">
          <p>
            In India, the field of Ayurveda, Yoga & Naturopathy, Unani, Siddha,
            and Homoeopathy (collectively known as Ayush) plays a crucial role
            in the healthcare system. With approximately 4000 Ayush hospitals
            spread across the nation, it becomes essential to bridge the gap
            between these healthcare facilities and the individuals seeking
            their services. However, finding the nearest Ayush hospital with
            relevant information such as opening times, closing times, and
            comprehensive healthcare data has proven to be a challenge.
          </p>
          <p>
            Design an efficient solution to help users easily locate Ayush
            hospitals, view their operating hours, and access pertinent
            biomedical information through a user-friendly mobile application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ayush;
