import { Link } from "@tanstack/react-router";

const LandingPage = () => {
  return (
    <div className="w-full mx-auto p-6 ">
      <div className="flex flex-col lg:flex-row gap-2">
        <Link
          to="/argall"
          className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[300px] group"
        >
          <img
            src="./Argall.jpeg"
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            alt="Argall"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="landing-text">Argall</span>
          </div>
        </Link>
        <Link
          to="/leabridge"
          className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[300px] group"
        >
          <img
            src="./Lea.jpg"
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            alt="Lea Bridge"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="landing-text">Lea Bridge</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        <Link
          to="/hornsey"
          className="w-full lg:w-2/3 relative flex items-center justify-center min-h-[300px] group"
        >
          <img
            src="./Hornsey.jpg"
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            alt="hornsey"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="landing-text">Hornsey</span>
          </div>
        </Link>
        <Link
          to="/archway"
          className="w-full lg:w-1/3 relative flex items-center justify-center min-h-[300px] group"
        >
          <img
            src="./Archway.JPG"
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            alt="Archway"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="landing-text">Archway</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        <Link
          to="/finsbury"
          className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[300px] group"
        >
          <img
            src="./Finsbury/finsbury3.jpg"
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            alt="finsbury"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="landing-text">Finsbury Park</span>
          </div>
        </Link>
        <Link
          to="/hackney"
          className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[300px] group"
        >
          <img
            src="./Hackney/hackney4.jpg"
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            alt="Hackney"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className=" landing-text">Hackney</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
