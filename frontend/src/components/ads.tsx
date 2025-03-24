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
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">All Ads</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ads.length > 0 ? (
          ads.map((ad, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow bg-white cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openModal(ad)}
            >
              <h4 className="text-lg font-bold">
                {" "}
                {new Date(ad.dateCreated!).toLocaleDateString()}
              </h4>
              <h4 className="text-2xl font-bold">
                {ad.offering ? "Offering" : "Looking"}
              </h4>
              <h4 className="text-2xl font-bold">{ad.location}</h4>

              {ad.imgUrl && ad.imgUrl.length > 0 && (
                <img
                  src={ad.imgUrl}
                  alt={"ad thumbnail"}
                  className="mt-2 w-full h-32 object-cover rounded"
                />
              )}
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">No ads available.</div>
        )}
      </div>

      {selectedAd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {selectedAd.offering ? "Offering" : "Looking"}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Posted on:{" "}
                  {new Date(selectedAd.dateCreated!).toLocaleDateString()}
                </p>
                <p className="text-lg">{selectedAd.description}</p>
              </div>

              <div className="mt-4">
                <p>{selectedAd.description}</p>
                <p>{selectedAd.location}</p>
                <p>{selectedAd.offering}</p>
                <p>{new Date(selectedAd.dateCreated!).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ads;
