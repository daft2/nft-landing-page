import React from "react";
import RoadmapItem from "../roadmap-item/RoadmapItem";
import TitleHead from "../title-head/TitleHead";
import {
  PLACEHOLDER_ROADMAP_1,
  PLACEHOLDER_ROADMAP_2,
  PLACEHOLDER_ROADMAP_3,
  PLACEHOLDER_ROADMAP_4,
} from "../../constants";
import ListTextItem from "../list-text-item/ListTextItem";

const RoadmapSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TitleHead>Roadmap</TitleHead>
      <div className="my-20">
        <div className="flex">
          <RoadmapItem>
            <ListTextItem data={PLACEHOLDER_ROADMAP_1} />
          </RoadmapItem>
          <RoadmapItem className="mt-20">
            <ListTextItem data={PLACEHOLDER_ROADMAP_2} />
          </RoadmapItem>
        </div>
        <div className="flex">
          <RoadmapItem>
            <ListTextItem data={PLACEHOLDER_ROADMAP_3} />
          </RoadmapItem>
          <RoadmapItem className="mt-20">
            <ListTextItem data={PLACEHOLDER_ROADMAP_4} />
          </RoadmapItem>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
