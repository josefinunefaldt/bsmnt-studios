import { createFileRoute, Link } from "@tanstack/react-router";
import Workplace from "../components/workplace";
import ad1 from "../components/ad1";
import ad2 from "../components/ad2";
import { Navbar } from "../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/offices")({
  component: RouteComponent,
});

function RouteComponent() {
  const availableStudios = [ad1, ad1, ad2];
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Creative Office Space to Rent in East London (Clapton & Leyton E10)
            | BSMNT
          </title>
          <meta
            name="description"
            content=" Light-filled, secure creative office space to rent in Clapton and Leyton, East London (E10). Flexible long-term leases, high-speed internet, and a vibrant community."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <h1 className="mt-20">
        Light-Filled Creative Offices to Rent in East London (E10)
      </h1>
      <p>
        How about a workspace designed to enhance your creativity and
        productivity. BSMNT offers secure, light-filled{" "}
        <Link to="/leabridge">
          creative offices in the heart of East London's vibrant Clapton /
          Leyton
        </Link>
        . area (E10).
      </p>
      <h2>Designed for Modern Creative Professionals</h2>
      <p>
        Our offices feature high-speed internet and abundant natural light,
        providing an ideal environment to focus and get a job done. Every
        workspace is purpose-built for the modern creative, offering 24/7 access
        within a secure, CCTV-monitored facility.
      </p>
      <h2>A Secure Workspace in a Vibrant Creative Hub</h2>
      <p>
        When you rent an office with us, you also join a vetted community of
        talented, like-minded professionals, placing you in a thriving creative
        hub. Benefit from a supportive, collaborative environment that extends
        beyond your office door.
      </p>
      <Workplace studios={availableStudios} />;
    </div>
  );
}
