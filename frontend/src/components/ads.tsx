import { FC, useState } from "react";
import { components } from "../lib/api/v1";

const Ads: FC<{ ads: components["schemas"]["AdvertResponse"][] }> = ({
  ads,
}) => {
  const [selectedAd, setSelectedAd] = useState<
    components["schemas"]["AdvertResponse"] | null
  >(null);

  const openModal = (ad: components["schemas"]["AdvertResponse"]) => {
    setSelectedAd(ad);
  };

  const closeModal = () => {
    setSelectedAd(null);
  };

  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-300 text-[rgb(67,67,67)]">
        ads
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white ">
        {ads.length > 0 ? (
          ads.map((ad, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer mb-8"
              onClick={() => openModal(ad)}
            >
              <div className="text-sm  mb-2">
                {new Date(ad.dateCreated!).toLocaleDateString()}
              </div>

              <div
                className="w-full bg-gray-200 mb-2 overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                {ad.imgUrl && (
                  <img
                    src={ad.imgUrl}
                    alt="ad thumbnail"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="mt-2">
                <h3 className="font-bold text-lg ">
                  {ad.offering ? "Offering a studio" : "Looking for a studio"}
                </h3>
                <p className="text-sm "> Location: {ad.location}</p>
                <p className="text-sm mt-2 line-clamp-2">
                  {" "}
                  Description: {ad.description}
                </p>
              </div>

              <div className="mt-4 border-t border-gray-300 pt-2"></div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">No ads available.</div>
        )}
      </div>
      {selectedAd && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold z-10"
            >
              ✕
            </button>

            {selectedAd.imgUrl && (
              <div className="w-full flex justify-center items-center bg-gray-100">
                <img
                  src={selectedAd.imgUrl}
                  alt="ad image"
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
            )}

            <div className="p-4">
              <h2 className="text-lg font-bold text-[rgb(67,67,67)] mb-1">
                {selectedAd.offering
                  ? "Offering a studio"
                  : "Looking for a studio"}
              </h2>
              <p className="text-xs text-gray-600 mb-1">
                Posted on:{" "}
                {new Date(selectedAd.dateCreated!).toLocaleDateString()}
              </p>
              <p className="text-sm text-[rgb(67,67,67)] mb-1">
                Description: {selectedAd.description}
              </p>
              <p className="text-sm text-[rgb(67,67,67)] mb-1">
                Location: {selectedAd.location}
              </p>
              <p className="text-sm text-[rgb(67,67,67)] mb-1">
                About: {selectedAd.user?.about}
              </p>
              <p className="text-sm text-[rgb(67,67,67)] mb-1">
                Email: {selectedAd.user?.email}
              </p>
              <p className="text-sm text-[rgb(67,67,67)] mb-1">
                Name: {selectedAd.user?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ads;
