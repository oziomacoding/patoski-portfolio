// import React from "react";
import React from 'react';
import logo from "../assets/Frame 60.png";
import logo2 from "../assets/Frame 61.png";

function Header() {
 

  const getActiveLinkClass = (path) =>
    window.location.pathname === path
      ? "text-orange-500"
      : "hover:text-orange-500";
  return (
    <>
    
    <nav className="flex items-center justify-center  bg-white z-50 block md:hidden pb-5">
        <button >
          <img src={logo2} alt="" className="h-8" />
        </button>
      </nav>

      {/* Desktop and Medium Screen Navigation */}
      <nav className="bg-black text-white rounded-full mx-8 mt-8 hidden md:block ">
        <div className="container mx-auto px-12 py-4 items-center">
          <ul
            className="flex xl:space-x-40 lg:space-x-32 md:space-x-24"
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
        </div>
      </nav>


      

    </>
  );
}

export default Header;

