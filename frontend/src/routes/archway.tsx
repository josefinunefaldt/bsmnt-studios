import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

import { isArchwayPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";
import GenericMap from "../components/genericMap";

export const Route = createFileRoute("/archway")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Long-Term Soundproof Music Studios in Archway N19 | BSMNT
          </title>
          <meta
            name="description"
            content="Archway BSMNT offers nine purpose-built, soundproof music studios in North London. 24/7 access, high-speed internet, and a communal lounge for creatives.
"
          />
        </Helmet>
      </HelmetProvider>

      <Navbar />

      <Location2
        isPortrait={isArchwayPortrait}
        content={[
          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-2 mt-12">
                  {" "}
                  <Link to="/archway">ARCHWAY</Link>
                </h1>

                <p>
                  Nestled in the basement of a historic, listed building once
                  used as a World War II bomb shelter, Archway BSMNT is our very
                  first, original location. Opened in 2016, it features nine
                  purpose built, professionally soundproofed music production
                  and programming suites. Amenities include high speed
                  fiberoptic broadband, 24/7 access, CCTV, and a fresh air
                  circulation system throughout the premises. The space also
                  includes an indoor kitchen-lounge and a private outdoor
                  terrace, perfect for breaks or informal meetups. Studios range
                  in size from 110 to 200 square feet, accommodating a variety
                  of creative needs. Located just off the bustling high street,
                  Archway BSMNT is surrounded by a vibrant selection of coffee
                  shops, restaurants, and pubs - all within a two minute walk.
                  See all{" "}
                  <Link to="/studios">music studios available in London</Link>
                </p>
              </div>
            ),
          },

          { type: "image", value: "/Archway/Music_studio_Archway_09.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_01.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_02.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_03.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_06.jpg" },

          {
            type: "component",
            value: <GenericMap id="ChIJgWVzgq4bdkgRWXKq5TLF1YU" />,
          },

          { type: "image", value: "/Archway/Music_studio_Archway_07.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Archway/Music_studio_Archway_10.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_08.jpg" },
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
