import { createFileRoute } from "@tanstack/react-router";
import StudioForm from "../../components/studioForm";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <StudioForm />
    </div>
  );
}
