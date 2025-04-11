import { createFileRoute } from "@tanstack/react-router";
import Location2 from "../components/location2";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/hornsey")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Location2
        content={[
          { type: "image", value: "/Hornsey/hornsey5.png" },
          { type: "image", value: "/Hornsey/hornsey1.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Hornsey/hornsey3.jpeg" },

          { type: "image", value: "/Hornsey/hornsey8.jpg" },
          { type: "image", value: "/Hornsey/hornsey6.png" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Hornsey/hornsey7.jpeg" },
          { type: "image", value: "/Hornsey/hornsey4.jpg" },
          { type: "image", value: "/Hornsey/hornsey2.png" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor risus at elit dignissim, a auctor vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Hornsey/hornsey2.png" },
        ]}
      />
    </div>
  );
}
