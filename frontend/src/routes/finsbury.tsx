import { createFileRoute } from "@tanstack/react-router";
import Location2 from "../components/location2";
import { Navbar } from "../components/navbar";
import { isFinsburyPortrait } from "../utils/imagePortraits";

export const Route = createFileRoute("/finsbury")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Location2
        isPortrait={isFinsburyPortrait}
        content={[
          { type: "image", value: "/Finsbury/finsbury4.jpg" },

          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">FINSBURY PARK</h2>

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
          { type: "image", value: "/Finsbury/finsbury5.jpg" },

          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Finsbury/finsbury7.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Finsbury/finsbury8.jpg" },

          { type: "image", value: "/Finsbury/finsbury1.jpg" },
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
