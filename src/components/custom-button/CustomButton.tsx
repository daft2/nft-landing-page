import React from "react";

const CustomButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <button
      className={`font-exo font-bold rounded-lg px-10 py-3 lg:px-16 lg:py-4 ease-in-hover ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
