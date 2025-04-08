import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Location {
  name: string;
  path: string;
  image: string;
  info: string;
}

const LandingPage2 = () => {
  const locations: Location[] = [
    {
      name: "Argall",
      path: "/argall",
      info: "North london",
      image: "./Argall.jpeg",
    },
    {
      name: "Lea bridge",
      path: "/leabridge",
      info: "East London",
      image: "./l.jpg",
    },
    {
      name: "Hornsey",
      info: "North London",
      path: "/hornsey",
      image: "./Hornsey.jpg",
    },
    {
      name: "Archway",
      path: "/archway",
      info: "North London",
      image: "./Archway.JPG",
    },
    {
      name: "Finsbury park",
      path: "/finsbury",
      info: "North London",
      image: "./Finsbury/finsbury3.jpg",
    },
    {
      name: "Hackney",
      path: "/hackney",
      info: "East London",
      image: "./hackneey.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [isTransitioning, locations.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? locations.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const currentLocation = locations[currentIndex];

  return (
    <div className="w-full mx-auto relative">
      <div className="flex flex-col md:flex-row">
        <div className="relative hidden md:block w-full md:w-3/4 h-[85vh] overflow-hidden">
          <Link
            to={currentLocation.path}
            className="block w-full h-full relative"
          >
            <img
              src={currentLocation.image}
              className={`object-cover w-full h-full transition-opacity duration-500`}
              alt={currentLocation.name}
            />
          </Link>

          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Previous slide"
          >
            <MdKeyboardArrowLeft className="text-4xl" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Next slide"
          >
            <MdKeyboardArrowRight className="text-4xl" />
          </button>
        </div>

        <div className="block md:hidden">
          {locations.map((location, index) => (
            <Link
              key={index}
              to={location.path}
              className="relative block w-full mb-4"
            >
              <img
                src={location.image}
                className="object-cover w-full h-[300px] mb-2"
                alt={location.name}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="title">{location.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to={currentLocation.path}
          className="hidden sm:block w-full md:w-1/4 h-[85vh] bg-[#fef880] text-gray-600 transition-all duration-500"
        >
          <div className="flex flex-col ml-3 m-auto mt-36 p-4 space-y-2">
            <div className="text-4xl font-bold title ">
              {currentLocation.name}
            </div>

            <div className="text-base text-gray-600 font-libre">
              {currentLocation.info}
            </div>
            <br />
            <br />
            <br />
            <div className="font-libre text-gray-600">Read more</div>
            <div className="flex items-center">
              <span>
                {"—".repeat(10)}
                {`>`}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage2;
