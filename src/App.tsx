import React from "react";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero-section/HeroSection";
import HighlightSection from "./components/highlight-section/HighlightSection";
import Navbar from "./components/navbar/Navbar";
import NftSection from "./components/nft-section/NftSection";
import RoadmapSection from "./components/roadmap-section/RoadmapSection";
import { PLACEHOLDER_LIST } from "./constants";

function App() {
  return (
    <div className="text-white font-dmSans bg-theme ">
      <div className="py-8 px-12 lg:px-28 lg:py-14 z-20">
        <Navbar />
        <HeroSection />
        <NftSection
          title="Buy, Sell, & Trade Your NFT's"
          data={PLACEHOLDER_LIST}
          nftImage="assets/image/nft1.png"
          reverse={false}
        />
        <NftSection
          title="Showoff NFT Collection"
          data={PLACEHOLDER_LIST}
          nftImage="assets/image/nft2.png"
          reverse={true}
        />
        <HighlightSection />
        <NftSection
          title="Lowest fee for Buy & Sell"
          data={PLACEHOLDER_LIST}
          nftImage="assets/image/nft6.png"
          reverse={true}
        />
        <RoadmapSection />
        <NftSection
          title="Coming Soon"
          data={PLACEHOLDER_LIST}
          nftImage="assets/image/nft7.png"
          reverse={false}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
