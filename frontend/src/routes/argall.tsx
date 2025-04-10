import { createFileRoute } from "@tanstack/react-router";
import { Video } from "../components/landingpagevideo";

export const Route = createFileRoute("/argall")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Video />;
}
