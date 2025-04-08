import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export const Navbar = () => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        detailsRef.current.removeAttribute("open");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="navbar bg-white px-4">
        <div className="lg:hidden">
          <div className="dropdown">
            <button className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/share">Studio share</Link>
              </li>
              <li>
                <details ref={detailsRef}>
                  <summary>Available</summary>
                  <ul className="p-2 libre-text">
                    <li>
                      <Link to="/offices">Offices</Link>
                    </li>
                    <li>
                      <Link to="/studios">Soundproofed studios</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden bg-white lg:flex justify-between w-full items-center">
          <ul className="menu menu-horizontal px-1 flex items-center space-x-4">
            <li className="flex items-center flex-row">
              <Link
                to="/"
                className="no-underline hover:bg-transparent flex items-center"
              >
                <img src="./bsmnt.png" className="w-8" alt="BSMNT Logo" />
                <h1 className="title text-3xl ml-2 !text-black !no-underline">
                  BSMNT
                </h1>
              </Link>
            </li>

            <li>
              <details ref={detailsRef}>
                <summary className="cursor-pointer libre-text ">
                  Available
                </summary>
                <ul className="p-2 z-10 libre-text">
                  <li>
                    <Link to="/offices">Offices</Link>
                  </li>
                  <li>
                    <Link to="/studios">Soundproofed studios</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="libre-text">
              <Link to="/share">Studio share</Link>
            </li>
            <li className="libre-text">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-3 pr-4">
            <a
              href="mailto:info@bsmnt.net"
              className="text-2xl text-gray-600 hover:text-[#ed8857]"
            >
              <MdEmail />
            </a>
            <a
              href="https://www.instagram.com/bsmntstudios/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-[#ed8857]"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
