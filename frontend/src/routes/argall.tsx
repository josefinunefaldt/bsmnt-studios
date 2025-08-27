import { createFileRoute } from "@tanstack/react-router";
import { Video } from "../components/landingpagevideo";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Route = createFileRoute("/argall")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative z-0">
      <Video />
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
    </div>
  );
}
