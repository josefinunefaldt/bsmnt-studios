import { createFileRoute } from "@tanstack/react-router";
import Location from "../../components/location";

export const Route = createFileRoute("/finsbury")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Location />
    </div>
  );
}
