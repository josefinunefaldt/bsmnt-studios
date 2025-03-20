import { Link } from "@tanstack/react-router";

const LandingPage = () => {
  return (
    <div className="w-full mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-2">
        <Link
          to="/argall"
          className="w-full lg:w-1/2 flex items-center justify-center min-h-[300px]"
        >
          <img
            src="./Argall.jpeg"
            className="object-cover w-full h-full"
            alt="Argall"
          />
        </Link>
        <Link
          to="/leabridge"
          className="w-full lg:w-1/2 flex items-center justify-center  min-h-[300px]"
        >
          <img
            src="./Lea.jpg"
            className="object-cover w-full h-full"
            alt="Lea Bridge"
          />
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        <Link
          to="/hornsey"
          className="w-full lg:w-1/2 flex items-center justify-center min-h-[300px]"
        >
          <img
            src="./Finsbury.JPG"
            className="object-cover w-full h-full"
            alt="Hornsey"
          />
        </Link>
        <Link
          to="/hackney"
          className="w-full lg:w-1/2 flex items-center justify-center  min-h-[300px]"
        >
          <img
            src="./Hackney.jpg"
            className="object-cover w-full h-full"
            alt="Hackney"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        <Link
          to="/finsbury"
          className="w-full lg:w-2/3 flex items-center justify-center  min-h-[300px]"
        >
          <img
            src="./Hornsey.jpg"
            className="object-cover w-full h-full"
            alt="Finsbury"
          />
        </Link>
        <Link
          to="/archway"
          className="w-full lg:w-1/3 flex items-center justify-center min-h-[300px]"
        >
          <img
            src="./Archway.JPG"
            className="object-cover w-full h-full"
            alt="Archway"
          />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
