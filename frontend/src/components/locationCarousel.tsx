import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
      info: "Located in a landmark building by Lea Bridge Station, provides offices filled with natural light, spacious, inviting communal areas, and high-spec music studios with floor-to-ceiling windows for East London's creative professionals.",
      image: "./Lea/lea.jpeg",
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
      image: "./Hornsey/hornsey1.jpg",
    },
    {
      name: "Archway",
      path: "/archway",
      location: "North London",
      info: "Our original studios, nestled just steps away from Archway's vibrant high street within a historic former WWII shelter, offer nine comfy, soundproofed production suites alongside a convenient break-out space with kitchenette and a private outdoor terrace.",
      image: "./Archway/archway8.jpg",
    },
    {
      name: "Finsbury park",
      path: "/finsbury",
      location: "North London",
      info: "Once a textile factory, now warmly blends industrial charm with modern comfort, creating a friendly vibe and welcoming creative community known for its laid-back social gatherings—just the place to feel right at home.",
      image: "./Finsbury/finsbury1.jpg",
    },
    {
      name: "Hackney",
      path: "/hackney",
      location: "East London",
      info: "Located in an old textile factory, Hackney BSMNT music studios combine tons of natural daylight, high ceilings, and a genuinely friendly, tight-knit creative community, just steps away from Hackney Downs park and some of the area's best cafés and bars.",
      image: "./Hackney/hackney15.jpg",
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
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 aspect-[16/9] relative">
          <Link
            to={currentLocation.path}
            className="block w-full h-full relative"
          >
            <img
              src={currentLocation.image}
              className="object-cover w-full h-full transition-opacity duration-500"
              alt={currentLocation.name}
            />
          </Link>

          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="absolute inset-y-0 left-0 flex items-center p-4 z-10"
            aria-label="Previous slide"
          >
            <MdKeyboardArrowLeft className="text-4xl text-white" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="absolute inset-y-0 right-0 flex items-center p-4 z-10"
            aria-label="Next slide"
          >
            <MdKeyboardArrowRight className="text-4xl text-white" />
          </button>
        </div>

        <Link
          to={currentLocation.path}
          className="hidden lg:flex w-full lg:w-1/4 flex-col bg-[#fef880] text-[rgb(67,67,67)] transition-all duration-500"
        >
          <div className="flex flex-col h-full justify-center px-7 py-8 space-y-4 flex-1">
            <div className="text-3xl font-bold title">
              {currentLocation.name}
            </div>
            <div className="text-sm text-[rgb(67,67,67)] font-libre leading-relaxed">
              {currentLocation.info}
            </div>
            <div className="font-libre text-[rgb(67,67,67)] mt-auto">
              Read more
            </div>
            <div className="flex justify-start">
              <img className="w-32" src="/Pil.png" alt="Arrow" />
            </div>
          </div>
        </Link>
      </div>

      <Link
        to={currentLocation.path}
        className="block lg:hidden w-full bg-[#fef880] text-[rgb(67,67,67)] transition-all duration-500 min-h-[calc(100vh-9/16*100vw)]"
      >
        <div className="flex flex-col px-7 py-6 space-y-4 h-full">
          <div className="text-2xl font-bold title">{currentLocation.name}</div>
          <div className="text-sm text-[rgb(67,67,67)] font-libre leading-relaxed">
            {currentLocation.info}
          </div>
          <div className="font-libre text-[rgb(67,67,67)] mt-auto">
            Read more
          </div>
          <div className="flex justify-start">
            <img className="w-32" src="/Pil.png" alt="Arrow" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LocationCarousel;
