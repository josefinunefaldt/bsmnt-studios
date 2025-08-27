import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isFinsburyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";

import { Helmet, HelmetProvider } from "react-helmet-async";
import GenericMap from "../components/genericMap";

export const Route = createFileRoute("/finsbury")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Recording & Music Studios in Finsbury Park, N4 | BSMNT{" "}
          </title>
          <meta
            name="description"
            content=" Finsbury Park BSMNT houses 18 high-spec recording and music studios with high ceilings. 24/7 access, fiber-optic internet, on-site parking, and a friendly creative community."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Location2
        isPortrait={isFinsburyPortrait}
        content={[
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_04.jpg" },

          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link to="/finsbury">FINSBURY PARK</Link>
                </h1>

                <p>
                  Once a textile factory, the warehouse was completely
                  reimagined in 2017 as a purpose built complex featuring
                  multiple production studios, live rooms, and a welcoming
                  communal area. All studios have high ceilings, high speed
                  fiberoptic broadband, 24/7 access, and a fresh air circulation
                  system. Added amenities include secure off street parking, a
                  smart intercom system, CCTV, and a comfortable kitchen-lounge
                  area. Spread across two units, the complex houses 18 studios
                  available for long term hire, ranging from compact 120 square
                  foot programming rooms to expansive 400+ square foot recording
                  studios complete with isolated live rooms. Now home to an
                  inspiring community of record producers and songwriters,
                  Finsbury Park BSMNT offers a professional yet relaxed vibe,
                  with regular gatherings for drinks and barbecues in the front
                  yard. See all{" "}
                  <Link to="/studios">music studios available in London</Link>
                </p>
              </div>
            ),
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_05.jpg" },

          {
            type: "component",
            value: (
              <GenericMap
                id="ChIJ5Sly0pkbdkgRS4uDYmmQ2dM
"
              />
            ),
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_07.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_08.jpg" },

          { type: "image", value: "/Finsbury/Music_studio_Finsbury_01.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
        ]}
      />
    </div>
  );
}
