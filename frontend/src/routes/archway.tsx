import { createFileRoute } from "@tanstack/react-router";
import Location from "../../components/location";

export const Route = createFileRoute("/archway")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Location />
    </div>
  );
}
