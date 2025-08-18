import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-neutral-100 rounded-lg bg-neutral-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
      <li>
        <Link to="/" className="block py-2 px-3 text-neutral-700 hover:text-primary-600 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
      </li>
      {localStorage.getItem("authToken") ? (
        <li>
          <button onClick={handleLogout} className="block w-full text-left py-2 px-3 text-neutral-700 hover:text-primary-600 rounded md:bg-transparent md:p-0">Logout</button>
        </li>
      ) : (
        <li>
          <Link to="/login" className="block py-2 px-3 text-neutral-700 hover:text-primary-600 rounded md:bg-transparent md:p-0">Login</Link>
        </li>
      )}
    </ul>
  );

  return (
    <nav className="bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-200/80 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <i className="fa-solid fa-dumbbell text-2xl text-primary-600"></i>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-neutral-800">VPeakFit</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={handleContactClick} type="button" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hidden sm:block">
            Contact Us
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200" aria-controls="navbar-sticky" aria-expanded={menuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          {navLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
