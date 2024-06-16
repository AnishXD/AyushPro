import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-3/10">
            <div className="flex flex-col mb-4">
              <img
                src={logo}
                alt="Website Logo"
                width={75}
                height={75}
                className="mr-2 rounded-full"
              />
              <p className="text-lg font-medium">
                Connecting health insights from hospitals to your fingertips{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-7/10 md:pl-8 flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Main Pages</h3>
              <ul className="list-none">
                <li>Home</li>
                <li>Home (Sales)</li>
                <li>About</li>
                <li>Blog</li>
                <li>Blog Post</li>
                <li>Freelancers</li>
                <li>Freelancer single</li>
                <li>Freelancer Category</li>
                <li>Packages</li>
                <li>Packages single</li>
                <li>Contact</li>
                <li>Coming soon</li>
              </ul>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-0 md:pl-8">
              <h3 className="text-xl font-semibold mb-2">Utility Pages</h3>
              <ul className="list-none">
                <li>Start here</li>
                <li>Styleguide</li>
                <li>404 Not found</li>
                <li>Password protected</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>More Webflow Templates</li>
              </ul>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-0 md:pl-8">
              <h3 className="text-xl font-semibold mb-2">Links</h3>
              <ul className="list-none">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
                <li>Pinterest</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Copyright © Cura | Designed by Anish Barve - Powered by VScode</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
