import { createFileRoute } from "@tanstack/react-router";
import Location from "../components/location";

export const Route = createFileRoute("/finsbury")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Location
        content={[
          { type: "image", value: "/Finsbury/finsbury1.jpg" },
          { type: "image", value: "/Finsbury/finsbury2.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Finsbury/finsbury3.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor risus at elit dignissim, a auctor vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Finsbury/finsbury4.jpg" },
          { type: "image", value: "/Finsbury/finsbury5.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Finsbury/finsbury6.jpg" },
          { type: "image", value: "/Finsbury/finsbury7.jpg" },
          { type: "image", value: "/Finsbury/finsbury8.jpg" },
        ]}
      />
    </div>
  );
}
