import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isLeaPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/leabridge")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
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
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link to="/leabridge">LEA BRIDGE</Link>
                </h1>
                <p>
                  In 2022, we completed a full fit-out on the ground floor of a
                  landmark development directly across from Lea Bridge Station
                  in East London. Lea Bridge BSMNT features 14 high-spec music
                  production studios and workspaces, each uniquely sized and
                  designed to capture abundant natural light, with mechanical
                  ventilation and air conditioning throughout. The building is
                  equipped with hyper-optic broadband, CCTV, 24/7 access and a
                  smart intercom system. A spacious, light-filled communal area
                  provides the ideal setting for team meetings, relaxation, and
                  connecting with fellow creatives. Designed by an award-winning
                  architecture firm, Lea Bridge BSMNT offers a functional,
                  inspiring space for music makers and creatives alike. See all
                  <Link to="/studios">
                    music studios available in London.
                  </Link>{" "}
                  <Link to="/offices">music studios available in London.</Link>{" "}
                  See all{" "}
                  <Link to="/offices">
                    creative offices available in London.
                  </Link>
                </p>
              </div>
            ),
          },
          {
            type: "image",
            value: "/Lea/Music_studio_Leyton_04.jpeg",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          {
            type: "image",
            value: "/Lea/Music_studio_Leyton_05.jpeg",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Lea/Music_studio_Leyton_08.jpg" },

          {
            type: "image",
            value: "/Lea/Music_studio_Leyton_06.jpeg",
          },
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
