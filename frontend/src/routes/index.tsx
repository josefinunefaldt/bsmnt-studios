import { createFileRoute } from "@tanstack/react-router";
import { Video } from "../components/landingpagevideo";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-screen w-full">
        <Video />
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">bsmnt</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Here you can share more about your product, service, or brand. Add
            paragraphs, bullet points, or even images to explain your value in a
            visually appealing way. This section will be revealed as visitors
            scroll down from the video above.
          </p>
        </div>
      </section>
    </div>
  );
}

export default RouteComponent;
