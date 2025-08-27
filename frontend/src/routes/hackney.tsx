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
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link to="/hackney">HACKNEY</Link>
                </h1>

                <p>
                  Hackney BSMNT opened in 2019 on the ground floor of a historic
                  textile factory, featuring 11 purpose built, high spec music
                  production suites ranging from 120 to 300 square feet. Each
                  studio benefits from high ceilings and plenty of natural
                  light, making them ideal for producers, programmers,
                  songwriters, and artists seeking a bright, spacious
                  environment to personalize with their own equipment. The
                  premises have 24/7 access and are equipped with high speed
                  fiberoptic broadband, CCTV, fresh air circulation system,
                  secure off street parking, a smart intercom, and a kitchen
                  area. When residents need a break, the open green spaces of
                  Hackney Downs are just a three minute walk away, along with a
                  variety of coffee shops, restaurants, and bars for added
                  convenience. See all{" "}
                  <Link to="/studios">music studios available in London.</Link>
                </p>
              </div>
            ),
          },

          { type: "image", value: "/Hackney/Music_studio_Hackney_05.jpg" },

          { type: "image", value: "/Hackney/Music_studio_Hackney_09.jpg" },
          {
            type: "component",
            value: (
              <GenericMap
                id="ChIJ9_wM0OsddkgRck2bxHyC5Lc
"
              />
            ),
          },
          { type: "image", value: "/Hackney/Music_studio_Hackney_07.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Hackney/Music_studio_Hackney_15.jpg" },
          { type: "image", value: "/Hackney/Music_studio_Hackney_16.jpg" },
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
