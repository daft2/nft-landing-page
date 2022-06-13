import React from "react";

const RoadmapItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-violet-800 bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-xl h-fit mx-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default RoadmapItem;
