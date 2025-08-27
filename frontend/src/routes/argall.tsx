import { createFileRoute, Link } from "@tanstack/react-router";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { isLeaPortrait } from "../utils/imagePortraits";
import Location2 from "../components/location2";
import { Navbar } from "../components/navbar";

export const Route = createFileRoute("/argall")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative z-0">
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
            value: "/Argl.JPG",
          },
          {
            type: "text",
            value: (
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold mb-2">
                  {" "}
                  <Link to="/leabridge">Argall Way</Link>
                </h1>
                <p>blablabla argall</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
