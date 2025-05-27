import React from "react";
import { LocationProps } from "../types/locationProps";
import { ImageWrapper } from "./imageWrapper";
import { TextWrapper } from "./textWrapper";

const Location2: React.FC<LocationProps> = ({ content, isPortrait }) => {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item, index) => {
          const isLandscapeImage =
            item.type === "image" && !isPortrait(item.value);
          const colSpanClass = isLandscapeImage
            ? "lg:col-span-2"
            : "lg:col-span-1";

          return (
            <div key={index} className={colSpanClass}>
              {item.type === "text" ? (
                <TextWrapper>{item.value}</TextWrapper>
              ) : (
                <ImageWrapper
                  src={item.value}
                  alt={`Image ${index}`}
                  isPortrait={isPortrait}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location2;
