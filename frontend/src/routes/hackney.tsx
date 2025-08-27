import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isHackneyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";
// import GenericMap from "../components/genericMap";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
          // {
          //   type: "component",
          //   value: (
          //     <GenericMap
          //       embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.7613687593715!2d-0.0570157!3d51.5523594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c876497c10b%3A0x7fbff6fd0c4ea8bc!2sRendlesham%20Rd%2C%20London%20E5%208QB%2C%20UK!5e0!3m2!1sen!2sus!4v1644707682149"
          //       name="Hackney"
          //       address="13-17 Rendlesham Road, London E5 8QB"
          //     />
          //   ),
          // },
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
