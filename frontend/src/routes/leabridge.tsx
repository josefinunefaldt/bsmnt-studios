import { createFileRoute } from "@tanstack/react-router";
import Location2 from "../components/location2";
import { Navbar } from "../components/navbar";
import { isLeaPortrait } from "../utils/imagePortraits";

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
            value: "/Lea/lea2.jpg",
          },
          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">LEA BRIDGE</h2>

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
          {
            type: "image",
            value: "/Lea/lea4.jpeg",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          {
            type: "image",
            value: "/Lea/lea5.jpeg",
          },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Lea/lea8.jpg" },

          {
            type: "image",
            value: "/Lea/lea6.jpeg",
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
