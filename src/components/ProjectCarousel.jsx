import React, { useRef, useEffect, useState } from "react";
// import card1 from "../assets/Rectangle 7.png";
// import card2 from "../assets/Rectangle 9.png";
import arrow from "../assets/up right.png";
import axios from "axios";

function ProjectCarousel() {
  const carouselItemsRef = useRef(null);
  const paginationNumbersRef = useRef(null);
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

  // const slidesPerPage = 4; // Four cards per slide (2 rows x 2 cards)
  const [slidesPerPage, setSlidesPerPage] = useState(4);
  useEffect(() => {
    const updateSlidesPerPage = () => {
      if (window.innerWidth < 768) {
        setSlidesPerPage(3); // For md screens and below
      } else {
        setSlidesPerPage(4); // Default
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
  const totalSlides = Math.ceil(allproducts.length / slidesPerPage);
  const [currentSlide, setCurrentSlide] = useState(1);

  const generatePagination = (totalSlides, currentSlide) => {
    const range = [];
    const delta = 1; // Number of pages to show around the current page

    for (let i = 1; i <= totalSlides; i++) {
      if (
        i === 1 || // Always show the first page
        i === totalSlides || // Always show the last page
        (i >= currentSlide - delta && i <= currentSlide + delta) // Pages around current
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }
    return range;
  };

  useEffect(() => {
    const updatePagination = () => {
      paginationNumbersRef.current.innerHTML = "";

      const paginationRange = generatePagination(totalSlides, currentSlide);

      paginationRange.forEach((page) => {
        const button = document.createElement("button");
        if (page === "...") {
          button.textContent = "...";
          button.disabled = true;
          button.className = "px-3 py-1 bg-transparent text-gray-600";
        } else {
          button.textContent = page;
          button.className = `px-3 py-1  ${
            page === currentSlide
              ? "bg-orange-500 text-white"
              : " hover:bg-gray-300 text-gray-600"
          }`;
          button.addEventListener("click", () => goToSlide(page));
        }
        paginationNumbersRef.current.appendChild(button);
      });
    };

    updatePagination();
  }, [currentSlide, totalSlides]);

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

      {/* Pagination */}
      <div className="pagination flex justify-center items-center space-x-2 mt-6">
        <button
          ref={prevBtnRef}
          className="text-gray-600 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => goToSlide(Math.max(1, currentSlide - 1))}
        >
          Previous
        </button>
        <span ref={paginationNumbersRef} className="flex space-x-2"></span>
        <button
          ref={nextBtnRef}
          className="text-gray-600 px-3 py-1 rounded border-[1.91px] hover:bg-gray-300"
          style={{ borderColor: "#FD853A" }}
          onClick={() => goToSlide(Math.min(totalSlides, currentSlide + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;
