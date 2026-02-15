import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export const Navbar = () => {
  const availableDetailsRef = useRef<HTMLDetailsElement>(null);
  const locationsDetailsRef = useRef<HTMLDetailsElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        availableDetailsRef.current &&
        !availableDetailsRef.current.contains(target)
      ) {
        availableDetailsRef.current.removeAttribute("open");
      }

      if (
        locationsDetailsRef.current &&
        !locationsDetailsRef.current.contains(target)
      ) {
        locationsDetailsRef.current.removeAttribute("open");
      }

      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !(target as HTMLElement).closest("button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        availableDetailsRef.current?.removeAttribute("open");
        locationsDetailsRef.current?.removeAttribute("open");
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      const details = menuRef.current?.querySelectorAll("details");
      details?.forEach((d) => d.removeAttribute("open"));
    }
  }, [isMobileMenuOpen]);

  const handleMenuItemClick = () => {
    availableDetailsRef.current?.removeAttribute("open");
    locationsDetailsRef.current?.removeAttribute("open");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-20">
      <nav className="navbar px-4 bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
        <div className="navbar-start lg:hidden">
          <button
            className="btn btn-ghost text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
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
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h8m-8 6h16"
                }
              />
            </svg>
          </button>
        </div>

        <div className="navbar-center lg:navbar-start lg:mr-16 text-white">
          <Link
            to="/"
            className="no-underline hover:bg-transparent flex items-center"
          >
            <img src="./bsmnt.png" className="w-8" alt="BSMNT Logo" />
            <h1 className="title text-3xl ml-2 !text-black !no-underline">
              BSMNT
            </h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex flex-1 justify-center ">
          <ul className="menu menu-horizontal flex items-center gap-6">
            <li>
              <details ref={availableDetailsRef}>
                <summary className="cursor-pointer libre-text">
                  Available spaces
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
                <summary className="cursor-pointer libre-text">
                  <Link to="/locations" onClick={handleMenuItemClick}>
                    Locations
                  </Link>
                </summary>
                <ul className="p-2 z-10 libre-text bg-white text-black rounded-b-lg rounded-t-none">
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
                    <Link to="/finsbury" className="whitespace-nowrap">
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
        </div>

        <div className="navbar-end hidden lg:flex">
          <div className="flex items-center space-x-3">
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

        <div
          ref={menuRef}
          className={`lg:hidden absolute top-full left-0 w-60 bg-white shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="menu p-4 space-y-2">
            <li onClick={handleMenuItemClick}>
              <Link to="/share" className="text-black">
                Studio share
              </Link>
            </li>

            <li>
              <details>
                <summary className="text-black">Available</summary>
                <ul className="p-2 libre-text bg-gray-50 rounded mt-2">
                  <li onClick={handleMenuItemClick}>
                    <Link to="/offices" className="text-black">
                      Offices
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/studios" className="text-black">
                      Soundproofed studios
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary className="text-black cursor-pointer">
                  <Link to="/locations" className="no-underline text-black">
                    Locations
                  </Link>
                </summary>
                <ul className="p-2 libre-text bg-gray-50 rounded mt-2">
                  <li onClick={handleMenuItemClick}>
                    <Link to="/argall" className="text-black">
                      Argall
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/leabridge" className="text-black">
                      Lea Bridge
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/archway" className="text-black">
                      Archway
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/finsbury" className="text-black">
                      Finsbury Park
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/hornsey" className="text-black">
                      Hornsey
                    </Link>
                  </li>
                  <li onClick={handleMenuItemClick}>
                    <Link to="/hackney" className="text-black">
                      Hackney
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li onClick={handleMenuItemClick}>
              <Link to="/contact" className="text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
