import { createFileRoute } from "@tanstack/react-router";
import LocationCarousel from "../components/locationCarousel";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/locations")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white">
      <Navbar />
      <LocationCarousel />{" "}
    </div>
  );
}
