import React from "react";

const TitleHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-exo text-xl text-center lg:text-5xl font-bold leading-normal">
      {children}
    </h1>
  );
};

export default TitleHead;
