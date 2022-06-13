import React from "react";
import CustomButton from "../custom-button/CustomButton";
import ListTextItem from "../list-text-item/ListTextItem";
import TitleHead from "../title-head/TitleHead";

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
      className={`flex lg:my-32 flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-44`}
    >
      <div className="hidden lg:block">
        <img src={nftImage} alt="main" />
      </div>
      <div className="flex flex-col py-4">
        <div>
          <TitleHead>{title}</TitleHead>
        </div>
        <ListTextItem data={data} />
        <div className="flex items-center justify-center lg:hidden">
          <img src={nftImage} alt="main" />
        </div>
        <div className="my-8 self-center lg:self-start">
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
