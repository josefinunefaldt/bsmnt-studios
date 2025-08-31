import { createFileRoute } from "@tanstack/react-router";
import { getAllAds } from "../utils/advertFetch";
import { components } from "../lib/api/v1";
import AdsDisplay from "../components/ads";
import StudioForm from "../components/studioForm";
import { Navbar } from "../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Affordable Shared Music Studio Space in London | BSMNT{" "}
          </title>
          <meta
            name="description"
            content=" Studio Share gives you affordable access to a professional music studio in London. Enjoy 24/7 access, flexible scheduling, and a fully equipped creative environment.
"
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <div className="flex justify-center flex-col items-start sm:items-center px-4">
        <StudioForm />
      </div>

      <AdsDisplay ads={ads} />
    </div>
  );
}
