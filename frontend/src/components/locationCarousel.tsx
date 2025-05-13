import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Location {
  name: string;
  path: string;
  image: string;
  info: string;
  location: string;
}

const LocationCarousel = () => {
  const locations: Location[] = [
    {
      name: "Lea bridge",
      path: "/leabridge",
      location: "East London",
      info: "Located in a landmark building by Lea Bridge Station, provides offices filled with natural light, spacious, inviting communal areas, and high-spec music studios with floor-to-ceiling windows for East London's creative professionals.",
      image: "./l.jpg",
    },
    {
      name: "Argall",
      path: "/argall",
      location: "East London",
      info: "blabla",
      image: "./Argl.JPG",
    },
    {
      name: "Hornsey",
      location: "North London",
      info: "Provides spacious, welcoming studios flooded with natural light, alongside modern facilities and a relaxed vibe—set within a vibrant creative community close to local bars, cafés, restaurants and excellent transport links.",
      path: "/hornsey",
      image: "./Hornsey.jpg",
    },
    {
      name: "Archway",
      path: "/archway",
      location: "North London",
      info: "Our original studios, nestled just steps away from Archway’s vibrant high street within a historic former WWII shelter, offer nine comfy, soundproofed production suites alongside a convenient break-out space with kitchenette and a private outdoor terrace.",
      image: "./Archway.JPG",
    },
    {
      name: "Finsbury park",
      path: "/finsbury",
      location: "North London",
      info: "Once a textile factory, now warmly blends industrial charm with modern comfort, creating a friendly vibe and welcoming creative community known for its laid-back social gatherings—just the place to feel right at home.",
      image: "./Finsbury/finsbury3.jpg",
    },
    {
      name: "Hackney",
      path: "/hackney",
      location: "East London",
      info: "Located in an old textile factory, Hackney BSMNT music studios combine tons of natural daylight, high ceilings, and a genuinely friendly, tight-knit creative community, just steps away from Hackney Downs park and some of the area’s best cafés and bars.",
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
    }, 8000);
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
    <div className="w-full mx-auto relative bg-white">
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
          className="hidden sm:block w-full md:w-1/4 h-[85vh] bg-[#fef880]  text-[rgb(67,67,67)] transition-all duration-500"
        >
          <div className="flex flex-col ml-7 m-auto mt-36 p-4 space-y-2">
            <div className="text-4xl font-bold title ">
              {currentLocation.name}
            </div>

            <div className="text-base text-[rgb(67,67,67)] font-libre">
              {currentLocation.info}
            </div>
            <br />
            <br />
            <br />
            <div className="font-libre text-[rgb(67,67,67)]">Read more</div>
            <div className="left-0">
              <img className="left-0 w-48" src="/Pil.png"></img>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LocationCarousel;
