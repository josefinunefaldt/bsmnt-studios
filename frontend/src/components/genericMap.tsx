import React from "react";

export type GenericMapProps = {
  name: string;
  address: string;
  embedUrl: string;
};

const GenericMap: React.FC<GenericMapProps> = ({ name, address, embedUrl }) => {
  return (
    <div className="w-full h-full">
      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
      <p className="text-sm text-center mb-3">{address}</p>
      <iframe
        src={embedUrl}
        className="w-full h-64 rounded-lg border border-gray-300"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GenericMap;
