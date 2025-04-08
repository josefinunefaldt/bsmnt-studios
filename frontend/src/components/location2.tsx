import React from "react";

type ContentItem = {
  type: "text" | "image";
  value: string;
};

type LocationProps = {
  content: ContentItem[];
};

const Location2: React.FC<LocationProps> = ({ content }) => {
  return (
    <div className="w-full mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-2">
        {content.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[300px]"
          >
            {item.type === "text" ? (
              <div className="p-3 bg-[#fef880]">{item.value}</div>
            ) : item.type === "image" ? (
              <img
                src={item.value}
                alt={`Image ${index}`}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        {content.slice(2, 4).map((item, index) => (
          <div
            key={index + 2}
            className={`w-full ${index === 0 ? "lg:w-2/3" : "lg:w-1/3"} relative flex items-center justify-center min-h-[300px]`}
          >
            {item.type === "text" ? (
              <div className="p-6 bg-[#fef880] text-center m-auto flex items-center justify-center w-full h-full ">
                {item.value}
              </div>
            ) : item.type === "image" ? (
              <img
                src={item.value}
                alt={`Image ${index + 2}`}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        {content.slice(4, 6).map((item, index) => (
          <div
            key={index + 4}
            className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[300px]"
          >
            {item.type === "text" ? (
              <div className="p-3">{item.value}</div>
            ) : item.type === "image" ? (
              <img
                src={item.value}
                alt={`Image ${index + 4}`}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
        ))}
      </div>
      {content.length > 6 && (
        <div className="flex flex-col lg:flex-row gap-2 mt-2">
          {content.slice(6, 9).map((item, index) => (
            <div
              key={index + 6}
              className="w-full lg:w-1/3 relative flex items-center justify-center min-h-[300px]"
            >
              {item.type === "text" ? (
                <div className="p-3">{item.value}</div>
              ) : item.type === "image" ? (
                <img
                  src={item.value}
                  alt={`Image ${index + 6}`}
                  className="object-cover w-full h-full"
                />
              ) : null}
            </div>
          ))}
        </div>
      )}
      {content.length > 9 && (
        <div className="flex flex-col lg:flex-row gap-2 mt-2">
          {content.slice(9).map((item, index) => (
            <div
              key={index + 9}
              className="w-full lg:w-1/3 relative flex items-center justify-center min-h-[300px]"
            >
              {item.type === "text" ? (
                <div className="p-3">{item.value}</div>
              ) : item.type === "image" ? (
                <img
                  src={item.value}
                  alt={`Image ${index + 9}`}
                  className="object-cover w-full h-full"
                />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location2;
