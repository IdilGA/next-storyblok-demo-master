import { storyblokEditable } from "@storyblok/react/rsc";
import "./Header.css";

const Header = ({ blok }) => {
  const newLocal = "bg-[#22252A] text-white py-2 mx-auto max-w-screen-xl w-full rounded-tl-lg rounded-br-lg";
  return (
    <header className="bg-white py-5 text-center">
      {/* Logo sectie */}
      <div
        className="container mx-auto flex justify-center items-center mb-5"
        {...storyblokEditable(blok)}
      >
        <img src={blok.logo.filename} alt={blok.logo.alt} className="h-16" />
      </div>

      {/* Registreren en Inloggen knoppen */}
      <div className="flex justify-end space-x-4 mb-3 pr-10">
        <a
          href="/register"
          className="px-4 py-1 bg-blue-400 text-white rounded-full"
        >
          Registreren
        </a>
        <a
          href="/login"
          className="px-4 py-1 bg-red-400 text-white rounded-full"
        >
          Inloggen
        </a>
      </div>

      {/* Navigatiebalk */}
      <nav className={newLocal}>
        <div className="flex justify-between items-center">
          <ul className="flex space-x-8">
            <li>
              <a href="/home" className="px-3 py-2 bg-blue-400 rounded-full">
                Home
              </a>
            </li>
            <li>
              <a href="/nieuws" className="hover:text-orange-300">
                Nieuws
              </a>
            </li>
            <li>
              <a href="/interviews" className="hover:text-orange-300">
                Interviews
              </a>
            </li>
            <li>
              <a href="/artikelen" className="hover:text-orange-300">
                Artikelen
              </a>
            </li>
            <li>
              <a href="/evenementen-webinars" className="hover:text-orange-300">
                Evenementen & Webinars
              </a>
            </li>
          </ul>

          {/* Zoekknop */}
          <div className="relative">
            <input
              type="text"
              placeholder="Zoeken..."
              className="px-4 py-2 rounded-full text-black"
            />
            <button className="absolute right-2 top-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
