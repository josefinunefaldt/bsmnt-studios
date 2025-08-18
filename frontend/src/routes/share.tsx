import { createFileRoute } from "@tanstack/react-router";
import { getAllAds } from "../utils/advertFetch";
import { components } from "../lib/api/v1";
import AdsDisplay from "../components/ads";
import StudioForm from "../components/studioForm";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/share")({
  loader: async () => {
    const response = await getAllAds();
    return response as components["schemas"]["AdvertResponse"][];
  },
  component: RouteComponent,
});

function RouteComponent() {
  const ads = Route.useLoaderData() || [];

  return (
    <div
      style={{
        backgroundImage: `url('/music.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div className="flex justify-center items-start sm:items-center pt-20 sm:pt-24 md:pt-28 px-4">
        <StudioForm />
      </div>
      <AdsDisplay ads={ads} />
    </div>
  );
}
