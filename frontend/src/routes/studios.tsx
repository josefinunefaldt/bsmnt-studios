import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Workplace from "../components/workplace";
import ad1 from "../components/ad1";
import ad2 from "../components/ad2";
import { Navbar } from "../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/studios")({
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
            Long-Term Soundproof Music Studios to Rent in London | BSMNT
          </title>
          <meta
            name="description"
            content="  Soundproof music studios for long-term rent in North & East London, including Archway, Finsbury Park, Hackney, and Hornsey. Perfect for recording, mixing, and production."
          />
        </Helmet>
      </HelmetProvider>

      <Navbar />

      {/* Yellow teaser box */}
      <div className="bg-[#fef880] p-6 m-6 libre-text">
        <h2 className="mt-20 title_loc flex items-center gap-2">
          <img className="w-12 " src="/musics.png" alt="studios" />
          <span className="title_loc text-3xl">Studios</span>
        </h2>
        <br></br>
        <h1>Available Music Studios for Long-Term Rent in London</h1>
        <p>
          BSMNT offers high-spec, soundproof music studios for long-term rent
          across <Link to="/"> North and East London.</Link> Our spaces are
          purpose-built for professional production and recording, offering the
          stability and quality you need to grow your career.{" "}
        </p>
        <button
          type="button"
          onClick={() => setInfoOpen(true)}
          className="mt-4 flex flex-col items-start "
        >
          <span className="font-libre text-[rgb(67,67,67)]">Read more</span>
          <img className="w-26 mt-1" src="/Pil.png" alt="Arrow" />
        </button>
      </div>

      {/* FULL-SCREEN CLICK LAYER + PANEL */}
      {infoOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setInfoOpen(false)}>
          {/* Sliding info panel */}
          <div
            className="absolute top-0 right-0 h-screen w-full sm:w-[520px]
                       bg-[#fef880] p-8 text-black shadow-2xl
                       transition-transform duration-300 ease-in-out
                       translate-x-0"
          >
            {/* X (visual affordance only) */}
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ✕
            </button>

            {/* Scrollable content */}
            <div className="mt-12 h-full overflow-y-auto pr-2">
              <h2 className="title_loc text-xl">
                Our Professional Studios & Flexible Options
              </h2>
              <p className="libre-text">
                See our list of currently available studios for long-term let in
                locations like <Link to="/archway">Archway.</Link>,{" "}
                <Link to="/finsbury">Finsbury Park</Link>,
                <Link to="/hackney">Hackney</Link>, and{" "}
                <Link to="/leabridge">Lea Bridge</Link>. Each space is secure,
                professionally soundproofed, and offers 24/7 access. If you
                don’t see a studio available, we encourage you to join our
                waitlist to be notified of future openings. For those not ready
                for a private space, Studio Share offers an affordable way to
                access a professional{" "}
                <Link to="/share">studio environment</Link> on a flexible
                schedule.
              </p>
              <br></br>
              <h2 className="title_loc text-xl">
                A Supportive Community, Guaranteed to Fit
              </h2>
              <p className="libre-text">
                When you join BSMNT, you become part of a vetted community of
                talented, like-minded professionals. We foster a supportive
                environment where you can connect with other artists and
                producers. To ensure you're confident in your new creative home,
                we offer "First Month Fit Guarantee." You can test the
                workspace, and if it's not the perfect match, you can cancel
                within the first month without any notice or losing your
                deposit.
              </p>
            </div>
          </div>
        </div>
      )}

      <Workplace studios={availableStudios} />
    </div>
  );
}
