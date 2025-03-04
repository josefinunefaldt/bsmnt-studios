import { createFileRoute } from "@tanstack/react-router";
import Location from "../components/location";

export const Route = createFileRoute("/hackney")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Location />
    </div>
  );
}
