import { FC } from "react";
import { components } from "../lib/api/v1";
import React from "react";

const Ads: FC<{ ads: components["schemas"]["AdvertResponse"][] }> = ({
  ads,
}) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">All Ads</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ads.length > 0 ? (
          ads.map((ad, index) => (
            <div key={index} className="p-4 border rounded shadow bg-white">
              <h3 className="text-lg font-bold">{ad.dateCreated}</h3>
              <p className="text-sm text-gray-600">{ad.description}</p>

              {ad.imgUrls && ad.imgUrls.length > 0 && (
                <img
                  src={ad.imgUrls[0]}
                  alt={"pic"}
                  className="mt-2 w-full h-32 object-cover rounded"
                />
              )}
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">No ads available.</div>
        )}
      </div>
    </div>
  );
};

export default Ads;
