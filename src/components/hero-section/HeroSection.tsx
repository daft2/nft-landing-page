import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="my-40">
      <div className="w-2/5">
        <div className="text-center xl:text-left flex flex-col gap-12">
          <div className="text-4xl xl:text-7xl font-bold font-exo">
            Discover Rare Collections Of Art & NFT's
          </div>
          <div className="font-dmSans text-xs xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eaque soluta, mollitia nisi{" "}
          </div>
          <div className="flex gap-8">
            <button className="font-exo font-bold rounded-lg px-16 py-4  bg-gradient-to-r from-fuchsia-500 via-purple-700 to-blue-800 ease-in-hover">
              Explore
            </button>
            <button className="font-exo font-bold rounded-lg px-16 py-4 outline outline-fuchsia-500 ease-in-hover">
              Create
            </button>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:w-1/2">
        <img
          src="assets/image/mainImg.png"
          alt="main"
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
