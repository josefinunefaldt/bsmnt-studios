import { createFileRoute } from "@tanstack/react-router";
import Location2 from "../components/location2";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/navbar";
import { isArchwayPortrait } from "../utils/imagePortraits";

export const Route = createFileRoute("/archway")({
  component: RouteComponent,
});

<Helmet>
  <title>Soundproofed Music Studios | London</title>
  <meta
    name="description"
    content="Professionally soundproofed studios for hire in London"
  />
</Helmet>;

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Location2
        isPortrait={isArchwayPortrait}
        content={[
          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">ARCHWAY</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetunsectetur adipiscing
                  elit. Pellentesque vehicula risus at elit dignissim, a auctor
                  Pellentesque vehicula risus at elit dignissim, a auctor augue
                  auctor. Mauris nec risus nec odio fringilla aliquet. Nulla
                  facilisi. Curabitur dictum malesuada augue, id consectetur
                  felis vulputate a. Fusce in urna a libero dapibus lacinia.
                  Duis varius suscipit risus, nec auctor nulla tincidunt eget.
                  Vestibulum pharetra, nisl in efficitur pharetra, elit elit
                  vestibulum nulla, ut accumsan purus ligula nec erat. Donec non
                  facilisis justo. Sed a magna
                </p>
              </div>
            ),
          },

          { type: "image", value: "/Archway/archway9.jpg" },
          { type: "image", value: "/Archway/archway1.jpg" },
          { type: "image", value: "/Archway/archway2.jpg" },
          { type: "image", value: "/Archway/archway3.jpg" },
          { type: "image", value: "/Archway/archway6.jpg" },

          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },

          { type: "image", value: "/Archway/archway7.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Archway/archway10.jpg" },
          { type: "image", value: "/Archway/archway8.jpg" },
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
