
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import img1 from '../assets/1.webp';
import img2 from '../assets/img2.avif';
import img3 from '../assets/3.jpg';
import Navbar from './Navbar';

const images = [img1, img2, img3];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
        <Navbar />
      {/* Image stack for smooth crossfade */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt=""
          initial={false}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: 'none' }}
        />
      ))}



      {/* Optional overlay for styling */}
      <div className="absolute inset-0 bg-black/30  z-10" />

      {/* Navigation Buttons */}
      <div className='hidden md:block'>
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={prevImage}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20 cursor-pointer border border-white rounded-full p-6"
      />
      </div>
      <div className='hidden md:block'>
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={nextImage}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20 cursor-pointer border border-white rounded-full p-6"
      />
      </div>
    </div>
  );
}

export default Hero;
