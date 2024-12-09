import React, { useRef, useEffect, useState } from "react";
// import card1 from "../assets/Rectangle 7.png";
// import card2 from "../assets/Rectangle 9.png";
import arrow from "../assets/up right.png";
import axios from "axios";

function CarouselHomepage() {
  const carouselItemsRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get(
        "https://patoski.riafly.com/api/projects/list/"
      );
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  //   const slidesPerPage = 2; // two cards per slide
  //sliderperpage =2 but =1 on medium screen logic.............starts
  const [slidesPerPage, setSlidesPerPage] = useState(2);
  useEffect(() => {
    const updateSlidesPerPage = () => {
      if (window.innerWidth < 768) {
        setSlidesPerPage(1); // For md screens and below
      } else {
        setSlidesPerPage(2); // Default
      }
    };

    // Initial check
    updateSlidesPerPage();

    // Add event listener for window resize
    window.addEventListener("resize", updateSlidesPerPage);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateSlidesPerPage);
    };
  }, []);

  //sliderperpage =2 but =1 on medium screen logic.............ends

  const totalSlides = Math.ceil(allproducts.length / slidesPerPage);
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToSlide = (slide) => {
    setCurrentSlide(slide);
    const slideWidth = carouselItemsRef.current.clientWidth;
    carouselItemsRef.current.style.transform = `translateX(-${
      (slide - 1) * slideWidth
    }px)`;
  };

  // Handle window resize event.........starts
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width state
      const slideWidth = carouselItemsRef.current.clientWidth;
      carouselItemsRef.current.style.transform = `translateX(-${
        (currentSlide - 1) * slideWidth
      }px)`;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide]); // Recalculate on slide change or resize

  // Handle window resize event.........ends

  const renderSlide = (startIndex) => {
    const slideCards = allproducts.slice(
      startIndex,
      startIndex + slidesPerPage
    );
    return (
      <div className="carousel-slide flex-none w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
        {slideCards.map((project, index) => (
          <div key={index} className="card shadow-xl rounded-3xl">
            <img
              src={project.cover_image}
              alt={project.name}
              className="w-full rounded-t-3xl"
            />
            <div className="card-content p-5 rounded-b-3xl bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2.5">
                {project.name}
              </h3>

              <div className="flex gap-6">
                <a
                  href={project.figma_design}
                  className="w-40 h-12 text-white bg-orange-500 rounded-full shadow-md hover:bg-gray-700 flex items-center justify-center gap-2 text-sm"
                >
                  Figma Design
                  <img src={arrow} className="h-5" alt="" />
                </a>
                <a
                  href={project.live_url}
                  className="w-40 h-12 text-white bg-orange-500 rounded-full shadow-md hover:bg-gray-700 flex items-center justify-center gap-2 text-sm"
                >
                  Live Website
                  <img src={arrow} className="h-5 " alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="carousel relative overflow-hidden">
      {/* Carousel Items */}
      <div
        ref={carouselItemsRef}
        className="carousel-items flex transition-transform duration-500"
      >
        {Array.from({ length: totalSlides }).map((_, i) =>
          renderSlide(i * slidesPerPage)
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:block">
        <button
          ref={prevBtnRef}
          className="prev-btn absolute top-1/3 left-6 md:left-24 transform -translate-y-1/2 bg-[#48484A]  rounded-full border-[4px] p-2 w-12 h-12 "
          style={{ borderColor: "white" }}
          onClick={() => goToSlide(Math.max(1, currentSlide - 1))}
        >
          <i className="fa-solid fa-arrow-left text-white"></i>
        </button>
        <button
          ref={nextBtnRef}
          className="next-btn absolute top-1/3 right-6 md:right-24 transform -translate-y-1/2 bg-[#FD853A] rounded-full border-[4px] p-2 w-12 h-12"
          style={{ borderColor: "white" }}
          onClick={() => goToSlide(Math.min(totalSlides, currentSlide + 1))}
        >
          <i className="fa-solid fa-arrow-right text-white"></i>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="dot-indicators flex justify-center items-center space-x-2 mt-4">
        {Array.from({ length: Math.min(totalSlides, 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`h-3 rounded-full ${
              currentSlide === index + 1
                ? "bg-orange-500" // Active slide dot style
                : "bg-[#C6C6C7]" // Default inactive style
            } ${index === 0 ? "w-8" : "w-3"}`} // First dot is wider
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselHomepage;
