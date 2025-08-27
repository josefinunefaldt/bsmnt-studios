import React from "react";

export type GenericMapProps = {
  id: string;
};

const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const GenericMap: React.FC<GenericMapProps> = ({ id }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=${key}&q=place_id:${id}`;
  return (
    <div className="w-full h-full">
      <iframe
        src={src}
        width="100%"
        height="550"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GenericMap;
