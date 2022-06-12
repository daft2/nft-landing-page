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
      className={`font-exo font-bold rounded-lg text-sm block w-full lg:text-lg py-3 lg:w-52 lg:py-4 ease-in-hover ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
