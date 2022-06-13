import React from "react";
import CustomButton from "../custom-button/CustomButton";

const HeroSection: React.FC = () => {
  return (
    <div className="my-10 lg:mt-40 lg:mb-96">
      <div className="xl:w-2/5">
        <div className="text-center justify-center items-center xl:justify-start xl:items-start xl:text-left flex flex-col gap-12">
          <h1 className="text-4xl xl:text-7xl font-bold font-exo xl:leading-tight">
            Discover Rare Collections Of Art & NFT's
          </h1>
          <div className="font-dmSans text-xs xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eaque soluta, mollitia nisi{" "}
          </div>
          <div className="flex justify-center xl:justify-start w-full gap-16 lg:gap-8">
            <CustomButton
              className={
                "bg-gradient-to-r from-fuchsia-500 via-purple-700 to-blue-800"
              }
            >
              Explore
            </CustomButton>
            <CustomButton className={"outline outline-fuchsia-500"}>
              Create
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center -mx-12 my-10 xl:-mx-0 xl:my-0 xl:w-1/2 overflow-x-hidden xl:absolute xl:top-0 xl:right-0">
        <img
          src="assets/image/mainImg.png"
          alt="main"
          className="w-screen overflow-x-hidden xl:w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
