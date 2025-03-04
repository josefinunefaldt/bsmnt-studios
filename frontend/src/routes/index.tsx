import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "../components/landingPage";
import Footer from "../components/footer";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LandingPage />
      <Footer />
    </div>
  );
}
