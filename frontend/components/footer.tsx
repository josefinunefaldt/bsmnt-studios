import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-3">
        <a
          href="mailto:info@bsmnt.net"
          className="flex items-center space-x-2 text-lg hover:text-gray-400"
        >
          <MdEmail className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/bsmntstudios/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
