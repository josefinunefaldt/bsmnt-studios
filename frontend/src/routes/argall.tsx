import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/argall")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="max-w-full max-h-screen rounded-lg shadow-lg"
        src="/argallvideo.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
