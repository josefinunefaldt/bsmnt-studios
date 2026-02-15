import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Workplace from "../components/workplace";
import ad1 from "../components/ad1";
import ad2 from "../components/ad2";
import { Navbar } from "../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/offices")({
  component: RouteComponent,
});

function RouteComponent() {
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const availableStudios = [ad1, ad1, ad2];

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
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
      <div className="bg-[#fef880] p-6 m-6 ">
        <h2 className="mt-20  flex items-center gap-2">
          <img className="w-12 " src="/workplaces.png" alt="office" />
          <span className="title_loc text-3xl">Offices</span>
        </h2>
        <br></br>
        <h1 className="libre-text">
          Light-Filled Creative Offices to Rent in East London (E10)
        </h1>
        <p className="libre-text">
          How about a workspace designed to enhance your creativity and
          productivity. BSMNT offers secure, light-filled{" "}
          <Link to="/leabridge">
            creative offices in the heart of East London's vibrant Clapton /
            Leyton
          </Link>
          . area (E10).
        </p>

        <button
          type="button"
          onClick={() => setInfoOpen(true)}
          className="mt-4 flex flex-col items-start "
        >
          <span className="libre-text text-[rgb(67,67,67)]">Read more</span>
          <img className="w-24 mt-1" src="/Pil.png" alt="Arrow" />
        </button>
      </div>

      {/* FULL-SCREEN CLICK LAYER */}
      {infoOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setInfoOpen(false)}>
          {/* Sliding panel */}
          <div
            className="absolute top-0 right-0 h-screen w-full sm:w-[520px]
                       bg-[#fef880] p-8 text-black shadow-2xl
                       transition-transform duration-300 ease-in-out
                       translate-x-0"
          >
            {/* X button (visual only) */}
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ✕
            </button>

            {/* Scrollable content */}
            <div className="mt-12 h-full overflow-y-auto pr-2 ">
              <h2 className="title_loc text-xl">
                Designed for Modern Creative Professionals
              </h2>

              <p className="libre-text">
                Our offices feature high-speed internet and abundant natural
                light, providing an ideal environment to focus and get a job
                done. Every workspace is purpose-built for the modern creative,
                offering 24/7 access within a secure, CCTV-monitored facility.
              </p>
              <br></br>
              <h2 className="title_loc text-xl">
                A Secure Workspace in a Vibrant Creative Hub
              </h2>
              <p className="libre-text">
                When you rent an office with us, you also join a vetted
                community of talented, like-minded professionals, placing you in
                a thriving creative hub. Benefit from a supportive,
                collaborative environment that extends beyond your office door.
              </p>
            </div>
          </div>
        </div>
      )}

      <Workplace studios={availableStudios} />
    </div>
  );
}
