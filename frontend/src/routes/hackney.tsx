import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isHackneyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";

import { Helmet, HelmetProvider } from "react-helmet-async";
import GenericMap from "../components/genericMap";

export const Route = createFileRoute("/hackney")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Music & Recording Studios in Hackney E5 | BSMNT </title>
          <meta
            name="description"
            content=" Hackney BSMNT offers 11 modern music and recording studios with natural light. 24/7 access, high-speed internet, and secure off-street parking in East London."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Location2
        isPortrait={isHackneyPortrait}
        content={[
          {
            type: "text",
            value: (
              <div className="flex flex-col text-libre">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link
                    className="p-4 space-y-4 text-3xl title_loc block self-start text-left"
                    to="/hackney"
                  >
                    Hackney
                  </Link>
                </h1>

                <p className="text-left libre-text p-4 space-y-4">
                  Hackney BSMNT opened in 2019 on the ground floor of a historic
                  textile factory, featuring 11 purpose built, high spec music
                  production suites ranging from 120 to 300 square feet. Each
                  studio benefits from high ceilings and plenty of natural
                  light, making them ideal for producers, programmers,
                  songwriters, and artists seeking a bright, spacious
                  environment to personalize with their own equipment.
                </p>
                <Link
                  to="/studios"
                  className=" block text-left libre-text p-4 space-y-4 mt-10"
                >
                  See all music studios in London{" "}
                  <img className="w-32 mt-4" src="/Pil.png" alt="Arrow" />
                </Link>
              </div>
            ),
          },

          { type: "image", value: "/Hackney/Music_studio_Hackney_05.jpg" },

          { type: "image", value: "/Hackney/Music_studio_Hackney_09.jpg" },
          {
            type: "component",
            value: (
              <>
                <GenericMap
                  id="ChIJ9_wM0OsddkgRck2bxHyC5Lc
"
                />
                {/* <hackneyDescription/> */}
              </>
            ),
          },
          { type: "image", value: "/Hackney/Music_studio_Hackney_07.jpg" },
          {
            type: "text",
            value: (
              <div className="flex justify-center">
                <div className="flex flex-col gap-1 uppercase text-black text-left max-w-sm">
                  <p className="text-5xl font-extrabold leading-tight tracking-wide">
                    24/7 access
                  </p>

                  <p className="text-2xl font-bold leading-tight tracking-wide">
                    fiberoptic broadband
                  </p>

                  <p className="text-5xl font-extrabold leading-tight tracking-wide">
                    CCTV
                  </p>

                  <p className="text-2xl font-bold leading-tight tracking-wide">
                    Air circulation system
                  </p>
                  <p className="text-4xl font-extrabold leading-tight tracking-wide">
                    Smart intercom
                  </p>
                  <p className="text-2xl font-bold leading-tight tracking-wide">
                    Secure off street parking
                  </p>

                  <p className="text-4xl font-bold leading-tight tracking-wide">
                    Kitchenette
                  </p>
                </div>
              </div>
            ),
          },
          { type: "image", value: "/Hackney/Music_studio_Hackney_15.jpg" },
          { type: "image", value: "/Hackney/Music_studio_Hackney_16.jpg" },
          {
            type: "text",
            value: (
              <div className="testemonial">
                <h1 className="text-left text-xl title_loc">
                  “Working with BSMNT has been a joy”
                </h1>
                <p className="text-left text-libre">
                  “We really appreciate the high quality of the studios, the
                  smooth communication with management, and the community
                  atmosphere. It’s rare to find studio space in London that
                  offers such good value while also being so well maintained and
                  thoughtfully managed, but Simona and her team really put in
                  the effort. We'll definitely be recommending BSMNT to
                  colleagues if space becomes available.”
                  <br />
                  JACANA PEOPLE
                </p>
                <br />
                <h1 className="text-left text-xl title_loc">
                  “ Great space, great community, great vibes!”
                </h1>
                <p className="text-left">
                  “We’ve been with BSMNT for 7 years now and still love coming
                  in as much as the first day we arrived. Simona & Tomas are
                  amazing and are always around to help, come rain or come
                  shine. Great space, great community, great vibes!”
                  <br /> Guy Langley X Lael Goldberg (GXL) - producer duo
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
