import React from "react";

type ContentItem = {
  type: "text" | "image";
  value: string;
};

type LocationProps = {
  content: ContentItem[];
};

const Location: React.FC<LocationProps> = ({ content }) => {
  return (
    <div className="w-full mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-1">
        {content.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 flex  p-3 h-[300px] overflow-hidden flex-shrink-0"
          >
            {item.type === "text" ? (
              <p>{item.value}</p>
            ) : item.type === "image" ? (
              <img
                src={item.value}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-1 mt-1">
        {content.slice(3, 5).map((item, index) => (
          <div
            key={index + 3}
            className={`w-full ${index === 1 ? "lg:w-2/3" : "lg:w-1/3"} flex p-3 h-[300px] overflow-hidden flex-shrink-0`}
          >
            {item.type === "text" ? (
              <p>{item.value}</p>
            ) : item.type === "image" ? (
              <img
                src={item.value}
                alt={`Image ${index + 3}`}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-1 mt-1">
        {content.slice(5, 8).map((item, index) => (
          <div
            key={index + 5}
            className="w-full lg:w-1/3 flex  p-3 h-[300px] overflow-hidden flex-shrink-0"
          >
            {item.type === "text" ? (
              <p>{item.value}</p>
            ) : (
              <img
                src={item.value}
                alt={`Image ${index + 5}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-1 mt-1">
        {content.slice(8, 11).map((item, index) => (
          <div
            key={index + 7}
            className="w-full lg:w-1/3 flex items-center justify-center p-3 h-[300px] overflow-hidden flex-shrink-0"
          >
            {item.type === "text" ? (
              <p>{item.value}</p>
            ) : item.type === "image" ? (
              <img
                src={item.value}
                alt={`Image ${index + 7}`}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
