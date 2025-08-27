import { createFileRoute, Link } from "@tanstack/react-router";
import { Video } from "../components/landingpagevideo";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Long-Term Soundproof Music Studios to Rent in London | BSMNT
          </title>
          <meta
            name="description"
            content=" Long-term soundproof music studios and creative office spaces across North & East London. 24/7 access, high-speed internet, and a thriving community of creatives."
          />
        </Helmet>
      </HelmetProvider>
      <section className="relative min-h-screen w-full">
        <Video />
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20">
        <div className="max-w-3xl text-center">
          <h1>
            Your Creative Home: Long-Term Music Studios for London's
            Professional Community
          </h1>
          <p>
            At BSMNT, our purpose is to provide beautiful and functional homes
            for creative communities. We offer high-spec, soundproof music
            <Link to="/studios">studios</Link> and creative
            <Link to="/offices">offices</Link> for long-term rent across{" "}
            <Link to="/locations">North and East London</Link>, designed for
            professional musicians, producers, and sound designers.
          </p>
          <h2>More Than a Studio, It’s a Community</h2>
          <p>
            We do more than just rent rooms; we build supportive, collaborative
            environments founded on a sense of transparency. Our spaces are
            filled with a selectively chosen community of talented professionals
            who respect their craft and their workspace. Experience a personal,
            warm, and attentive service where you can feel a true sense of
            belonging.
          </p>
          <h2>High-Spec, Soundproof Spaces Built for Professionals</h2>
          <p>
            All our facilities are purpose-built and secure, featuring
            professionally soundproofed rooms ideal for music production,
            recording, and post-production. Explore our available spaces in
            <Link to="/archway">Archway</Link>,{" "}
            <Link to="/finsbury">Finsbury Park</Link>,
            <Link to="/hackney">Hackney</Link> and{" "}
            <Link to="/leabridge">Lea Bridge</Link>.
          </p>

          <h2>24/7 Access, First Month Fit Guarantee</h2>
          <p>
            We offer 24/7 access to all our facilities, along with high-speed
            internet, ensuring you can create whenever inspiration strikes. And
            with our unique First Month Fit Guarantee, you can be confident
            you've found the right space. If it’s not the perfect match, you can
            cancel within the first month without any notice or losing your
            deposit.
          </p>
        </div>
      </section>
    </div>
  );
}

export default RouteComponent;
