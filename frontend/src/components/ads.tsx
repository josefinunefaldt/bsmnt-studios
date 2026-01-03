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
    <div className="w-full mx-auto p-6 bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
        {ads.length > 0 ? (
          ads.map((ad, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer mb-8"
              onClick={() => openModal(ad)}
            >
              <div className="text-sm mb-2">
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
                <h3 className="font-bold text-lg">
                  {ad.offering ? "Offering a studio" : "Looking for a studio"}
                </h3>
                <p className="text-sm">Location: {ad.location}</p>
                <p className="text-sm mt-2 line-clamp-2">
                  Description: {ad.description}
                </p>
              </div>

              <div className="mt-4 border-t border-gray-300 pt-2"></div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-white">
            No ads available.
          </div>
        )}
      </div>

      {selectedAd && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg w-full sm:w-[90%] md:max-w-3xl mx-auto overflow-hidden flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold z-10"
            >
              ✕
            </button>

            {/* Image */}
            {selectedAd.imgUrl && (
              <div className="w-full bg-gray-100 flex justify-center items-center max-h-[40vh] sm:max-h-[50vh] overflow-hidden">
                <img
                  src={selectedAd.imgUrl}
                  alt="ad image"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              <h2 className="text-lg font-bold text-[rgb(67,67,67)] mb-2">
                {selectedAd.offering
                  ? "Offering a studio"
                  : "Looking for a studio"}
              </h2>
              <p className="text-xs text-gray-600 mb-4">
                Posted on:{" "}
                {new Date(selectedAd.dateCreated!).toLocaleDateString()}
              </p>

              <div className="flex flex-col md:flex-row gap-6 text-sm text-[rgb(67,67,67)]">
                {/* Left Section */}
                <div className="flex-1 space-y-2">
                  <div>
                    <span className="font-semibold">Description:</span>{" "}
                    <span>{selectedAd.description}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Location:</span>{" "}
                    <span>{selectedAd.location}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Date Created:</span>{" "}
                    <span>
                      {new Date(selectedAd.dateCreated!).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 space-y-2">
                  <div>
                    <span className="font-semibold">Name:</span>{" "}
                    <span>{selectedAd.user?.name}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span>{" "}
                    <span>{selectedAd.user?.email}</span>
                  </div>
                  <div>
                    <span className="font-semibold">About:</span>{" "}
                    <span>{selectedAd.user?.about}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ads;
