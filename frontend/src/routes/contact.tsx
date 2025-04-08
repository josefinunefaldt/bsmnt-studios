import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "../components/contactForm";
import LocationMap from "../components/maps";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      style={{
        backgroundImage: `url('/keyboard.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "top left",
        minHeight: "100vh",
      }}
    >
      <ContactForm />
      <LocationMap />
    </div>
  );
}
