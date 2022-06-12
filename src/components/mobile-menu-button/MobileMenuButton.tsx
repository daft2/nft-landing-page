import React, { useState } from "react";

const MobileMenuButton = () => {
  const [isHidden, setIsHidden] = useState(true);

  const onClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="inline-block lg:hidden">
      <button onClick={onClick} className="block lg:hidden">
        <img src="assets/icon/menu.svg" alt="menu icon" />
      </button>
      <div
        className={`${isHidden ? "hidden" : "flex flex-col"}
        mx-8 my-4 bg-fuchsia-800 backdrop-filter bg-opacity-50 backdrop-blur-lg p-4 rounded-xl fixed inset-x-0 gap-2`}
      >
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
        <button className="border rounded-lg py-2">Connect Wallet</button>
      </div>
    </div>
  );
};

export default MobileMenuButton;
