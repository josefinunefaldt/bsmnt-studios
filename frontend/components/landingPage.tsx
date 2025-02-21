import { Link } from "@tanstack/react-router";

const LandingPage = () => {
  return (
    <div className="w-full  mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-2">
        <Link
          to="/argall"
          className="w-full lg:w-1/2 flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"
        >
          Argall way
        </Link>
        <Link
          to="/leabridge"
          className="w-full lg:w-1/2 flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"
        >
          Lea bridge
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        <Link
          to="/hornsey"
          className="w-full lg:w-1/2 flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"
        >
          Hornsey
        </Link>
        <Link
          to="/hackney"
          className="w-full lg:w-1/2 flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"
        >
          Hackney
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 mt-2">
        <Link
          to="/finsbury"
          className="w-full lg:w-2/3 flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"
        >
          Finsbury
        </Link>
        <Link
          to="/archway"
          className="w-full lg:w-1/3 flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px]"
        >
          Archway
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
