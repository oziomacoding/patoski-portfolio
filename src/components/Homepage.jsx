import React from "react";
// import pics1 from "../assets/Rectangle 7.png"
// import pics2 from "../assets/Rectangle 9.png"
// import pics3 from "../assets/Rectangle 8.png"
import icon from "../assets/Vector 1.png";
import icon2 from "../assets/Vector 2.png";
import arrow from "../assets/up right.png";
import picture from "../assets/Whatsapp-image.png";
import card1 from "../assets/Rectangle 7.png";
import card2 from "../assets/Rectangle 9.png";
import card3 from "../assets/Rectangle 8.png";
import backgroundImage from '../assets/background.jpg';
import Carousel from "../components/CarouselHomepage.jsx";

function Homepage() {
  const cards = [
    {
      title: "Desktop App Design",
      image: card1,
    },
    {
      title: "Website Design",
      image: card2,
    },
    {
      title: "Mobile App Design",
      image: card3,
    },
  ];
  return (
    <>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-center mt-6">
        <div className="relative inline-block">
          {/* <!-- Button --> */}
          <button className="px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-white">
            Hello!
          </button>
          {/* <!-- Image/Icon --> */}
          <img src={icon} alt="Icon" className="absolute -top-4 -right-4 w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="relative inline-block">
          <div className=" text-center  text-4xl md:text-6xl ">
            I'm Patrick, <br />
            Product Designer
          </div>
          <img
            src={icon2}
            alt="Icon"
            className="absolute bottom-0.1 -left-10 w-10 h-10"
          />
        </div>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden h-[369px]">
        <div className="w-[500px]  h-[254px] bg-orange-500 rounded-t-full absolute bottom-0 ">
          <img src={picture} alt="Image 2" className="absolute  -top-48" />

          <div
            className="w-[300px] mt-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full flex justify-center items-center gap-6"
            style={{
              background: "#FFFFFF1A",
              border: "2px solid",
              borderColor: "#FFFFFF80",
              backdropFilter: "blur(15px)",
            }}
          >
            <a
              href="#"
              className="w-40 h-12 text-white bg-orange-500 rounded-full shadow-md hover:bg-gray-700 flex items-center justify-center gap-2 text-sm"
            >
              Resume
              <img src={arrow} className="h-5" alt="" />
            </a>
            <a
              href="#"
              className="w-40 h-12 text-white rounded-full shadow-md hover:bg-gray-700 flex items-center justify-center text-sm"
            >
              Hire me
              <img src={arrow} className="h-5 " alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* MY SERVICES */}

      <div
        className="service min-h-screen w-full py-[71px] md:px-[71px] px-2 bg-cover bg-center"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "600%",
        }}
      >
        <div className="text text-center">
          <h2 className="text-white mb-[71px] text-[40px]">
            My <span className="text-orange-500">Services</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {cards.map((card, index) => (
            <div key={index} className="relative inline-block">
              <div
                className="w-full h-[460px]  md:h-[300px] lg:h-[350px] xl:h-[420px] border-[1.91px] flex flex-col inverted-radius"
                style={{ background: "#68686833", borderColor: "#FFFFFF80" }}
              >
                <h2 className="text-white text-lg font-bold mb-2 p-4 ml-4">
                  {card.title}
                </h2>
                <div
                  className="w-full h-[1px] border-[1.91px] mb-4 "
                  style={{ borderColor: "#FFFFFF80" }}
                ></div>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    boxShadow:
                      "0px -20px 0px -8px #9E9D9D, 0px -40px 0px -15px #757575",
                  }}
                  className="w-full h-auto object-cover mt-auto rounded-[35px]"
                />
              </div>
              <a
                href="#"
                className="absolute bottom-4 right-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center"
              >
                <img src={arrow} className="h-10" alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* MY PROJECTS */}

      <div className="md:flex block md:px-20 px-6 pt-6 pb-8">
        <div className="flex-1 md:text-[30px] text-center text-lg">
          Lets have a look at my{" "}
          <span className="text-orange-500">recent project</span>
        </div>
        <div className="flex justify-end flex-1">
          <button className="px-4 py-2 rounded-full text-white bg-orange-500 hidden md:block h-10">
            See All
          </button>
        </div>
      </div>

      <div className="buttons flex items-center justify-center gap-3 pb-8">
        <button className="px-4 py-2  rounded-full text-white bg-orange-500">
          E-commerce{" "}
        </button>
        <button className="px-4 py-2  rounded-full text-white bg-[#FED9C2] text-[black]">
          Fin-Tech{" "}
        </button>
        <button className="px-4 py-2  rounded-full text-white bg-[#FED9C2] text-[black]">
          Web3{" "}
        </button>
        <button className="px-4 py-2  rounded-full text-white bg-[#FED9C2] text-[black]">
          Health{" "}
        </button>
        <button className="px-4 py-2  rounded-full text-white bg-[#FED9C2] text-[black]">
          Others{" "}
        </button>
      </div>
      <div>
        <Carousel />
        <div className="flex justify-center items-center pt-6">
          <button className="px-5 py-3  rounded-full text-white bg-orange-500 block md:hidden">
            See All{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
