import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "../../components/landingPage";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
