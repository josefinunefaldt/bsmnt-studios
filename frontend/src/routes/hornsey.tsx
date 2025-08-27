import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isHornseyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";

import { Helmet, HelmetProvider } from "react-helmet-async";
import GenericMap from "../components/genericMap";
export const Route = createFileRoute("/hornsey")({
  component: RouteComponent,
});
const id = import.meta.env.VITE_HORNSEY_ID;
function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Recording Studios for Rent in Hornsey N8 | BSMNT </title>
          <meta
            name="description"
            content=" Hornsey BSMNT offers 18 high-spec music studios with natural light and air conditioning. Features fiber-optic broadband, 24/7 CCTV, and on-site parking."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Location2
        isPortrait={isHornseyPortrait}
        content={[
          { type: "image", value: "/Hornsey/Music_studio_Hornsey_05.jpg" },
          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link to="/hornsey">HORNSEY</Link>
                </h1>

                <p>
                  In 2020, we were thrilled to take over a long established
                  studio complex in Hornsey. Spanning two floors, Hornsey BSMNT
                  offers 18 high spec recording studios, live rooms, and
                  programming suites, each uniquely sized and shaped but all
                  benefiting from natural light, air conditioning, and secure
                  private storage. The building is equipped with fiberoptic
                  broadband, CCTV, a smart intercom system, a monitored alarm,
                  24/7 access along with parking and a spacious communal lounge
                  and kitchen area. This vibrant creative community has fostered
                  a thriving environment for collaboration and networking among
                  residents. Situated in an excellent location with superb
                  transport links, Hornsey BSMNT is just steps away from a
                  variety of restaurants and bars. See all{" "}
                  <Link to="/studios">music studios available in London.</Link>
                </p>
              </div>
            ),
          },

          { type: "image", value: "/Hornsey/Music_studio_Hornsey_02.jpg" },
          {
            type: "component",
            value: <GenericMap id={id} />,
          },

          { type: "image", value: "/Hornsey/Music_studio_Hornsey_04.jpg" },

          {
            type: "text",
            value:
              "Lo, a auctscing elit. Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor risus at elit dignissim, a auctor vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Hornsey/Music_studio_Hornsey_01.jpg" },

          { type: "image", value: "/Hornsey/Music_studio_Hornsey_06.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Hornsey/Music_studio_Hornsey_03.jpg" },
        ]}
      />
    </div>
  );
}
