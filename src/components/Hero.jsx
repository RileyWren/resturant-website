
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


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
     <FontAwesomeIcon icon={faArrowLeft}
  onClick={prevImage}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 cursor-pointer border-1 rounded-full p-12 right-96" />

<FontAwesomeIcon icon={faArrowRight}
  onClick={nextImage}
  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 cursor-pointer border-1 rounded-full p-12 left-96" />

    </div>
  );
}

export default Hero;
