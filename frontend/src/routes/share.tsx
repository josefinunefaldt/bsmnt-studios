import { createFileRoute, Link } from "@tanstack/react-router";
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
    <div
      style={{
        backgroundImage: `url('/music.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
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
      <div className="flex justify-center flex-col items-start sm:items-center pt-20 sm:pt-24 md:pt-28 px-4">
        <h1 className="text-white">
          Studio Share in London: Connect with Creative Professionals
        </h1>
        <p className="text-white">
          Our Studio Share platform connects London's creative community.
          Whether you have downtime in your private studio or you're looking for
          affordable access to a professional space, this is the place to
          connect. It’s the perfect way to make a private studio more affordable
          and become part of a network of talented pros. “If you need your own
          private space, check our long-term{" "}
          <Link to="/studios">music studios in London.</Link>”
        </p>
        <StudioForm />
      </div>
      <AdsDisplay ads={ads} />
    </div>
  );
}
