import { createFileRoute, Link } from "@tanstack/react-router";
import Workplace from "../components/workplace";
import ad1 from "../components/ad1";
import ad2 from "../components/ad2";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/studios")({
  component: RouteComponent,
});

function RouteComponent() {
  const availableStudios = [ad1, ad1, ad2];
  return (
    <div>
      <Navbar />
      <h1 className="mt-20">
        Available Music Studios for Long-Term Rent in London
      </h1>
      <p>
        Find a permanent home for your sound. BSMNT offers high-spec, soundproof
        music studios for long-term rent across{" "}
        <Link to="/"> North and East London.</Link> Our spaces are purpose-built
        for professional production and recording, offering the stability and
        quality you need to grow your career.{" "}
      </p>

      <h2>Our Professional Studios & Flexible Options</h2>
      <p>
        See our list of currently available studios for long-term let in
        locations like <Link to="/archway">Archway.</Link>,{" "}
        <Link to="/finsbury">Finsbury Park</Link>,
        <Link to="/hackney">Hackney</Link>, and{" "}
        <Link to="/leabridge">Lea Bridge</Link>. Each space is secure,
        professionally soundproofed, and offers 24/7 access. If you don’t see a
        studio available, we encourage you to join our waitlist to be notified
        of future openings. For those not ready for a private space, Studio
        Share offers an affordable way to access a professional{" "}
        <Link to="/share">studio environment</Link> on a flexible schedule.
      </p>

      <h2>A Supportive Community, Guaranteed to Fit</h2>
      <p>
        When you join BSMNT, you become part of a vetted community of talented,
        like-minded professionals. We foster a supportive environment where you
        can connect with other artists and producers. To ensure you're confident
        in your new creative home, we offer "First Month Fit Guarantee." You can
        test the workspace, and if it's not the perfect match, you can cancel
        within the first month without any notice or losing your deposit.
      </p>

      <Workplace studios={availableStudios} />
    </div>
  );
}
