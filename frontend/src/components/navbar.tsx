import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export const Navbar = () => {
  const availableDetailsRef = useRef<HTMLDetailsElement>(null);
  const locationsDetailsRef = useRef<HTMLDetailsElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        availableDetailsRef.current &&
        !availableDetailsRef.current.contains(event.target as Node)
      ) {
        availableDetailsRef.current.removeAttribute("open");
      }

      if (
        locationsDetailsRef.current &&
        !locationsDetailsRef.current.contains(event.target as Node)
      ) {
        locationsDetailsRef.current.removeAttribute("open");
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        const button = mobileDropdownRef.current.querySelector("button");
        if (button && button.getAttribute("aria-expanded") === "true") {
          button.click();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    if (availableDetailsRef.current) {
      availableDetailsRef.current.removeAttribute("open");
    }
    if (locationsDetailsRef.current) {
      locationsDetailsRef.current.removeAttribute("open");
    }
  };

  return (
    <header className="relative z-20">
      <nav className="navbar px-4">
        <div className="lg:hidden">
          <div className="dropdown" ref={mobileDropdownRef}>
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
              <li onClick={handleMenuItemClick}>
                <Link to="/share">Studio share</Link>
              </li>
              <li>
                <details>
                  <summary>Available</summary>
                  <ul className="p-2 libre-text">
                    <li onClick={handleMenuItemClick}>
                      <Link to="/offices">Offices</Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to="/studios">Soundproofed studios</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details ref={locationsDetailsRef}>
                  <summary className="cursor-pointer libre-text ">
                    <Link to="/locations" onClick={handleMenuItemClick}>
                      Locations
                    </Link>
                  </summary>
                  <ul className="p-2 z-10 libre-text  bg-white text-black">
                    <li onClick={handleMenuItemClick}>
                      <Link to="/argall">Argall</Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to="/leabridge">Lea Bridge</Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to="/archway">Archway</Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to="/finsbury">Finsbury Park</Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to="/hornsey">Hornsey</Link>
                    </li>
                    <li onClick={handleMenuItemClick}>
                      <Link to="/hackney">Hackney</Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li onClick={handleMenuItemClick}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center bg-white lg:flex justify-between items-center w-full fixed top-0 left-0 z-50">
          <ul className="menu menu-horizontal flex items-center space-x-12 ">
            <li className="flex items-center flex-row">
              <Link
                to="/"
                className="no-underline hover:bg-transparent flex items-center"
              >
                <img src="./bsmnt.png" className="w-8" alt="BSMNT Logo" />
                <h1 className="title text-3xl ml-2 !text-black !no-underline -mr-5">
                  BSMNT
                </h1>
              </Link>
            </li>

            <li>
              <details ref={availableDetailsRef}>
                <summary className="cursor-pointer libre-text">
                  Available
                </summary>
                <ul className="p-2 z-10 libre-text bg-white text-black rounded-b-lg rounded-t-none">
                  <li onClick={handleMenuItemClick}>
                    <Link to="/offices">Offices</Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/studios">Soundproofed studios</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details ref={locationsDetailsRef}>
                <summary className="cursor-pointer libre-text ">
                  <Link to="/locations" onClick={handleMenuItemClick}>
                    Locations
                  </Link>
                </summary>
                <ul className=" p-2 z-10 libre-text  bg-white text-black rounded-b-lg rounded-t-none">
                  <li onClick={handleMenuItemClick}>
                    <Link to="/argall">Argall</Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/leabridge" className="whitespace-nowrap">
                      Lea Bridge
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/archway">Archway</Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link className="whitespace-nowrap" to="/finsbury">
                      Finsbury Park
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/hornsey">Hornsey</Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/hackney">Hackney</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li className="libre-text" onClick={handleMenuItemClick}>
              <Link to="/share">Studio share</Link>
            </li>
            <li className="libre-text" onClick={handleMenuItemClick}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-3 pr-4">
            <a
              href="mailto:info@bsmnt.net"
              className="text-2xl text-gray-600 hover:text-[#fef880]"
            >
              <MdEmail />
            </a>
            <a
              href="https://www.instagram.com/bsmntstudios/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-[#fef880]"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
