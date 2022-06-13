import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-screen py-8 px-12 lg:px-28 lg:py-14 bg-footer-texture">
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-around">
        <div>
          <button className="w-5 h-5 lg:w-14 lg:h-14 ease-in-hover">
            <img src="assets/icon/logo.svg" alt="logo icon" />
          </button>
        </div>
        <div className="flex lg:flex-row gap-12">
          <a href="#home" className="hover:text-fuchsia-500">
            Privacy
          </a>
          <a href="#howitworks" className="hover:text-fuchsia-500">
            Terms
          </a>
          <a href="#services" className="hover:text-fuchsia-500">
            About Us
          </a>
          <a href="#roadmap" className="hover:text-fuchsia-500">
            Contact
          </a>
        </div>
        <div className="flex lg:flex-row gap-12">
          <button className="w-5 h-5 lg:w-14 lg:h-14 ease-in-hover">
            <img src="assets/icon/discord.svg" alt="logo icon" />
          </button>
          <button className="w-5 h-5 lg:w-14 lg:h-14 ease-in-hover">
            <img src="assets/icon/twitter.svg" alt="logo icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
