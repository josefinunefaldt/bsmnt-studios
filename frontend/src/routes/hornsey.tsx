import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isHornseyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";
import GenericMap from "../components/genericMap";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Route = createFileRoute("/hornsey")({
  component: RouteComponent,
});

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
            value: (
              <GenericMap
                embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.4292686791467!2d-0.1206574!3d51.5874198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1b9cb8b3db%3A0x903857fcdbd6dd85!2s7%20Cross%20Ln%2C%20Hornsey%2C%20London%20N8%207SA%2C%20UK!5e0!3m2!1sen!2sus!4v1644707593292"
                name="Hornsey"
                address="7 Cross Lane, London N8 7SA"
              />
            ),
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
