import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="absolute left-0 right-0">
      <div className="max-w-[1272px] py-10 mx-auto flex items-center justify-between  px-4">
        {/* Logo */}
        <div className="w-40 mb-5">
          <img src="/logo.png" alt="Company Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 list-none">
          <li>
            <a
              href="/"
              className="flex items-center justify-center px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-600"
            >
              Platform
              <span className="ml-2">
                <FaRegArrowAltCircleDown />
              </span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="px-4 py-2 text-white bg-green-800 rounded-full hover:bg-green-600"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="px-4 py-2 text-white bg-green-800 rounded-full hover:bg-green-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/metaverse"
              className="px-4 py-2 text-white bg-green-800 rounded-full hover:bg-green-600"
            >
              Metaverse
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="px-4 py-2 text-white bg-green-800 rounded-full hover:bg-green-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
