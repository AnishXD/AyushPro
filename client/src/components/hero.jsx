import React from "react";
import hero_bg from "../assets/hero_bg.jpg";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
const hero = () => {
  return (
    <div
      className="h-screen flex bg-cover"
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      {/* Text Div */}
      <div className=" text-white w-1/2 px-6" style={{ paddingTop: "6rem" }}>
        <div>
          <h2 className="text-6xl font-bold mb-4 changa-one-regular">
            Discover World's Vibrant Hospitals 🏥
          </h2>
          <p className="text-xl py-6">
            Finding health insights and Getting health bulletins from hospitals
            to your fingertips
          </p>
        </div>

        <div className="mt-8">
          <SignedOut>
            <Link
              to="/"
              className="bg-blue-700 px-6 py-4 rounded-2xl hover:bg-blue-500 transition duration-300 ease-in-out text-white text-xl font-semibold"
            >
              <SignInButton />
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              to="/searchpage"
              className="bg-blue-700 px-6 py-4 rounded-2xl hover:bg-blue-500 transition duration-300 ease-in-out text-white text-xl font-semibold"
            >
              Get Started
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default hero;
