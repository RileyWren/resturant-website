
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import img1 from '../assets/1.webp';
import img2 from '../assets/img2.avif';
import img3 from '../assets/3.jpg';
import img4 from '../assets/img4.jpg';

import Navbar from './Navbar';

function Hero() {
  return (
 
<motion.div
  className="relative h-screen w-screen overflow-hidden bg-black"
  style={{
    backgroundImage: `url(${img4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
      <Navbar />
      
      <div className='flex flex-col justify-center text-center align-middle items-center h-screen gap-10 text-wrap'>
        <h1 className='text-5xl font-extrabold text-white z-30 relative sm:text-7xl md:text-8xl'>Simply <br />Delicious</h1>
        <p className='text-white z-30 relative text-sm sm:text-base md:text-lg text-wrap'>We bring you a fusion of flavours crafted with passion.From fresh <br className='hidden sm:block' /> ingredients to expertly prepared dishes, every bite is a celebration.</p>

         <motion.button 
                className="px-3 py-2 sm:px-4 sm:py-3 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded-xs shadow-md cursor-pointer z-40 relative"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Reserve a Table
              </motion.button>
</div>
      {/* Optional overlay for styling */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </motion.div>
  );
}

export default Hero;