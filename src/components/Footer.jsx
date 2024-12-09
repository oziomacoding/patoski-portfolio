import React from "react";
import arrow from "../assets/up right.png";
import logo from "../assets/Frame 60.png";
import filled from "../assets/filled.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import home from "../assets/home-01.png";
import service from "../assets/share.png";
import project from "../assets/monitor-mobbile.png";
import contact from "../assets/call-calling.png";

function Footer() {
  return (
    <>
      <footer className=" footer1 bg-black pt-8 px-16 hidden md:block">
        <div className="flex ">
          <h2 className="text-white text-[30px] flex-1">Lets Connect there</h2>
          <div className="flex-1 flex justify-end">
            <a
              href=""
              className="w-40 h-12 text-white bg-orange-500 rounded-full shadow-md hover:bg-gray-700 flex items-center justify-center gap-2 text-sm">Hire me<img src={arrow} className="h-5 " alt="" />
            </a>
          </div>
        </div>
        <div
          className="w-full h-[1px] border-[1.91px] mt-8"
          style={{ borderColor: "#C6C6C7" }}
        ></div>
        <div className="flex mt-8 gap-8">
          <div className="flex-1">
            <img src={logo} alt="" className=" lg:h-8 md:h-6" />
            <p className="text-white text-sm py-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nam
              labore voluptatem commodi velit ab quia optio consequatur
              praesentium, ipsum a tempora molestias omnis dignissimos eligendi
              cum. Voluptatibus, ipsum. Numquam?
            </p>

            <div className="flex gap-4">
              <a href="" className=" bottom-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"><img src={facebook} className="" alt="" />
              </a>
              <a href="" className=" bottom-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"> <img src={linkedin} className="" alt="" />
              </a>
            </div>
          </div>
          <div className="flex-1 text-white ">
            <div className="flex gap-6">
              <div className="1 ">
                <h2 className="text-[#FD853A]">Navigation </h2>
                <ul className="pt-4 text-sm ">
                  <li><a href="">Home</a></li>
                  <li className="pt-4"><a href="">Service</a></li>
                  <li className="pt-4"><a href="">Project</a></li>
                  <li className="pt-4"><a href="">Contact</a></li>
                </ul>
              </div>
              <div className="2">
                <h2 className="text-[#FD853A]">Contact </h2>
                <ul className="pt-4 text-sm">
                  <li><a href="">+234-8167000077</a></li>
                  <li className="pt-4"><a href="">patoski716@gmail.com</a></li>
                </ul>
              </div>
              <div className="3">
                <h2 className="text-[#FD853A] ">Get the latest information </h2>
                <div className="flex pt-4">
                  <input type="email" placeholder="Email Address" className="px-4 py-2 text-black rounded-l-full focus:outline-none w-60"/>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-r-full hover:bg-orange-600"> <img src={filled} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] border-[1.91px] mt-8" style={{ borderColor: "#C6C6C7" }}></div>
        <p className="my-8 text-white text-center pb-4">Copyright© 2024 Patoski. All Rights Reserved.</p>
      </footer>

      <footer className=" w-full bg-white shadow-md border-t block md:hidden mt-4">
        <div className="flex justify-around items-center py-2">
          <a href="/" className="flex flex-col items-center text-orange-500">
            <img src={home} alt="" />
            <span className="text-sm">Home</span>
          </a>

          <a href="/" className="flex flex-col items-center text-gray-500 hover:text-orange-500">
            <img src={service} alt="" />
            <span className="text-sm">Service</span>
          </a>

          <a href="/project" className="flex flex-col items-center text-gray-500 hover:text-orange-500">
            <img src={project} alt="" />
            <span className="text-sm">Project</span>
          </a>

          <a href="/contact" className="flex flex-col items-center text-gray-500 hover:text-orange-500">
            <img src={contact} alt="" />
            <span className="text-sm">Contact</span>
          </a>
        </div>

        <div className="flex justify-center">
          <div className="h-1 w-24 bg-gray-500 rounded-full mt-1"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
