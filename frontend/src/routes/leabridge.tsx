import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";

import { isLeaPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";
import GenericMap from "../components/genericMap";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/leabridge")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Music Studios & Office Space in Leyton / Clapton E10 | BSMNT
          </title>
          <meta
            name="description"
            content=" Music Studios & Office Space in Leyton / Clapton E10 | BSMNT Argall BSMNT in Leyton (E10) offers music studios and office space with natural light, high-speed internet, and 24/7 access in a thriving East London hub."
          />
        </Helmet>
      </HelmetProvider>
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
            type: "component",
            value: (
              <GenericMap
                embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.827805705571!2d-0.0287854!3d51.5740989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c3ebd8e2b55%3A0x8c4f0e2b39d15b6a!2s159%20Lea%20Bridge%20Rd%2C%20London%20E10%207PN%2C%20UK!5e0!3m2!1sen!2sus!4v1644707762872"
                name="Lea Bridge"
                address="159 Lea Bridge Road, London E10 7PN"
              />
            ),
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
