import { createFileRoute } from "@tanstack/react-router";
import LandingPage2 from "../components/landingPage2";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LandingPage2 />
    </div>
  );
}
