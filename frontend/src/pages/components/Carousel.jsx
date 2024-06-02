import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
    };

    const carouselItems = [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
        "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
        "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
    ];

    return (
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box relative">
            {carouselItems.map((item, index) => (
                <div key={index} className={`carousel-item absolute w-full transition-opacity duration-500 ${index === currentIndex ? '' : 'opacity-0 hidden'}`}>
                    <img src={item} alt={`slide-${index}`} className="rounded-box w-40" />
                </div>
            ))}
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white rounded-full text-neutral shadow-md" onClick={prevSlide}>Prev</button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full text-neutral shadow-md" onClick={nextSlide}>Next</button>
        </div>
    );
}

export default Carousel;
