import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 px-4 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl text-white italic">Gaurppet</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-white font-semibold">
        <li>
          <Link to="/" className="hover:text-green-300">Home</Link>
        </li>
        <li>
          <Link to="/About" className="hover:text-green-300">About Us</Link>
        </li>
       
        <li>
          <Link to="/Contact" className="hover:text-green-300">Contact Us</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-green-300">Services</Link>
        </li>
      </ul>

      {/* Enquire Button */}
      <div className="hidden md:block">
        <Link
          to="/enquire"
          className="bg-blue-300 text-black font-medium px-4 py-2 rounded-lg hover:bg-blue-200 transition"
        >
          Enquire Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-500 flex flex-col items-center md:hidden z-10">
          <ul className="space-y-4 py-4 text-white font-semibold">
            <li>
              <Link to="/" className="hover:text-green-300">Home</Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-green-300">About Us</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-green-300">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-green-300">Services</Link>
            </li>
            <li>
              <Link
                to="/enquire"
                className="bg-blue-300 text-black font-medium px-4 py-2 rounded-lg hover:bg-blue-200 transition"
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
