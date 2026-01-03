import { createFileRoute } from "@tanstack/react-router";
import Grid from "../components/grid";
import { Video } from "../components/landingpagevideo";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col libre-text">
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Long-Term Soundproof Music Studios to Rent in London | BSMNT
          </title>
          <meta
            name="description"
            content=" Long-term soundproof music studios and creative office spaces across North & East London. 24/7 access, high-speed internet, and a thriving community of creatives."
          />
        </Helmet>
      </HelmetProvider>
      <section className="relative min-h-screen w-full">
        <Video />
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20">
        <Grid />
      </section>
    </div>
  );
}

export default RouteComponent;
