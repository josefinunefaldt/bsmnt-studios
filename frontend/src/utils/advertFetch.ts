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

export async function submitData(submitFormData: FormData) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}api/adverts`,
      {
        method: "POST",
        body: submitFormData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error submitting data:", error);
  }
}
