import React, { useState } from 'react'; 
import logo from "../assets/Frame 60.png";
import logo2 from "../assets/Frame 61.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getActiveLinkClass = (path) =>
    window.location.pathname === path
      ? "text-orange-500"
      : "hover:text-orange-500";

  return (
    <>
      {/* Sticky Mobile Navigation */}
      <nav className=" flex items-center justify-center pb-8 pt-2 sticky mt-8 bg-white z-50 top-0 bg-white block md:hidden">
        <button onClick={toggleMenu}>
          <img src={logo2} alt="h-8" className="" />
        </button>
        <ul
            className={`  ${ menuOpen ? "flex" : "hidden"} items-center absolute top-[60px]  gap-6  `}>
            <li>
              <a href="/" className={getActiveLinkClass("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="/service" className={getActiveLinkClass("/service")}>
                Service
              </a>
            </li>
            <li className="hidden md:block">
              <img src={logo} alt="Logo" className="lg:h-8 md:h-6" />
            </li>
            <li>
              <a href="/project" className={getActiveLinkClass("/project")}>
                Project
              </a>
            </li>
            <li>
              <a href="/contact" className={getActiveLinkClass("/contact")}>
                Contact
              </a>
            </li>
          </ul>
      </nav>

      {/* Desktop and Medium Screen Navigation */}
      <nav className="bg-black text-white rounded-full mx-8 mt-8 hidden md:block">
        <div className="container mx-auto px-12 py-4 items-center">
          <ul
            className= 'flex-row flex xl:space-x-40 lg:space-x-32 md:space-x-24 md:items-center top-[70px]  '
          >
            <li>
              <a href="/" className={getActiveLinkClass("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="/service" className={getActiveLinkClass("/service")}>
                Service
              </a>
            </li>
            <li className="">
              <img src={logo} alt="Logo" className="lg:h-8 md:h-6" />
            </li>
            <li>
              <a href="/project" className={getActiveLinkClass("/project")}>
                Project
              </a>
            </li>
            <li>
              <a href="/contact" className={getActiveLinkClass("/contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
