import React from "react";

const TextItem = ({ index, text }: { index: number; text: string }) => {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-fit bg-gradient-to-b from-violet-900 to-indigo-900 rounded-lg">
        <span className="font-exo font-bold text-sm lg:text-lg mx-4">
          {index}
        </span>
      </div>
      {text}
    </div>
  );
};

export default TextItem;
