import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchIcon from "../assets/search.png";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // Navigate to search page when search icon is clicked
    navigate("/searchpage");
  };

  return (
    <>
      <header className="bg-white px-4 py-4 sm:px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="My Logo"
            className="w-28 object-contain mx-4 sm:mx-10"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-grow justify-center text-lg">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="font-semibold px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-semibold px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-semibold px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/bulletin"
                className="font-semibold px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Medical Bulletin
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Icon */}
        <SignedIn>
          <div>
            <button
              onClick={handleSearch}
              className="px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <img src={SearchIcon} alt="Search icon" className="w-8 h-8" />
            </button>
          </div>
          <UserButton />
        </SignedIn>

        {/* Sign-up Button */}
        <SignedOut>
          <Link
            to="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <SignInButton/>
          </Link>
        </SignedOut>
      </header>
    </>
  );
};

export default Header;
