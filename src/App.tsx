import React from "react";
import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="text-white bg-theme py-8 px-12 lg:px-28 lg:py-14 z-20">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
