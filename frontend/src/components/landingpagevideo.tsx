import { NavbarArgall } from "./navbarArgall";

export const Video = () => {
  return (
    <div className="relative min-h-screen w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden lg:block"
        src="/argallvideo.mp4"
      >
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 lg:hidden"
        src="/argallmob.mp4"
      >
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 w-full">
        <NavbarArgall />
      </div>
    </div>
  );
};
