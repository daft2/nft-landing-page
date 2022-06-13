import React from "react";
import { PLACEHOLDER_LIST } from "../../constants";
import CustomButton from "../custom-button/CustomButton";
import ListTextItem from "../list-text-item/ListTextItem";

const HighlightSection: React.FC = () => {
  return (
    <div className="flex flex-col item-center justify-center">
      <h1 className="font-exo text-xl text-center lg:text-5xl font-bold leading-normal">
        Trusted by Various Artist & Popular NFT Collection
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly my-20">
        <div>
          <img src="assets/image/nft3.png" alt="NFT Placeholder" />
        </div>
        <div className="py-20">
          <img src="assets/image/nft4.png" alt="NFT Placeholder" />
        </div>
        <div>
          <img src="assets/image/nft5.png" alt="NFT Placeholder" />
        </div>
      </div>
      <div className="flex flex-col items-center py-4">
        <div>
          <h1 className="font-exo text-xl text-center lg:text-5xl font-bold leading-normal">
            Biggest NFT Marketplace
          </h1>
        </div>
        <ListTextItem data={PLACEHOLDER_LIST} />
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

export default HighlightSection;
