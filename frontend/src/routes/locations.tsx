import { createFileRoute } from "@tanstack/react-router";
import LocationCarousel from "../components/locationCarousel";
import { Navbar } from "../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/locations")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white">
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Music & Recording Studio Locations in North & East London | BSMNT
          </title>
          <meta
            name="description"
            content=" BSMNT’s music and recording studio locations across North & East London: Archway, Finsbury Park, Hackney, Hornsey, Clapton and Leyton. Amenities and transport links included."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <LocationCarousel />{" "}
    </div>
  );
}
