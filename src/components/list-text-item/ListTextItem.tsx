import React from "react";
import TextItem from "../text-item/TextItem";

const ListTextItem = ({
  data,
}: {
  data: Array<{ index: number; text: string }>;
}) => {
  return (
    <ul className="lg:text-xl lg:px-4 lg:py-8 list-outside">
      {data.map((item, index) => (
        <li className="my-8" key={index}>
          <TextItem index={item.index} text={item.text} />
        </li>
      ))}
    </ul>
  );
};
export default ListTextItem;
