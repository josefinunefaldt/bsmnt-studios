import { createFileRoute, Link } from "@tanstack/react-router";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { isLeaPortrait } from "../utils/imagePortraits";
import Location2 from "../components/location2";
import { Navbar } from "../components/navbar";
import GenericMap from "../components/genericMap";

export const Route = createFileRoute("/argall")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative z-0">
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Music Studios & Office Space in Leyton / Clapton E10 | BSMNT
          </title>
          <meta
            name="description"
            content=" Music Studios & Office Space in Leyton / Clapton E10 | BSMNT Argall BSMNT in Leyton (E10) offers music studios and office space with natural light, high-speed internet, and 24/7 access in a thriving East London hub."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Location2
        isPortrait={isLeaPortrait}
        content={[
          { type: "image", value: "/Argall/argall_bsmnt_music_studio4.JPG" },
          {
            type: "text",
            value: (
              <div className="flex flex-col text-libre">
                {" "}
                <h1 className="text-2xl ">
                  {" "}
                  <Link
                    className=" p-4 space-y-4 text-3xl title_loc block self-start text-left"
                    to="/argall"
                  >
                    Argall way
                  </Link>{" "}
                </h1>{" "}
                <p className="text-left libre-text p-4 space-y-4 ">
                  {" "}
                  We’re opening a brand new BSMNT location in 2026 on Argall
                  Way. Over 15,000 sq ft of creative workspace, designed by an
                  award winning architecture practice. It’s built around the way
                  creatives actually work. A large shared live room is hardwired
                  to the production rooms for easy recording sessions. We’ll
                  also have a selection of large, bright office spaces for
                  creatives who don’t need a full studio setup. Great for
                  creative businesses, freelancers, and makers. If this sounds
                  like your kind of setup, send us a message and we’ll keep you
                  posted and talk you through the options.
                </p>{" "}
                <Link
                  to="/studios"
                  className="libre-text block text-left mt-10 p-4 space-y-4 "
                >
                  {" "}
                  See all music studios in London{" "}
                  <img className="w-32 mt-4" src="/Pil.png" alt="Arrow" />{" "}
                </Link>{" "}
              </div>
            ),
          },
          {
            type: "component",
            value: <GenericMap id="ChIJ5Sly0pkbdkgRS4uDYmmQ2dM " />,
          },
          { type: "image", value: "/Argall/argall_bsmnt_music_studio1.png" },

          { type: "image", value: "/Argall/argall_bsmnt_music_studio2.png" },
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

                <p className="text-2xl font-bold leading-tight tracking-wide">
                  Smart intercom system
                </p>
                <p className="text-5xl font-extrabold leading-tight tracking-wide">
                  CCTV
                </p>
                <p className=" text-3xl font-bold leading-tight tracking-wide">
                  Mechanical ventilation
                </p>

                <p className="text-4xl font-extrabold leading-tight tracking-wide">
                  Natural light
                </p>
                <p className="text-2xl font-bold leading-tight tracking-wide">
                  Air conditioning
                </p>
                <p className="text-4xl font-extrabold leading-tight tracking-wide">
                  Communal area
                </p>
                <p className="text-3xl font-bold leading-tight tracking-wide">
                  Secure private storage
                </p>
                <p className="text-4xl font-extrabold leading-tight tracking-wide">
                  Private terrace
                </p>
              </div>
            ),
          },
        ]}
      />{" "}
    </div>
  );
}
