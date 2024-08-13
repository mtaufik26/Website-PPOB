// PromoBanner.js
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

import image1 from '../assets/images/1.png';
import image2 from '../assets/images/1.png';
import image3 from '../assets/images/1.png';

const images = [
  { src: image1, alt: 'Promo 1', description: 'Special offer on mobile recharges' },
  { src: image2, alt: 'Promo 2', description: '50% cashback on electricity bills' },
  { src: image3, alt: 'Promo 3', description: 'Free movie tickets on game top-ups' },
];


const PromoBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative p-4 rounded-lg overflow-hidden max-w-xl mx-auto">
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={image.alt} className="w-full flex-shrink-0">
            <img src={image.src} alt={image.alt} className="h-40 w-full object-cover rounded-2xl p-2" />
            <p className="mt-2 text-center text-gray-700">{image.description}</p>
          </div>    
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
        aria-label="Next Slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={classNames('h-2 w-2 mx-1 rounded-full', {
              'bg-blue-600': currentImageIndex === index,
              'bg-gray-300': currentImageIndex !== index,
            })}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;