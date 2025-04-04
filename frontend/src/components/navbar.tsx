import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

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
      <nav className="navbar bg-base-100">
        <div className="lg:hidden">
          <div className="dropdown">
            <button className="btn btn-ghost !hover:none !focus:none">
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
                  <ul className="p-2">
                    <li>
                      <Link to="/offices" className="!hover:none !focus:none">
                        Offices
                      </Link>
                    </li>
                    <li>
                      <Link to="/studios" className="!hover:none !focus:none">
                        Soundproofed studios
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/contact" className="!hover:none !focus:none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center ">
            <li className="flex items-center justify-center">
              <Link
                to="/"
                className="no-underline hover:bg-transparent focus:bg-transparent"
              >
                <img
                  src="./bsmnt.png"
                  className="w-8"
                  alt="Image Description"
                />
              </Link>
            </li>
            <li>
              <details ref={detailsRef}>
                <summary>Available</summary>
                <ul className="p-2 z-10">
                  <li>
                    <Link to="/offices" className="!hover:none !focus:none">
                      Offices
                    </Link>
                  </li>
                  <li>
                    <Link to="/studios" className="!hover:none !focus:none">
                      Soundproofed studios
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/share" className="!hover:none !focus:none">
                Studio share
              </Link>
            </li>
            <li>
              <Link to="/contact" className="!hover:none !focus:none">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
