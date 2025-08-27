import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isFinsburyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";
// import GenericMap from "../components/genericMap";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/finsbury")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Recording & Music Studios in Finsbury Park, N4 | BSMNT{" "}
          </title>
          <meta
            name="description"
            content=" Finsbury Park BSMNT houses 18 high-spec recording and music studios with high ceilings. 24/7 access, fiber-optic internet, on-site parking, and a friendly creative community."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Location2
        isPortrait={isFinsburyPortrait}
        content={[
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_04.jpg" },

          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link to="/finsbury">FINSBURY PARK</Link>
                </h1>

                <p>
                  Once a textile factory, the warehouse was completely
                  reimagined in 2017 as a purpose built complex featuring
                  multiple production studios, live rooms, and a welcoming
                  communal area. All studios have high ceilings, high speed
                  fiberoptic broadband, 24/7 access, and a fresh air circulation
                  system. Added amenities include secure off street parking, a
                  smart intercom system, CCTV, and a comfortable kitchen-lounge
                  area. Spread across two units, the complex houses 18 studios
                  available for long term hire, ranging from compact 120 square
                  foot programming rooms to expansive 400+ square foot recording
                  studios complete with isolated live rooms. Now home to an
                  inspiring community of record producers and songwriters,
                  Finsbury Park BSMNT offers a professional yet relaxed vibe,
                  with regular gatherings for drinks and barbecues in the front
                  yard. See all{" "}
                  <Link to="/studios">music studios available in London</Link>
                </p>
              </div>
            ),
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_05.jpg" },

          // {
          //   type: "component",
          //   value: (
          //     <GenericMap
          //       embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.7641831076996!2d-0.1083534!3d51.5701575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a4c34288b5d%3A0x6a9e5f3fd117a1c6!2sLeeds%20Pl%2C%20Finsbury%20Park%2C%20London%20N4%203RF%2C%20UK!5e0!3m2!1sen!2sus!4v1644707500321"
          //       name="Finsbury Park"
          //       address="Units 5 & 6, Leeds Place, London N4 3RF"
          //     />
          //   ),
          // },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_07.jpg" },
          {
            type: "text",
            value:
              "Lorem ipsum dolor sit amet, consectetunsectetur adipiscing elit. Pellentesque vehicula risus at elit dignissim, a auctor Pellentesque vehicula risus at elit dignissim, a auctor augue auctor. Mauris nec risus nec odio fringilla aliquet. Nulla facilisi. Curabitur dictum malesuada augue, id consectetur felis vulputate a. Fusce in urna a libero dapibus lacinia. Duis varius suscipit risus, nec auctor nulla tincidunt eget. Vestibulum pharetra, nisl in efficitur pharetra, elit elit vestibulum nulla, ut accumsan purus ligula nec erat. Donec non facilisis justo. Sed a magna",
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_08.jpg" },

          { type: "image", value: "/Finsbury/Music_studio_Finsbury_01.jpg" },
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
