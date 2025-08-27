import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "../components/contactForm";

import { Navbar } from "../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Contact BSMNT – Book a Music Studio or Creative Office Tour | BSMNT
          </title>
          <meta
            name="description"
            content=" Contact BSMNT to book a tour of our music studios or creative office spaces in London. Check availability, get answers, and join our thriving creative community.
      "
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <ContactForm />
    </div>
  );
}
