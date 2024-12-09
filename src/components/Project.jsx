import React from 'react'
import Carousel2 from '../components/ProjectCarousel.jsx'


function Project() {
  return (
    <>
        <div className="md:flex block mt-8 gap-6 px-20">
  <div className="relative w-full md:w-96 flex items-center justify-center flex-2 pb-5 ">
    <input
      type="text"
      className="w-full py-2 px-4 pl-10 text-[#C6C6C7] rounded-full border border-[#C6C6C7] focus:outline-2 focus:ring-2 focus:ring-blue-500 "
      placeholder="Search project"
    />
    <i className="fas fa-search absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-500"></i>
  </div>
  <div className="buttons flex items-center justify-center gap-3 pb-8 flex-1">
<button className="px-2 py-2  rounded-full text-white text-sm bg-orange-500 h-10 w-32">E-commerce </button>
<button className="px-2 py-2  rounded-full text-white text-sm bg-[#FED9C2] text-[black] h-10 w-24">Fin-Tech </button>
<button className="px-4 py-2  rounded-full text-white text-sm bg-[#FED9C2] text-[black]">Web3 </button>
<button className="px-4 py-2  rounded-full text-white text-sm bg-[#FED9C2] text-[black]">Health </button>
<button className="px-4 py-2  rounded-full text-white text-sm bg-[#FED9C2] text-[black]">Others </button>
</div>
</div>

<div>
<Carousel2/>
</div>
    </>
  )
}

export default Project