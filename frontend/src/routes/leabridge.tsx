import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isLeaPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";

import { Helmet, HelmetProvider } from "react-helmet-async";
import GenericMap from "../components/genericMap";

export const Route = createFileRoute("/leabridge")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Music Studios & Office Space in Leyton / Clapton E10 | BSMNT
          </title>
          <meta
            name="description"
            content=" Lea Bridge BSMNT offers 14 high-spec recording studios with natural light and air conditioning in East London. Features fast internet, 24/7 access, CCTV, and a welcoming creative community."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Location2
        isPortrait={isLeaPortrait}
        content={[
          {
            type: "image",
            value: "/Lea/Music_studio_Leyton_02.jpg",
          },
          {
            type: "text",
            value: (
              <div className="flex flex-col text-libre">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link
                    className="p-4 text-3xl space-y-4 title_loc block self-start text-left"
                    to="/leabridge"
                  >
                    Lea bridge
                  </Link>
                </h1>
                <p className="text-left libre-text p-4 space-y-4">
                  In 2022, we completed a full fit-out on the ground floor of a
                  landmark development. Lea Bridge BSMNT features 14 high-spec
                  music production studios and workspaces, each uniquely sized
                  and designed to capture abundant natural light. spacious,
                  light-filled communal area provides the ideal setting for team
                  meetings, relaxation, and connecting with fellow creatives.
                  Designed by an award-winning architecture firm, Lea Bridge
                  BSMNT offers a functional, inspiring space for music makers
                  and creatives alike.
                </p>
                <Link
                  to="/offices"
                  className="libre-text p-4 space-y-4 block text-left"
                >
                  {" "}
                  See all creative offices in London.
                  <img className="w-32 mt-4" src="/Pil.png" alt="Arrow" />
                </Link>
                <Link to="/studios" className="libre-text  p-4 block text-left">
                  See all music studios in London{" "}
                  <img className="w-32 mt-4" src="/Pil.png" alt="Arrow" />
                </Link>
              </div>
            ),
          },
          {
            type: "image",
            value: "/Lea/Music_studio_Leyton_04.jpeg",
          },
          {
            type: "component",
            value: <GenericMap id="ChIJ42powlwddkgR_0QfIJTLHRc" />,
          },
          {
            type: "image",
            value: "/Lea/Music_studio_Leyton_05.jpeg",
          },
          {
            type: "text",
            value: (
              <div className="flex flex-col gap-1 uppercase text-black text-left">
                <p className="text-5xl font-extrabold leading-tight tracking-wide">
                  24/7 access
                </p>
                <p className=" text-3xl font-bold leading-tight tracking-wide">
                  Hyper-optic broadband
                </p>

                <p className="text-5xl font-extrabold leading-tight tracking-wide">
                  CCTV
                </p>

                <p className="text-3xl font-bold leading-tight tracking-wide">
                  Smart intercom system
                </p>

                <p className=" text-2xl font-bold leading-tight tracking-wide">
                  Mechanical ventilation
                </p>
                <p className="text-4xl font-extrabold leading-tight tracking-wide">
                  Natural light
                </p>
                <p className="text-3xl font-bold leading-tight tracking-wide">
                  Air conditioning
                </p>

                <p className="text-3xl font-bold leading-tight tracking-wide">
                  Communal area
                </p>
              </div>
            ),
          },
          { type: "image", value: "/Lea/Music_studio_Leyton_08.jpg" },

          {
            type: "image",
            value: "/Lea/Music_studio_Leyton_06.jpeg",
          },
          {
            type: "text",
            value: (
              <div className="testemonial">
                <h1 className="text-left text-xl title_loc">
                  “I’ve been using BSMNT Studios for nearly 5 years and haven’t
                  looked back”
                </h1>
                <p className="text-left">
                  “ The rooms are well-built, properly soundproofed, and
                  consistently well-maintained. The management is helpful,
                  responsive, and there whenever I need anything. They’ve
                  created a safe, professional, and creative space where I feel
                  confident bringing the artists I work with. I’m always happy
                  to recommend them to other musicians and producers! ”
                  <br />
                  Stef Marziano - Songwriter/Record Producer
                </p>
                <br></br>
                <h1 className="text-left text-xl title_loc">
                  “Professional atmosphere and excellent soundproofing”
                </h1>
                <p className="text-left">
                  “Have been BSMNT residents in Lee ds Place since it opened in
                  2019. Professional atmosphere and excellent soundproofing, as
                  well as a nice community vibe and super helpful management. ”
                  <br />
                  Stick In The Wheel
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
