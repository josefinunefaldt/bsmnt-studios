import createClient from "openapi-fetch";
import type { paths } from "../lib/api/v1";

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_BASE_URL });

export const getAllAds = async () => {
  const response = await client.GET("/api/Adverts");

  if (!response || !response.data) {
    throw new Error("Failed to fetch ads");
  }

  return response.data;
};
