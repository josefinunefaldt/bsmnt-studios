import { createFileRoute } from "@tanstack/react-router";
import { Video } from "../components/landingpagevideo";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Video />;
}

export default RouteComponent;
