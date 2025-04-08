import { createFileRoute } from "@tanstack/react-router";
import Workplace from "../components/workplace";
import ad1 from "../components/ad1";
import ad2 from "../components/ad2";

export const Route = createFileRoute("/offices")({
  component: RouteComponent,
});

function RouteComponent() {
  const availableStudios = [ad1, ad1, ad2];
  return (
    <div>
      <Workplace studios={availableStudios} />;
    </div>
  );
}
