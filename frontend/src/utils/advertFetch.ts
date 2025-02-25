import createClient from "openapi-fetch";
import type { components, paths } from "../lib/api/v1";

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_BASE_URL });

export const getAllAds = async () => {
  const response = await client.GET("/api/Adverts");

  if (!response || !response.data) {
    throw new Error("Failed to fetch ads");
  }

  return response.data;
};

export const createAdvert = async (
  input: components["schemas"]["AdvertRequest"]
) => {
  try {
    const response = await client.POST("/api/Adverts", {
      query: undefined,
      body: input,
    });
    return response;
  } catch (error) {
    console.error("Error create advert");
    throw error;
  }
};
