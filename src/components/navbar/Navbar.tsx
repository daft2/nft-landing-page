import React from "react";
import MobileMenuButton from "../mobile-menu-button/MobileMenuButton";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-16 items-center">
        <div className="w-5 h-5 lg:w-14 lg:h-14">
          <img src="assets/icon/logo.svg" alt="logo icon" />
        </div>
        <div className="hidden lg:flex gap-12 justify-evenly">
          <a href="#home" className="text-active">
            Home
          </a>
          <a href="#howitworks" className="hover:text-fuchsia-500">
            How it works
          </a>
          <a href="#services" className="hover:text-fuchsia-500">
            Services
          </a>
          <a href="#roadmap" className="hover:text-fuchsia-500">
            Roadmap
          </a>
        </div>
      </div>
      <button className="border hidden lg:block rounded-lg px-12 py-1">
        Connect Wallet
      </button>
      <MobileMenuButton />
      {/* Dropdown List */}
    </div>
  );
};

export default Navbar;