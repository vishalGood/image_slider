import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"

const Carousel = ({ children: slides, }) => {
    const [slide, setSlide] = useState(0)

    const prev = () => setSlide((slide) => (slide === 0 ? slides.length - 1 : slide - 1))

    const next = () => setSlide((slide) => (slide === slides.length - 1 ? 0 : slide + 1))

   


    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${slide * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${slide === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Carousel