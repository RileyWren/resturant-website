
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

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

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />
      </AnimatePresence>

      {/* Navigation buttons */}
<FontAwesomeIcon
  icon={faChevronLeft}
  onClick={prevImage}
  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl z-10 cursor-pointer border border-white rounded-full p-12"
/>

<FontAwesomeIcon
  icon={faChevronRight}
  onClick={nextImage}
  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl z-10 cursor-pointer border border-white rounded-full p-12"
/>




    </div>
  );
}

export default Hero;
