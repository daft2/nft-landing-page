import React from "react";
import { PLACEHOLDER_LIST } from "../../constants";
import CustomButton from "../custom-button/CustomButton";
import ListTextItem from "../list-text-item/ListTextItem";

const NftSection = ({
  title,
  data,
  nftImage,
  reverse,
}: {
  title: string;
  data: Array<{ index: number; text: string }>;
  nftImage: string;
  reverse: boolean;
}) => {
  return (
    <div
      className={`flex lg:mb-40 flex-col lg:flex-row ${
        reverse && "lg:flex-row-reverse"
      } gap-44`}
    >
      <div className="hidden lg:block">
        <img src={nftImage} alt="main" />
      </div>
      <div className="flex flex-col py-4">
        <div>
          <h1 className="font-exo text-xl text-center lg:text-start lg:text-5xl font-bold leading-normal">
            {title}
          </h1>
        </div>
        <ListTextItem data={data} />
        <div className="block lg:hidden">
          <img src={nftImage} alt="main" />
        </div>
        <div className="my-8">
          <CustomButton
            className={
              "bg-gradient-to-r from-fuchsia-500 via-purple-700 to-blue-800"
            }
          >
            Connect Wallet
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default NftSection;
