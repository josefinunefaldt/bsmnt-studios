import React from "react";

export type GenericMapProps = {
  id: string;
};

const GenericMap: React.FC<GenericMapProps> = ({ id }) => {
  const [mapUrl, setMapUrl] = React.useState<string>("");

  React.useEffect(() => {
    const fetchMapUrl = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}api/maps/place/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch map URL");
        }
        const data = await response.json();
        setMapUrl(data.url);
      } catch (error) {
        console.error("Error fetching map URL:", error);
      }
    };

    fetchMapUrl();
  }, [id]);

  if (!mapUrl) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="w-full h-full">
      <iframe
        src={mapUrl}
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
