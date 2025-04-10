import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "../components/contactForm";
import LocationMap from "../components/maps";
import { Navbar } from "../components/navbar";

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
      <Navbar />
      <ContactForm />
      <LocationMap />
    </div>
  );
}
