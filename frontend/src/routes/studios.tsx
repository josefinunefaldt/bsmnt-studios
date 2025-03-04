import { createFileRoute } from "@tanstack/react-router";
import Workplace from "../components/workplace";

export const Route = createFileRoute("/studios")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Workplace />
    </div>
  );
}
