import React from "react";
import { LocationProps } from "../types/locationProps";
import { ImageWrapper } from "./imageWrapper";
import { TextWrapper } from "./textWrapper";

const Location2: React.FC<LocationProps> = ({ content, isPortrait }) => {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {content.map((item, index) => {
          const colSpanClass =
            item.type === "image" && !isPortrait(item.value as string)
              ? "lg:col-span-2"
              : "lg:col-span-1";

          return (
            <div key={index} className={`${colSpanClass} h-full`}>
              {item.type === "text" ? (
                <TextWrapper>{item.value}</TextWrapper>
              ) : item.type === "image" ? (
                <ImageWrapper
                  src={item.value as string}
                  alt={`Image ${index}`}
                  isPortrait={isPortrait}
                />
              ) : item.type === "component" ? (
                <div className="bg-[#fef880] p-4 rounded-lg h-full">
                  <div className="w-full h-full">
                    <ImageWrapper component={item.value} />
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location2;
