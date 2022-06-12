import React from "react";
import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import NftSection from "./components/nft-section/NftSection";
import { PLACEHOLDER_LIST } from "./constants";

function App() {
  return (
    <div className="text-white font-dmSans bg-theme py-8 px-12 lg:px-28 lg:py-14 z-20">
      <Navbar />
      <HeroSection />
      <NftSection
        title="Buy, Sell, & Trade Your NFT's"
        data={PLACEHOLDER_LIST}
        nftImage="assets/image/nft1.png"
        reverse={false}
      />
      <NftSection
        title="Buy, Sell, & Trade Your NFT's"
        data={PLACEHOLDER_LIST}
        nftImage="assets/image/nft2.png"
        reverse={true}
      />
    </div>
  );
}

export default App;
