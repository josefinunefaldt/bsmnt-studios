import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isHornseyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";

import { Helmet, HelmetProvider } from "react-helmet-async";
import GenericMap from "../components/genericMap";
export const Route = createFileRoute("/hornsey")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Recording Studios for Rent in Hornsey N8 | BSMNT </title>
          <meta
            name="description"
            content=" Hornsey BSMNT offers 18 high-spec music studios with natural light and air conditioning. Features fiber-optic broadband, 24/7 CCTV, and on-site parking."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Location2
        isPortrait={isHornseyPortrait}
        content={[
          { type: "image", value: "/Hornsey/Music_studio_Hornsey_05.jpg" },
          {
            type: "text",
            value: (
              <div className="flex flex-col text-libre">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link to="/hornsey">Hornsey</Link>
                </h1>

                <p className="text-left">
                  In 2020, we were thrilled to take over a long established
                  studio complex in Hornsey. Spanning two floors, Hornsey BSMNT
                  offers 18 high spec recording studios, live rooms, and
                  programming suites, each uniquely sized and shaped.This
                  vibrant creative community has fostered a thriving environment
                  for collaboration and networking among residents.
                </p>
                <Link
                  to="/studios"
                  className="font-libre block text-left mt-10"
                >
                  See all Music studios in London{" "}
                  <img className="w-32 mt-4" src="/Pil.png" alt="Arrow" />
                </Link>
              </div>
            ),
          },

          { type: "image", value: "/Hornsey/Music_studio_Hornsey_02.jpg" },
          {
            type: "component",
            value: (
              <GenericMap
                id="ChIJiWS3I70bdkgRcodUrheYWr4
"
              />
            ),
          },

          { type: "image", value: "/Hornsey/Music_studio_Hornsey_04.jpg" },

          {
            type: "text",
            value: (
              <div className="flex flex-col gap-1 uppercase text-black text-left">
                <p className="text-3xl font-extrabold leading-tight">
                  24/7 access
                </p>

                <p className="text-base text-xl font-bold leading-tight">
                  Fiberoptic broadband
                </p>

                <p className="text-3xl font-extrabold leading-tight">CCTV</p>

                <p className="text-base text-xl font-bold leading-tight">
                  Smart intercom system
                </p>

                <p className="text-base text-xl font-bold leading-tight">
                  Monitored alarm
                </p>

                <p className="text-3xl font-extrabold leading-tight">Parking</p>

                <p className="text-base font-bold leading-tight">
                  Spacious communal lounge
                </p>

                <p className="text-base text-xl font-bold leading-tight">
                  Kitchen area
                </p>

                <p className="text-3xl font-extrabold leading-tight">
                  Natural light
                </p>

                <p className="text-base text-xl font-bold leading-tight">
                  Air conditioning
                </p>

                <p className="text-base text-xl font-bold leading-tight">
                  Secure private storage
                </p>
              </div>
            ),
          },
          { type: "image", value: "/Hornsey/Music_studio_Hornsey_01.jpg" },

          { type: "image", value: "/Hornsey/Music_studio_Hornsey_06.jpg" },
          {
            type: "text",
            value: (
              <div className="italic">
                <p className="text-left">
                  “BSMNT has been a home from home for several years now, the
                  facilities and community atmosphere of bands, singers,
                  producers and many other musical formats makes it a joy to be
                  a part of! ”
                  <br />
                  Toby Davies (Gentleman's Dub Club, CrossTown Studios)
                </p>
                <br></br>
                <p className="text-left">
                  “BSMNT is the best place I’ve ever had a studio, the owners
                  are so sound and just leave you too it, nice big room, natural
                  light, good community, good location. Couldn’t ask for more! ”
                  <br />
                  Boxed Ape ltd
                </p>
              </div>
            ),
          },
          { type: "image", value: "/Hornsey/Music_studio_Hornsey_03.jpg" },
        ]}
      />
    </div>
  );
}
