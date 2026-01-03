import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

import { isArchwayPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";
import GenericMap from "../components/genericMap";

export const Route = createFileRoute("/archway")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {" "}
            Long-Term Soundproof Music Studios in Archway N19 | BSMNT
          </title>
          <meta
            name="description"
            content="Archway BSMNT offers nine purpose-built, soundproof music studios in North London. 24/7 access, high-speed internet, and a communal lounge for creatives.
"
          />
        </Helmet>
      </HelmetProvider>

      <Navbar />

      <Location2
        isPortrait={isArchwayPortrait}
        content={[
          {
            type: "text",
            value: (
              <div className="flex flex-col text-libre">
                <h1 className="text-2xl font-bold mb-2 mt-12">
                  {" "}
                  <Link to="/archway">Archway</Link>
                </h1>

                <p className="text-left">
                  Nestled in the basement of a historic, listed building once
                  used as a World War II bomb shelter, Archway BSMNT is our very
                  first, original location. Opened in 2016, it features nine
                  purpose built, professionally soundproofed music production
                  and programming suites. Studios range in size from 110 to 200
                  square feet, accommodating a variety of creative needs.{" "}
                </p>
                <Link
                  to="/studios"
                  className="font-libre block text-left mt-10"
                >
                  See all Music studios in London{" "}
                  <img className="w-32 mt-4" src="/Pil.png" alt="Arrow" />
                </Link>
              </div>
            ),
          },

          { type: "image", value: "/Archway/Music_studio_Archway_09.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_01.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_02.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_03.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_06.jpg" },

          {
            type: "component",
            value: <GenericMap id="ChIJgWVzgq4bdkgRWXKq5TLF1YU" />,
          },

          { type: "image", value: "/Archway/Music_studio_Archway_07.jpg" },
          {
            type: "text",
            value: (
              <div className="flex flex-col gap-1 uppercase text-black text-left">
                <p className="text-3xl font-extrabold leading-tight">CCTV</p>
                <p className="text-base text-xl font-bold">
                  Fiberoptic broadband
                </p>

                <p className="text-base text-xl font-bold">
                  Fresh air circulation system
                </p>

                <p className="text-base text-xl font-bold leading-tight">
                  Parking
                </p>

                <p className="text-3xl font-extrabold leading-tight">
                  24/7 access
                </p>
                <p className="text-base text-xl font-bold">
                  Private outdoor terrace
                </p>

                <p className="text-base text-xl font-bold">
                  Kitchen-lounge area
                </p>
              </div>
            ),
          },
          { type: "image", value: "/Archway/Music_studio_Archway_10.jpg" },
          { type: "image", value: "/Archway/Music_studio_Archway_08.jpg" },
          {
            type: "text",
            value: (
              <div className="italic">
                <p className="text-left">
                  “I've been based at BSMNT Studio Archway for the past three
                  years, and it's been an incredible experience from day one.
                  Simona and the team have always been amazing—welcoming, kind,
                  and super responsive to any queries or needs. The studio space
                  itself is perfect for my setup. I have enough room for my
                  desk, monitors, piano, drum kit, and synth rack, and still
                  comfortably fit artists and writers during sessions. The
                  location is ideal—just a short walk from Archway Tube Station,
                  with the added bonus of free parking at the back for those who
                  drive in. The whole complex is kept in great condition,
                  cleaned weekly, and includes both a kitchen area and a lovely
                  outdoor chill space. The community at BSMNT is genuinely
                  friendly and collaborative—at one point I shared a space with
                  another producer from across the hall, which worked out really
                  well. Since moving here, my career has definitely taken a step
                  forward. The environment has played a big part in allowing me
                  to grow professionally and continue working with amazing
                  artists and writers. I couldn't recommend it more highly.”
                  <br />
                  Warriner - Producer/Writer
                  <br></br>
                </p>
                <p className="text-left">
                  “The team at BSMNT made every aspect of working in their rooms
                  incredibly smooth and easy. Communication was excellent, with
                  any questions or issues solved efficiently. Communal areas
                  were kept clean and tidy and repairs arranged speedily. I
                  can’t recommend them enough”
                  <br />
                  Matt Wiggins - Mixer/Engineer/Producer
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
