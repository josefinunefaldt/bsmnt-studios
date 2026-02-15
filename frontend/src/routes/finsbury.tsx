import { createFileRoute, Link } from "@tanstack/react-router";
import Location2 from "../components/location2";
import { isFinsburyPortrait } from "../utils/imagePortraits";
import { Navbar } from "../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GenericMap from "../components/genericMap";
export const Route = createFileRoute("/finsbury")({
  component: RouteComponent,
});
function RouteComponent() {
  return (
    <div>
      {" "}
      <HelmetProvider>
        {" "}
        <Helmet>
          {" "}
          <title>
            {" "}
            Recording & Music Studios in Finsbury Park, N4 | BSMNT{" "}
          </title>{" "}
          <meta
            name="description"
            content=" Finsbury Park BSMNT houses 18 high-spec recording and music studios with high ceilings. 24/7 access, fiber-optic internet, on-site parking, and a friendly creative community."
          />{" "}
        </Helmet>{" "}
      </HelmetProvider>{" "}
      <Navbar />{" "}
      <Location2
        isPortrait={isFinsburyPortrait}
        content={[
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_04.jpg" },
          {
            type: "text",
            value: (
              <div className="flex flex-col text-libre">
                {" "}
                <h1 className="text-2xl ">
                  {" "}
                  <Link
                    className=" p-4 space-y-4 text-3xl title_loc block self-start text-left"
                    to="/finsbury"
                  >
                    Finsbury park
                  </Link>{" "}
                </h1>{" "}
                <p className="text-left libre-text p-4 space-y-4 ">
                  {" "}
                  Once a textile factory, the warehouse was completely
                  reimagined in 2017 as a purpose built complex featuring
                  multiple production studios, live rooms, and a welcoming
                  communal area. Spread across two units, the complex houses 18
                  studios available for long term hire, ranging from compact 120
                  square foot programming rooms to expansive 400+ square foot
                  recording studios complete with isolated live rooms. Now home
                  to an inspiring community of record producers and songwriters,
                  Finsbury Park BSMNT offers a professional yet relaxed vibe,
                  with regular gatherings for drinks and barbecues in the front
                  yard.{" "}
                </p>{" "}
                <Link
                  to="/studios"
                  className="libre-text block text-left mt-10 p-4 space-y-4 "
                >
                  {" "}
                  See all music studios in London{" "}
                  <img className="w-32 mt-4" src="/Pil.png" alt="Arrow" />{" "}
                </Link>{" "}
              </div>
            ),
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_05.jpg" },
          {
            type: "component",
            value: <GenericMap id="ChIJ5Sly0pkbdkgRS4uDYmmQ2dM " />,
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_07.jpg" },
          {
            type: "text",
            value: (
              <div className="flex flex-col gap-1 uppercase text-black text-left libre-text">
                <p className="text-4xl font-extrabold font-bold leading-tight tracking-wide">
                  High ceilings
                </p>

                <p className="text-3xl font-bold leading-tight tracking-wide">
                  fiberoptic broadband
                </p>

                <p className="text-5xl font-extrabold font-bold leading-tight tracking-wide">
                  24/7 access
                </p>

                <p className=" text-2xl font-bold font-bold leading-tight tracking-wide">
                  Fresh air circulation system
                </p>

                <p className=" text-2xl font-bold font-bold leading-tight tracking-wide">
                  Secure off street parking
                </p>

                <p className="text-2xl font-bold  leading-tight tracking-wide">
                  Smart intercom system
                </p>

                <p className="text-5xl font-extrabold   leading-tight tracking-wide">
                  CCTV
                </p>

                <p className="text-3xl font-bold  leading-tight tracking-wide">
                  Kitchen-lounge area
                </p>
              </div>
            ),
          },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_08.jpg" },
          { type: "image", value: "/Finsbury/Music_studio_Finsbury_01.jpg" },
          {
            type: "text",
            value: (
              <div className="testemonial">
                <h1 className="text-left title_loc text-xl">
                  {" "}
                  “Good people and good vibes!”
                </h1>
                <p className="text-left">
                  “BSMNT is a great environment for music making. Good people
                  and good vibes!”
                  <br />
                  Tim Wheeler (ASH) - Singer / Guitarist
                </p>
                <br></br>
                <h1 className="text-left text-xl title_loc">
                  {" "}
                  “Bsmnt Finsbury Park has been an absolute joy!”
                </h1>
                <p className="text-left">
                  “From the outset, it’s been obvious that Simona and the team
                  really care about their clients, and they’ve always gone out
                  of their way to accommodate my needs. They’ve been lovely to
                  work with and are consistently quick to respond to any
                  questions or requests I’ve had. My favourite thing is the
                  community here - there’ll always be someone taking a break in
                  the courtyard or the kitchen to bounce an idea off, or lend an
                  ear to a work in progress. It’s huge to have likeminded souls
                  in the building, and I couldn’t ask for better neighbours.”
                  <br />
                  Ross Fortune - Mixer/Engineer/Composer
                </p>
                <br />
                <h1 className="text-left text-xl title_loc">
                  {" "}
                  “BSMNT really look after their tenants”
                </h1>
                <p className="text-left">
                  “I had a lovely studio at BSMNT Finsbury Park for a number of
                  years - a lot of music was made in that room, a lot of
                  wonderful hours and late nights. The BSMNT team take their
                  business very seriously and really look after their tenants.”
                  <br />
                  Jack Blume - Composer/Musical Supervisor/Arranger
                </p>
              </div>
            ),
          },
        ]}
      />{" "}
    </div>
  );
}
