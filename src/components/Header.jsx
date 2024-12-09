import React from "react";
import logo from "../assets/Frame 60.png";
import logo2 from "../assets/Frame 61.png";

function Header() {
  const getActiveLinkClass = (path) => {
    return window.location.pathname === path
      ? "bg-orange-500 rounded-full px-4 py-2"
      : ""; // No styles for inactive links
  };
  return (
    <>
      <nav className="bg-black text-white rounded-full ml-8 mr-8 mt-8 hidden md:block">
        <div className="container mx-auto px-12 py-4 items-center ">
          <ul className="flex xl:space-x-40 lg:space-x-32 md:space-x-24">
            <li>
              <a href="/" className={getActiveLinkClass("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="/" className={getActiveLinkClass("/service")}>
                Service
              </a>
            </li>
            <li>
              <img src={logo} alt="" className=" lg:h-8 md:h-6" />
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

      <nav className="flex items-center justify-center mt-8 mb-24 block md:hidden ">
        <img src={logo2} alt="" className="" />
      </nav>
    </>
  );
}

export default Header;
